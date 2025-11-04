-- ChooseWise Database Schema for Supabase

-- Users table (extends Supabase auth.users)
CREATE TABLE users (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  profile JSONB DEFAULT '{
    "skills": [],
    "interests": [],
    "experience": "beginner",
    "goals": [],
    "currentRole": null,
    "targetRole": null
  }',
  progress JSONB DEFAULT '{
    "completedCourses": [],
    "skillAssessments": [],
    "roadmapProgress": []
  }',
  recommendations JSONB DEFAULT '{
    "careers": [],
    "courses": [],
    "jobs": []
  }',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_active TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Careers table
CREATE TABLE careers (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  skills TEXT[],
  salary_min INTEGER,
  salary_max INTEGER,
  growth_rate TEXT,
  companies TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Courses table
CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  provider TEXT NOT NULL,
  description TEXT,
  url TEXT,
  rating DECIMAL(3,2),
  duration TEXT,
  level TEXT,
  skills TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Jobs table
CREATE TABLE jobs (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  location TEXT,
  salary TEXT,
  type TEXT,
  skills TEXT[],
  description TEXT,
  posted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view own profile" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON users
  FOR UPDATE USING (auth.uid() = id);

-- Insert sample data
INSERT INTO careers (title, description, skills, salary_min, salary_max, growth_rate, companies) VALUES
('AI Engineer', 'Design and develop artificial intelligence systems', ARRAY['Python', 'TensorFlow', 'Machine Learning'], 800000, 2500000, 'High', ARRAY['Google', 'Microsoft', 'OpenAI']),
('Data Scientist', 'Analyze complex data to extract insights', ARRAY['Python', 'R', 'SQL', 'Statistics'], 600000, 2000000, 'Excellent', ARRAY['Netflix', 'Uber', 'Amazon']),
('Web Developer', 'Build websites and web applications', ARRAY['HTML', 'CSS', 'JavaScript', 'React'], 300000, 1500000, 'Steady', ARRAY['Meta', 'Shopify', 'Stripe']);