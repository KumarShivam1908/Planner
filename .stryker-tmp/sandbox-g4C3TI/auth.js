// @ts-nocheck
// Authentication Module
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
class Auth {
  constructor() {
    if (stryMutAct_9fa48("721")) {
      {}
    } else {
      stryCov_9fa48("721");
      this.users = stryMutAct_9fa48("724") ? JSON.parse(localStorage.getItem('users')) && [] : stryMutAct_9fa48("723") ? false : stryMutAct_9fa48("722") ? true : (stryCov_9fa48("722", "723", "724"), JSON.parse(localStorage.getItem(stryMutAct_9fa48("725") ? "" : (stryCov_9fa48("725"), 'users'))) || (stryMutAct_9fa48("726") ? ["Stryker was here"] : (stryCov_9fa48("726"), [])));
      this.currentUser = stryMutAct_9fa48("729") ? JSON.parse(localStorage.getItem('currentUser')) && null : stryMutAct_9fa48("728") ? false : stryMutAct_9fa48("727") ? true : (stryCov_9fa48("727", "728", "729"), JSON.parse(localStorage.getItem(stryMutAct_9fa48("730") ? "" : (stryCov_9fa48("730"), 'currentUser'))) || null);
    }
  }
  register(username, email, password, confirmPassword) {
    if (stryMutAct_9fa48("731")) {
      {}
    } else {
      stryCov_9fa48("731");
      // Validation
      if (stryMutAct_9fa48("734") ? (!username || !email || !password) && !confirmPassword : stryMutAct_9fa48("733") ? false : stryMutAct_9fa48("732") ? true : (stryCov_9fa48("732", "733", "734"), (stryMutAct_9fa48("736") ? (!username || !email) && !password : stryMutAct_9fa48("735") ? false : (stryCov_9fa48("735", "736"), (stryMutAct_9fa48("738") ? !username && !email : stryMutAct_9fa48("737") ? false : (stryCov_9fa48("737", "738"), (stryMutAct_9fa48("739") ? username : (stryCov_9fa48("739"), !username)) || (stryMutAct_9fa48("740") ? email : (stryCov_9fa48("740"), !email)))) || (stryMutAct_9fa48("741") ? password : (stryCov_9fa48("741"), !password)))) || (stryMutAct_9fa48("742") ? confirmPassword : (stryCov_9fa48("742"), !confirmPassword)))) {
        if (stryMutAct_9fa48("743")) {
          {}
        } else {
          stryCov_9fa48("743");
          showToast(stryMutAct_9fa48("744") ? "" : (stryCov_9fa48("744"), 'Please fill in all fields'), stryMutAct_9fa48("745") ? "" : (stryCov_9fa48("745"), 'error'));
          return stryMutAct_9fa48("746") ? true : (stryCov_9fa48("746"), false);
        }
      }
      if (stryMutAct_9fa48("750") ? username.length >= 3 : stryMutAct_9fa48("749") ? username.length <= 3 : stryMutAct_9fa48("748") ? false : stryMutAct_9fa48("747") ? true : (stryCov_9fa48("747", "748", "749", "750"), username.length < 3)) {
        if (stryMutAct_9fa48("751")) {
          {}
        } else {
          stryCov_9fa48("751");
          showToast(stryMutAct_9fa48("752") ? "" : (stryCov_9fa48("752"), 'Username must be at least 3 characters'), stryMutAct_9fa48("753") ? "" : (stryCov_9fa48("753"), 'error'));
          return stryMutAct_9fa48("754") ? true : (stryCov_9fa48("754"), false);
        }
      }
      if (stryMutAct_9fa48("757") ? false : stryMutAct_9fa48("756") ? true : stryMutAct_9fa48("755") ? this.validateEmail(email) : (stryCov_9fa48("755", "756", "757"), !this.validateEmail(email))) {
        if (stryMutAct_9fa48("758")) {
          {}
        } else {
          stryCov_9fa48("758");
          showToast(stryMutAct_9fa48("759") ? "" : (stryCov_9fa48("759"), 'Please enter a valid email'), stryMutAct_9fa48("760") ? "" : (stryCov_9fa48("760"), 'error'));
          return stryMutAct_9fa48("761") ? true : (stryCov_9fa48("761"), false);
        }
      }
      if (stryMutAct_9fa48("765") ? password.length >= 6 : stryMutAct_9fa48("764") ? password.length <= 6 : stryMutAct_9fa48("763") ? false : stryMutAct_9fa48("762") ? true : (stryCov_9fa48("762", "763", "764", "765"), password.length < 6)) {
        if (stryMutAct_9fa48("766")) {
          {}
        } else {
          stryCov_9fa48("766");
          showToast(stryMutAct_9fa48("767") ? "" : (stryCov_9fa48("767"), 'Password must be at least 6 characters'), stryMutAct_9fa48("768") ? "" : (stryCov_9fa48("768"), 'error'));
          return stryMutAct_9fa48("769") ? true : (stryCov_9fa48("769"), false);
        }
      }
      if (stryMutAct_9fa48("772") ? password === confirmPassword : stryMutAct_9fa48("771") ? false : stryMutAct_9fa48("770") ? true : (stryCov_9fa48("770", "771", "772"), password !== confirmPassword)) {
        if (stryMutAct_9fa48("773")) {
          {}
        } else {
          stryCov_9fa48("773");
          showToast(stryMutAct_9fa48("774") ? "" : (stryCov_9fa48("774"), 'Passwords do not match'), stryMutAct_9fa48("775") ? "" : (stryCov_9fa48("775"), 'error'));
          return stryMutAct_9fa48("776") ? true : (stryCov_9fa48("776"), false);
        }
      }

      // Check if user already exists
      if (stryMutAct_9fa48("778") ? false : stryMutAct_9fa48("777") ? true : (stryCov_9fa48("777", "778"), this.users.find(stryMutAct_9fa48("779") ? () => undefined : (stryCov_9fa48("779"), u => stryMutAct_9fa48("782") ? u.username !== username : stryMutAct_9fa48("781") ? false : stryMutAct_9fa48("780") ? true : (stryCov_9fa48("780", "781", "782"), u.username === username))))) {
        if (stryMutAct_9fa48("783")) {
          {}
        } else {
          stryCov_9fa48("783");
          showToast(stryMutAct_9fa48("784") ? "" : (stryCov_9fa48("784"), 'Username already exists'), stryMutAct_9fa48("785") ? "" : (stryCov_9fa48("785"), 'error'));
          return stryMutAct_9fa48("786") ? true : (stryCov_9fa48("786"), false);
        }
      }
      if (stryMutAct_9fa48("788") ? false : stryMutAct_9fa48("787") ? true : (stryCov_9fa48("787", "788"), this.users.find(stryMutAct_9fa48("789") ? () => undefined : (stryCov_9fa48("789"), u => stryMutAct_9fa48("792") ? u.email !== email : stryMutAct_9fa48("791") ? false : stryMutAct_9fa48("790") ? true : (stryCov_9fa48("790", "791", "792"), u.email === email))))) {
        if (stryMutAct_9fa48("793")) {
          {}
        } else {
          stryCov_9fa48("793");
          showToast(stryMutAct_9fa48("794") ? "" : (stryCov_9fa48("794"), 'Email already registered'), stryMutAct_9fa48("795") ? "" : (stryCov_9fa48("795"), 'error'));
          return stryMutAct_9fa48("796") ? true : (stryCov_9fa48("796"), false);
        }
      }

      // Hash password (simple base64 encoding for demo)
      const hashedPassword = btoa(password);

      // Create new user
      const newUser = stryMutAct_9fa48("797") ? {} : (stryCov_9fa48("797"), {
        id: Date.now().toString(),
        username,
        email,
        password: hashedPassword,
        createdAt: new Date().toISOString()
      });
      this.users.push(newUser);
      localStorage.setItem(stryMutAct_9fa48("798") ? "" : (stryCov_9fa48("798"), 'users'), JSON.stringify(this.users));
      showToast(stryMutAct_9fa48("799") ? "" : (stryCov_9fa48("799"), 'Registration successful! Please login'), stryMutAct_9fa48("800") ? "" : (stryCov_9fa48("800"), 'success'));
      showLogin();
      return stryMutAct_9fa48("801") ? false : (stryCov_9fa48("801"), true);
    }
  }
  login(username, password) {
    if (stryMutAct_9fa48("802")) {
      {}
    } else {
      stryCov_9fa48("802");
      if (stryMutAct_9fa48("805") ? !username && !password : stryMutAct_9fa48("804") ? false : stryMutAct_9fa48("803") ? true : (stryCov_9fa48("803", "804", "805"), (stryMutAct_9fa48("806") ? username : (stryCov_9fa48("806"), !username)) || (stryMutAct_9fa48("807") ? password : (stryCov_9fa48("807"), !password)))) {
        if (stryMutAct_9fa48("808")) {
          {}
        } else {
          stryCov_9fa48("808");
          showToast(stryMutAct_9fa48("809") ? "" : (stryCov_9fa48("809"), 'Please fill in all fields'), stryMutAct_9fa48("810") ? "" : (stryCov_9fa48("810"), 'error'));
          return stryMutAct_9fa48("811") ? true : (stryCov_9fa48("811"), false);
        }
      }
      const user = this.users.find(stryMutAct_9fa48("812") ? () => undefined : (stryCov_9fa48("812"), u => stryMutAct_9fa48("815") ? u.username !== username : stryMutAct_9fa48("814") ? false : stryMutAct_9fa48("813") ? true : (stryCov_9fa48("813", "814", "815"), u.username === username)));
      if (stryMutAct_9fa48("818") ? false : stryMutAct_9fa48("817") ? true : stryMutAct_9fa48("816") ? user : (stryCov_9fa48("816", "817", "818"), !user)) {
        if (stryMutAct_9fa48("819")) {
          {}
        } else {
          stryCov_9fa48("819");
          showToast(stryMutAct_9fa48("820") ? "" : (stryCov_9fa48("820"), 'User not found'), stryMutAct_9fa48("821") ? "" : (stryCov_9fa48("821"), 'error'));
          return stryMutAct_9fa48("822") ? true : (stryCov_9fa48("822"), false);
        }
      }
      const hashedPassword = btoa(password);
      if (stryMutAct_9fa48("825") ? user.password === hashedPassword : stryMutAct_9fa48("824") ? false : stryMutAct_9fa48("823") ? true : (stryCov_9fa48("823", "824", "825"), user.password !== hashedPassword)) {
        if (stryMutAct_9fa48("826")) {
          {}
        } else {
          stryCov_9fa48("826");
          showToast(stryMutAct_9fa48("827") ? "" : (stryCov_9fa48("827"), 'Incorrect password'), stryMutAct_9fa48("828") ? "" : (stryCov_9fa48("828"), 'error'));
          return stryMutAct_9fa48("829") ? true : (stryCov_9fa48("829"), false);
        }
      }

      // Set current user
      this.currentUser = stryMutAct_9fa48("830") ? {} : (stryCov_9fa48("830"), {
        id: user.id,
        username: user.username,
        email: user.email
      });
      localStorage.setItem(stryMutAct_9fa48("831") ? "" : (stryCov_9fa48("831"), 'currentUser'), JSON.stringify(this.currentUser));
      showToast(stryMutAct_9fa48("832") ? "" : (stryCov_9fa48("832"), 'Login successful!'), stryMutAct_9fa48("833") ? "" : (stryCov_9fa48("833"), 'success'));
      this.showMainApp();
      return stryMutAct_9fa48("834") ? false : (stryCov_9fa48("834"), true);
    }
  }
  logout() {
    if (stryMutAct_9fa48("835")) {
      {}
    } else {
      stryCov_9fa48("835");
      this.currentUser = null;
      localStorage.removeItem(stryMutAct_9fa48("836") ? "" : (stryCov_9fa48("836"), 'currentUser'));

      // Hide main app and show auth section
      document.getElementById(stryMutAct_9fa48("837") ? "" : (stryCov_9fa48("837"), 'mainApp')).classList.add(stryMutAct_9fa48("838") ? "" : (stryCov_9fa48("838"), 'hidden'));
      document.getElementById(stryMutAct_9fa48("839") ? "" : (stryCov_9fa48("839"), 'authSection')).classList.remove(stryMutAct_9fa48("840") ? "" : (stryCov_9fa48("840"), 'hidden'));
      showToast(stryMutAct_9fa48("841") ? "" : (stryCov_9fa48("841"), 'Logged out successfully'), stryMutAct_9fa48("842") ? "" : (stryCov_9fa48("842"), 'success'));
    }
  }
  showMainApp() {
    if (stryMutAct_9fa48("843")) {
      {}
    } else {
      stryCov_9fa48("843");
      document.getElementById(stryMutAct_9fa48("844") ? "" : (stryCov_9fa48("844"), 'authSection')).classList.add(stryMutAct_9fa48("845") ? "" : (stryCov_9fa48("845"), 'hidden'));
      document.getElementById(stryMutAct_9fa48("846") ? "" : (stryCov_9fa48("846"), 'mainApp')).classList.remove(stryMutAct_9fa48("847") ? "" : (stryCov_9fa48("847"), 'hidden'));
      document.getElementById(stryMutAct_9fa48("848") ? "" : (stryCov_9fa48("848"), 'currentUser')).textContent = this.currentUser.username;

      // Initialize app
      initializeApp();
    }
  }
  validateEmail(email) {
    if (stryMutAct_9fa48("849")) {
      {}
    } else {
      stryCov_9fa48("849");
      const re = stryMutAct_9fa48("860") ? /^[^\s@]+@[^\s@]+\.[^\S@]+$/ : stryMutAct_9fa48("859") ? /^[^\s@]+@[^\s@]+\.[\s@]+$/ : stryMutAct_9fa48("858") ? /^[^\s@]+@[^\s@]+\.[^\s@]$/ : stryMutAct_9fa48("857") ? /^[^\s@]+@[^\S@]+\.[^\s@]+$/ : stryMutAct_9fa48("856") ? /^[^\s@]+@[\s@]+\.[^\s@]+$/ : stryMutAct_9fa48("855") ? /^[^\s@]+@[^\s@]\.[^\s@]+$/ : stryMutAct_9fa48("854") ? /^[^\S@]+@[^\s@]+\.[^\s@]+$/ : stryMutAct_9fa48("853") ? /^[\s@]+@[^\s@]+\.[^\s@]+$/ : stryMutAct_9fa48("852") ? /^[^\s@]@[^\s@]+\.[^\s@]+$/ : stryMutAct_9fa48("851") ? /^[^\s@]+@[^\s@]+\.[^\s@]+/ : stryMutAct_9fa48("850") ? /[^\s@]+@[^\s@]+\.[^\s@]+$/ : (stryCov_9fa48("850", "851", "852", "853", "854", "855", "856", "857", "858", "859", "860"), /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      return re.test(email);
    }
  }
  isAuthenticated() {
    if (stryMutAct_9fa48("861")) {
      {}
    } else {
      stryCov_9fa48("861");
      return stryMutAct_9fa48("864") ? this.currentUser === null : stryMutAct_9fa48("863") ? false : stryMutAct_9fa48("862") ? true : (stryCov_9fa48("862", "863", "864"), this.currentUser !== null);
    }
  }
  getCurrentUser() {
    if (stryMutAct_9fa48("865")) {
      {}
    } else {
      stryCov_9fa48("865");
      return this.currentUser;
    }
  }
}

// Initialize Auth
const auth = new Auth();

// Check if user is already logged in
window.addEventListener(stryMutAct_9fa48("866") ? "" : (stryCov_9fa48("866"), 'DOMContentLoaded'), () => {
  if (stryMutAct_9fa48("867")) {
    {}
  } else {
    stryCov_9fa48("867");
    if (stryMutAct_9fa48("869") ? false : stryMutAct_9fa48("868") ? true : (stryCov_9fa48("868", "869"), auth.isAuthenticated())) {
      if (stryMutAct_9fa48("870")) {
        {}
      } else {
        stryCov_9fa48("870");
        auth.showMainApp();
      }
    }
  }
});

// Auth Functions
function showLogin() {
  if (stryMutAct_9fa48("871")) {
    {}
  } else {
    stryCov_9fa48("871");
    document.getElementById(stryMutAct_9fa48("872") ? "" : (stryCov_9fa48("872"), 'loginForm')).classList.add(stryMutAct_9fa48("873") ? "" : (stryCov_9fa48("873"), 'active'));
    document.getElementById(stryMutAct_9fa48("874") ? "" : (stryCov_9fa48("874"), 'registerForm')).classList.remove(stryMutAct_9fa48("875") ? "" : (stryCov_9fa48("875"), 'active'));
  }
}
function showRegister() {
  if (stryMutAct_9fa48("876")) {
    {}
  } else {
    stryCov_9fa48("876");
    document.getElementById(stryMutAct_9fa48("877") ? "" : (stryCov_9fa48("877"), 'registerForm')).classList.add(stryMutAct_9fa48("878") ? "" : (stryCov_9fa48("878"), 'active'));
    document.getElementById(stryMutAct_9fa48("879") ? "" : (stryCov_9fa48("879"), 'loginForm')).classList.remove(stryMutAct_9fa48("880") ? "" : (stryCov_9fa48("880"), 'active'));
  }
}
function register() {
  if (stryMutAct_9fa48("881")) {
    {}
  } else {
    stryCov_9fa48("881");
    const username = stryMutAct_9fa48("882") ? document.getElementById('regUsername').value : (stryCov_9fa48("882"), document.getElementById(stryMutAct_9fa48("883") ? "" : (stryCov_9fa48("883"), 'regUsername')).value.trim());
    const email = stryMutAct_9fa48("884") ? document.getElementById('regEmail').value : (stryCov_9fa48("884"), document.getElementById(stryMutAct_9fa48("885") ? "" : (stryCov_9fa48("885"), 'regEmail')).value.trim());
    const password = document.getElementById(stryMutAct_9fa48("886") ? "" : (stryCov_9fa48("886"), 'regPassword')).value;
    const confirmPassword = document.getElementById(stryMutAct_9fa48("887") ? "" : (stryCov_9fa48("887"), 'regConfirmPassword')).value;
    if (stryMutAct_9fa48("889") ? false : stryMutAct_9fa48("888") ? true : (stryCov_9fa48("888", "889"), auth.register(username, email, password, confirmPassword))) {
      if (stryMutAct_9fa48("890")) {
        {}
      } else {
        stryCov_9fa48("890");
        // Clear form
        document.getElementById(stryMutAct_9fa48("891") ? "" : (stryCov_9fa48("891"), 'regUsername')).value = stryMutAct_9fa48("892") ? "Stryker was here!" : (stryCov_9fa48("892"), '');
        document.getElementById(stryMutAct_9fa48("893") ? "" : (stryCov_9fa48("893"), 'regEmail')).value = stryMutAct_9fa48("894") ? "Stryker was here!" : (stryCov_9fa48("894"), '');
        document.getElementById(stryMutAct_9fa48("895") ? "" : (stryCov_9fa48("895"), 'regPassword')).value = stryMutAct_9fa48("896") ? "Stryker was here!" : (stryCov_9fa48("896"), '');
        document.getElementById(stryMutAct_9fa48("897") ? "" : (stryCov_9fa48("897"), 'regConfirmPassword')).value = stryMutAct_9fa48("898") ? "Stryker was here!" : (stryCov_9fa48("898"), '');
      }
    }
  }
}
function login() {
  if (stryMutAct_9fa48("899")) {
    {}
  } else {
    stryCov_9fa48("899");
    const username = stryMutAct_9fa48("900") ? document.getElementById('loginUsername').value : (stryCov_9fa48("900"), document.getElementById(stryMutAct_9fa48("901") ? "" : (stryCov_9fa48("901"), 'loginUsername')).value.trim());
    const password = document.getElementById(stryMutAct_9fa48("902") ? "" : (stryCov_9fa48("902"), 'loginPassword')).value;
    if (stryMutAct_9fa48("904") ? false : stryMutAct_9fa48("903") ? true : (stryCov_9fa48("903", "904"), auth.login(username, password))) {
      if (stryMutAct_9fa48("905")) {
        {}
      } else {
        stryCov_9fa48("905");
        // Clear form
        document.getElementById(stryMutAct_9fa48("906") ? "" : (stryCov_9fa48("906"), 'loginUsername')).value = stryMutAct_9fa48("907") ? "Stryker was here!" : (stryCov_9fa48("907"), '');
        document.getElementById(stryMutAct_9fa48("908") ? "" : (stryCov_9fa48("908"), 'loginPassword')).value = stryMutAct_9fa48("909") ? "Stryker was here!" : (stryCov_9fa48("909"), '');
      }
    }
  }
}
function logout() {
  if (stryMutAct_9fa48("910")) {
    {}
  } else {
    stryCov_9fa48("910");
    if (stryMutAct_9fa48("912") ? false : stryMutAct_9fa48("911") ? true : (stryCov_9fa48("911", "912"), confirm(stryMutAct_9fa48("913") ? "" : (stryCov_9fa48("913"), 'Are you sure you want to logout?')))) {
      if (stryMutAct_9fa48("914")) {
        {}
      } else {
        stryCov_9fa48("914");
        auth.logout();
      }
    }
  }
}

// Toast Notification
function showToast(message, type = stryMutAct_9fa48("915") ? "" : (stryCov_9fa48("915"), 'info')) {
  if (stryMutAct_9fa48("916")) {
    {}
  } else {
    stryCov_9fa48("916");
    const toast = document.getElementById(stryMutAct_9fa48("917") ? "" : (stryCov_9fa48("917"), 'toast'));
    toast.textContent = message;
    toast.className = stryMutAct_9fa48("918") ? `` : (stryCov_9fa48("918"), `toast ${type} show`);
    setTimeout(() => {
      if (stryMutAct_9fa48("919")) {
        {}
      } else {
        stryCov_9fa48("919");
        toast.classList.remove(stryMutAct_9fa48("920") ? "" : (stryCov_9fa48("920"), 'show'));
      }
    }, 3000);
  }
}

// Quick Enter - No authentication required
function quickEnter() {
  if (stryMutAct_9fa48("921")) {
    {}
  } else {
    stryCov_9fa48("921");
    // Create a guest user
    const guestUser = stryMutAct_9fa48("922") ? {} : (stryCov_9fa48("922"), {
      id: (stryMutAct_9fa48("923") ? "" : (stryCov_9fa48("923"), 'guest_')) + Date.now(),
      username: stryMutAct_9fa48("924") ? "" : (stryCov_9fa48("924"), 'Guest User'),
      email: stryMutAct_9fa48("925") ? "" : (stryCov_9fa48("925"), 'guest@studyflow.com')
    });
    auth.currentUser = guestUser;
    localStorage.setItem(stryMutAct_9fa48("926") ? "" : (stryCov_9fa48("926"), 'currentUser'), JSON.stringify(guestUser));
    showToast(stryMutAct_9fa48("927") ? "" : (stryCov_9fa48("927"), 'Welcome! You can start using StudyFlow right away! 🎉'), stryMutAct_9fa48("928") ? "" : (stryCov_9fa48("928"), 'success'));
    auth.showMainApp();
  }
}

// For testing purposes
if (stryMutAct_9fa48("931") ? typeof module !== 'undefined' || module.exports : stryMutAct_9fa48("930") ? false : stryMutAct_9fa48("929") ? true : (stryCov_9fa48("929", "930", "931"), (stryMutAct_9fa48("933") ? typeof module === 'undefined' : stryMutAct_9fa48("932") ? true : (stryCov_9fa48("932", "933"), typeof module !== (stryMutAct_9fa48("934") ? "" : (stryCov_9fa48("934"), 'undefined')))) && module.exports)) {
  if (stryMutAct_9fa48("935")) {
    {}
  } else {
    stryCov_9fa48("935");
    module.exports = Auth;
  }
}