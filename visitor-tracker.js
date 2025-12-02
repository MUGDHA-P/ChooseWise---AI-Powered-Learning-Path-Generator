// Visitor tracking system
(function() {
    function trackVisit() {
        const visit = {
            sessionId: getSessionId(),
            page: window.location.pathname.split('/').pop() || 'index.html',
            userAgent: navigator.userAgent.substring(0, 100),
            timestamp: new Date().toISOString()
        };
        
        // Send to database
        fetch('/log-visitor', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(visit)
        }).catch(err => console.log('Visitor tracking offline'));
        
        // Also keep in localStorage for offline functionality
        const visitors = JSON.parse(localStorage.getItem('siteVisitors') || '[]');
        visitors.push(visit);
        if (visitors.length > 1000) {
            visitors.splice(0, visitors.length - 1000);
        }
        localStorage.setItem('siteVisitors', JSON.stringify(visitors));
        localStorage.setItem('lastVisitUpdate', Date.now().toString());
    }
    
    function getSessionId() {
        let sessionId = sessionStorage.getItem('visitSessionId');
        if (!sessionId) {
            sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            sessionStorage.setItem('visitSessionId', sessionId);
        }
        return sessionId;
    }
    
    // Track visit immediately
    trackVisit();
    
    // Track page visibility changes
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            trackVisit();
        }
    });
})();