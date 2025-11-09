// Authentication Module
class Auth {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('users')) || [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
    }

    register(username, email, password, confirmPassword) {
        // Validation
        if (!username || !email || !password || !confirmPassword) {
            showToast('Please fill in all fields', 'error');
            return false;
        }

        if (username.length < 3) {
            showToast('Username must be at least 3 characters', 'error');
            return false;
        }

        if (!this.validateEmail(email)) {
            showToast('Please enter a valid email', 'error');
            return false;
        }

        if (password.length < 6) {
            showToast('Password must be at least 6 characters', 'error');
            return false;
        }

        if (password !== confirmPassword) {
            showToast('Passwords do not match', 'error');
            return false;
        }

        // Check if user already exists
        if (this.users.find(u => u.username === username)) {
            showToast('Username already exists', 'error');
            return false;
        }

        if (this.users.find(u => u.email === email)) {
            showToast('Email already registered', 'error');
            return false;
        }

        // Hash password (simple base64 encoding for demo)
        const hashedPassword = btoa(password);

        // Create new user
        const newUser = {
            id: Date.now().toString(),
            username,
            email,
            password: hashedPassword,
            createdAt: new Date().toISOString()
        };

        this.users.push(newUser);
        localStorage.setItem('users', JSON.stringify(this.users));

        showToast('Registration successful! Please login', 'success');
        showLogin();
        return true;
    }

    login(username, password) {
        if (!username || !password) {
            showToast('Please fill in all fields', 'error');
            return false;
        }

        const user = this.users.find(u => u.username === username);
        
        if (!user) {
            showToast('User not found', 'error');
            return false;
        }

        const hashedPassword = btoa(password);
        if (user.password !== hashedPassword) {
            showToast('Incorrect password', 'error');
            return false;
        }

        // Set current user
        this.currentUser = {
            id: user.id,
            username: user.username,
            email: user.email
        };
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

        showToast('Login successful!', 'success');
        this.showMainApp();
        return true;
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        
        // Hide main app and show auth section
        document.getElementById('mainApp').classList.add('hidden');
        document.getElementById('authSection').classList.remove('hidden');
        
        showToast('Logged out successfully', 'success');
    }

    showMainApp() {
        document.getElementById('authSection').classList.add('hidden');
        document.getElementById('mainApp').classList.remove('hidden');
        document.getElementById('currentUser').textContent = this.currentUser.username;
        
        // Initialize app
        initializeApp();
    }

    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    isAuthenticated() {
        return this.currentUser !== null;
    }

    getCurrentUser() {
        return this.currentUser;
    }
}

// Initialize Auth
const auth = new Auth();

// Check if user is already logged in
window.addEventListener('DOMContentLoaded', () => {
    if (auth.isAuthenticated()) {
        auth.showMainApp();
    }
});

// Auth Functions
function showLogin() {
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('registerForm').classList.remove('active');
}

function showRegister() {
    document.getElementById('registerForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
}

function register() {
    const username = document.getElementById('regUsername').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;

    if (auth.register(username, email, password, confirmPassword)) {
        // Clear form
        document.getElementById('regUsername').value = '';
        document.getElementById('regEmail').value = '';
        document.getElementById('regPassword').value = '';
        document.getElementById('regConfirmPassword').value = '';
    }
}

function login() {
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;

    if (auth.login(username, password)) {
        // Clear form
        document.getElementById('loginUsername').value = '';
        document.getElementById('loginPassword').value = '';
    }
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        auth.logout();
    }
}

// Toast Notification
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Quick Enter - No authentication required
function quickEnter() {
    // Create a guest user
    const guestUser = {
        id: 'guest_' + Date.now(),
        username: 'Guest User',
        email: 'guest@studyflow.com'
    };
    
    auth.currentUser = guestUser;
    localStorage.setItem('currentUser', JSON.stringify(guestUser));
    
    showToast('Welcome! You can start using StudyFlow right away! 🎉', 'success');
    auth.showMainApp();
}

// For testing purposes
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Auth;
}

