// @ts-nocheck
// Sample Data for Quick Testing
function loadSampleData() {
    if (!dataManager) return;
    
    // Check if data already exists
    if (dataManager.getCourses().length > 0) {
        return; // Don't load sample data if user already has data
    }
    
    // Sample Courses
    const sampleCourses = [
        {
            name: "Data Structures & Algorithms",
            code: "CS-301",
            instructor: "Dr. Sarah Johnson",
            color: "#3498db"
        },
        {
            name: "Web Development",
            code: "CS-205",
            instructor: "Prof. Michael Chen",
            color: "#2ecc71"
        },
        {
            name: "Database Systems",
            code: "CS-401",
            instructor: "Dr. Emily Rodriguez",
            color: "#e74c3c"
        },
        {
            name: "Machine Learning",
            code: "CS-501",
            instructor: "Prof. David Kim",
            color: "#9b59b6"
        },
        {
            name: "Software Engineering",
            code: "CS-302",
            instructor: "Dr. Lisa Anderson",
            color: "#f39c12"
        }
    ];
    
    // Add courses and store IDs
    const courseIds = sampleCourses.map(course => dataManager.addCourse(course).id);
    
    // Sample Assignments
    const now = new Date();
    const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    const threeDays = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
    const oneWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    const twoWeeks = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);
    
    const sampleAssignments = [
        {
            title: "Binary Search Tree Implementation",
            courseId: courseIds[0],
            description: "Implement a complete BST with insert, delete, and search operations. Include balance checking and tree traversal methods.",
            dueDate: tomorrow.toISOString().slice(0, 16),
            priority: "high"
        },
        {
            title: "Responsive Portfolio Website",
            courseId: courseIds[1],
            description: "Create a fully responsive personal portfolio website using HTML, CSS, and JavaScript. Must include animations and mobile-first design.",
            dueDate: threeDays.toISOString().slice(0, 16),
            priority: "high"
        },
        {
            title: "Database Normalization Project",
            courseId: courseIds[2],
            description: "Normalize a given database schema to 3NF. Document all steps and create ER diagrams.",
            dueDate: oneWeek.toISOString().slice(0, 16),
            priority: "medium"
        },
        {
            title: "Neural Network from Scratch",
            courseId: courseIds[3],
            description: "Build a simple neural network without using libraries. Implement backpropagation and test on MNIST dataset.",
            dueDate: twoWeeks.toISOString().slice(0, 16),
            priority: "high"
        },
        {
            title: "Software Requirements Document",
            courseId: courseIds[4],
            description: "Create a comprehensive SRS document for a given project scenario. Include use cases, system requirements, and UML diagrams.",
            dueDate: oneWeek.toISOString().slice(0, 16),
            priority: "medium"
        },
        {
            title: "Sorting Algorithms Analysis",
            courseId: courseIds[0],
            description: "Compare time complexities of Quick Sort, Merge Sort, and Heap Sort with empirical testing.",
            dueDate: threeDays.toISOString().slice(0, 16),
            priority: "low"
        }
    ];
    
    sampleAssignments.forEach(assignment => dataManager.addAssignment(assignment));
    
    // Sample Tasks
    const sampleTasks = [
        {
            title: "Review lecture notes on Graph Algorithms",
            description: "Go through DFS, BFS, Dijkstra's algorithm, and Prim's algorithm notes",
            dueDate: tomorrow.toISOString().slice(0, 16),
            priority: "high",
            courseId: courseIds[0]
        },
        {
            title: "Complete CSS Grid Tutorial",
            description: "Finish the advanced CSS Grid layout course on FreeCodeCamp",
            dueDate: threeDays.toISOString().slice(0, 16),
            priority: "medium",
            courseId: courseIds[1]
        },
        {
            title: "Practice SQL Joins",
            description: "Complete 20 SQL join problems on LeetCode",
            dueDate: tomorrow.toISOString().slice(0, 16),
            priority: "high",
            courseId: courseIds[2]
        },
        {
            title: "Read Research Paper on CNNs",
            description: "Read 'ImageNet Classification with Deep Convolutional Neural Networks' paper",
            dueDate: oneWeek.toISOString().slice(0, 16),
            priority: "medium",
            courseId: courseIds[3]
        },
        {
            title: "Update Resume",
            description: "Add recent projects and skills to resume",
            dueDate: twoWeeks.toISOString().slice(0, 16),
            priority: "low",
            courseId: ""
        },
        {
            title: "Prepare for Midterm Exam",
            description: "Review all chapters 1-5 and practice problems",
            dueDate: threeDays.toISOString().slice(0, 16),
            priority: "high",
            courseId: courseIds[0]
        },
        {
            title: "Debug React Component",
            description: "Fix the infinite render loop in the user profile component",
            dueDate: tomorrow.toISOString().slice(0, 16),
            priority: "high",
            courseId: courseIds[1]
        },
        {
            title: "Watch Database Transaction Video",
            description: "Watch MIT OpenCourseWare video on ACID properties",
            dueDate: oneWeek.toISOString().slice(0, 16),
            priority: "low",
            courseId: courseIds[2]
        },
        {
            title: "Install TensorFlow and PyTorch",
            description: "Set up Python environment with ML libraries",
            dueDate: threeDays.toISOString().slice(0, 16),
            priority: "medium",
            courseId: courseIds[3]
        },
        {
            title: "Team Meeting - Project Discussion",
            description: "Discuss sprint planning and task distribution for final project",
            dueDate: tomorrow.toISOString().slice(0, 16),
            priority: "high",
            courseId: courseIds[4]
        },
        {
            title: "Code Review - Pull Request #42",
            description: "Review teammate's authentication module implementation",
            dueDate: tomorrow.toISOString().slice(0, 16),
            priority: "medium",
            courseId: courseIds[4]
        },
        {
            title: "Backup Project Files",
            description: "Push all local changes to GitHub and create backup",
            dueDate: threeDays.toISOString().slice(0, 16),
            priority: "low",
            courseId: ""
        }
    ];
    
    sampleTasks.forEach(task => dataManager.addTask(task));
    
    // Mark some tasks as completed for analytics
    const tasks = dataManager.getTasks();
    if (tasks.length > 0) {
        // Complete 40% of tasks
        const completedCount = Math.floor(tasks.length * 0.4);
        for (let i = 0; i < completedCount; i++) {
            const randomIndex = Math.floor(Math.random() * tasks.length);
            const task = tasks[randomIndex];
            if (!task.completed) {
                // Set completion date to random day in past week
                const daysAgo = Math.floor(Math.random() * 7);
                const completedDate = new Date(now.getTime() - daysAgo * 24 * 60 * 60 * 1000);
                task.completed = true;
                task.completedAt = completedDate.toISOString();
                dataManager.updateTask(task.id, task);
            }
        }
    }
    
    showToast('Sample data loaded! Explore all features now! 🎉', 'success');
}

// Add button to load sample data
function addSampleDataButton() {
    // Add to dashboard section header
    const dashboardHeader = document.querySelector('#dashboard .section-header .header-actions');
    if (dashboardHeader && !document.getElementById('loadSampleBtn')) {
        const button = document.createElement('button');
        button.id = 'loadSampleBtn';
        button.className = 'btn btn-secondary';
        button.innerHTML = '<i class="fas fa-database"></i> Load Sample Data';
        button.onclick = function() {
            if (confirm('This will add sample courses, assignments, and tasks. Continue?')) {
                loadSampleData();
                // Remove button after loading
                button.remove();
                // Refresh all views
                renderCourses();
                renderAssignments();
                renderTasks();
                updateDashboard();
            }
        };
        dashboardHeader.insertBefore(button, dashboardHeader.firstChild);
    }
}

// Auto-load sample data for guest users on first visit
function autoLoadForGuests() {
    const currentUser = auth.getCurrentUser();
    if (currentUser && currentUser.id.startsWith('guest_')) {
        const hasLoadedSample = localStorage.getItem(`${currentUser.id}_sampleLoaded`);
        if (!hasLoadedSample) {
            setTimeout(() => {
                loadSampleData();
                localStorage.setItem(`${currentUser.id}_sampleLoaded`, 'true');
                renderCourses();
                renderAssignments();
                renderTasks();
                updateDashboard();
            }, 500);
        }
    }
}
