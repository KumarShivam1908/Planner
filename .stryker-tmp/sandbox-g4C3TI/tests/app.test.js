// @ts-nocheck
// tests/app.test.js
const DataManager = require('../app');
const Auth = require('../auth');

// Mocking localStorage
let store = {};
global.localStorage = {
  getItem: (key) => store[key] || null,
  setItem: (key, value) => {
    store[key] = value.toString();
  },
  removeItem: (key) => {
    delete store[key];
  },
  clear: () => {
    store = {};
  }
};

// Mocking auth dependency
const mockAuth = new Auth();
jest.spyOn(mockAuth, 'getCurrentUser').mockReturnValue({ id: 'test-user-id' });

global.auth = mockAuth;


describe('DataManager', () => {
  let dataManager;
  const userId = 'test-user-id';

  beforeEach(() => {
    localStorage.clear();
    dataManager = new DataManager(userId);
  });

  // Course Management
  describe('Course Management', () => {
    it('should add a new course', () => {
      const course = { name: 'History 101', code: 'HIST101', instructor: 'Dr. Smith', color: '#ff0000' };
      const newCourse = dataManager.addCourse(course);
      
      expect(newCourse.id).toBeDefined();
      expect(newCourse.createdAt).toBeDefined();
      expect(dataManager.getCourses()).toHaveLength(1);
      expect(dataManager.getCourses()[0].name).toBe('History 101');
    });

    it('should update an existing course', () => {
      const course = dataManager.addCourse({ name: 'Initial Name', code: 'CODE1' });
      const updatedData = { name: 'Updated Name' };
      dataManager.updateCourse(course.id, updatedData);
      
      const updatedCourse = dataManager.getCourses()[0];
      expect(updatedCourse.name).toBe('Updated Name');
      expect(updatedCourse.code).toBe('CODE1'); // Should not change
    });

    it('should delete a course', () => {
      const course = dataManager.addCourse({ name: 'To be deleted' });
      expect(dataManager.getCourses()).toHaveLength(1);
      
      dataManager.deleteCourse(course.id);
      expect(dataManager.getCourses()).toHaveLength(0);
    });
  });

  // Task Management
  describe('Task Management', () => {
    it('should add a new task', () => {
      const task = { title: 'Read Chapter 1', priority: 'high' };
      const newTask = dataManager.addTask(task);

      expect(newTask.id).toBeDefined();
      expect(newTask.completed).toBe(false);
      expect(dataManager.getTasks()).toHaveLength(1);
      expect(dataManager.getTasks()[0].title).toBe('Read Chapter 1');
    });

    it('should toggle task completion status', () => {
      const task = dataManager.addTask({ title: 'A task' });
      
      // Complete the task
      let updatedTask = dataManager.toggleTaskCompletion(task.id);
      expect(updatedTask.completed).toBe(true);
      expect(updatedTask.completedAt).toBeDefined();

      // Un-complete the task
      updatedTask = dataManager.toggleTaskCompletion(task.id);
      expect(updatedTask.completed).toBe(false);
      expect(updatedTask.completedAt).toBeNull();
    });

    it('should return null when toggling a non-existent task', () => {
        const result = dataManager.toggleTaskCompletion('non-existent-id');
        expect(result).toBeNull();
    });
  });

  // Integration-style tests
  describe('Data Persistence and Scoping', () => {
    it('should persist data across different DataManager instances for the same user', () => {
      // First instance adds data
      const dm1 = new DataManager(userId);
      dm1.addCourse({ name: 'Physics' });

      // Second instance should load that data
      const dm2 = new DataManager(userId);
      expect(dm2.getCourses()).toHaveLength(1);
      expect(dm2.getCourses()[0].name).toBe('Physics');
    });

    it('should keep data separate for different users', () => {
      const userId1 = 'user1';
      const userId2 = 'user2';

      const dm1 = new DataManager(userId1);
      dm1.addCourse({ name: 'User 1 Course' });

      const dm2 = new DataManager(userId2);
      dm2.addCourse({ name: 'User 2 Course' });

      expect(dm1.getCourses()).toHaveLength(1);
      expect(dm1.getCourses()[0].name).toBe('User 1 Course');
      
      expect(dm2.getCourses()).toHaveLength(1);
      expect(dm2.getCourses()[0].name).toBe('User 2 Course');
    });
  });
});
