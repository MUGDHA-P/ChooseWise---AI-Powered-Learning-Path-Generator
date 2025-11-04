const supabase = require('../config/supabase');

class User {
  static async create(userData) {
    const { data, error } = await supabase.auth.signUp({
      email: userData.email,
      password: userData.password,
      options: {
        data: {
          name: userData.name
        }
      }
    });
    
    if (error) throw error;
    
    // Create user profile
    const { data: profile, error: profileError } = await supabase
      .from('users')
      .insert({
        id: data.user.id,
        name: userData.name,
        email: userData.email,
        profile: {
          skills: [],
          interests: [],
          experience: 'beginner',
          goals: []
        },
        progress: {
          completedCourses: [],
          skillAssessments: [],
          roadmapProgress: []
        },
        recommendations: {
          careers: [],
          courses: [],
          jobs: []
        }
      })
      .select()
      .single();
    
    if (profileError) throw profileError;
    return { user: data.user, profile };
  }
  
  static async findByEmail(email) {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();
    
    return error ? null : data;
  }
  
  static async findById(id) {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single();
    
    return error ? null : data;
  }
  
  static async updateById(id, updates) {
    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
  
  static async signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    
    if (error) throw error;
    return data;
  }
}

module.exports = User;