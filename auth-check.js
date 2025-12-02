// Authentication check for all pages
function checkAuth() {
    const currentUser = JSON.parse(localStorage.getItem('choosewise_current_user') || 'null');
    const currentPage = window.location.pathname.split('/').pop();
    
    // Allow access to auth.html and index.html without login
    const publicPages = ['auth.html', 'index.html', 'owner-dashboard.html', ''];
    
    if (!currentUser && !publicPages.includes(currentPage)) {
        alert('Please login or create an account to access this feature.');
        window.location.href = 'auth.html';
        return false;
    }
    
    return true;
}

// Run auth check when page loads
document.addEventListener('DOMContentLoaded', checkAuth);