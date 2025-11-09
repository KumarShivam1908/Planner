// @ts-nocheck
// Analytics and Visualization Module

function renderAnalytics() {
    renderCompletionRate();
    renderPriorityChart();
    renderWeeklyProgress();
    renderCoursePerformance();
}

function renderCompletionRate() {
    const container = document.getElementById('completionRate');
    const tasks = dataManager.getTasks();
    
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    
    container.innerHTML = `
        <div class="circular-progress">
            <svg width="150" height="150">
                <circle class="bg" cx="75" cy="75" r="${radius}"></circle>
                <circle class="progress" cx="75" cy="75" r="${radius}"
                    style="stroke-dasharray: ${circumference}; stroke-dashoffset: ${offset}">
                </circle>
            </svg>
            <div class="progress-text">
                <div class="percentage">${percentage}%</div>
                <div class="label">Complete</div>
            </div>
        </div>
        <div style="text-align: center; margin-top: 20px; color: var(--gray);">
            <p>${completed} of ${total} tasks completed</p>
        </div>
    `;
}

function renderPriorityChart() {
    const container = document.getElementById('priorityChart');
    const tasks = dataManager.getTasks();
    
    const priorities = {
        high: tasks.filter(t => t.priority === 'high').length,
        medium: tasks.filter(t => t.priority === 'medium').length,
        low: tasks.filter(t => t.priority === 'low').length
    };
    
    const total = priorities.high + priorities.medium + priorities.low;
    
    if (total === 0) {
        container.innerHTML = '<div class="empty-state"><p>No tasks to analyze</p></div>';
        return;
    }
    
    const maxHeight = 180;
    
    container.innerHTML = `
        <div class="bar-chart" style="height: 220px;">
            <div class="bar" style="height: ${(priorities.high / total) * maxHeight}px; background: linear-gradient(180deg, #e74c3c, #c0392b);">
                <div class="bar-value">${priorities.high}</div>
                <div class="bar-label">High</div>
            </div>
            <div class="bar" style="height: ${(priorities.medium / total) * maxHeight}px; background: linear-gradient(180deg, #f39c12, #e67e22);">
                <div class="bar-value">${priorities.medium}</div>
                <div class="bar-label">Medium</div>
            </div>
            <div class="bar" style="height: ${(priorities.low / total) * maxHeight}px; background: linear-gradient(180deg, #3498db, #2980b9);">
                <div class="bar-value">${priorities.low}</div>
                <div class="bar-label">Low</div>
            </div>
        </div>
        <div style="text-align: center; margin-top: 10px; color: var(--gray);">
            <p>Total: ${total} tasks</p>
        </div>
    `;
}

function renderWeeklyProgress() {
    const container = document.getElementById('weeklyProgress');
    const tasks = dataManager.getTasks();
    
    // Get last 7 days
    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        days.push({
            date: date,
            label: date.toLocaleDateString('en-US', { weekday: 'short' }),
            completed: 0
        });
    }
    
    // Count completed tasks per day
    tasks.forEach(task => {
        if (task.completed && task.completedAt) {
            const completedDate = new Date(task.completedAt);
            completedDate.setHours(0, 0, 0, 0);
            
            const dayIndex = days.findIndex(d => d.date.getTime() === completedDate.getTime());
            if (dayIndex !== -1) {
                days[dayIndex].completed++;
            }
        }
    });
    
    const maxCompleted = Math.max(...days.map(d => d.completed), 1);
    const maxHeight = 150;
    
    container.innerHTML = `
        <div class="bar-chart" style="height: 200px;">
            ${days.map(day => `
                <div class="bar" style="height: ${(day.completed / maxCompleted) * maxHeight}px;">
                    <div class="bar-value">${day.completed}</div>
                    <div class="bar-label">${day.label}</div>
                </div>
            `).join('')}
        </div>
        <div style="text-align: center; margin-top: 10px; color: var(--gray);">
            <p>Tasks completed this week: ${days.reduce((sum, d) => sum + d.completed, 0)}</p>
        </div>
    `;
}

function renderCoursePerformance() {
    const container = document.getElementById('coursePerformance');
    const courses = dataManager.getCourses();
    const assignments = dataManager.getAssignments();
    const tasks = dataManager.getTasks();
    
    if (courses.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>No courses to analyze</p></div>';
        return;
    }
    
    const courseStats = courses.map(course => {
        const courseAssignments = assignments.filter(a => a.courseId === course.id);
        const courseTasks = tasks.filter(t => t.courseId === course.id);
        
        const totalItems = courseAssignments.length + courseTasks.length;
        const completedItems = [
            ...courseAssignments.filter(a => a.completed),
            ...courseTasks.filter(t => t.completed)
        ].length;
        
        const completionRate = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;
        
        return {
            name: course.name,
            color: course.color,
            completionRate: Math.round(completionRate),
            total: totalItems,
            completed: completedItems
        };
    });
    
    // Sort by completion rate
    courseStats.sort((a, b) => b.completionRate - a.completionRate);
    
    container.innerHTML = `
        <div class="performance-list">
            ${courseStats.map(stat => `
                <div class="performance-item">
                    <div class="performance-label">${stat.name}</div>
                    <div class="performance-bar">
                        <div class="performance-fill" style="width: ${stat.completionRate}%; background: linear-gradient(90deg, ${stat.color}, ${adjustColor(stat.color, -30)})">
                            ${stat.completionRate}%
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
        <div style="text-align: center; margin-top: 15px; color: var(--gray);">
            <p>Overall completion across ${courses.length} course${courses.length !== 1 ? 's' : ''}</p>
        </div>
    `;
}

// Helper function to adjust color brightness
function adjustColor(color, amount) {
    const clamp = (num) => Math.min(Math.max(num, 0), 255);
    
    const num = parseInt(color.replace('#', ''), 16);
    const r = clamp((num >> 16) + amount);
    const g = clamp(((num >> 8) & 0x00FF) + amount);
    const b = clamp((num & 0x0000FF) + amount);
    
    return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}

// Export data as JSON
function exportData() {
    const data = {
        courses: dataManager.getCourses(),
        assignments: dataManager.getAssignments(),
        tasks: dataManager.getTasks(),
        exportedAt: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `studyflow-export-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast('Data exported successfully', 'success');
}

// Import data from JSON
function importData(file) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            
            if (data.courses) {
                data.courses.forEach(course => dataManager.addCourse(course));
            }
            if (data.assignments) {
                data.assignments.forEach(assignment => dataManager.addAssignment(assignment));
            }
            if (data.tasks) {
                data.tasks.forEach(task => dataManager.addTask(task));
            }
            
            showToast('Data imported successfully', 'success');
            
            // Refresh all views
            renderCourses();
            renderAssignments();
            renderTasks();
            updateDashboard();
            renderAnalytics();
        } catch (error) {
            showToast('Failed to import data: Invalid file format', 'error');
            console.error('Import error:', error);
        }
    };
    
    reader.readAsText(file);
}

// Generate summary report
function generateReport() {
    const courses = dataManager.getCourses();
    const assignments = dataManager.getAssignments();
    const tasks = dataManager.getTasks();
    
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(t => t.completed).length;
    const pendingTasks = totalTasks - completedTasks;
    
    const totalAssignments = assignments.length;
    const completedAssignments = assignments.filter(a => a.completed).length;
    const pendingAssignments = totalAssignments - completedAssignments;
    
    const highPriority = tasks.filter(t => !t.completed && t.priority === 'high').length;
    const mediumPriority = tasks.filter(t => !t.completed && t.priority === 'medium').length;
    const lowPriority = tasks.filter(t => !t.completed && t.priority === 'low').length;
    
    // Calculate overdue items
    const now = new Date();
    const overdueTasks = tasks.filter(t => !t.completed && t.dueDate && new Date(t.dueDate) < now).length;
    const overdueAssignments = assignments.filter(a => !a.completed && a.dueDate && new Date(a.dueDate) < now).length;
    
    const report = `
╔══════════════════════════════════════════╗
║       STUDYFLOW PROGRESS REPORT         ║
╚══════════════════════════════════════════╝

Generated: ${new Date().toLocaleString()}
User: ${auth.getCurrentUser().username}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📚 COURSES
   Total Courses: ${courses.length}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 ASSIGNMENTS
   Total: ${totalAssignments}
   ✓ Completed: ${completedAssignments}
   ⏳ Pending: ${pendingAssignments}
   ⚠️  Overdue: ${overdueAssignments}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ TASKS
   Total: ${totalTasks}
   ✓ Completed: ${completedTasks}
   ⏳ Pending: ${pendingTasks}
   ⚠️  Overdue: ${overdueTasks}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 PRIORITY BREAKDOWN (Pending Tasks)
   🔴 High Priority: ${highPriority}
   🟡 Medium Priority: ${mediumPriority}
   🔵 Low Priority: ${lowPriority}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 STATISTICS
   Completion Rate: ${totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0}%
   ${totalTasks > 0 ? '█'.repeat(Math.floor((completedTasks / totalTasks) * 20)) : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📈 COURSE PERFORMANCE
${courses.map(course => {
    const courseAssignments = assignments.filter(a => a.courseId === course.id);
    const courseTasks = tasks.filter(t => t.courseId === course.id);
    const totalItems = courseAssignments.length + courseTasks.length;
    const completedItems = [
        ...courseAssignments.filter(a => a.completed),
        ...courseTasks.filter(t => t.completed)
    ].length;
    const rate = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
    return `   ${course.name}: ${rate}% (${completedItems}/${totalItems})`;
}).join('\n') || '   No courses yet'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Keep up the great work! 🚀
`;

    // Create and download report
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `studyflow-report-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast('Report generated successfully', 'success');
}

// Productivity insights
function getProductivityInsights() {
    const tasks = dataManager.getTasks();
    const completedTasks = tasks.filter(t => t.completed);
    
    const insights = [];
    
    // Completion streak
    let streak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    for (let i = 0; i < 30; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        
        const hasCompletion = completedTasks.some(t => {
            const completedDate = new Date(t.completedAt);
            completedDate.setHours(0, 0, 0, 0);
            return completedDate.getTime() === date.getTime();
        });
        
        if (hasCompletion) {
            streak++;
        } else if (i > 0) {
            break;
        }
    }
    
    if (streak > 0) {
        insights.push({
            icon: '🔥',
            title: `${streak}-day streak!`,
            description: 'Keep completing tasks daily to maintain your streak'
        });
    }
    
    // High priority focus
    const highPriorityTasks = tasks.filter(t => !t.completed && t.priority === 'high');
    if (highPriorityTasks.length > 0) {
        insights.push({
            icon: '⚠️',
            title: `${highPriorityTasks.length} high priority tasks`,
            description: 'Focus on completing these important tasks first'
        });
    }
    
    // Productivity score
    const completionRate = tasks.length > 0 ? (completedTasks.length / tasks.length) * 100 : 0;
    if (completionRate >= 80) {
        insights.push({
            icon: '🌟',
            title: 'Excellent productivity!',
            description: `${Math.round(completionRate)}% completion rate`
        });
    } else if (completionRate >= 50) {
        insights.push({
            icon: '👍',
            title: 'Good progress',
            description: `${Math.round(completionRate)}% completion rate - keep it up!`
        });
    }
    
    return insights;
}
