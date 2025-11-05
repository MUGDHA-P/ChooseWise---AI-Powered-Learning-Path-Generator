class ProgressTracker {
    static async trackProgress(step, data = {}) {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        if (!user.email) return;

        try {
            await fetch(`/api/progress/${step}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: user.email, ...data })
            });
        } catch (error) {
            console.error('Progress tracking failed:', error);
        }
    }

    static trackAssessmentStart() {
        this.trackProgress('assessment-start');
    }

    static trackAssessmentComplete(score) {
        this.trackProgress('assessment-complete', { score });
    }

    static trackRoadmapGenerated(career) {
        this.trackProgress('roadmap-generated', { career });
    }

    static trackCourseEnrolled(courseName) {
        this.trackProgress('course-enrolled', { courseName });
    }

    static trackJobApplied(jobTitle) {
        this.trackProgress('job-applied', { jobTitle });
    }
}

window.ProgressTracker = ProgressTracker;