// Data Storage Manager
class DataManager {
    constructor(userId) {
        this.userId = userId;
        this.courses = this.load('courses') || [];
        this.assignments = this.load('assignments') || [];
        this.tasks = this.load('tasks') || [];
    }

    load(key) {
        const data = localStorage.getItem(`${this.userId}_${key}`);
        return data ? JSON.parse(data) : null;
    }

    save(key, data) {
        localStorage.setItem(`${this.userId}_${key}`, JSON.stringify(data));
    }

    // Courses
    getCourses() {
        return this.courses;
    }

    addCourse(course) {
        course.id = Date.now().toString();
        course.createdAt = new Date().toISOString();
        this.courses.push(course);
        this.save('courses', this.courses);
        return course;
    }

    updateCourse(id, updatedCourse) {
        const index = this.courses.findIndex(c => c.id === id);
        if (index !== -1) {
            this.courses[index] = { ...this.courses[index], ...updatedCourse };
            this.save('courses', this.courses);
            return this.courses[index];
        }
        return null;
    }

    deleteCourse(id) {
        this.courses = this.courses.filter(c => c.id !== id);
        this.save('courses', this.courses);
    }

    // Assignments
    getAssignments() {
        return this.assignments;
    }

    addAssignment(assignment) {
        assignment.id = Date.now().toString();
        assignment.createdAt = new Date().toISOString();
        assignment.completed = false;
        this.assignments.push(assignment);
        this.save('assignments', this.assignments);
        return assignment;
    }

    updateAssignment(id, updatedAssignment) {
        const index = this.assignments.findIndex(a => a.id === id);
        if (index !== -1) {
            this.assignments[index] = { ...this.assignments[index], ...updatedAssignment };
            this.save('assignments', this.assignments);
            return this.assignments[index];
        }
        return null;
    }

    deleteAssignment(id) {
        this.assignments = this.assignments.filter(a => a.id !== id);
        this.save('assignments', this.assignments);
    }

    // Tasks
    getTasks() {
        return this.tasks;
    }

    addTask(task) {
        task.id = Date.now().toString();
        task.createdAt = new Date().toISOString();
        task.completed = false;
        this.tasks.push(task);
        this.save('tasks', this.tasks);
        return task;
    }

    updateTask(id, updatedTask) {
        const index = this.tasks.findIndex(t => t.id === id);
        if (index !== -1) {
            this.tasks[index] = { ...this.tasks[index], ...updatedTask };
            this.save('tasks', this.tasks);
            return this.tasks[index];
        }
        return null;
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
        this.save('tasks', this.tasks);
    }

    toggleTaskCompletion(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            task.completedAt = task.completed ? new Date().toISOString() : null;
            this.save('tasks', this.tasks);
            return task;
        }
        return null;
    }
}

let dataManager;

// Initialize App
function initializeApp() {
    const currentUser = auth.getCurrentUser();
    if (!currentUser) return;

    dataManager = new DataManager(currentUser.id);
    
    // Auto-load sample data for guests
    autoLoadForGuests();
    
    // Load data
    updateDashboard();
    renderCourses();
    renderAssignments();
    renderTasks();
    
    // Add sample data button
    setTimeout(() => {
        addSampleDataButton();
    }, 100);
    
    // Check for reminders
    checkReminders();
    
    // Set up periodic reminder checks (every 5 minutes)
    setInterval(checkReminders, 5 * 60 * 1000);
}

// Navigation
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Update nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    event.target.closest('.nav-item').classList.add('active');
    
    // Refresh data for specific sections
    if (sectionId === 'dashboard') {
        updateDashboard();
    } else if (sectionId === 'analytics') {
        renderAnalytics();
    } else if (sectionId === 'reminders') {
        displayReminders();
    }
}

// Dashboard
function updateDashboard() {
    const courses = dataManager.getCourses();
    const assignments = dataManager.getAssignments();
    const tasks = dataManager.getTasks();
    
    // Update stats
    document.getElementById('totalCourses').textContent = courses.length;
    document.getElementById('totalAssignments').textContent = assignments.filter(a => !a.completed).length;
    document.getElementById('totalTasks').textContent = tasks.filter(t => !t.completed).length;
    document.getElementById('urgentTasks').textContent = tasks.filter(t => !t.completed && t.priority === 'high').length;
    
    // Update upcoming deadlines
    displayUpcomingDeadlines();
    
    // Update task distribution chart
    displayTaskDistribution();
}

function displayUpcomingDeadlines() {
    const container = document.getElementById('upcomingDeadlines');
    const allItems = [
        ...dataManager.getAssignments().map(a => ({ ...a, type: 'assignment' })),
        ...dataManager.getTasks().map(t => ({ ...t, type: 'task' }))
    ];
    
    const upcoming = allItems
        .filter(item => !item.completed && item.dueDate)
        .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
        .slice(0, 5);
    
    if (upcoming.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>No upcoming deadlines</p></div>';
        return;
    }
    
    container.innerHTML = upcoming.map(item => {
        const dueDate = new Date(item.dueDate);
        const now = new Date();
        const diffHours = Math.floor((dueDate - now) / (1000 * 60 * 60));
        const isUrgent = diffHours <= 24;
        
        let timeText;
        if (diffHours < 0) {
            timeText = 'Overdue';
        } else if (diffHours < 24) {
            timeText = `${diffHours}h left`;
        } else {
            const diffDays = Math.floor(diffHours / 24);
            timeText = `${diffDays}d left`;
        }
        
        const course = item.courseId ? dataManager.getCourses().find(c => c.id === item.courseId) : null;
        
        return `
            <div class="deadline-item ${isUrgent ? 'urgent' : ''}">
                <div class="deadline-info">
                    <div class="deadline-title">${item.title}</div>
                    ${course ? `<div class="deadline-course">${course.name}</div>` : ''}
                </div>
                <div class="deadline-time">${timeText}</div>
            </div>
        `;
    }).join('');
}

function displayTaskDistribution() {
    const container = document.getElementById('taskDistribution');
    const tasks = dataManager.getTasks();
    
    const high = tasks.filter(t => !t.completed && t.priority === 'high').length;
    const medium = tasks.filter(t => !t.completed && t.priority === 'medium').length;
    const low = tasks.filter(t => !t.completed && t.priority === 'low').length;
    const total = high + medium + low;
    
    if (total === 0) {
        container.innerHTML = '<div class="empty-state"><p>No tasks yet</p></div>';
        return;
    }
    
    const maxHeight = 150;
    const highHeight = (high / total) * maxHeight;
    const mediumHeight = (medium / total) * maxHeight;
    const lowHeight = (low / total) * maxHeight;
    
    container.innerHTML = `
        <div class="bar-chart">
            <div class="bar" style="height: ${highHeight}px; background: linear-gradient(180deg, #e74c3c, #c0392b);">
                <div class="bar-value">${high}</div>
                <div class="bar-label">High</div>
            </div>
            <div class="bar" style="height: ${mediumHeight}px; background: linear-gradient(180deg, #f39c12, #e67e22);">
                <div class="bar-value">${medium}</div>
                <div class="bar-label">Medium</div>
            </div>
            <div class="bar" style="height: ${lowHeight}px; background: linear-gradient(180deg, #3498db, #2980b9);">
                <div class="bar-value">${low}</div>
                <div class="bar-label">Low</div>
            </div>
        </div>
    `;
}

// Courses
function renderCourses() {
    const container = document.getElementById('coursesList');
    const courses = dataManager.getCourses();
    
    if (courses.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-book"></i>
                <h3>No Courses Yet</h3>
                <p>Add your first course to get started!</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = courses.map(course => `
        <div class="card" style="border-left-color: ${course.color}">
            <div class="card-header">
                <div>
                    <div class="card-title">${course.name}</div>
                    <div class="card-subtitle">${course.code}</div>
                </div>
                <div class="card-actions">
                    <button class="icon-btn" onclick="editCourse('${course.id}')">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="icon-btn delete" onclick="deleteCourse('${course.id}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <div class="card-content">
                <p><i class="fas fa-user-tie"></i> ${course.instructor}</p>
            </div>
        </div>
    `).join('');
}

function openCourseModal(courseId = null) {
    const modal = document.getElementById('courseModal');
    modal.classList.add('active');
    
    if (courseId) {
        const course = dataManager.getCourses().find(c => c.id === courseId);
        if (course) {
            document.getElementById('courseModalTitle').textContent = 'Edit Course';
            document.getElementById('courseId').value = course.id;
            document.getElementById('courseName').value = course.name;
            document.getElementById('courseCode').value = course.code;
            document.getElementById('courseInstructor').value = course.instructor;
            document.getElementById('courseColor').value = course.color;
        }
    } else {
        document.getElementById('courseModalTitle').textContent = 'Add Course';
        document.getElementById('courseId').value = '';
        document.getElementById('courseName').value = '';
        document.getElementById('courseCode').value = '';
        document.getElementById('courseInstructor').value = '';
        document.getElementById('courseColor').value = '#3498db';
    }
}

function closeCourseModal() {
    document.getElementById('courseModal').classList.remove('active');
}

function saveCourse() {
    const id = document.getElementById('courseId').value;
    const course = {
        name: document.getElementById('courseName').value.trim(),
        code: document.getElementById('courseCode').value.trim(),
        instructor: document.getElementById('courseInstructor').value.trim(),
        color: document.getElementById('courseColor').value
    };
    
    if (!course.name || !course.code) {
        showToast('Please fill in all required fields', 'error');
        return;
    }
    
    if (id) {
        dataManager.updateCourse(id, course);
        showToast('Course updated successfully', 'success');
    } else {
        dataManager.addCourse(course);
        showToast('Course added successfully', 'success');
    }
    
    closeCourseModal();
    renderCourses();
    updateDashboard();
    updateCourseSelects();
}

function editCourse(id) {
    openCourseModal(id);
}

function deleteCourse(id) {
    if (confirm('Are you sure you want to delete this course?')) {
        dataManager.deleteCourse(id);
        showToast('Course deleted successfully', 'success');
        renderCourses();
        updateDashboard();
        updateCourseSelects();
    }
}

function updateCourseSelects() {
    const courses = dataManager.getCourses();
    const selects = [
        document.getElementById('assignmentCourse'),
        document.getElementById('taskCourse')
    ];
    
    selects.forEach(select => {
        const currentValue = select.value;
        select.innerHTML = '<option value="">Select Course</option>' + 
            courses.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
        select.value = currentValue;
    });
}

// Assignments
function renderAssignments() {
    const container = document.getElementById('assignmentsList');
    const assignments = dataManager.getAssignments();
    
    if (assignments.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-tasks"></i>
                <h3>No Assignments Yet</h3>
                <p>Add your first assignment to track your progress!</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = assignments.map(assignment => {
        const course = assignment.courseId ? dataManager.getCourses().find(c => c.id === assignment.courseId) : null;
        const dueDate = assignment.dueDate ? new Date(assignment.dueDate).toLocaleString() : 'No due date';
        
        return `
            <div class="card">
                <div class="card-header">
                    <div>
                        <div class="card-title">${assignment.title}</div>
                        ${course ? `<div class="card-subtitle">${course.name}</div>` : ''}
                    </div>
                    <div class="card-actions">
                        <button class="icon-btn" onclick="editAssignment('${assignment.id}')">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="icon-btn delete" onclick="deleteAssignment('${assignment.id}')">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class="card-content">
                    <p>${assignment.description || 'No description'}</p>
                </div>
                <div class="card-footer">
                    <span class="priority-badge ${assignment.priority}">${assignment.priority}</span>
                    <span><i class="fas fa-clock"></i> ${dueDate}</span>
                </div>
            </div>
        `;
    }).join('');
}

function openAssignmentModal(assignmentId = null) {
    const modal = document.getElementById('assignmentModal');
    modal.classList.add('active');
    updateCourseSelects();
    
    if (assignmentId) {
        const assignment = dataManager.getAssignments().find(a => a.id === assignmentId);
        if (assignment) {
            document.getElementById('assignmentModalTitle').textContent = 'Edit Assignment';
            document.getElementById('assignmentId').value = assignment.id;
            document.getElementById('assignmentTitle').value = assignment.title;
            document.getElementById('assignmentCourse').value = assignment.courseId || '';
            document.getElementById('assignmentDescription').value = assignment.description || '';
            document.getElementById('assignmentDueDate').value = assignment.dueDate ? assignment.dueDate.slice(0, 16) : '';
            document.getElementById('assignmentPriority').value = assignment.priority;
        }
    } else {
        document.getElementById('assignmentModalTitle').textContent = 'Add Assignment';
        document.getElementById('assignmentId').value = '';
        document.getElementById('assignmentTitle').value = '';
        document.getElementById('assignmentCourse').value = '';
        document.getElementById('assignmentDescription').value = '';
        document.getElementById('assignmentDueDate').value = '';
        document.getElementById('assignmentPriority').value = 'medium';
    }
}

function closeAssignmentModal() {
    document.getElementById('assignmentModal').classList.remove('active');
}

function saveAssignment() {
    const id = document.getElementById('assignmentId').value;
    const assignment = {
        title: document.getElementById('assignmentTitle').value.trim(),
        courseId: document.getElementById('assignmentCourse').value,
        description: document.getElementById('assignmentDescription').value.trim(),
        dueDate: document.getElementById('assignmentDueDate').value,
        priority: document.getElementById('assignmentPriority').value
    };
    
    if (!assignment.title) {
        showToast('Please enter assignment title', 'error');
        return;
    }
    
    if (id) {
        dataManager.updateAssignment(id, assignment);
        showToast('Assignment updated successfully', 'success');
    } else {
        dataManager.addAssignment(assignment);
        showToast('Assignment added successfully', 'success');
    }
    
    closeAssignmentModal();
    renderAssignments();
    updateDashboard();
}

function editAssignment(id) {
    openAssignmentModal(id);
}

function deleteAssignment(id) {
    if (confirm('Are you sure you want to delete this assignment?')) {
        dataManager.deleteAssignment(id);
        showToast('Assignment deleted successfully', 'success');
        renderAssignments();
        updateDashboard();
    }
}

// Tasks
function renderTasks(filter = 'all') {
    const container = document.getElementById('tasksList');
    let tasks = dataManager.getTasks();
    
    // Apply filter
    if (filter === 'completed') {
        tasks = tasks.filter(t => t.completed);
    } else if (filter === 'high' || filter === 'medium' || filter === 'low') {
        tasks = tasks.filter(t => !t.completed && t.priority === filter);
    } else {
        tasks = tasks.filter(t => !t.completed);
    }
    
    if (tasks.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-list-check"></i>
                <h3>No Tasks Found</h3>
                <p>Add a new task or try a different filter!</p>
            </div>
        `;
        return;
    }
    
    // Sort by priority and due date
    tasks.sort((a, b) => {
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
            return priorityOrder[a.priority] - priorityOrder[b.priority];
        }
        if (a.dueDate && b.dueDate) {
            return new Date(a.dueDate) - new Date(b.dueDate);
        }
        return 0;
    });
    
    container.innerHTML = tasks.map(task => {
        const course = task.courseId ? dataManager.getCourses().find(c => c.id === task.courseId) : null;
        const dueDate = task.dueDate ? new Date(task.dueDate).toLocaleString() : '';
        
        return `
            <div class="task-item ${task.completed ? 'completed' : ''}">
                <input type="checkbox" class="task-checkbox" 
                    ${task.completed ? 'checked' : ''} 
                    onchange="toggleTask('${task.id}')">
                <div class="task-content">
                    <div class="task-title">${task.title}</div>
                    <div class="task-meta">
                        ${task.description ? `<span><i class="fas fa-align-left"></i> ${task.description}</span>` : ''}
                        ${course ? `<span><i class="fas fa-book"></i> ${course.name}</span>` : ''}
                        ${dueDate ? `<span><i class="fas fa-clock"></i> ${dueDate}</span>` : ''}
                        <span class="priority-badge ${task.priority}">${task.priority}</span>
                    </div>
                </div>
                <div class="task-actions">
                    <button class="icon-btn" onclick="editTask('${task.id}')">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="icon-btn delete" onclick="deleteTask('${task.id}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function filterTasks(filter) {
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderTasks(filter);
}

function openTaskModal(taskId = null) {
    const modal = document.getElementById('taskModal');
    modal.classList.add('active');
    updateCourseSelects();
    
    if (taskId) {
        const task = dataManager.getTasks().find(t => t.id === taskId);
        if (task) {
            document.getElementById('taskModalTitle').textContent = 'Edit Task';
            document.getElementById('taskId').value = task.id;
            document.getElementById('taskTitle').value = task.title;
            document.getElementById('taskDescription').value = task.description || '';
            document.getElementById('taskDueDate').value = task.dueDate ? task.dueDate.slice(0, 16) : '';
            document.getElementById('taskPriority').value = task.priority;
            document.getElementById('taskCourse').value = task.courseId || '';
        }
    } else {
        document.getElementById('taskModalTitle').textContent = 'Add Task';
        document.getElementById('taskId').value = '';
        document.getElementById('taskTitle').value = '';
        document.getElementById('taskDescription').value = '';
        document.getElementById('taskDueDate').value = '';
        document.getElementById('taskPriority').value = 'medium';
        document.getElementById('taskCourse').value = '';
    }
}

function closeTaskModal() {
    document.getElementById('taskModal').classList.remove('active');
}

function saveTask() {
    const id = document.getElementById('taskId').value;
    const task = {
        title: document.getElementById('taskTitle').value.trim(),
        description: document.getElementById('taskDescription').value.trim(),
        dueDate: document.getElementById('taskDueDate').value,
        priority: document.getElementById('taskPriority').value,
        courseId: document.getElementById('taskCourse').value
    };
    
    if (!task.title) {
        showToast('Please enter task title', 'error');
        return;
    }
    
    if (id) {
        dataManager.updateTask(id, task);
        showToast('Task updated successfully', 'success');
    } else {
        dataManager.addTask(task);
        showToast('Task added successfully', 'success');
    }
    
    closeTaskModal();
    renderTasks();
    updateDashboard();
}

function editTask(id) {
    openTaskModal(id);
}

function deleteTask(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        dataManager.deleteTask(id);
        showToast('Task deleted successfully', 'success');
        renderTasks();
        updateDashboard();
    }
}

function toggleTask(id) {
    dataManager.toggleTaskCompletion(id);
    renderTasks();
    updateDashboard();
}

// Reminders
function checkReminders() {
    const allItems = [
        ...dataManager.getAssignments().map(a => ({ ...a, type: 'Assignment' })),
        ...dataManager.getTasks().map(t => ({ ...t, type: 'Task' }))
    ];
    
    const now = new Date();
    const urgent = [];
    const upcoming = [];
    
    allItems.forEach(item => {
        if (item.completed || !item.dueDate) return;
        
        const dueDate = new Date(item.dueDate);
        const diffHours = Math.floor((dueDate - now) / (1000 * 60 * 60));
        
        if (diffHours < 0) {
            urgent.push({ ...item, message: 'OVERDUE!', hoursLeft: diffHours });
        } else if (diffHours <= 24) {
            urgent.push({ ...item, message: `${diffHours} hours left`, hoursLeft: diffHours });
        } else if (diffHours <= 72) {
            const daysLeft = Math.floor(diffHours / 24);
            upcoming.push({ ...item, message: `${daysLeft} days left`, hoursLeft: diffHours });
        }
    });
    
    if (urgent.length > 0) {
        showToast(`⚠️ You have ${urgent.length} urgent deadline(s)!`, 'warning');
    }
    
    displayReminders();
}

function displayReminders() {
    const container = document.getElementById('remindersList');
    const allItems = [
        ...dataManager.getAssignments().map(a => ({ ...a, type: 'Assignment' })),
        ...dataManager.getTasks().map(t => ({ ...t, type: 'Task' }))
    ];
    
    const now = new Date();
    const reminders = [];
    
    allItems.forEach(item => {
        if (item.completed || !item.dueDate) return;
        
        const dueDate = new Date(item.dueDate);
        const diffHours = Math.floor((dueDate - now) / (1000 * 60 * 60));
        
        if (diffHours <= 72) {
            let message, isUrgent;
            if (diffHours < 0) {
                message = 'OVERDUE';
                isUrgent = true;
            } else if (diffHours <= 24) {
                message = `${diffHours} hours left`;
                isUrgent = true;
            } else {
                const daysLeft = Math.floor(diffHours / 24);
                message = `${daysLeft} days left`;
                isUrgent = false;
            }
            
            reminders.push({ ...item, message, isUrgent, hoursLeft: diffHours });
        }
    });
    
    reminders.sort((a, b) => a.hoursLeft - b.hoursLeft);
    
    if (reminders.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-bell"></i>
                <h3>No Upcoming Deadlines</h3>
                <p>You're all caught up! 🎉</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = reminders.map(reminder => `
        <div class="reminder-item ${reminder.isUrgent ? 'urgent' : ''}">
            <div class="reminder-icon">
                <i class="fas fa-${reminder.isUrgent ? 'exclamation-triangle' : 'bell'}"></i>
            </div>
            <div class="reminder-content">
                <div class="reminder-title">${reminder.type}: ${reminder.title}</div>
                <div class="reminder-time">${reminder.message}</div>
            </div>
            <span class="priority-badge ${reminder.priority}">${reminder.priority}</span>
        </div>
    `).join('');
}

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
}

// For testing purposes
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DataManager;
}

