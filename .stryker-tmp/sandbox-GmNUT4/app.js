// @ts-nocheck
// Data Storage Manager
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
class DataManager {
  constructor(userId) {
    if (stryMutAct_9fa48("0")) {
      {}
    } else {
      stryCov_9fa48("0");
      this.userId = userId;
      this.courses = stryMutAct_9fa48("3") ? this.load('courses') && [] : stryMutAct_9fa48("2") ? false : stryMutAct_9fa48("1") ? true : (stryCov_9fa48("1", "2", "3"), this.load(stryMutAct_9fa48("4") ? "" : (stryCov_9fa48("4"), 'courses')) || (stryMutAct_9fa48("5") ? ["Stryker was here"] : (stryCov_9fa48("5"), [])));
      this.assignments = stryMutAct_9fa48("8") ? this.load('assignments') && [] : stryMutAct_9fa48("7") ? false : stryMutAct_9fa48("6") ? true : (stryCov_9fa48("6", "7", "8"), this.load(stryMutAct_9fa48("9") ? "" : (stryCov_9fa48("9"), 'assignments')) || (stryMutAct_9fa48("10") ? ["Stryker was here"] : (stryCov_9fa48("10"), [])));
      this.tasks = stryMutAct_9fa48("13") ? this.load('tasks') && [] : stryMutAct_9fa48("12") ? false : stryMutAct_9fa48("11") ? true : (stryCov_9fa48("11", "12", "13"), this.load(stryMutAct_9fa48("14") ? "" : (stryCov_9fa48("14"), 'tasks')) || (stryMutAct_9fa48("15") ? ["Stryker was here"] : (stryCov_9fa48("15"), [])));
    }
  }
  load(key) {
    if (stryMutAct_9fa48("16")) {
      {}
    } else {
      stryCov_9fa48("16");
      const data = localStorage.getItem(stryMutAct_9fa48("17") ? `` : (stryCov_9fa48("17"), `${this.userId}_${key}`));
      return data ? JSON.parse(data) : null;
    }
  }
  save(key, data) {
    if (stryMutAct_9fa48("18")) {
      {}
    } else {
      stryCov_9fa48("18");
      localStorage.setItem(stryMutAct_9fa48("19") ? `` : (stryCov_9fa48("19"), `${this.userId}_${key}`), JSON.stringify(data));
    }
  }

  // Courses
  getCourses() {
    if (stryMutAct_9fa48("20")) {
      {}
    } else {
      stryCov_9fa48("20");
      return this.courses;
    }
  }
  addCourse(course) {
    if (stryMutAct_9fa48("21")) {
      {}
    } else {
      stryCov_9fa48("21");
      course.id = Date.now().toString();
      course.createdAt = new Date().toISOString();
      this.courses.push(course);
      this.save(stryMutAct_9fa48("22") ? "" : (stryCov_9fa48("22"), 'courses'), this.courses);
      return course;
    }
  }
  updateCourse(id, updatedCourse) {
    if (stryMutAct_9fa48("23")) {
      {}
    } else {
      stryCov_9fa48("23");
      const index = this.courses.findIndex(stryMutAct_9fa48("24") ? () => undefined : (stryCov_9fa48("24"), c => stryMutAct_9fa48("27") ? c.id !== id : stryMutAct_9fa48("26") ? false : stryMutAct_9fa48("25") ? true : (stryCov_9fa48("25", "26", "27"), c.id === id)));
      if (stryMutAct_9fa48("30") ? index === -1 : stryMutAct_9fa48("29") ? false : stryMutAct_9fa48("28") ? true : (stryCov_9fa48("28", "29", "30"), index !== (stryMutAct_9fa48("31") ? +1 : (stryCov_9fa48("31"), -1)))) {
        if (stryMutAct_9fa48("32")) {
          {}
        } else {
          stryCov_9fa48("32");
          this.courses[index] = stryMutAct_9fa48("33") ? {} : (stryCov_9fa48("33"), {
            ...this.courses[index],
            ...updatedCourse
          });
          this.save(stryMutAct_9fa48("34") ? "" : (stryCov_9fa48("34"), 'courses'), this.courses);
          return this.courses[index];
        }
      }
      return null;
    }
  }
  deleteCourse(id) {
    if (stryMutAct_9fa48("35")) {
      {}
    } else {
      stryCov_9fa48("35");
      this.courses = stryMutAct_9fa48("36") ? this.courses : (stryCov_9fa48("36"), this.courses.filter(stryMutAct_9fa48("37") ? () => undefined : (stryCov_9fa48("37"), c => stryMutAct_9fa48("40") ? c.id === id : stryMutAct_9fa48("39") ? false : stryMutAct_9fa48("38") ? true : (stryCov_9fa48("38", "39", "40"), c.id !== id))));
      this.save(stryMutAct_9fa48("41") ? "" : (stryCov_9fa48("41"), 'courses'), this.courses);
    }
  }

  // Assignments
  getAssignments() {
    if (stryMutAct_9fa48("42")) {
      {}
    } else {
      stryCov_9fa48("42");
      return this.assignments;
    }
  }
  addAssignment(assignment) {
    if (stryMutAct_9fa48("43")) {
      {}
    } else {
      stryCov_9fa48("43");
      assignment.id = Date.now().toString();
      assignment.createdAt = new Date().toISOString();
      assignment.completed = stryMutAct_9fa48("44") ? true : (stryCov_9fa48("44"), false);
      this.assignments.push(assignment);
      this.save(stryMutAct_9fa48("45") ? "" : (stryCov_9fa48("45"), 'assignments'), this.assignments);
      return assignment;
    }
  }
  updateAssignment(id, updatedAssignment) {
    if (stryMutAct_9fa48("46")) {
      {}
    } else {
      stryCov_9fa48("46");
      const index = this.assignments.findIndex(stryMutAct_9fa48("47") ? () => undefined : (stryCov_9fa48("47"), a => stryMutAct_9fa48("50") ? a.id !== id : stryMutAct_9fa48("49") ? false : stryMutAct_9fa48("48") ? true : (stryCov_9fa48("48", "49", "50"), a.id === id)));
      if (stryMutAct_9fa48("53") ? index === -1 : stryMutAct_9fa48("52") ? false : stryMutAct_9fa48("51") ? true : (stryCov_9fa48("51", "52", "53"), index !== (stryMutAct_9fa48("54") ? +1 : (stryCov_9fa48("54"), -1)))) {
        if (stryMutAct_9fa48("55")) {
          {}
        } else {
          stryCov_9fa48("55");
          this.assignments[index] = stryMutAct_9fa48("56") ? {} : (stryCov_9fa48("56"), {
            ...this.assignments[index],
            ...updatedAssignment
          });
          this.save(stryMutAct_9fa48("57") ? "" : (stryCov_9fa48("57"), 'assignments'), this.assignments);
          return this.assignments[index];
        }
      }
      return null;
    }
  }
  deleteAssignment(id) {
    if (stryMutAct_9fa48("58")) {
      {}
    } else {
      stryCov_9fa48("58");
      this.assignments = stryMutAct_9fa48("59") ? this.assignments : (stryCov_9fa48("59"), this.assignments.filter(stryMutAct_9fa48("60") ? () => undefined : (stryCov_9fa48("60"), a => stryMutAct_9fa48("63") ? a.id === id : stryMutAct_9fa48("62") ? false : stryMutAct_9fa48("61") ? true : (stryCov_9fa48("61", "62", "63"), a.id !== id))));
      this.save(stryMutAct_9fa48("64") ? "" : (stryCov_9fa48("64"), 'assignments'), this.assignments);
    }
  }

  // Tasks
  getTasks() {
    if (stryMutAct_9fa48("65")) {
      {}
    } else {
      stryCov_9fa48("65");
      return this.tasks;
    }
  }
  addTask(task) {
    if (stryMutAct_9fa48("66")) {
      {}
    } else {
      stryCov_9fa48("66");
      task.id = Date.now().toString();
      task.createdAt = new Date().toISOString();
      task.completed = stryMutAct_9fa48("67") ? true : (stryCov_9fa48("67"), false);
      this.tasks.push(task);
      this.save(stryMutAct_9fa48("68") ? "" : (stryCov_9fa48("68"), 'tasks'), this.tasks);
      return task;
    }
  }
  updateTask(id, updatedTask) {
    if (stryMutAct_9fa48("69")) {
      {}
    } else {
      stryCov_9fa48("69");
      const index = this.tasks.findIndex(stryMutAct_9fa48("70") ? () => undefined : (stryCov_9fa48("70"), t => stryMutAct_9fa48("73") ? t.id !== id : stryMutAct_9fa48("72") ? false : stryMutAct_9fa48("71") ? true : (stryCov_9fa48("71", "72", "73"), t.id === id)));
      if (stryMutAct_9fa48("76") ? index === -1 : stryMutAct_9fa48("75") ? false : stryMutAct_9fa48("74") ? true : (stryCov_9fa48("74", "75", "76"), index !== (stryMutAct_9fa48("77") ? +1 : (stryCov_9fa48("77"), -1)))) {
        if (stryMutAct_9fa48("78")) {
          {}
        } else {
          stryCov_9fa48("78");
          this.tasks[index] = stryMutAct_9fa48("79") ? {} : (stryCov_9fa48("79"), {
            ...this.tasks[index],
            ...updatedTask
          });
          this.save(stryMutAct_9fa48("80") ? "" : (stryCov_9fa48("80"), 'tasks'), this.tasks);
          return this.tasks[index];
        }
      }
      return null;
    }
  }
  deleteTask(id) {
    if (stryMutAct_9fa48("81")) {
      {}
    } else {
      stryCov_9fa48("81");
      this.tasks = stryMutAct_9fa48("82") ? this.tasks : (stryCov_9fa48("82"), this.tasks.filter(stryMutAct_9fa48("83") ? () => undefined : (stryCov_9fa48("83"), t => stryMutAct_9fa48("86") ? t.id === id : stryMutAct_9fa48("85") ? false : stryMutAct_9fa48("84") ? true : (stryCov_9fa48("84", "85", "86"), t.id !== id))));
      this.save(stryMutAct_9fa48("87") ? "" : (stryCov_9fa48("87"), 'tasks'), this.tasks);
    }
  }
  toggleTaskCompletion(id) {
    if (stryMutAct_9fa48("88")) {
      {}
    } else {
      stryCov_9fa48("88");
      const task = this.tasks.find(stryMutAct_9fa48("89") ? () => undefined : (stryCov_9fa48("89"), t => stryMutAct_9fa48("92") ? t.id !== id : stryMutAct_9fa48("91") ? false : stryMutAct_9fa48("90") ? true : (stryCov_9fa48("90", "91", "92"), t.id === id)));
      if (stryMutAct_9fa48("94") ? false : stryMutAct_9fa48("93") ? true : (stryCov_9fa48("93", "94"), task)) {
        if (stryMutAct_9fa48("95")) {
          {}
        } else {
          stryCov_9fa48("95");
          task.completed = stryMutAct_9fa48("96") ? task.completed : (stryCov_9fa48("96"), !task.completed);
          task.completedAt = task.completed ? new Date().toISOString() : null;
          this.save(stryMutAct_9fa48("97") ? "" : (stryCov_9fa48("97"), 'tasks'), this.tasks);
          return task;
        }
      }
      return null;
    }
  }
}
let dataManager;

// Initialize App
function initializeApp() {
  if (stryMutAct_9fa48("98")) {
    {}
  } else {
    stryCov_9fa48("98");
    const currentUser = auth.getCurrentUser();
    if (stryMutAct_9fa48("101") ? false : stryMutAct_9fa48("100") ? true : stryMutAct_9fa48("99") ? currentUser : (stryCov_9fa48("99", "100", "101"), !currentUser)) return;
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
      if (stryMutAct_9fa48("102")) {
        {}
      } else {
        stryCov_9fa48("102");
        addSampleDataButton();
      }
    }, 100);

    // Check for reminders
    checkReminders();

    // Set up periodic reminder checks (every 5 minutes)
    setInterval(checkReminders, stryMutAct_9fa48("103") ? 5 * 60 / 1000 : (stryCov_9fa48("103"), (stryMutAct_9fa48("104") ? 5 / 60 : (stryCov_9fa48("104"), 5 * 60)) * 1000));
  }
}

// Navigation
function showSection(sectionId) {
  if (stryMutAct_9fa48("105")) {
    {}
  } else {
    stryCov_9fa48("105");
    // Hide all sections
    document.querySelectorAll(stryMutAct_9fa48("106") ? "" : (stryCov_9fa48("106"), '.content-section')).forEach(section => {
      if (stryMutAct_9fa48("107")) {
        {}
      } else {
        stryCov_9fa48("107");
        section.classList.remove(stryMutAct_9fa48("108") ? "" : (stryCov_9fa48("108"), 'active'));
      }
    });

    // Show selected section
    document.getElementById(sectionId).classList.add(stryMutAct_9fa48("109") ? "" : (stryCov_9fa48("109"), 'active'));

    // Update nav items
    document.querySelectorAll(stryMutAct_9fa48("110") ? "" : (stryCov_9fa48("110"), '.nav-item')).forEach(item => {
      if (stryMutAct_9fa48("111")) {
        {}
      } else {
        stryCov_9fa48("111");
        item.classList.remove(stryMutAct_9fa48("112") ? "" : (stryCov_9fa48("112"), 'active'));
      }
    });
    event.target.closest(stryMutAct_9fa48("113") ? "" : (stryCov_9fa48("113"), '.nav-item')).classList.add(stryMutAct_9fa48("114") ? "" : (stryCov_9fa48("114"), 'active'));

    // Refresh data for specific sections
    if (stryMutAct_9fa48("117") ? sectionId !== 'dashboard' : stryMutAct_9fa48("116") ? false : stryMutAct_9fa48("115") ? true : (stryCov_9fa48("115", "116", "117"), sectionId === (stryMutAct_9fa48("118") ? "" : (stryCov_9fa48("118"), 'dashboard')))) {
      if (stryMutAct_9fa48("119")) {
        {}
      } else {
        stryCov_9fa48("119");
        updateDashboard();
      }
    } else if (stryMutAct_9fa48("122") ? sectionId !== 'analytics' : stryMutAct_9fa48("121") ? false : stryMutAct_9fa48("120") ? true : (stryCov_9fa48("120", "121", "122"), sectionId === (stryMutAct_9fa48("123") ? "" : (stryCov_9fa48("123"), 'analytics')))) {
      if (stryMutAct_9fa48("124")) {
        {}
      } else {
        stryCov_9fa48("124");
        renderAnalytics();
      }
    } else if (stryMutAct_9fa48("127") ? sectionId !== 'reminders' : stryMutAct_9fa48("126") ? false : stryMutAct_9fa48("125") ? true : (stryCov_9fa48("125", "126", "127"), sectionId === (stryMutAct_9fa48("128") ? "" : (stryCov_9fa48("128"), 'reminders')))) {
      if (stryMutAct_9fa48("129")) {
        {}
      } else {
        stryCov_9fa48("129");
        displayReminders();
      }
    }
  }
}

// Dashboard
function updateDashboard() {
  if (stryMutAct_9fa48("130")) {
    {}
  } else {
    stryCov_9fa48("130");
    const courses = dataManager.getCourses();
    const assignments = dataManager.getAssignments();
    const tasks = dataManager.getTasks();

    // Update stats
    document.getElementById(stryMutAct_9fa48("131") ? "" : (stryCov_9fa48("131"), 'totalCourses')).textContent = courses.length;
    document.getElementById(stryMutAct_9fa48("132") ? "" : (stryCov_9fa48("132"), 'totalAssignments')).textContent = stryMutAct_9fa48("133") ? assignments.length : (stryCov_9fa48("133"), assignments.filter(stryMutAct_9fa48("134") ? () => undefined : (stryCov_9fa48("134"), a => stryMutAct_9fa48("135") ? a.completed : (stryCov_9fa48("135"), !a.completed))).length);
    document.getElementById(stryMutAct_9fa48("136") ? "" : (stryCov_9fa48("136"), 'totalTasks')).textContent = stryMutAct_9fa48("137") ? tasks.length : (stryCov_9fa48("137"), tasks.filter(stryMutAct_9fa48("138") ? () => undefined : (stryCov_9fa48("138"), t => stryMutAct_9fa48("139") ? t.completed : (stryCov_9fa48("139"), !t.completed))).length);
    document.getElementById(stryMutAct_9fa48("140") ? "" : (stryCov_9fa48("140"), 'urgentTasks')).textContent = stryMutAct_9fa48("141") ? tasks.length : (stryCov_9fa48("141"), tasks.filter(stryMutAct_9fa48("142") ? () => undefined : (stryCov_9fa48("142"), t => stryMutAct_9fa48("145") ? !t.completed || t.priority === 'high' : stryMutAct_9fa48("144") ? false : stryMutAct_9fa48("143") ? true : (stryCov_9fa48("143", "144", "145"), (stryMutAct_9fa48("146") ? t.completed : (stryCov_9fa48("146"), !t.completed)) && (stryMutAct_9fa48("148") ? t.priority !== 'high' : stryMutAct_9fa48("147") ? true : (stryCov_9fa48("147", "148"), t.priority === (stryMutAct_9fa48("149") ? "" : (stryCov_9fa48("149"), 'high'))))))).length);

    // Update upcoming deadlines
    displayUpcomingDeadlines();

    // Update task distribution chart
    displayTaskDistribution();
  }
}
function displayUpcomingDeadlines() {
  if (stryMutAct_9fa48("150")) {
    {}
  } else {
    stryCov_9fa48("150");
    const container = document.getElementById(stryMutAct_9fa48("151") ? "" : (stryCov_9fa48("151"), 'upcomingDeadlines'));
    const allItems = stryMutAct_9fa48("152") ? [] : (stryCov_9fa48("152"), [...dataManager.getAssignments().map(stryMutAct_9fa48("153") ? () => undefined : (stryCov_9fa48("153"), a => stryMutAct_9fa48("154") ? {} : (stryCov_9fa48("154"), {
      ...a,
      type: stryMutAct_9fa48("155") ? "" : (stryCov_9fa48("155"), 'assignment')
    }))), ...dataManager.getTasks().map(stryMutAct_9fa48("156") ? () => undefined : (stryCov_9fa48("156"), t => stryMutAct_9fa48("157") ? {} : (stryCov_9fa48("157"), {
      ...t,
      type: stryMutAct_9fa48("158") ? "" : (stryCov_9fa48("158"), 'task')
    })))]);
    const upcoming = stryMutAct_9fa48("161") ? allItems.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)).slice(0, 5) : stryMutAct_9fa48("160") ? allItems.filter(item => !item.completed && item.dueDate).slice(0, 5) : stryMutAct_9fa48("159") ? allItems.filter(item => !item.completed && item.dueDate).sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)) : (stryCov_9fa48("159", "160", "161"), allItems.filter(stryMutAct_9fa48("162") ? () => undefined : (stryCov_9fa48("162"), item => stryMutAct_9fa48("165") ? !item.completed || item.dueDate : stryMutAct_9fa48("164") ? false : stryMutAct_9fa48("163") ? true : (stryCov_9fa48("163", "164", "165"), (stryMutAct_9fa48("166") ? item.completed : (stryCov_9fa48("166"), !item.completed)) && item.dueDate))).sort(stryMutAct_9fa48("167") ? () => undefined : (stryCov_9fa48("167"), (a, b) => stryMutAct_9fa48("168") ? new Date(a.dueDate) + new Date(b.dueDate) : (stryCov_9fa48("168"), new Date(a.dueDate) - new Date(b.dueDate)))).slice(0, 5));
    if (stryMutAct_9fa48("171") ? upcoming.length !== 0 : stryMutAct_9fa48("170") ? false : stryMutAct_9fa48("169") ? true : (stryCov_9fa48("169", "170", "171"), upcoming.length === 0)) {
      if (stryMutAct_9fa48("172")) {
        {}
      } else {
        stryCov_9fa48("172");
        container.innerHTML = stryMutAct_9fa48("173") ? "" : (stryCov_9fa48("173"), '<div class="empty-state"><p>No upcoming deadlines</p></div>');
        return;
      }
    }
    container.innerHTML = upcoming.map(item => {
      if (stryMutAct_9fa48("174")) {
        {}
      } else {
        stryCov_9fa48("174");
        const dueDate = new Date(item.dueDate);
        const now = new Date();
        const diffHours = Math.floor(stryMutAct_9fa48("175") ? (dueDate - now) * (1000 * 60 * 60) : (stryCov_9fa48("175"), (stryMutAct_9fa48("176") ? dueDate + now : (stryCov_9fa48("176"), dueDate - now)) / (stryMutAct_9fa48("177") ? 1000 * 60 / 60 : (stryCov_9fa48("177"), (stryMutAct_9fa48("178") ? 1000 / 60 : (stryCov_9fa48("178"), 1000 * 60)) * 60))));
        const isUrgent = stryMutAct_9fa48("182") ? diffHours > 24 : stryMutAct_9fa48("181") ? diffHours < 24 : stryMutAct_9fa48("180") ? false : stryMutAct_9fa48("179") ? true : (stryCov_9fa48("179", "180", "181", "182"), diffHours <= 24);
        let timeText;
        if (stryMutAct_9fa48("186") ? diffHours >= 0 : stryMutAct_9fa48("185") ? diffHours <= 0 : stryMutAct_9fa48("184") ? false : stryMutAct_9fa48("183") ? true : (stryCov_9fa48("183", "184", "185", "186"), diffHours < 0)) {
          if (stryMutAct_9fa48("187")) {
            {}
          } else {
            stryCov_9fa48("187");
            timeText = stryMutAct_9fa48("188") ? "" : (stryCov_9fa48("188"), 'Overdue');
          }
        } else if (stryMutAct_9fa48("192") ? diffHours >= 24 : stryMutAct_9fa48("191") ? diffHours <= 24 : stryMutAct_9fa48("190") ? false : stryMutAct_9fa48("189") ? true : (stryCov_9fa48("189", "190", "191", "192"), diffHours < 24)) {
          if (stryMutAct_9fa48("193")) {
            {}
          } else {
            stryCov_9fa48("193");
            timeText = stryMutAct_9fa48("194") ? `` : (stryCov_9fa48("194"), `${diffHours}h left`);
          }
        } else {
          if (stryMutAct_9fa48("195")) {
            {}
          } else {
            stryCov_9fa48("195");
            const diffDays = Math.floor(stryMutAct_9fa48("196") ? diffHours * 24 : (stryCov_9fa48("196"), diffHours / 24));
            timeText = stryMutAct_9fa48("197") ? `` : (stryCov_9fa48("197"), `${diffDays}d left`);
          }
        }
        const course = item.courseId ? dataManager.getCourses().find(stryMutAct_9fa48("198") ? () => undefined : (stryCov_9fa48("198"), c => stryMutAct_9fa48("201") ? c.id !== item.courseId : stryMutAct_9fa48("200") ? false : stryMutAct_9fa48("199") ? true : (stryCov_9fa48("199", "200", "201"), c.id === item.courseId))) : null;
        return stryMutAct_9fa48("202") ? `` : (stryCov_9fa48("202"), `
            <div class="deadline-item ${isUrgent ? stryMutAct_9fa48("203") ? "" : (stryCov_9fa48("203"), 'urgent') : stryMutAct_9fa48("204") ? "Stryker was here!" : (stryCov_9fa48("204"), '')}">
                <div class="deadline-info">
                    <div class="deadline-title">${item.title}</div>
                    ${course ? stryMutAct_9fa48("205") ? `` : (stryCov_9fa48("205"), `<div class="deadline-course">${course.name}</div>`) : stryMutAct_9fa48("206") ? "Stryker was here!" : (stryCov_9fa48("206"), '')}
                </div>
                <div class="deadline-time">${timeText}</div>
            </div>
        `);
      }
    }).join(stryMutAct_9fa48("207") ? "Stryker was here!" : (stryCov_9fa48("207"), ''));
  }
}
function displayTaskDistribution() {
  if (stryMutAct_9fa48("208")) {
    {}
  } else {
    stryCov_9fa48("208");
    const container = document.getElementById(stryMutAct_9fa48("209") ? "" : (stryCov_9fa48("209"), 'taskDistribution'));
    const tasks = dataManager.getTasks();
    const high = stryMutAct_9fa48("210") ? tasks.length : (stryCov_9fa48("210"), tasks.filter(stryMutAct_9fa48("211") ? () => undefined : (stryCov_9fa48("211"), t => stryMutAct_9fa48("214") ? !t.completed || t.priority === 'high' : stryMutAct_9fa48("213") ? false : stryMutAct_9fa48("212") ? true : (stryCov_9fa48("212", "213", "214"), (stryMutAct_9fa48("215") ? t.completed : (stryCov_9fa48("215"), !t.completed)) && (stryMutAct_9fa48("217") ? t.priority !== 'high' : stryMutAct_9fa48("216") ? true : (stryCov_9fa48("216", "217"), t.priority === (stryMutAct_9fa48("218") ? "" : (stryCov_9fa48("218"), 'high'))))))).length);
    const medium = stryMutAct_9fa48("219") ? tasks.length : (stryCov_9fa48("219"), tasks.filter(stryMutAct_9fa48("220") ? () => undefined : (stryCov_9fa48("220"), t => stryMutAct_9fa48("223") ? !t.completed || t.priority === 'medium' : stryMutAct_9fa48("222") ? false : stryMutAct_9fa48("221") ? true : (stryCov_9fa48("221", "222", "223"), (stryMutAct_9fa48("224") ? t.completed : (stryCov_9fa48("224"), !t.completed)) && (stryMutAct_9fa48("226") ? t.priority !== 'medium' : stryMutAct_9fa48("225") ? true : (stryCov_9fa48("225", "226"), t.priority === (stryMutAct_9fa48("227") ? "" : (stryCov_9fa48("227"), 'medium'))))))).length);
    const low = stryMutAct_9fa48("228") ? tasks.length : (stryCov_9fa48("228"), tasks.filter(stryMutAct_9fa48("229") ? () => undefined : (stryCov_9fa48("229"), t => stryMutAct_9fa48("232") ? !t.completed || t.priority === 'low' : stryMutAct_9fa48("231") ? false : stryMutAct_9fa48("230") ? true : (stryCov_9fa48("230", "231", "232"), (stryMutAct_9fa48("233") ? t.completed : (stryCov_9fa48("233"), !t.completed)) && (stryMutAct_9fa48("235") ? t.priority !== 'low' : stryMutAct_9fa48("234") ? true : (stryCov_9fa48("234", "235"), t.priority === (stryMutAct_9fa48("236") ? "" : (stryCov_9fa48("236"), 'low'))))))).length);
    const total = stryMutAct_9fa48("237") ? high + medium - low : (stryCov_9fa48("237"), (stryMutAct_9fa48("238") ? high - medium : (stryCov_9fa48("238"), high + medium)) + low);
    if (stryMutAct_9fa48("241") ? total !== 0 : stryMutAct_9fa48("240") ? false : stryMutAct_9fa48("239") ? true : (stryCov_9fa48("239", "240", "241"), total === 0)) {
      if (stryMutAct_9fa48("242")) {
        {}
      } else {
        stryCov_9fa48("242");
        container.innerHTML = stryMutAct_9fa48("243") ? "" : (stryCov_9fa48("243"), '<div class="empty-state"><p>No tasks yet</p></div>');
        return;
      }
    }
    const maxHeight = 150;
    const highHeight = stryMutAct_9fa48("244") ? high / total / maxHeight : (stryCov_9fa48("244"), (stryMutAct_9fa48("245") ? high * total : (stryCov_9fa48("245"), high / total)) * maxHeight);
    const mediumHeight = stryMutAct_9fa48("246") ? medium / total / maxHeight : (stryCov_9fa48("246"), (stryMutAct_9fa48("247") ? medium * total : (stryCov_9fa48("247"), medium / total)) * maxHeight);
    const lowHeight = stryMutAct_9fa48("248") ? low / total / maxHeight : (stryCov_9fa48("248"), (stryMutAct_9fa48("249") ? low * total : (stryCov_9fa48("249"), low / total)) * maxHeight);
    container.innerHTML = stryMutAct_9fa48("250") ? `` : (stryCov_9fa48("250"), `
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
    `);
  }
}

// Courses
function renderCourses() {
  if (stryMutAct_9fa48("251")) {
    {}
  } else {
    stryCov_9fa48("251");
    const container = document.getElementById(stryMutAct_9fa48("252") ? "" : (stryCov_9fa48("252"), 'coursesList'));
    const courses = dataManager.getCourses();
    if (stryMutAct_9fa48("255") ? courses.length !== 0 : stryMutAct_9fa48("254") ? false : stryMutAct_9fa48("253") ? true : (stryCov_9fa48("253", "254", "255"), courses.length === 0)) {
      if (stryMutAct_9fa48("256")) {
        {}
      } else {
        stryCov_9fa48("256");
        container.innerHTML = stryMutAct_9fa48("257") ? `` : (stryCov_9fa48("257"), `
            <div class="empty-state">
                <i class="fas fa-book"></i>
                <h3>No Courses Yet</h3>
                <p>Add your first course to get started!</p>
            </div>
        `);
        return;
      }
    }
    container.innerHTML = courses.map(stryMutAct_9fa48("258") ? () => undefined : (stryCov_9fa48("258"), course => stryMutAct_9fa48("259") ? `` : (stryCov_9fa48("259"), `
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
    `))).join(stryMutAct_9fa48("260") ? "Stryker was here!" : (stryCov_9fa48("260"), ''));
  }
}
function openCourseModal(courseId = null) {
  if (stryMutAct_9fa48("261")) {
    {}
  } else {
    stryCov_9fa48("261");
    const modal = document.getElementById(stryMutAct_9fa48("262") ? "" : (stryCov_9fa48("262"), 'courseModal'));
    modal.classList.add(stryMutAct_9fa48("263") ? "" : (stryCov_9fa48("263"), 'active'));
    if (stryMutAct_9fa48("265") ? false : stryMutAct_9fa48("264") ? true : (stryCov_9fa48("264", "265"), courseId)) {
      if (stryMutAct_9fa48("266")) {
        {}
      } else {
        stryCov_9fa48("266");
        const course = dataManager.getCourses().find(stryMutAct_9fa48("267") ? () => undefined : (stryCov_9fa48("267"), c => stryMutAct_9fa48("270") ? c.id !== courseId : stryMutAct_9fa48("269") ? false : stryMutAct_9fa48("268") ? true : (stryCov_9fa48("268", "269", "270"), c.id === courseId)));
        if (stryMutAct_9fa48("272") ? false : stryMutAct_9fa48("271") ? true : (stryCov_9fa48("271", "272"), course)) {
          if (stryMutAct_9fa48("273")) {
            {}
          } else {
            stryCov_9fa48("273");
            document.getElementById(stryMutAct_9fa48("274") ? "" : (stryCov_9fa48("274"), 'courseModalTitle')).textContent = stryMutAct_9fa48("275") ? "" : (stryCov_9fa48("275"), 'Edit Course');
            document.getElementById(stryMutAct_9fa48("276") ? "" : (stryCov_9fa48("276"), 'courseId')).value = course.id;
            document.getElementById(stryMutAct_9fa48("277") ? "" : (stryCov_9fa48("277"), 'courseName')).value = course.name;
            document.getElementById(stryMutAct_9fa48("278") ? "" : (stryCov_9fa48("278"), 'courseCode')).value = course.code;
            document.getElementById(stryMutAct_9fa48("279") ? "" : (stryCov_9fa48("279"), 'courseInstructor')).value = course.instructor;
            document.getElementById(stryMutAct_9fa48("280") ? "" : (stryCov_9fa48("280"), 'courseColor')).value = course.color;
          }
        }
      }
    } else {
      if (stryMutAct_9fa48("281")) {
        {}
      } else {
        stryCov_9fa48("281");
        document.getElementById(stryMutAct_9fa48("282") ? "" : (stryCov_9fa48("282"), 'courseModalTitle')).textContent = stryMutAct_9fa48("283") ? "" : (stryCov_9fa48("283"), 'Add Course');
        document.getElementById(stryMutAct_9fa48("284") ? "" : (stryCov_9fa48("284"), 'courseId')).value = stryMutAct_9fa48("285") ? "Stryker was here!" : (stryCov_9fa48("285"), '');
        document.getElementById(stryMutAct_9fa48("286") ? "" : (stryCov_9fa48("286"), 'courseName')).value = stryMutAct_9fa48("287") ? "Stryker was here!" : (stryCov_9fa48("287"), '');
        document.getElementById(stryMutAct_9fa48("288") ? "" : (stryCov_9fa48("288"), 'courseCode')).value = stryMutAct_9fa48("289") ? "Stryker was here!" : (stryCov_9fa48("289"), '');
        document.getElementById(stryMutAct_9fa48("290") ? "" : (stryCov_9fa48("290"), 'courseInstructor')).value = stryMutAct_9fa48("291") ? "Stryker was here!" : (stryCov_9fa48("291"), '');
        document.getElementById(stryMutAct_9fa48("292") ? "" : (stryCov_9fa48("292"), 'courseColor')).value = stryMutAct_9fa48("293") ? "" : (stryCov_9fa48("293"), '#3498db');
      }
    }
  }
}
function closeCourseModal() {
  if (stryMutAct_9fa48("294")) {
    {}
  } else {
    stryCov_9fa48("294");
    document.getElementById(stryMutAct_9fa48("295") ? "" : (stryCov_9fa48("295"), 'courseModal')).classList.remove(stryMutAct_9fa48("296") ? "" : (stryCov_9fa48("296"), 'active'));
  }
}
function saveCourse() {
  if (stryMutAct_9fa48("297")) {
    {}
  } else {
    stryCov_9fa48("297");
    const id = document.getElementById(stryMutAct_9fa48("298") ? "" : (stryCov_9fa48("298"), 'courseId')).value;
    const course = stryMutAct_9fa48("299") ? {} : (stryCov_9fa48("299"), {
      name: stryMutAct_9fa48("300") ? document.getElementById('courseName').value : (stryCov_9fa48("300"), document.getElementById(stryMutAct_9fa48("301") ? "" : (stryCov_9fa48("301"), 'courseName')).value.trim()),
      code: stryMutAct_9fa48("302") ? document.getElementById('courseCode').value : (stryCov_9fa48("302"), document.getElementById(stryMutAct_9fa48("303") ? "" : (stryCov_9fa48("303"), 'courseCode')).value.trim()),
      instructor: stryMutAct_9fa48("304") ? document.getElementById('courseInstructor').value : (stryCov_9fa48("304"), document.getElementById(stryMutAct_9fa48("305") ? "" : (stryCov_9fa48("305"), 'courseInstructor')).value.trim()),
      color: document.getElementById(stryMutAct_9fa48("306") ? "" : (stryCov_9fa48("306"), 'courseColor')).value
    });
    if (stryMutAct_9fa48("309") ? !course.name && !course.code : stryMutAct_9fa48("308") ? false : stryMutAct_9fa48("307") ? true : (stryCov_9fa48("307", "308", "309"), (stryMutAct_9fa48("310") ? course.name : (stryCov_9fa48("310"), !course.name)) || (stryMutAct_9fa48("311") ? course.code : (stryCov_9fa48("311"), !course.code)))) {
      if (stryMutAct_9fa48("312")) {
        {}
      } else {
        stryCov_9fa48("312");
        showToast(stryMutAct_9fa48("313") ? "" : (stryCov_9fa48("313"), 'Please fill in all required fields'), stryMutAct_9fa48("314") ? "" : (stryCov_9fa48("314"), 'error'));
        return;
      }
    }
    if (stryMutAct_9fa48("316") ? false : stryMutAct_9fa48("315") ? true : (stryCov_9fa48("315", "316"), id)) {
      if (stryMutAct_9fa48("317")) {
        {}
      } else {
        stryCov_9fa48("317");
        dataManager.updateCourse(id, course);
        showToast(stryMutAct_9fa48("318") ? "" : (stryCov_9fa48("318"), 'Course updated successfully'), stryMutAct_9fa48("319") ? "" : (stryCov_9fa48("319"), 'success'));
      }
    } else {
      if (stryMutAct_9fa48("320")) {
        {}
      } else {
        stryCov_9fa48("320");
        dataManager.addCourse(course);
        showToast(stryMutAct_9fa48("321") ? "" : (stryCov_9fa48("321"), 'Course added successfully'), stryMutAct_9fa48("322") ? "" : (stryCov_9fa48("322"), 'success'));
      }
    }
    closeCourseModal();
    renderCourses();
    updateDashboard();
    updateCourseSelects();
  }
}
function editCourse(id) {
  if (stryMutAct_9fa48("323")) {
    {}
  } else {
    stryCov_9fa48("323");
    openCourseModal(id);
  }
}
function deleteCourse(id) {
  if (stryMutAct_9fa48("324")) {
    {}
  } else {
    stryCov_9fa48("324");
    if (stryMutAct_9fa48("326") ? false : stryMutAct_9fa48("325") ? true : (stryCov_9fa48("325", "326"), confirm(stryMutAct_9fa48("327") ? "" : (stryCov_9fa48("327"), 'Are you sure you want to delete this course?')))) {
      if (stryMutAct_9fa48("328")) {
        {}
      } else {
        stryCov_9fa48("328");
        dataManager.deleteCourse(id);
        showToast(stryMutAct_9fa48("329") ? "" : (stryCov_9fa48("329"), 'Course deleted successfully'), stryMutAct_9fa48("330") ? "" : (stryCov_9fa48("330"), 'success'));
        renderCourses();
        updateDashboard();
        updateCourseSelects();
      }
    }
  }
}
function updateCourseSelects() {
  if (stryMutAct_9fa48("331")) {
    {}
  } else {
    stryCov_9fa48("331");
    const courses = dataManager.getCourses();
    const selects = stryMutAct_9fa48("332") ? [] : (stryCov_9fa48("332"), [document.getElementById(stryMutAct_9fa48("333") ? "" : (stryCov_9fa48("333"), 'assignmentCourse')), document.getElementById(stryMutAct_9fa48("334") ? "" : (stryCov_9fa48("334"), 'taskCourse'))]);
    selects.forEach(select => {
      if (stryMutAct_9fa48("335")) {
        {}
      } else {
        stryCov_9fa48("335");
        const currentValue = select.value;
        select.innerHTML = (stryMutAct_9fa48("336") ? "" : (stryCov_9fa48("336"), '<option value="">Select Course</option>')) + courses.map(stryMutAct_9fa48("337") ? () => undefined : (stryCov_9fa48("337"), c => stryMutAct_9fa48("338") ? `` : (stryCov_9fa48("338"), `<option value="${c.id}">${c.name}</option>`))).join(stryMutAct_9fa48("339") ? "Stryker was here!" : (stryCov_9fa48("339"), ''));
        select.value = currentValue;
      }
    });
  }
}

// Assignments
function renderAssignments() {
  if (stryMutAct_9fa48("340")) {
    {}
  } else {
    stryCov_9fa48("340");
    const container = document.getElementById(stryMutAct_9fa48("341") ? "" : (stryCov_9fa48("341"), 'assignmentsList'));
    const assignments = dataManager.getAssignments();
    if (stryMutAct_9fa48("344") ? assignments.length !== 0 : stryMutAct_9fa48("343") ? false : stryMutAct_9fa48("342") ? true : (stryCov_9fa48("342", "343", "344"), assignments.length === 0)) {
      if (stryMutAct_9fa48("345")) {
        {}
      } else {
        stryCov_9fa48("345");
        container.innerHTML = stryMutAct_9fa48("346") ? `` : (stryCov_9fa48("346"), `
            <div class="empty-state">
                <i class="fas fa-tasks"></i>
                <h3>No Assignments Yet</h3>
                <p>Add your first assignment to track your progress!</p>
            </div>
        `);
        return;
      }
    }
    container.innerHTML = assignments.map(assignment => {
      if (stryMutAct_9fa48("347")) {
        {}
      } else {
        stryCov_9fa48("347");
        const course = assignment.courseId ? dataManager.getCourses().find(stryMutAct_9fa48("348") ? () => undefined : (stryCov_9fa48("348"), c => stryMutAct_9fa48("351") ? c.id !== assignment.courseId : stryMutAct_9fa48("350") ? false : stryMutAct_9fa48("349") ? true : (stryCov_9fa48("349", "350", "351"), c.id === assignment.courseId))) : null;
        const dueDate = assignment.dueDate ? new Date(assignment.dueDate).toLocaleString() : stryMutAct_9fa48("352") ? "" : (stryCov_9fa48("352"), 'No due date');
        return stryMutAct_9fa48("353") ? `` : (stryCov_9fa48("353"), `
            <div class="card">
                <div class="card-header">
                    <div>
                        <div class="card-title">${assignment.title}</div>
                        ${course ? stryMutAct_9fa48("354") ? `` : (stryCov_9fa48("354"), `<div class="card-subtitle">${course.name}</div>`) : stryMutAct_9fa48("355") ? "Stryker was here!" : (stryCov_9fa48("355"), '')}
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
                    <p>${stryMutAct_9fa48("358") ? assignment.description && 'No description' : stryMutAct_9fa48("357") ? false : stryMutAct_9fa48("356") ? true : (stryCov_9fa48("356", "357", "358"), assignment.description || (stryMutAct_9fa48("359") ? "" : (stryCov_9fa48("359"), 'No description')))}</p>
                </div>
                <div class="card-footer">
                    <span class="priority-badge ${assignment.priority}">${assignment.priority}</span>
                    <span><i class="fas fa-clock"></i> ${dueDate}</span>
                </div>
            </div>
        `);
      }
    }).join(stryMutAct_9fa48("360") ? "Stryker was here!" : (stryCov_9fa48("360"), ''));
  }
}
function openAssignmentModal(assignmentId = null) {
  if (stryMutAct_9fa48("361")) {
    {}
  } else {
    stryCov_9fa48("361");
    const modal = document.getElementById(stryMutAct_9fa48("362") ? "" : (stryCov_9fa48("362"), 'assignmentModal'));
    modal.classList.add(stryMutAct_9fa48("363") ? "" : (stryCov_9fa48("363"), 'active'));
    updateCourseSelects();
    if (stryMutAct_9fa48("365") ? false : stryMutAct_9fa48("364") ? true : (stryCov_9fa48("364", "365"), assignmentId)) {
      if (stryMutAct_9fa48("366")) {
        {}
      } else {
        stryCov_9fa48("366");
        const assignment = dataManager.getAssignments().find(stryMutAct_9fa48("367") ? () => undefined : (stryCov_9fa48("367"), a => stryMutAct_9fa48("370") ? a.id !== assignmentId : stryMutAct_9fa48("369") ? false : stryMutAct_9fa48("368") ? true : (stryCov_9fa48("368", "369", "370"), a.id === assignmentId)));
        if (stryMutAct_9fa48("372") ? false : stryMutAct_9fa48("371") ? true : (stryCov_9fa48("371", "372"), assignment)) {
          if (stryMutAct_9fa48("373")) {
            {}
          } else {
            stryCov_9fa48("373");
            document.getElementById(stryMutAct_9fa48("374") ? "" : (stryCov_9fa48("374"), 'assignmentModalTitle')).textContent = stryMutAct_9fa48("375") ? "" : (stryCov_9fa48("375"), 'Edit Assignment');
            document.getElementById(stryMutAct_9fa48("376") ? "" : (stryCov_9fa48("376"), 'assignmentId')).value = assignment.id;
            document.getElementById(stryMutAct_9fa48("377") ? "" : (stryCov_9fa48("377"), 'assignmentTitle')).value = assignment.title;
            document.getElementById(stryMutAct_9fa48("378") ? "" : (stryCov_9fa48("378"), 'assignmentCourse')).value = stryMutAct_9fa48("381") ? assignment.courseId && '' : stryMutAct_9fa48("380") ? false : stryMutAct_9fa48("379") ? true : (stryCov_9fa48("379", "380", "381"), assignment.courseId || (stryMutAct_9fa48("382") ? "Stryker was here!" : (stryCov_9fa48("382"), '')));
            document.getElementById(stryMutAct_9fa48("383") ? "" : (stryCov_9fa48("383"), 'assignmentDescription')).value = stryMutAct_9fa48("386") ? assignment.description && '' : stryMutAct_9fa48("385") ? false : stryMutAct_9fa48("384") ? true : (stryCov_9fa48("384", "385", "386"), assignment.description || (stryMutAct_9fa48("387") ? "Stryker was here!" : (stryCov_9fa48("387"), '')));
            document.getElementById(stryMutAct_9fa48("388") ? "" : (stryCov_9fa48("388"), 'assignmentDueDate')).value = assignment.dueDate ? stryMutAct_9fa48("389") ? assignment.dueDate : (stryCov_9fa48("389"), assignment.dueDate.slice(0, 16)) : stryMutAct_9fa48("390") ? "Stryker was here!" : (stryCov_9fa48("390"), '');
            document.getElementById(stryMutAct_9fa48("391") ? "" : (stryCov_9fa48("391"), 'assignmentPriority')).value = assignment.priority;
          }
        }
      }
    } else {
      if (stryMutAct_9fa48("392")) {
        {}
      } else {
        stryCov_9fa48("392");
        document.getElementById(stryMutAct_9fa48("393") ? "" : (stryCov_9fa48("393"), 'assignmentModalTitle')).textContent = stryMutAct_9fa48("394") ? "" : (stryCov_9fa48("394"), 'Add Assignment');
        document.getElementById(stryMutAct_9fa48("395") ? "" : (stryCov_9fa48("395"), 'assignmentId')).value = stryMutAct_9fa48("396") ? "Stryker was here!" : (stryCov_9fa48("396"), '');
        document.getElementById(stryMutAct_9fa48("397") ? "" : (stryCov_9fa48("397"), 'assignmentTitle')).value = stryMutAct_9fa48("398") ? "Stryker was here!" : (stryCov_9fa48("398"), '');
        document.getElementById(stryMutAct_9fa48("399") ? "" : (stryCov_9fa48("399"), 'assignmentCourse')).value = stryMutAct_9fa48("400") ? "Stryker was here!" : (stryCov_9fa48("400"), '');
        document.getElementById(stryMutAct_9fa48("401") ? "" : (stryCov_9fa48("401"), 'assignmentDescription')).value = stryMutAct_9fa48("402") ? "Stryker was here!" : (stryCov_9fa48("402"), '');
        document.getElementById(stryMutAct_9fa48("403") ? "" : (stryCov_9fa48("403"), 'assignmentDueDate')).value = stryMutAct_9fa48("404") ? "Stryker was here!" : (stryCov_9fa48("404"), '');
        document.getElementById(stryMutAct_9fa48("405") ? "" : (stryCov_9fa48("405"), 'assignmentPriority')).value = stryMutAct_9fa48("406") ? "" : (stryCov_9fa48("406"), 'medium');
      }
    }
  }
}
function closeAssignmentModal() {
  if (stryMutAct_9fa48("407")) {
    {}
  } else {
    stryCov_9fa48("407");
    document.getElementById(stryMutAct_9fa48("408") ? "" : (stryCov_9fa48("408"), 'assignmentModal')).classList.remove(stryMutAct_9fa48("409") ? "" : (stryCov_9fa48("409"), 'active'));
  }
}
function saveAssignment() {
  if (stryMutAct_9fa48("410")) {
    {}
  } else {
    stryCov_9fa48("410");
    const id = document.getElementById(stryMutAct_9fa48("411") ? "" : (stryCov_9fa48("411"), 'assignmentId')).value;
    const assignment = stryMutAct_9fa48("412") ? {} : (stryCov_9fa48("412"), {
      title: stryMutAct_9fa48("413") ? document.getElementById('assignmentTitle').value : (stryCov_9fa48("413"), document.getElementById(stryMutAct_9fa48("414") ? "" : (stryCov_9fa48("414"), 'assignmentTitle')).value.trim()),
      courseId: document.getElementById(stryMutAct_9fa48("415") ? "" : (stryCov_9fa48("415"), 'assignmentCourse')).value,
      description: stryMutAct_9fa48("416") ? document.getElementById('assignmentDescription').value : (stryCov_9fa48("416"), document.getElementById(stryMutAct_9fa48("417") ? "" : (stryCov_9fa48("417"), 'assignmentDescription')).value.trim()),
      dueDate: document.getElementById(stryMutAct_9fa48("418") ? "" : (stryCov_9fa48("418"), 'assignmentDueDate')).value,
      priority: document.getElementById(stryMutAct_9fa48("419") ? "" : (stryCov_9fa48("419"), 'assignmentPriority')).value
    });
    if (stryMutAct_9fa48("422") ? false : stryMutAct_9fa48("421") ? true : stryMutAct_9fa48("420") ? assignment.title : (stryCov_9fa48("420", "421", "422"), !assignment.title)) {
      if (stryMutAct_9fa48("423")) {
        {}
      } else {
        stryCov_9fa48("423");
        showToast(stryMutAct_9fa48("424") ? "" : (stryCov_9fa48("424"), 'Please enter assignment title'), stryMutAct_9fa48("425") ? "" : (stryCov_9fa48("425"), 'error'));
        return;
      }
    }
    if (stryMutAct_9fa48("427") ? false : stryMutAct_9fa48("426") ? true : (stryCov_9fa48("426", "427"), id)) {
      if (stryMutAct_9fa48("428")) {
        {}
      } else {
        stryCov_9fa48("428");
        dataManager.updateAssignment(id, assignment);
        showToast(stryMutAct_9fa48("429") ? "" : (stryCov_9fa48("429"), 'Assignment updated successfully'), stryMutAct_9fa48("430") ? "" : (stryCov_9fa48("430"), 'success'));
      }
    } else {
      if (stryMutAct_9fa48("431")) {
        {}
      } else {
        stryCov_9fa48("431");
        dataManager.addAssignment(assignment);
        showToast(stryMutAct_9fa48("432") ? "" : (stryCov_9fa48("432"), 'Assignment added successfully'), stryMutAct_9fa48("433") ? "" : (stryCov_9fa48("433"), 'success'));
      }
    }
    closeAssignmentModal();
    renderAssignments();
    updateDashboard();
  }
}
function editAssignment(id) {
  if (stryMutAct_9fa48("434")) {
    {}
  } else {
    stryCov_9fa48("434");
    openAssignmentModal(id);
  }
}
function deleteAssignment(id) {
  if (stryMutAct_9fa48("435")) {
    {}
  } else {
    stryCov_9fa48("435");
    if (stryMutAct_9fa48("437") ? false : stryMutAct_9fa48("436") ? true : (stryCov_9fa48("436", "437"), confirm(stryMutAct_9fa48("438") ? "" : (stryCov_9fa48("438"), 'Are you sure you want to delete this assignment?')))) {
      if (stryMutAct_9fa48("439")) {
        {}
      } else {
        stryCov_9fa48("439");
        dataManager.deleteAssignment(id);
        showToast(stryMutAct_9fa48("440") ? "" : (stryCov_9fa48("440"), 'Assignment deleted successfully'), stryMutAct_9fa48("441") ? "" : (stryCov_9fa48("441"), 'success'));
        renderAssignments();
        updateDashboard();
      }
    }
  }
}

// Tasks
function renderTasks(filter = stryMutAct_9fa48("442") ? "" : (stryCov_9fa48("442"), 'all')) {
  if (stryMutAct_9fa48("443")) {
    {}
  } else {
    stryCov_9fa48("443");
    const container = document.getElementById(stryMutAct_9fa48("444") ? "" : (stryCov_9fa48("444"), 'tasksList'));
    let tasks = dataManager.getTasks();

    // Apply filter
    if (stryMutAct_9fa48("447") ? filter !== 'completed' : stryMutAct_9fa48("446") ? false : stryMutAct_9fa48("445") ? true : (stryCov_9fa48("445", "446", "447"), filter === (stryMutAct_9fa48("448") ? "" : (stryCov_9fa48("448"), 'completed')))) {
      if (stryMutAct_9fa48("449")) {
        {}
      } else {
        stryCov_9fa48("449");
        tasks = stryMutAct_9fa48("450") ? tasks : (stryCov_9fa48("450"), tasks.filter(stryMutAct_9fa48("451") ? () => undefined : (stryCov_9fa48("451"), t => t.completed)));
      }
    } else if (stryMutAct_9fa48("454") ? (filter === 'high' || filter === 'medium') && filter === 'low' : stryMutAct_9fa48("453") ? false : stryMutAct_9fa48("452") ? true : (stryCov_9fa48("452", "453", "454"), (stryMutAct_9fa48("456") ? filter === 'high' && filter === 'medium' : stryMutAct_9fa48("455") ? false : (stryCov_9fa48("455", "456"), (stryMutAct_9fa48("458") ? filter !== 'high' : stryMutAct_9fa48("457") ? false : (stryCov_9fa48("457", "458"), filter === (stryMutAct_9fa48("459") ? "" : (stryCov_9fa48("459"), 'high')))) || (stryMutAct_9fa48("461") ? filter !== 'medium' : stryMutAct_9fa48("460") ? false : (stryCov_9fa48("460", "461"), filter === (stryMutAct_9fa48("462") ? "" : (stryCov_9fa48("462"), 'medium')))))) || (stryMutAct_9fa48("464") ? filter !== 'low' : stryMutAct_9fa48("463") ? false : (stryCov_9fa48("463", "464"), filter === (stryMutAct_9fa48("465") ? "" : (stryCov_9fa48("465"), 'low')))))) {
      if (stryMutAct_9fa48("466")) {
        {}
      } else {
        stryCov_9fa48("466");
        tasks = stryMutAct_9fa48("467") ? tasks : (stryCov_9fa48("467"), tasks.filter(stryMutAct_9fa48("468") ? () => undefined : (stryCov_9fa48("468"), t => stryMutAct_9fa48("471") ? !t.completed || t.priority === filter : stryMutAct_9fa48("470") ? false : stryMutAct_9fa48("469") ? true : (stryCov_9fa48("469", "470", "471"), (stryMutAct_9fa48("472") ? t.completed : (stryCov_9fa48("472"), !t.completed)) && (stryMutAct_9fa48("474") ? t.priority !== filter : stryMutAct_9fa48("473") ? true : (stryCov_9fa48("473", "474"), t.priority === filter))))));
      }
    } else {
      if (stryMutAct_9fa48("475")) {
        {}
      } else {
        stryCov_9fa48("475");
        tasks = stryMutAct_9fa48("476") ? tasks : (stryCov_9fa48("476"), tasks.filter(stryMutAct_9fa48("477") ? () => undefined : (stryCov_9fa48("477"), t => stryMutAct_9fa48("478") ? t.completed : (stryCov_9fa48("478"), !t.completed))));
      }
    }
    if (stryMutAct_9fa48("481") ? tasks.length !== 0 : stryMutAct_9fa48("480") ? false : stryMutAct_9fa48("479") ? true : (stryCov_9fa48("479", "480", "481"), tasks.length === 0)) {
      if (stryMutAct_9fa48("482")) {
        {}
      } else {
        stryCov_9fa48("482");
        container.innerHTML = stryMutAct_9fa48("483") ? `` : (stryCov_9fa48("483"), `
            <div class="empty-state">
                <i class="fas fa-list-check"></i>
                <h3>No Tasks Found</h3>
                <p>Add a new task or try a different filter!</p>
            </div>
        `);
        return;
      }
    }

    // Sort by priority and due date
    stryMutAct_9fa48("484") ? tasks : (stryCov_9fa48("484"), tasks.sort((a, b) => {
      if (stryMutAct_9fa48("485")) {
        {}
      } else {
        stryCov_9fa48("485");
        const priorityOrder = stryMutAct_9fa48("486") ? {} : (stryCov_9fa48("486"), {
          high: 0,
          medium: 1,
          low: 2
        });
        if (stryMutAct_9fa48("489") ? priorityOrder[a.priority] === priorityOrder[b.priority] : stryMutAct_9fa48("488") ? false : stryMutAct_9fa48("487") ? true : (stryCov_9fa48("487", "488", "489"), priorityOrder[a.priority] !== priorityOrder[b.priority])) {
          if (stryMutAct_9fa48("490")) {
            {}
          } else {
            stryCov_9fa48("490");
            return stryMutAct_9fa48("491") ? priorityOrder[a.priority] + priorityOrder[b.priority] : (stryCov_9fa48("491"), priorityOrder[a.priority] - priorityOrder[b.priority]);
          }
        }
        if (stryMutAct_9fa48("494") ? a.dueDate || b.dueDate : stryMutAct_9fa48("493") ? false : stryMutAct_9fa48("492") ? true : (stryCov_9fa48("492", "493", "494"), a.dueDate && b.dueDate)) {
          if (stryMutAct_9fa48("495")) {
            {}
          } else {
            stryCov_9fa48("495");
            return stryMutAct_9fa48("496") ? new Date(a.dueDate) + new Date(b.dueDate) : (stryCov_9fa48("496"), new Date(a.dueDate) - new Date(b.dueDate));
          }
        }
        return 0;
      }
    }));
    container.innerHTML = tasks.map(task => {
      if (stryMutAct_9fa48("497")) {
        {}
      } else {
        stryCov_9fa48("497");
        const course = task.courseId ? dataManager.getCourses().find(stryMutAct_9fa48("498") ? () => undefined : (stryCov_9fa48("498"), c => stryMutAct_9fa48("501") ? c.id !== task.courseId : stryMutAct_9fa48("500") ? false : stryMutAct_9fa48("499") ? true : (stryCov_9fa48("499", "500", "501"), c.id === task.courseId))) : null;
        const dueDate = task.dueDate ? new Date(task.dueDate).toLocaleString() : stryMutAct_9fa48("502") ? "Stryker was here!" : (stryCov_9fa48("502"), '');
        return stryMutAct_9fa48("503") ? `` : (stryCov_9fa48("503"), `
            <div class="task-item ${task.completed ? stryMutAct_9fa48("504") ? "" : (stryCov_9fa48("504"), 'completed') : stryMutAct_9fa48("505") ? "Stryker was here!" : (stryCov_9fa48("505"), '')}">
                <input type="checkbox" class="task-checkbox" 
                    ${task.completed ? stryMutAct_9fa48("506") ? "" : (stryCov_9fa48("506"), 'checked') : stryMutAct_9fa48("507") ? "Stryker was here!" : (stryCov_9fa48("507"), '')} 
                    onchange="toggleTask('${task.id}')">
                <div class="task-content">
                    <div class="task-title">${task.title}</div>
                    <div class="task-meta">
                        ${task.description ? stryMutAct_9fa48("508") ? `` : (stryCov_9fa48("508"), `<span><i class="fas fa-align-left"></i> ${task.description}</span>`) : stryMutAct_9fa48("509") ? "Stryker was here!" : (stryCov_9fa48("509"), '')}
                        ${course ? stryMutAct_9fa48("510") ? `` : (stryCov_9fa48("510"), `<span><i class="fas fa-book"></i> ${course.name}</span>`) : stryMutAct_9fa48("511") ? "Stryker was here!" : (stryCov_9fa48("511"), '')}
                        ${dueDate ? stryMutAct_9fa48("512") ? `` : (stryCov_9fa48("512"), `<span><i class="fas fa-clock"></i> ${dueDate}</span>`) : stryMutAct_9fa48("513") ? "Stryker was here!" : (stryCov_9fa48("513"), '')}
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
        `);
      }
    }).join(stryMutAct_9fa48("514") ? "Stryker was here!" : (stryCov_9fa48("514"), ''));
  }
}
function filterTasks(filter) {
  if (stryMutAct_9fa48("515")) {
    {}
  } else {
    stryCov_9fa48("515");
    // Update active filter button
    document.querySelectorAll(stryMutAct_9fa48("516") ? "" : (stryCov_9fa48("516"), '.filter-btn')).forEach(btn => {
      if (stryMutAct_9fa48("517")) {
        {}
      } else {
        stryCov_9fa48("517");
        btn.classList.remove(stryMutAct_9fa48("518") ? "" : (stryCov_9fa48("518"), 'active'));
      }
    });
    event.target.classList.add(stryMutAct_9fa48("519") ? "" : (stryCov_9fa48("519"), 'active'));
    renderTasks(filter);
  }
}
function openTaskModal(taskId = null) {
  if (stryMutAct_9fa48("520")) {
    {}
  } else {
    stryCov_9fa48("520");
    const modal = document.getElementById(stryMutAct_9fa48("521") ? "" : (stryCov_9fa48("521"), 'taskModal'));
    modal.classList.add(stryMutAct_9fa48("522") ? "" : (stryCov_9fa48("522"), 'active'));
    updateCourseSelects();
    if (stryMutAct_9fa48("524") ? false : stryMutAct_9fa48("523") ? true : (stryCov_9fa48("523", "524"), taskId)) {
      if (stryMutAct_9fa48("525")) {
        {}
      } else {
        stryCov_9fa48("525");
        const task = dataManager.getTasks().find(stryMutAct_9fa48("526") ? () => undefined : (stryCov_9fa48("526"), t => stryMutAct_9fa48("529") ? t.id !== taskId : stryMutAct_9fa48("528") ? false : stryMutAct_9fa48("527") ? true : (stryCov_9fa48("527", "528", "529"), t.id === taskId)));
        if (stryMutAct_9fa48("531") ? false : stryMutAct_9fa48("530") ? true : (stryCov_9fa48("530", "531"), task)) {
          if (stryMutAct_9fa48("532")) {
            {}
          } else {
            stryCov_9fa48("532");
            document.getElementById(stryMutAct_9fa48("533") ? "" : (stryCov_9fa48("533"), 'taskModalTitle')).textContent = stryMutAct_9fa48("534") ? "" : (stryCov_9fa48("534"), 'Edit Task');
            document.getElementById(stryMutAct_9fa48("535") ? "" : (stryCov_9fa48("535"), 'taskId')).value = task.id;
            document.getElementById(stryMutAct_9fa48("536") ? "" : (stryCov_9fa48("536"), 'taskTitle')).value = task.title;
            document.getElementById(stryMutAct_9fa48("537") ? "" : (stryCov_9fa48("537"), 'taskDescription')).value = stryMutAct_9fa48("540") ? task.description && '' : stryMutAct_9fa48("539") ? false : stryMutAct_9fa48("538") ? true : (stryCov_9fa48("538", "539", "540"), task.description || (stryMutAct_9fa48("541") ? "Stryker was here!" : (stryCov_9fa48("541"), '')));
            document.getElementById(stryMutAct_9fa48("542") ? "" : (stryCov_9fa48("542"), 'taskDueDate')).value = task.dueDate ? stryMutAct_9fa48("543") ? task.dueDate : (stryCov_9fa48("543"), task.dueDate.slice(0, 16)) : stryMutAct_9fa48("544") ? "Stryker was here!" : (stryCov_9fa48("544"), '');
            document.getElementById(stryMutAct_9fa48("545") ? "" : (stryCov_9fa48("545"), 'taskPriority')).value = task.priority;
            document.getElementById(stryMutAct_9fa48("546") ? "" : (stryCov_9fa48("546"), 'taskCourse')).value = stryMutAct_9fa48("549") ? task.courseId && '' : stryMutAct_9fa48("548") ? false : stryMutAct_9fa48("547") ? true : (stryCov_9fa48("547", "548", "549"), task.courseId || (stryMutAct_9fa48("550") ? "Stryker was here!" : (stryCov_9fa48("550"), '')));
          }
        }
      }
    } else {
      if (stryMutAct_9fa48("551")) {
        {}
      } else {
        stryCov_9fa48("551");
        document.getElementById(stryMutAct_9fa48("552") ? "" : (stryCov_9fa48("552"), 'taskModalTitle')).textContent = stryMutAct_9fa48("553") ? "" : (stryCov_9fa48("553"), 'Add Task');
        document.getElementById(stryMutAct_9fa48("554") ? "" : (stryCov_9fa48("554"), 'taskId')).value = stryMutAct_9fa48("555") ? "Stryker was here!" : (stryCov_9fa48("555"), '');
        document.getElementById(stryMutAct_9fa48("556") ? "" : (stryCov_9fa48("556"), 'taskTitle')).value = stryMutAct_9fa48("557") ? "Stryker was here!" : (stryCov_9fa48("557"), '');
        document.getElementById(stryMutAct_9fa48("558") ? "" : (stryCov_9fa48("558"), 'taskDescription')).value = stryMutAct_9fa48("559") ? "Stryker was here!" : (stryCov_9fa48("559"), '');
        document.getElementById(stryMutAct_9fa48("560") ? "" : (stryCov_9fa48("560"), 'taskDueDate')).value = stryMutAct_9fa48("561") ? "Stryker was here!" : (stryCov_9fa48("561"), '');
        document.getElementById(stryMutAct_9fa48("562") ? "" : (stryCov_9fa48("562"), 'taskPriority')).value = stryMutAct_9fa48("563") ? "" : (stryCov_9fa48("563"), 'medium');
        document.getElementById(stryMutAct_9fa48("564") ? "" : (stryCov_9fa48("564"), 'taskCourse')).value = stryMutAct_9fa48("565") ? "Stryker was here!" : (stryCov_9fa48("565"), '');
      }
    }
  }
}
function closeTaskModal() {
  if (stryMutAct_9fa48("566")) {
    {}
  } else {
    stryCov_9fa48("566");
    document.getElementById(stryMutAct_9fa48("567") ? "" : (stryCov_9fa48("567"), 'taskModal')).classList.remove(stryMutAct_9fa48("568") ? "" : (stryCov_9fa48("568"), 'active'));
  }
}
function saveTask() {
  if (stryMutAct_9fa48("569")) {
    {}
  } else {
    stryCov_9fa48("569");
    const id = document.getElementById(stryMutAct_9fa48("570") ? "" : (stryCov_9fa48("570"), 'taskId')).value;
    const task = stryMutAct_9fa48("571") ? {} : (stryCov_9fa48("571"), {
      title: stryMutAct_9fa48("572") ? document.getElementById('taskTitle').value : (stryCov_9fa48("572"), document.getElementById(stryMutAct_9fa48("573") ? "" : (stryCov_9fa48("573"), 'taskTitle')).value.trim()),
      description: stryMutAct_9fa48("574") ? document.getElementById('taskDescription').value : (stryCov_9fa48("574"), document.getElementById(stryMutAct_9fa48("575") ? "" : (stryCov_9fa48("575"), 'taskDescription')).value.trim()),
      dueDate: document.getElementById(stryMutAct_9fa48("576") ? "" : (stryCov_9fa48("576"), 'taskDueDate')).value,
      priority: document.getElementById(stryMutAct_9fa48("577") ? "" : (stryCov_9fa48("577"), 'taskPriority')).value,
      courseId: document.getElementById(stryMutAct_9fa48("578") ? "" : (stryCov_9fa48("578"), 'taskCourse')).value
    });
    if (stryMutAct_9fa48("581") ? false : stryMutAct_9fa48("580") ? true : stryMutAct_9fa48("579") ? task.title : (stryCov_9fa48("579", "580", "581"), !task.title)) {
      if (stryMutAct_9fa48("582")) {
        {}
      } else {
        stryCov_9fa48("582");
        showToast(stryMutAct_9fa48("583") ? "" : (stryCov_9fa48("583"), 'Please enter task title'), stryMutAct_9fa48("584") ? "" : (stryCov_9fa48("584"), 'error'));
        return;
      }
    }
    if (stryMutAct_9fa48("586") ? false : stryMutAct_9fa48("585") ? true : (stryCov_9fa48("585", "586"), id)) {
      if (stryMutAct_9fa48("587")) {
        {}
      } else {
        stryCov_9fa48("587");
        dataManager.updateTask(id, task);
        showToast(stryMutAct_9fa48("588") ? "" : (stryCov_9fa48("588"), 'Task updated successfully'), stryMutAct_9fa48("589") ? "" : (stryCov_9fa48("589"), 'success'));
      }
    } else {
      if (stryMutAct_9fa48("590")) {
        {}
      } else {
        stryCov_9fa48("590");
        dataManager.addTask(task);
        showToast(stryMutAct_9fa48("591") ? "" : (stryCov_9fa48("591"), 'Task added successfully'), stryMutAct_9fa48("592") ? "" : (stryCov_9fa48("592"), 'success'));
      }
    }
    closeTaskModal();
    renderTasks();
    updateDashboard();
  }
}
function editTask(id) {
  if (stryMutAct_9fa48("593")) {
    {}
  } else {
    stryCov_9fa48("593");
    openTaskModal(id);
  }
}
function deleteTask(id) {
  if (stryMutAct_9fa48("594")) {
    {}
  } else {
    stryCov_9fa48("594");
    if (stryMutAct_9fa48("596") ? false : stryMutAct_9fa48("595") ? true : (stryCov_9fa48("595", "596"), confirm(stryMutAct_9fa48("597") ? "" : (stryCov_9fa48("597"), 'Are you sure you want to delete this task?')))) {
      if (stryMutAct_9fa48("598")) {
        {}
      } else {
        stryCov_9fa48("598");
        dataManager.deleteTask(id);
        showToast(stryMutAct_9fa48("599") ? "" : (stryCov_9fa48("599"), 'Task deleted successfully'), stryMutAct_9fa48("600") ? "" : (stryCov_9fa48("600"), 'success'));
        renderTasks();
        updateDashboard();
      }
    }
  }
}
function toggleTask(id) {
  if (stryMutAct_9fa48("601")) {
    {}
  } else {
    stryCov_9fa48("601");
    dataManager.toggleTaskCompletion(id);
    renderTasks();
    updateDashboard();
  }
}

// Reminders
function checkReminders() {
  if (stryMutAct_9fa48("602")) {
    {}
  } else {
    stryCov_9fa48("602");
    const allItems = stryMutAct_9fa48("603") ? [] : (stryCov_9fa48("603"), [...dataManager.getAssignments().map(stryMutAct_9fa48("604") ? () => undefined : (stryCov_9fa48("604"), a => stryMutAct_9fa48("605") ? {} : (stryCov_9fa48("605"), {
      ...a,
      type: stryMutAct_9fa48("606") ? "" : (stryCov_9fa48("606"), 'Assignment')
    }))), ...dataManager.getTasks().map(stryMutAct_9fa48("607") ? () => undefined : (stryCov_9fa48("607"), t => stryMutAct_9fa48("608") ? {} : (stryCov_9fa48("608"), {
      ...t,
      type: stryMutAct_9fa48("609") ? "" : (stryCov_9fa48("609"), 'Task')
    })))]);
    const now = new Date();
    const urgent = stryMutAct_9fa48("610") ? ["Stryker was here"] : (stryCov_9fa48("610"), []);
    const upcoming = stryMutAct_9fa48("611") ? ["Stryker was here"] : (stryCov_9fa48("611"), []);
    allItems.forEach(item => {
      if (stryMutAct_9fa48("612")) {
        {}
      } else {
        stryCov_9fa48("612");
        if (stryMutAct_9fa48("615") ? item.completed && !item.dueDate : stryMutAct_9fa48("614") ? false : stryMutAct_9fa48("613") ? true : (stryCov_9fa48("613", "614", "615"), item.completed || (stryMutAct_9fa48("616") ? item.dueDate : (stryCov_9fa48("616"), !item.dueDate)))) return;
        const dueDate = new Date(item.dueDate);
        const diffHours = Math.floor(stryMutAct_9fa48("617") ? (dueDate - now) * (1000 * 60 * 60) : (stryCov_9fa48("617"), (stryMutAct_9fa48("618") ? dueDate + now : (stryCov_9fa48("618"), dueDate - now)) / (stryMutAct_9fa48("619") ? 1000 * 60 / 60 : (stryCov_9fa48("619"), (stryMutAct_9fa48("620") ? 1000 / 60 : (stryCov_9fa48("620"), 1000 * 60)) * 60))));
        if (stryMutAct_9fa48("624") ? diffHours >= 0 : stryMutAct_9fa48("623") ? diffHours <= 0 : stryMutAct_9fa48("622") ? false : stryMutAct_9fa48("621") ? true : (stryCov_9fa48("621", "622", "623", "624"), diffHours < 0)) {
          if (stryMutAct_9fa48("625")) {
            {}
          } else {
            stryCov_9fa48("625");
            urgent.push(stryMutAct_9fa48("626") ? {} : (stryCov_9fa48("626"), {
              ...item,
              message: stryMutAct_9fa48("627") ? "" : (stryCov_9fa48("627"), 'OVERDUE!'),
              hoursLeft: diffHours
            }));
          }
        } else if (stryMutAct_9fa48("631") ? diffHours > 24 : stryMutAct_9fa48("630") ? diffHours < 24 : stryMutAct_9fa48("629") ? false : stryMutAct_9fa48("628") ? true : (stryCov_9fa48("628", "629", "630", "631"), diffHours <= 24)) {
          if (stryMutAct_9fa48("632")) {
            {}
          } else {
            stryCov_9fa48("632");
            urgent.push(stryMutAct_9fa48("633") ? {} : (stryCov_9fa48("633"), {
              ...item,
              message: stryMutAct_9fa48("634") ? `` : (stryCov_9fa48("634"), `${diffHours} hours left`),
              hoursLeft: diffHours
            }));
          }
        } else if (stryMutAct_9fa48("638") ? diffHours > 72 : stryMutAct_9fa48("637") ? diffHours < 72 : stryMutAct_9fa48("636") ? false : stryMutAct_9fa48("635") ? true : (stryCov_9fa48("635", "636", "637", "638"), diffHours <= 72)) {
          if (stryMutAct_9fa48("639")) {
            {}
          } else {
            stryCov_9fa48("639");
            const daysLeft = Math.floor(stryMutAct_9fa48("640") ? diffHours * 24 : (stryCov_9fa48("640"), diffHours / 24));
            upcoming.push(stryMutAct_9fa48("641") ? {} : (stryCov_9fa48("641"), {
              ...item,
              message: stryMutAct_9fa48("642") ? `` : (stryCov_9fa48("642"), `${daysLeft} days left`),
              hoursLeft: diffHours
            }));
          }
        }
      }
    });
    if (stryMutAct_9fa48("646") ? urgent.length <= 0 : stryMutAct_9fa48("645") ? urgent.length >= 0 : stryMutAct_9fa48("644") ? false : stryMutAct_9fa48("643") ? true : (stryCov_9fa48("643", "644", "645", "646"), urgent.length > 0)) {
      if (stryMutAct_9fa48("647")) {
        {}
      } else {
        stryCov_9fa48("647");
        showToast(stryMutAct_9fa48("648") ? `` : (stryCov_9fa48("648"), `⚠️ You have ${urgent.length} urgent deadline(s)!`), stryMutAct_9fa48("649") ? "" : (stryCov_9fa48("649"), 'warning'));
      }
    }
    displayReminders();
  }
}
function displayReminders() {
  if (stryMutAct_9fa48("650")) {
    {}
  } else {
    stryCov_9fa48("650");
    const container = document.getElementById(stryMutAct_9fa48("651") ? "" : (stryCov_9fa48("651"), 'remindersList'));
    const allItems = stryMutAct_9fa48("652") ? [] : (stryCov_9fa48("652"), [...dataManager.getAssignments().map(stryMutAct_9fa48("653") ? () => undefined : (stryCov_9fa48("653"), a => stryMutAct_9fa48("654") ? {} : (stryCov_9fa48("654"), {
      ...a,
      type: stryMutAct_9fa48("655") ? "" : (stryCov_9fa48("655"), 'Assignment')
    }))), ...dataManager.getTasks().map(stryMutAct_9fa48("656") ? () => undefined : (stryCov_9fa48("656"), t => stryMutAct_9fa48("657") ? {} : (stryCov_9fa48("657"), {
      ...t,
      type: stryMutAct_9fa48("658") ? "" : (stryCov_9fa48("658"), 'Task')
    })))]);
    const now = new Date();
    const reminders = stryMutAct_9fa48("659") ? ["Stryker was here"] : (stryCov_9fa48("659"), []);
    allItems.forEach(item => {
      if (stryMutAct_9fa48("660")) {
        {}
      } else {
        stryCov_9fa48("660");
        if (stryMutAct_9fa48("663") ? item.completed && !item.dueDate : stryMutAct_9fa48("662") ? false : stryMutAct_9fa48("661") ? true : (stryCov_9fa48("661", "662", "663"), item.completed || (stryMutAct_9fa48("664") ? item.dueDate : (stryCov_9fa48("664"), !item.dueDate)))) return;
        const dueDate = new Date(item.dueDate);
        const diffHours = Math.floor(stryMutAct_9fa48("665") ? (dueDate - now) * (1000 * 60 * 60) : (stryCov_9fa48("665"), (stryMutAct_9fa48("666") ? dueDate + now : (stryCov_9fa48("666"), dueDate - now)) / (stryMutAct_9fa48("667") ? 1000 * 60 / 60 : (stryCov_9fa48("667"), (stryMutAct_9fa48("668") ? 1000 / 60 : (stryCov_9fa48("668"), 1000 * 60)) * 60))));
        if (stryMutAct_9fa48("672") ? diffHours > 72 : stryMutAct_9fa48("671") ? diffHours < 72 : stryMutAct_9fa48("670") ? false : stryMutAct_9fa48("669") ? true : (stryCov_9fa48("669", "670", "671", "672"), diffHours <= 72)) {
          if (stryMutAct_9fa48("673")) {
            {}
          } else {
            stryCov_9fa48("673");
            let message, isUrgent;
            if (stryMutAct_9fa48("677") ? diffHours >= 0 : stryMutAct_9fa48("676") ? diffHours <= 0 : stryMutAct_9fa48("675") ? false : stryMutAct_9fa48("674") ? true : (stryCov_9fa48("674", "675", "676", "677"), diffHours < 0)) {
              if (stryMutAct_9fa48("678")) {
                {}
              } else {
                stryCov_9fa48("678");
                message = stryMutAct_9fa48("679") ? "" : (stryCov_9fa48("679"), 'OVERDUE');
                isUrgent = stryMutAct_9fa48("680") ? false : (stryCov_9fa48("680"), true);
              }
            } else if (stryMutAct_9fa48("684") ? diffHours > 24 : stryMutAct_9fa48("683") ? diffHours < 24 : stryMutAct_9fa48("682") ? false : stryMutAct_9fa48("681") ? true : (stryCov_9fa48("681", "682", "683", "684"), diffHours <= 24)) {
              if (stryMutAct_9fa48("685")) {
                {}
              } else {
                stryCov_9fa48("685");
                message = stryMutAct_9fa48("686") ? `` : (stryCov_9fa48("686"), `${diffHours} hours left`);
                isUrgent = stryMutAct_9fa48("687") ? false : (stryCov_9fa48("687"), true);
              }
            } else {
              if (stryMutAct_9fa48("688")) {
                {}
              } else {
                stryCov_9fa48("688");
                const daysLeft = Math.floor(stryMutAct_9fa48("689") ? diffHours * 24 : (stryCov_9fa48("689"), diffHours / 24));
                message = stryMutAct_9fa48("690") ? `` : (stryCov_9fa48("690"), `${daysLeft} days left`);
                isUrgent = stryMutAct_9fa48("691") ? true : (stryCov_9fa48("691"), false);
              }
            }
            reminders.push(stryMutAct_9fa48("692") ? {} : (stryCov_9fa48("692"), {
              ...item,
              message,
              isUrgent,
              hoursLeft: diffHours
            }));
          }
        }
      }
    });
    stryMutAct_9fa48("693") ? reminders : (stryCov_9fa48("693"), reminders.sort(stryMutAct_9fa48("694") ? () => undefined : (stryCov_9fa48("694"), (a, b) => stryMutAct_9fa48("695") ? a.hoursLeft + b.hoursLeft : (stryCov_9fa48("695"), a.hoursLeft - b.hoursLeft))));
    if (stryMutAct_9fa48("698") ? reminders.length !== 0 : stryMutAct_9fa48("697") ? false : stryMutAct_9fa48("696") ? true : (stryCov_9fa48("696", "697", "698"), reminders.length === 0)) {
      if (stryMutAct_9fa48("699")) {
        {}
      } else {
        stryCov_9fa48("699");
        container.innerHTML = stryMutAct_9fa48("700") ? `` : (stryCov_9fa48("700"), `
            <div class="empty-state">
                <i class="fas fa-bell"></i>
                <h3>No Upcoming Deadlines</h3>
                <p>You're all caught up! 🎉</p>
            </div>
        `);
        return;
      }
    }
    container.innerHTML = reminders.map(stryMutAct_9fa48("701") ? () => undefined : (stryCov_9fa48("701"), reminder => stryMutAct_9fa48("702") ? `` : (stryCov_9fa48("702"), `
        <div class="reminder-item ${reminder.isUrgent ? stryMutAct_9fa48("703") ? "" : (stryCov_9fa48("703"), 'urgent') : stryMutAct_9fa48("704") ? "Stryker was here!" : (stryCov_9fa48("704"), '')}">
            <div class="reminder-icon">
                <i class="fas fa-${reminder.isUrgent ? stryMutAct_9fa48("705") ? "" : (stryCov_9fa48("705"), 'exclamation-triangle') : stryMutAct_9fa48("706") ? "" : (stryCov_9fa48("706"), 'bell')}"></i>
            </div>
            <div class="reminder-content">
                <div class="reminder-title">${reminder.type}: ${reminder.title}</div>
                <div class="reminder-time">${reminder.message}</div>
            </div>
            <span class="priority-badge ${reminder.priority}">${reminder.priority}</span>
        </div>
    `))).join(stryMutAct_9fa48("707") ? "Stryker was here!" : (stryCov_9fa48("707"), ''));
  }
}

// Close modals when clicking outside
window.onclick = function (event) {
  if (stryMutAct_9fa48("708")) {
    {}
  } else {
    stryCov_9fa48("708");
    if (stryMutAct_9fa48("710") ? false : stryMutAct_9fa48("709") ? true : (stryCov_9fa48("709", "710"), event.target.classList.contains(stryMutAct_9fa48("711") ? "" : (stryCov_9fa48("711"), 'modal')))) {
      if (stryMutAct_9fa48("712")) {
        {}
      } else {
        stryCov_9fa48("712");
        event.target.classList.remove(stryMutAct_9fa48("713") ? "" : (stryCov_9fa48("713"), 'active'));
      }
    }
  }
};

// For testing purposes
if (stryMutAct_9fa48("716") ? typeof module !== 'undefined' || module.exports : stryMutAct_9fa48("715") ? false : stryMutAct_9fa48("714") ? true : (stryCov_9fa48("714", "715", "716"), (stryMutAct_9fa48("718") ? typeof module === 'undefined' : stryMutAct_9fa48("717") ? true : (stryCov_9fa48("717", "718"), typeof module !== (stryMutAct_9fa48("719") ? "" : (stryCov_9fa48("719"), 'undefined')))) && module.exports)) {
  if (stryMutAct_9fa48("720")) {
    {}
  } else {
    stryCov_9fa48("720");
    module.exports = DataManager;
  }
}