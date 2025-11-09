// @ts-nocheck
// tests/auth.test.js
const Auth = require('../auth');

// Mocking DOM functions and localStorage
global.showToast = jest.fn();
global.showLogin = jest.fn();
global.showMainApp = jest.fn();
global.initializeApp = jest.fn();
global.btoa = (str) => Buffer.from(str).toString('base64');
global.atob = (b64) => Buffer.from(b64, 'base64').toString();

document.body.innerHTML = `
  <div id="mainApp" class="hidden"></div>
  <div id="authSection"></div>
  <div id="currentUser"></div>
  <div id="toast"></div>
`;

describe('Auth', () => {
  let auth;

  beforeEach(() => {
    localStorage.clear();
    auth = new Auth();
    jest.clearAllMocks();
  });

  // Registration Tests
  describe('Registration', () => {
    it('should register a new user successfully', () => {
      const result = auth.register('testuser', 'test@example.com', 'password123', 'password123');
      expect(result).toBe(true);
      expect(showToast).toHaveBeenCalledWith('Registration successful! Please login', 'success');
      expect(showLogin).toHaveBeenCalled();
      const users = JSON.parse(localStorage.getItem('users'));
      expect(users).toHaveLength(1);
      expect(users[0].username).toBe('testuser');
    });

    it('should fail if passwords do not match', () => {
      const result = auth.register('testuser', 'test@example.com', 'password123', 'password456');
      expect(result).toBe(false);
      expect(showToast).toHaveBeenCalledWith('Passwords do not match', 'error');
    });

    it('should fail if username is too short', () => {
        const result = auth.register('te', 'test@example.com', 'password123', 'password123');
        expect(result).toBe(false);
        expect(showToast).toHaveBeenCalledWith('Username must be at least 3 characters', 'error');
    });

    it('should fail if email is invalid', () => {
        const result = auth.register('testuser', 'invalid-email', 'password123', 'password123');
        expect(result).toBe(false);
        expect(showToast).toHaveBeenCalledWith('Please enter a valid email', 'error');
    });

    it('should fail if password is too short', () => {
        const result = auth.register('testuser', 'test@example.com', '123', '123');
        expect(result).toBe(false);
        expect(showToast).toHaveBeenCalledWith('Password must be at least 6 characters', 'error');
    });

    it('should not allow duplicate usernames', () => {
      auth.register('testuser', 'test@example.com', 'password123', 'password123');
      const result = auth.register('testuser', 'another@example.com', 'password123', 'password123');
      expect(result).toBe(false);
      expect(showToast).toHaveBeenCalledWith('Username already exists', 'error');
    });
  });

  // Login Tests
  describe('Login', () => {
    beforeEach(() => {
      auth.register('testuser', 'test@example.com', 'password123', 'password123');
    });

    it('should login a registered user successfully', () => {
      const result = auth.login('testuser', 'password123');
      expect(result).toBe(true);
      expect(showToast).toHaveBeenCalledWith('Login successful!', 'success');
      expect(showMainApp).toHaveBeenCalled();
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      expect(currentUser.username).toBe('testuser');
    });

    it('should fail with incorrect password', () => {
      const result = auth.login('testuser', 'wrongpassword');
      expect(result).toBe(false);
      expect(showToast).toHaveBeenCalledWith('Incorrect password', 'error');
    });

    it('should fail for a non-existent user', () => {
      const result = auth.login('nonexistent', 'password123');
      expect(result).toBe(false);
      expect(showToast).toHaveBeenCalledWith('User not found', 'error');
    });
  });

  // Logout Test
  describe('Logout', () => {
    it('should log out the current user', () => {
      auth.register('testuser', 'test@example.com', 'password123', 'password123');
      auth.login('testuser', 'password123');
      
      auth.logout();
      
      expect(auth.currentUser).toBeNull();
      expect(localStorage.getItem('currentUser')).toBeNull();
      expect(showToast).toHaveBeenCalledWith('Logged out successfully', 'success');
      expect(document.getElementById('mainApp').classList.contains('hidden')).toBe(true);
      expect(document.getElementById('authSection').classList.contains('hidden')).toBe(false);
    });
  });
});
