'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var moment = require('moment');
require('moment/locale/tr');
require('react-router-dom');
var history$1 = require('history');
var antd = require('antd');
var reactColor = require('react-color');
var icons = require('@ant-design/icons');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$1(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
}

function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit$1(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var mainColor = "#002171";
var successColor = "green";
var dangerColor = "#EF5350";
var appURLs = {
  HTTP_REST_SERVER: {
    development: "http://localhost:8080/api",
    production: "http://localhost:8080/api"
  },
  WS_REST_SERVER: {
    development: "ws://localhost:8080/ws",
    production: "ws://localhost:8080/ws"
  }
};
var APP_NAMES = {
  WS_REST_SERVER: "WS_REST_SERVER",
  HTTP_REST_SERVER: "HTTP_REST_SERVER"
};
var getAppURLs = function getAppURLs() {
  return appURLs;
};
var getAppNames = function getAppNames() {
  return APP_NAMES;
};

var getAppURL = function getAppURL(appname) {
  var NODE_ENV = process.env.NODE_ENV;
  var appURLs = getAppURLs() || {};
  return appURLs[appname][NODE_ENV];
};

var getMainColor = function getMainColor() {
  return mainColor;
};
var getSuccessColor = function getSuccessColor() {
  return successColor;
};
var getDangerColor = function getDangerColor() {
  return dangerColor;
};
var constants = {
  mainColor: getMainColor(),
  successColor: getSuccessColor(),
  mainDangerColor: getDangerColor(),
  REST_SERVER: getAppURL(getAppNames().HTTP_REST_SERVER),
  WS_SERVER: getAppURL(getAppNames().WS_REST_SERVER)
};

var trTRLocales = {
  Stores: function Stores() {
    return "Mağazalar";
  },
  Home: function Home() {
    return "Ana Sayfa";
  },
  Purchases: function Purchases() {
    return "Satın Alımlar";
  },
  Sales: function Sales() {
    return "Satışlar";
  },
  Profile: function Profile() {
    return "Profil";
  },
  Menu: function Menu() {
    return "Menü";
  },
  Search: function Search() {
    return "Ara";
  },
  Payment: function Payment() {
    return "Ödeme";
  },
  Orders: function Orders() {
    return "Siparişler";
  },
  Tables: function Tables() {
    return "Masalar";
  }
};
var languageKeys = ["tr"];

var exportLocales = function exportLocales(languageKeys, languages) {
  var exp = {};
  languageKeys.forEach(function (i) {
    exp[i] = languages;
  });
  return exp;
};

var TRLocales = exportLocales(languageKeys, trTRLocales);

var enUSLocales = {
  Stores: function Stores() {
    return "Stores";
  },
  Home: function Home() {
    return "Home";
  }
};
var languageKeys$1 = ["en", "en-us"];

var exportLocales$1 = function exportLocales(languageKeys, languages) {
  var exp = {};
  languageKeys.forEach(function (i) {
    exp[i] = languages;
  });
  return exp;
};

var ENLocales = exportLocales$1(languageKeys$1, enUSLocales);

var AllLocales = _objectSpread2$1(_objectSpread2$1({}, TRLocales), ENLocales);
var hashCode = function hashCode(str) {
  var hash = 0;

  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  return hash;
};
var generatedColorFromString = function generatedColorFromString(_i) {
  var i = hashCode(_i);
  var c = (i & 0x00FFFFFF).toString(16).toUpperCase();
  return "#" + "00000".substring(0, 6 - c.length) + c;
};
var getAppURL$1 = function getAppURL(appname) {
  var NODE_ENV = process.env.NODE_ENV;
  var appURLs = getAppURLs() || {};
  var appURL = appURLs[appname] || {};
  return appURL[NODE_ENV];
};
var takeUndefinedAsTrue = function takeUndefinedAsTrue(parameter) {
  return parameter === undefined ? true : parameter;
};
var iFetch = function iFetch(payload) {
  var signal = payload.signal,
      endpoint = payload.endpoint,
      method = payload.method,
      params = payload.params,
      formData = payload.formData,
      token = payload.token,
      onSuccess = payload.onSuccess,
      onError = payload.onError;
  var appName = getAppNames().HTTP_REST_SERVER;

  var _url = getAppURL$1(appName);

  var url = "".concat(_url).concat(endpoint);
  var body = params ? JSON.stringify(params) : formData;
  var headers = {
    "Content-Type": "application/json"
  };
  if (token) headers["Authorization"] = "Bearer " + token;

  if (formData) {
    delete headers["Content-Type"];
  }

  fetch(url, {
    signal: signal,
    method: method || (params || formData ? "POST" : "GET"),
    body: body,
    headers: headers
  }).then(function (i) {
    var contentType = (i.headers.get('Content-Type') || '').split(";")[0];

    if (i.ok) {
      switch (contentType) {
        case 'application/json':
          i.json().then(function (i2) {
            if (i2 instanceof Array) onSuccess(i2);else if (i2.success !== undefined && !i2.success) onError(i, i2);else onSuccess(i2);
          }, function (error) {
            console.error(url, error);
            onSuccess({});
          });
          break;

        default:
          i.blob().then(function (blob) {
            onSuccess(new Blob([blob], {
              type: contentType
            }));
          });
          break;
      }
    } else if (i.status === 400) {
      console.error("status 400 error", url, i);
      i.json().then(function (i2) {
        onError(i, i2);
      });
    } else {
      onError(i);
    }
  }).catch(function (e) {
    console.error("e", e);
    onError(e);
  });
};
var changeColor = function changeColor(color, amt) {
  var usePound = false;
  var col = color + "";

  if (col[0] === "#") {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);
  var r = (num >> 16) + amt;

  if (r > 255) {
    r = 255;
  } else if (r < 0) {
    r = 0;
  }

  var b = (num >> 8 & 0x00FF) + amt;

  if (b > 255) {
    b = 255;
  } else if (b < 0) {
    b = 0;
  }

  var g = (num & 0x0000FF) + amt;

  if (g > 255) {
    g = 255;
  } else if (g < 0) {
    g = 0;
  }

  return (usePound ? "#" : "") + (g | b << 8 | r << 16).toString(16);
};
var takeIf = function takeIf(condition, value) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

  if (condition) {
    return value;
  } else {
    return defaultValue;
  }
};
var dateToDescription = function dateToDescription(date) {
  var momentDay = moment__default['default'](date, "YYYY-MM-DD");
  var momentToday = moment__default['default'](new Date(), "YYYY-MM-DD");
  var dayDiff = momentToday.diff(momentDay, 'days');
  var monthDiff = momentToday.diff(momentDay, 'month');
  if (dayDiff === 1) return "D\xFCn";else if (dayDiff) {
    return "".concat(monthDiff || dayDiff, " ").concat(monthDiff ? "ay" : "gün", " \xF6nce");
  } else {
    return "Bugün";
  }
};
var isNullOrUndefined = function isNullOrUndefined(item) {
  return item === null || item === undefined;
};
var monthsNumberArray = Array(12).fill(0).map(function (_, index) {
  return index % 12 + 1;
});

var authActions = {
  SET_TOKEN: "set-token",
  UPDATE_AUTH: "update-auth",
  LOGIN: 'login',
  LOGOUT: 'logout',
  SIGNUP: 'signup'
};
var notificationActions = {
  PUSH_IN_APP_NOTIFICATION: 'pushInAppNotification',
  POP_IN_APP_NOTIFICATION: 'popInAppNotification'
};
var modalActions = {
  SHOW_MODAL: 'show-modal',
  HIDE_MODAL: 'hide-modal',
  DELETE_MODAL: "delete-modal"
};
var lodaingActions = {
  INCREASE_LOADING_QUEUE: 'increaseLoadingQueue',
  DECREASE_LOADING_QUEUE: 'decreaseLoadingQueue'
};
var socketActions = {
  ADD_MESSAGE_LISTENER: 'addMessageListener',
  REMOVE_MESSAGE_LISTENER: 'removeMessageListener',
  SET_SOCKET: 'setSocket'
};

var actions = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, authActions), notificationActions), modalActions), lodaingActions), socketActions);

var initialState = {
  auth: {},
  loading: {
    queue: 0
  },
  notifications: [],
  modals: {}
};
var StoreContext = /*#__PURE__*/React.createContext(initialState);

var useLocalStorage = function useLocalStorage(key, defaultValue) {
  var getItem = React.useCallback(function (_defaultValue) {
    try {
      var value = JSON.parse(window.localStorage.getItem(key));
      return value || _defaultValue || defaultValue;
    } catch (e) {
      return defaultValue;
    }
  }, [defaultValue, key]);
  var setItem = React.useCallback(function (_value) {
    try {
      var value = JSON.stringify(_value);
      window.localStorage.setItem(key, value);
    } catch (e) {
      window.localStorage.setItem(key, defaultValue || '{}');
    }
  }, [defaultValue, key]);
  var removeItem = React.useCallback(function () {
    window.localStorage.removeItem(key);
  }, [key]);
  return {
    getItem: getItem,
    setItem: setItem,
    removeItem: removeItem
  };
};

var useAuth = function useAuth() {
  var _useContext = React.useContext(StoreContext),
      _useContext2 = _slicedToArray$1(_useContext, 2),
      state = _useContext2[0],
      dispatch = _useContext2[1];

  var _useLocalStorage = useLocalStorage("token"),
      setItem = _useLocalStorage.setItem;

  var _ref = state || {},
      auth = _ref.auth;

  var logout = React.useCallback(function () {
    setItem("");
    dispatch({
      type: actions.LOGOUT
    });
    var gapi = window.gapi;
    if (gapi) if (gapi.auth2) {
      var auth2 = gapi.auth2.getAuthInstance();

      if (auth2) {
        auth2.signOut().then(function () {
          console.log('User signed out.');
        });
      }
    }
    var FB = window.FB;

    if (FB) {
      if (FB.logout) {
        FB.logout(function (response) {});
      }
    }
  }, [dispatch, setItem]);
  var setToken = React.useCallback(function (token) {
    if (token) setItem(token);
    dispatch({
      type: actions.SET_TOKEN,
      payload: {
        data: {
          token: token
        }
      }
    });
  }, [dispatch, setItem]);
  var update = React.useCallback(function (data) {
    dispatch({
      type: actions.UPDATE_AUTH,
      payload: {
        data: data
      }
    });
  }, [dispatch]);
  var login = React.useCallback(function (data) {
    setToken(data.token);
    delete data.token;
    dispatch({
      type: actions.LOGIN,
      payload: {
        data: data,
        checked: true,
        isLoggedIn: true
      }
    });
  }, [dispatch, setToken]);
  return _objectSpread2$1(_objectSpread2$1({}, auth), {}, {
    logout: logout,
    setToken: setToken,
    login: login,
    update: update
  });
};

var useLoading = function useLoading() {
  var _useContext = React.useContext(StoreContext),
      _useContext2 = _slicedToArray$1(_useContext, 2),
      state = _useContext2[0],
      dispatch = _useContext2[1];

  var loading = state.loading;
  var increase = React.useCallback(function () {
    dispatch({
      type: actions.INCREASE_LOADING_QUEUE
    });
  }, []);
  var decrease = React.useCallback(function () {
    dispatch({
      type: actions.DECREASE_LOADING_QUEUE
    });
  }, []);
  var isLoading = loading && loading > 0;
  return _objectSpread2$1(_objectSpread2$1({}, loading), {}, {
    isLoading: isLoading,
    increase: increase,
    decrease: decrease
  });
};

var useNotification = function useNotification() {
  var _useContext = React.useContext(StoreContext),
      _useContext2 = _slicedToArray$1(_useContext, 2),
      dispatch = _useContext2[1];

  var pushNotification = React.useCallback(function (params) {
    var type = params.type,
        rest = _objectWithoutProperties$1(params, ["type"]);

    dispatch({
      type: actions.PUSH_IN_APP_NOTIFICATION,
      payload: {
        data: _objectSpread2$1({
          type: type
        }, rest)
      }
    });
  }, [dispatch]);
  var pushSuccessNotification = React.useCallback(function (params) {
    pushNotification(_objectSpread2$1({
      type: 'success'
    }, params));
  }, [pushNotification]);
  var pushErrorNotification = React.useCallback(function (params) {
    pushNotification(_objectSpread2$1({
      type: 'error'
    }, params));
  }, [pushNotification]);
  var pushInfoNotification = React.useCallback(function (params) {
    pushNotification(_objectSpread2$1({
      type: 'info'
    }, params));
  }, [pushNotification]);
  return {
    pushNotification: pushNotification,
    pushSuccessNotification: pushSuccessNotification,
    pushErrorNotification: pushErrorNotification,
    pushInfoNotification: pushInfoNotification
  };
};

var useApi = function useApi() {
  var _payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _useNotification = useNotification(),
      pushInfoNotification = _useNotification.pushInfoNotification,
      pushErrorNotification = _useNotification.pushErrorNotification;

  var _useLoading = useLoading(),
      increase = _useLoading.increase,
      decrease = _useLoading.decrease;

  var _useAuth = useAuth(),
      token = _useAuth.token,
      logout = _useAuth.logout;

  var _useState = React.useState(_payload),
      _useState2 = _slicedToArray$1(_useState, 2),
      payload = _useState2[0],
      setPayload = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray$1(_useState3, 2),
      shouldFetch = _useState4[0],
      setShouldFetch = _useState4[1];

  var stringifyPayload = JSON.stringify(payload);

  var _useState5 = React.useState({
    firstTimeFetched: false,
    fetched: false,
    fetching: false,
    response: _payload.initialValue || {}
  }),
      _useState6 = _slicedToArray$1(_useState5, 2),
      data = _useState6[0],
      setData = _useState6[1];

  var firstTimeFetched = data.firstTimeFetched;
  var controller = new AbortController();
  var signal = controller.signal;
  var endpoint = payload.endpoint,
      params = payload.params,
      payloadOnSuccess = payload.onSuccess,
      payloadOnError = payload.onError,
      payloadPushNotification = payload.pushNotification;
  var onSuccess = React.useCallback(function (response) {
    var pushNotification = takeUndefinedAsTrue(payloadPushNotification);
    if (payloadOnSuccess) payloadOnSuccess(response);
    decrease();
    setData(function (oldData) {
      return _objectSpread2$1(_objectSpread2$1({}, oldData), {}, {
        response: response,
        fetching: false,
        fetched: true,
        firstTimeFetched: true
      });
    });

    if (response.message && pushNotification) {
      pushInfoNotification({
        title: "Bildirim!",
        message: response.message
      });
    }
  }, [payloadPushNotification, payloadOnSuccess]);
  var onError = React.useCallback(function (response) {
    var responseJSON = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var pushNotification = takeUndefinedAsTrue(payloadPushNotification);
    var notificationObj = {};
    pushErrorNotification({
      title: "Hata!",
      message: "options = ".concat(endpoint, "\n            response = ").concat(JSON.stringify(response), "\nresponseJSON = ").concat(JSON.stringify(responseJSON), "\n")
    });
    decrease();

    switch (response.status) {
      case 404:
        notificationObj.type = "error";
        notificationObj.message = "Sayfa bulunamadı!";
        break;

      case 403:
        notificationObj.type = "warning";
        notificationObj.message = "Your session has expired!";
        break;

      case 401:
        logout();
        notificationObj.type = "warning";
        notificationObj.message = "Your session has expired!";
        break;

      default:
        notificationObj.type = "error";
        notificationObj.message = "Bilinmeyen hata";
    }

    console.log("[useApi].onError \nresponse", response, "\n responseJSON", responseJSON, "\n notificationObj", notificationObj, payload);

    if (pushNotification) {
      if (response.message || responseJSON.message || notificationObj.message) {
        pushErrorNotification({
          title: "Hata!",
          message: response.message || responseJSON.message || notificationObj.message
        });
      }
    }

    setData(function (oldData) {
      return _objectSpread2$1(_objectSpread2$1({}, oldData), {}, {
        response: _objectSpread2$1({}, responseJSON || response),
        fetching: false,
        fetched: true,
        firstTimeFetched: true
      });
    });
    if (payloadOnError) payloadOnError(responseJSON || response);
  }, [endpoint, payloadPushNotification, payloadOnError]);
  React.useEffect(function () {
    var initial = payload.initial;
    if (initial) load();
  }, [stringifyPayload]);
  var updatePayload = React.useCallback(function (__payload) {
    setPayload(function (oldPayload) {
      var newPayload = _objectSpread2$1(_objectSpread2$1({}, oldPayload), __payload);

      var _showLoading = newPayload.showLoading;
      var showLoading = takeUndefinedAsTrue(_showLoading);

      if (!newPayload.method && !newPayload.params) {
        newPayload.method = "GET";
      }

      if (newPayload.method !== "GET" && showLoading) {
        increase();
      }

      return newPayload;
    });
  }, []);
  var updateData = React.useCallback(function () {
    setData(function (oldData) {
      return _objectSpread2$1(_objectSpread2$1({}, oldData), {}, {
        fetching: true,
        fetched: false
      });
    });
  }, []);
  var load = React.useCallback(function () {
    var __payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    updatePayload(__payload);
    updateData();
    setShouldFetch(true);
  }, []);
  React.useEffect(function () {
    if (shouldFetch) {
      iFetch(_objectSpread2$1(_objectSpread2$1({}, payload), {}, {
        params: params,
        onSuccess: onSuccess,
        onError: onError,
        token: token,
        signal: signal
      }));
      setShouldFetch(false);
    }
  }, [onError, onSuccess, params, shouldFetch, token]);
  React.useEffect(function () {
    return function () {
      controller.abort();
    };
  }, []);
  return _objectSpread2$1({
    load: load
  }, data);
};

var appStyles = {
  stretchRow: {
    display: 'flex',
    alignItems: 'stretch',
    flexFlow: 'row wrap'
  },
  defaultShadow: {
    boxShadow: "0 0 5px -2.75px black"
  },
  cardBorderRadius: {
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    flexShrink: 0
  },
  secondaryText: {
    color: '#aaa'
  },
  imageStyle: {
    height: "100%",
    width: '100%',
    borderRadius: 20,
    resizeMode: 'contain'
  },
  listHeader: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  spreadHorizontally: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  paddingHorizontal: function paddingHorizontal(value) {
    return {
      paddingLeft: value,
      paddingRight: value
    };
  },
  paddingVertical: function paddingVertical(value) {
    return {
      paddingTop: value,
      paddingBottom: value
    };
  },
  marginHorizontal: function marginHorizontal(value) {
    return {
      marginLeft: value,
      marginRight: value
    };
  },
  marginVertical: function marginVertical(value) {
    return {
      marginTop: value,
      marginBottom: value
    };
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  card: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 'initial'
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black'
  },
  cardSubtitle: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 14,
    fontWeight: '300'
  },
  rounded: function rounded(size) {
    return {
      width: size,
      height: size,
      borderRadius: size * 2
    };
  },
  roundedImage: {
    width: '100%',
    height: '100%',
    objectFit: "cover",
    borderRadius: "50%"
  }
};

var history = history$1.createBrowserHistory();

var Show = function Show(props) {
  var condition = props.condition,
      willUnmount = props.willUnmount,
      children = props.children;
  React.useEffect(function () {
    return willUnmount;
  }, [willUnmount]);
  if (condition) return children;
  return null;
};

var AttachmentImage = function AttachmentImage(props) {
  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loaded = _useState2[0],
      setLoaded = _useState2[1];

  var id = props.id,
      _size = props.size,
      style = props.style,
      className = props.className,
      _placheholder = props.placeholder,
      hidePlaceholder = props.hidePlaceholder,
      rest = _objectWithoutProperties(props, ["id", "size", "style", "className", "placeholder", "hidePlaceholder"]);

  var size = _size ? {
    width: _size,
    height: _size,
    borderRadius: '50%'
  } : {};
  var placeholder = _placheholder || "P";
  var fontSize = isNaN(_size / 2) ? 24 : _size / 2;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, size), appStyles.defaultShadow), appStyles.center), {}, {
      backgroundColor: "#eee",
      overflow: "hidden"
    }, style),
    className: "".concat(className || "")
  }, /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: id
  }, /*#__PURE__*/React__default['default'].createElement("img", _extends({
    onLoad: function onLoad() {
      return setLoaded(true);
    },
    src: "".concat(getAppURL$1(getAppNames().HTTP_REST_SERVER), "/attachments/stream/").concat(id),
    alt: "",
    style: _objectSpread2(_objectSpread2(_objectSpread2({}, appStyles.roundedImage), style), {}, {
      width: '100%',
      display: loaded ? undefined : 'none'
    })
  }, rest))), /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: !loaded && !hidePlaceholder
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      width: '100%',
      height: '100%'
    }, appStyles.center)
  }, /*#__PURE__*/React__default['default'].createElement("p", {
    style: {
      margin: 0,
      fontSize: fontSize,
      fontWeight: 'bold',
      padding: 4
    }
  }, placeholder))));
};

var Button = function Button(props) {
  var style = props.style,
      type = props.type,
      icon = props.icon,
      title = props.title,
      _className = props.className,
      _iconSize = props.iconSize,
      _neumorphic = props.neumorphic,
      _onClick = props.onClick,
      _htmlType = props.htmlType,
      soft = props.soft,
      selected = props.selected,
      children = props.children;
  var iconSize = _iconSize || 32;
  var htmlType = takeIf(!!_htmlType, _htmlType, 'button');
  var iconButton = !children && !title;
  var neumorphic = takeUndefinedAsTrue(_neumorphic);
  var className = "no-select ";
  className += takeIf(neumorphic && isNullOrUndefined(selected), "neumorphic-button".concat(takeIf(soft, '-soft', '')), "neumorphic-clickable");
  className += takeIf(selected, " neumorphic-inset", "");
  var onClick = React.useCallback(function (e) {
    if (htmlType !== 'submit') e.preventDefault();
    if (_onClick) _onClick(e);
  }, [htmlType, _onClick]);

  if (!!type) {
    className += " button-".concat(type, "-neumorphic");
  }

  if (_className) className += " ".concat(_className || "");
  return /*#__PURE__*/React__default['default'].createElement("button", {
    style: _objectSpread2({
      justifyContent: 'center',
      alignItems: 'center',
      width: takeIf(iconButton, iconSize),
      height: takeIf(iconButton, iconSize),
      borderRadius: takeIf(iconButton, "50%"),
      boxShadow: takeIf(selected === undefined, '')
    }, style || {}),
    type: htmlType,
    onClick: onClick,
    className: className
  }, /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: icon
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({
      marginRight: takeIf(!iconButton, 8)
    }, appStyles.center), {}, {
      fontSize: takeIf(iconButton, 18, 12),
      width: takeIf(iconButton, "100%", 12),
      height: takeIf(iconButton, "100%", 12)
    })
  }, icon)), /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      fontSize: 14
    }
  }, children || title));
};

var ColorPicker = function ColorPicker(props) {
  var _value = props.value,
      label = props.label,
      _onChange = props.onChange,
      children = props.children;
  var onChange = React.useCallback(function (_ref) {
    var hex = _ref.hex;

    _onChange(hex);
  }, [_onChange]);
  return /*#__PURE__*/React__default['default'].createElement(antd.Popover, {
    content: /*#__PURE__*/React__default['default'].createElement(reactColor.SwatchesPicker, {
      onChange: onChange
    }),
    title: "Renk"
  }, /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: children
  }, children), /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: !children
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "neumorphic-input"
  }, /*#__PURE__*/React__default['default'].createElement("p", {
    style: {
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "neumorphic-outset-soft",
    style: {
      backgroundColor: _value,
      height: 32,
      width: '100%'
    }
  }))));
};

var DateDescription = function DateDescription(props) {
  var date = props.date;
  var description = dateToDescription(date);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      minWidth: 100,
      alignItems: 'flex-end'
    },
    className: "center-column"
  }, /*#__PURE__*/React__default['default'].createElement("p", {
    style: {
      color: '#aaa',
      margin: 0
    }
  }, description), /*#__PURE__*/React__default['default'].createElement("p", {
    style: {
      color: '#aaa',
      margin: 0
    }
  }, moment__default['default'](date).format("HH:mm")));
};

var DescriptionIcon = function DescriptionIcon(props) {
  var style = props.style,
      titleStyle = props.titleStyle,
      icon = props.icon,
      description = props.description;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "center",
    style: _objectSpread2({
      flexDirection: 'column'
    }, style || {})
  }, icon, /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      paddingHorizontal: 8,
      paddingVertical: 2,
      marginTop: 4,
      backgroundColor: '#eee',
      borderRadius: 10
    }
  }, /*#__PURE__*/React__default['default'].createElement("p", {
    style: _objectSpread2({
      margin: 0,
      padding: '4px 8px',
      whiteSpace: 'nowrap',
      color: '#4285F4',
      fontWeight: 'bold'
    }, titleStyle || {})
  }, description)));
};

var OverflowImages = function OverflowImages(props) {
  var images = props.images,
      _maxCount = props.maxCount,
      size = props.size;
  var maxCount = _maxCount || 3;
  var overflowItemsCount = images.length - maxCount;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.center), {}, {
      flexDirection: 'column',
      marginRight: 8
    })
  }, /*#__PURE__*/React__default['default'].createElement(antd.Badge, {
    count: overflowItemsCount > 0 ? "+".concat(overflowItemsCount) : undefined
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({}, appStyles.center)
  }, images.filter(function (_, index) {
    return index < maxCount;
  }).map(function (image, index) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      style: {
        border: '1px solid white',
        marginLeft: index && -32,
        borderRadius: size
      },
      key: index
    }, /*#__PURE__*/React__default['default'].createElement(AttachmentImage, {
      id: image,
      key: index,
      size: size
    }));
  }))));
};

var DescriptionOverflowImages = function DescriptionOverflowImages(props) {
  var title = props.title,
      images = props.images,
      maxCount = props.maxCount;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.row), {}, {
      alignItems: 'center'
    })
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.row), {}, {
      alignItems: 'center',
      marginRight: 4
    })
  }, /*#__PURE__*/React__default['default'].createElement(OverflowImages, {
    images: images,
    maxCount: maxCount,
    size: 40
  })), /*#__PURE__*/React__default['default'].createElement("p", {
    style: {
      fontWeight: '600',
      fontSize: 18,
      margin: 0
    }
  }, title));
};

var DescriptionRow = function DescriptionRow(props) {
  var title = props.title,
      description = props.description,
      descriptionRenderer = props.descriptionRenderer,
      _titleSpan = props.titleSpan,
      style = props.style;
  var titleSpan = _titleSpan || 4;
  return /*#__PURE__*/React__default['default'].createElement(antd.Row, {
    style: _objectSpread2(_objectSpread2({}, style || {}), {}, {
      alignItems: 'center'
    })
  }, /*#__PURE__*/React__default['default'].createElement(antd.Col, {
    span: titleSpan,
    style: {
      lineHeight: 0
    }
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    style: {
      margin: 0,
      fontWeight: 'bold',
      color: 'black',
      lineHeight: 0
    }
  }, title)), /*#__PURE__*/React__default['default'].createElement(antd.Col, {
    span: 24 - titleSpan
  }, descriptionRenderer ? descriptionRenderer : /*#__PURE__*/React__default['default'].createElement("span", {
    style: {
      margin: 0,
      color: 'black',
      lineHeight: 0
    }
  }, description)));
};

var EmptyResult = function EmptyResult(props) {
  var icon = props.icon,
      title = props.title,
      style = props.style,
      _size = props.size;
  var size = _size || 120;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({}, style || {})
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "center",
    style: {
      width: '100%',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "center neumorphic-outset",
    style: _objectSpread2({}, appStyles.rounded(size))
  }, icon)), /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("p", {
    style: {
      textAlign: 'center',
      fontWeight: '100',
      fontSize: 24,
      whiteSpace: 'pre-wrap',
      color: 'black',
      marginTop: 16
    }
  }, title)));
};

var Header = function Header(props) {
  var title = props.title,
      titleRenderer = props.titleRenderer,
      style = props.style,
      titleStyle = props.titleStyle,
      extra = props.extra;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.row), {}, {
      alignItems: 'center',
      minHeight: 48
    }, style || {})
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      flex: 1
    }, titleStyle || {})
  }, titleRenderer ? titleRenderer : /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      margin: 0
    }, appStyles.cardTitle)
  }, title)), extra);
};

var IncDecField = function IncDecField(props) {
  var value = props.value,
      onChange = props.onChange,
      _size = props.size,
      style = props.style,
      minusDisabled = props.minusDisabled,
      plusDisabled = props.plusDisabled,
      children = props.children;
  var size = _size || 32;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2(_objectSpread2({
      marginVertical: 16
    }, appStyles.row), appStyles.spreadHorizontally), style || {})
  }, /*#__PURE__*/React__default['default'].createElement(Button, {
    icon: /*#__PURE__*/React__default['default'].createElement(icons.MinusOutlined, {
      style: {
        fontSize: size / 2
      }
    }),
    disabled: minusDisabled,
    shape: "circle",
    type: "primary",
    style: {
      borderRadius: 10
    },
    onClick: function onClick() {
      return onChange(value - 1);
    }
  }), children, /*#__PURE__*/React__default['default'].createElement(Button, {
    icon: /*#__PURE__*/React__default['default'].createElement(icons.PlusOutlined, {
      style: {
        fontSize: size / 2
      }
    }),
    disabled: plusDisabled,
    shape: "circle",
    type: "primary",
    style: {
      borderRadius: 10
    },
    onClick: function onClick() {
      return onChange(value + 1);
    }
  }));
};

var InfoRow = function InfoRow(props) {
  var label = props.label,
      content = props.content,
      children = props.children;
  return /*#__PURE__*/React__default['default'].createElement(antd.Row, {
    style: {
      margin: '16px 0'
    }
  }, /*#__PURE__*/React__default['default'].createElement(antd.Col, {
    span: 6
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      fontWeight: '500'
    }
  }, label)), /*#__PURE__*/React__default['default'].createElement(antd.Col, {
    span: 18
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      color: '#aaa'
    }
  }, content || children)));
};

var InfoRowForm = function InfoRowForm(props) {
  var _useState = React.useState(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      RenderComponent = _useState2[0],
      setRenderComponent = _useState2[1];

  var label = props.label,
      name = props.name,
      _onChange = props.onChange,
      value = props.value,
      component = props.component,
      rest = _objectWithoutProperties(props, ["label", "name", "onChange", "value", "component"]);

  React.useEffect(function () {
    setRenderComponent( /*#__PURE__*/React__default['default'].createElement(component || antd.Input, {}));
  }, [component]);
  return /*#__PURE__*/React__default['default'].createElement(antd.Row, {
    style: {
      margin: '16px 0'
    }
  }, /*#__PURE__*/React__default['default'].createElement(antd.Col, {
    span: 6
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      fontWeight: '500'
    }
  }, label)), /*#__PURE__*/React__default['default'].createElement(antd.Col, {
    span: 18
  }, RenderComponent ? /*#__PURE__*/React__default['default'].createElement(RenderComponent.type, _extends({
    value: value,
    onChange: function onChange() {
      for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
        a[_key] = arguments[_key];
      }

      return _onChange.apply(void 0, [name].concat(a));
    }
  }, rest || {})) : null));
};

var List = function List(props) {
  var _items = props.items,
      loading = props.loading,
      renderer = props.renderer,
      emptyRenderer = props.emptyRenderer,
      loadingRenderer = props.loadingRenderer;
  var items = _items || [];
  if (loading) return loadingRenderer;
  if (!items.length) return emptyRenderer;
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, items.map(function (item, index) {
    return renderer({
      item: item,
      index: index
    });
  }));
};

var ListItem = function ListItem(props) {
  var style = props.style,
      avatar = props.avatar,
      title = props.title,
      lastItem = props.lastItem,
      titleRenderer = props.titleRenderer,
      description = props.description,
      titleStyle = props.titleStyle,
      subtitleStyle = props.subtitleStyle,
      titleContainerStyle = props.titleContainerStyle,
      onClick = props.onClick,
      onTitleClick = props.onTitleClick,
      subtitle = props.subtitle,
      subtitleRenderer = props.subtitleRenderer,
      headerContainerStyle = props.headerContainerStyle,
      selected = props.selected,
      children = props.children;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      borderBottom: lastItem && '1px solid #eee',
      padding: 4
    }, style || {}),
    className: "".concat(takeIf(onClick, "neumorphic-clickable"), " ").concat(takeIf(selected, "neumorphic-outset")),
    onClick: onClick
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      display: "flex",
      alignItems: 'center'
    }, headerContainerStyle || {})
  }, /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: avatar
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginRight: takeIf(!!title || !!titleRenderer, 8, 0)
    }
  }, avatar)), /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      width: '100%'
    },
    onClick: onTitleClick,
    className: onTitleClick ? "clickable" : ""
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      padding: 4
    }, titleContainerStyle || {})
  }, /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: titleRenderer
  }, titleRenderer), /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: title
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      margin: 0,
      color: takeIf(selected, "#1890ff")
    }, titleStyle || {})
  }, title)), /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: subtitle
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      margin: 0,
      fontSize: 10,
      color: 'black'
    }, subtitleStyle || {})
  }, subtitle)), /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: subtitleRenderer
  }, subtitleRenderer))), /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: description
  }, description)), children);
};

var Loading = function Loading(props) {
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({}, appStyles.center)
  }, /*#__PURE__*/React__default['default'].createElement(antd.Spin, props));
};

var Neumorphic = function Neumorphic(props) {
  var style = props.style,
      children = props.children;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "neumorphic-outset",
    style: _objectSpread2(_objectSpread2({}, style || {}), {}, {
      borderRadius: 10
    })
  }, children);
};

var PageTitle = function PageTitle(props) {
  var title = props.title;
  return /*#__PURE__*/React__default['default'].createElement("h1", {
    className: "neumorphic-title"
  }, title);
};

var PostCard = function PostCard(props) {
  var style = props.style,
      avatar = props.avatar,
      title = props.title,
      titleRenderer = props.titleRenderer,
      titleStyle = props.titleStyle,
      headerStyle = props.headerStyle,
      titleContainerStyle = props.titleContainerStyle,
      description = props.description,
      onHeaderClick = props.onHeaderClick,
      subtitle = props.subtitle,
      onTitleClick = props.onTitleClick,
      childrenContainerStyle = props.childrenContainerStyle,
      children = props.children;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({}, style || {}), {}, {
      borderRadius: 10
    }),
    className: "neumorphic-outset"
  }, /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: avatar || title || titleRenderer || description || subtitle
  }, /*#__PURE__*/React__default['default'].createElement(ListItem, {
    avatar: avatar,
    title: title,
    titleRenderer: titleRenderer,
    style: _objectSpread2({
      marginBottom: 4
    }, titleContainerStyle || {}),
    titleContainerStyle: headerStyle,
    titleStyle: _objectSpread2({
      fontSize: 18
    }, titleStyle || {}),
    description: description,
    subtitle: subtitle,
    onTitleClick: onTitleClick,
    onClick: onHeaderClick
  })), children ? /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.card), {}, {
      backgroundColor: 'transparent'
    })
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      margin: "0 16px"
    }, childrenContainerStyle || {})
  }, children)) : null);
};

var QuantityBadge = function QuantityBadge(props) {
  var quantity = props.quantity;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      backgroundColor: constants.mainColor,
      width: 30,
      height: 30,
      borderRadius: 60
    },
    className: "center"
  }, /*#__PURE__*/React__default['default'].createElement("p", {
    style: {
      margin: 0,
      color: 'white',
      fontWeight: 'bold'
    }
  }, quantity));
};

var QuantityField = function QuantityField(props) {
  var value = props.value,
      onChange = props.onChange,
      _size = props.size,
      style = props.style,
      minusDisabled = props.minusDisabled,
      plusDisabled = props.plusDisabled,
      total = props.total;
  var size = _size || 32;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({
      marginVertical: 16
    }, appStyles.row), style || {})
  }, /*#__PURE__*/React__default['default'].createElement(Button, {
    icon: /*#__PURE__*/React__default['default'].createElement(icons.MinusOutlined, {
      color: "white"
    }),
    disabled: minusDisabled,
    type: "primary",
    style: {
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    },
    onClick: function onClick() {
      return onChange(value - 1);
    }
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.center), {}, {
      width: size,
      height: size,
      border: '1px solid #aaa'
    })
  }, /*#__PURE__*/React__default['default'].createElement("div", null, value)), /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: total !== undefined
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.center), {}, {
      backgroundColor: '#eee',
      width: size,
      height: size,
      border: '1px solid #aaa'
    })
  }, /*#__PURE__*/React__default['default'].createElement("div", null, total))), /*#__PURE__*/React__default['default'].createElement(Button, {
    icon: /*#__PURE__*/React__default['default'].createElement(icons.PlusOutlined, {
      color: "white"
    }),
    disabled: plusDisabled,
    type: "primary",
    style: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4
    },
    onClick: function onClick() {
      return onChange(value + 1);
    }
  }));
};

var Option = antd.Select.Option;
var QueryAutoComplete = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var value = props.value,
      onChange = props.onChange,
      getOptions = props.getOptions,
      valueKey = props.valueKey,
      labelKey = props.labelKey,
      _minLength = props.minLength,
      cache = props.cache,
      rest = _objectWithoutProperties(props, ["value", "onChange", "getOptions", "valueKey", "labelKey", "minLength", "cache"]);

  var minLength = _minLength === undefined ? 3 : _minLength;

  var _useState = React.useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var _useState3 = React.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      response = _useState4[0],
      setResponse = _useState4[1];

  var _useApi = useApi({
    initialValue: []
  }),
      fetched = _useApi.fetched,
      fetching = _useApi.fetching,
      load = _useApi.load;

  var _useLocalStorage = useLocalStorage("caches", "{}"),
      getCache = _useLocalStorage.getItem,
      setCache = _useLocalStorage.setItem;

  var searchStringLength = (search || "").length;
  var shouldSearch = searchStringLength >= minLength;
  React.useEffect(function () {
    if (!search) {
      setSearch(value);
    }
  }, [value, search, setSearch]);
  React.useEffect(function () {
    if (shouldSearch) {
      var apiOptions = getOptions(search);

      if (cache) {
        var oldCaches = getCache();
        var cacheValues = JSON.parse(oldCaches || "{}");
        var cacheKey = JSON.stringify(apiOptions);
        var existCache = cacheValues[cacheKey];

        if (existCache) {
          setResponse(existCache);
        } else {
          load(_objectSpread2(_objectSpread2({}, apiOptions), {}, {
            onSuccess: function onSuccess(response) {
              setCache(JSON.stringify(_objectSpread2(_objectSpread2({}, cacheValues), {}, _defineProperty({}, cacheKey, response))));
              setResponse(response);
            }
          }));
        }
      } else {
        load(_objectSpread2(_objectSpread2({}, apiOptions), {}, {
          onSuccess: setResponse
        }));
      }
    }
  }, [shouldSearch, searchStringLength, getOptions, cache, search]);

  var onSelect = function onSelect(e, option) {
    onChange(e);
  };

  var getACOptions = function getACOptions() {
    return (response || []).map(function (i) {
      return {
        value: i[valueKey],
        label: i[labelKey]
      };
    });
  };

  var options = getACOptions();
  return /*#__PURE__*/React__default['default'].createElement(antd.Select, _extends({}, rest, {
    options: options,
    showSearch: true,
    value: value,
    loading: fetching,
    onSelect: onSelect,
    ref: ref,
    onSearch: setSearch,
    optionFilterProp: "label",
    defaultActiveFirstOption: true,
    notFoundContent: fetched && !options.length ? "Bulunamadı" : null
  }), options.map(function (option, index) {
    return /*#__PURE__*/React__default['default'].createElement(Option, {
      key: index,
      value: option.value
    }, option.label);
  }));
});

var Option$1 = antd.Select.Option;
var SelectItemsRenderer = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var items = props.items,
      placeHolder = props.placeHolder,
      value = props.value,
      onChange = props.onChange,
      onSearch = props.onSearch,
      defaultSelectFirstValue = props.defaultSelectFirstValue,
      mode = props.mode,
      filterOption = props.filterOption,
      _valueField = props.valueField,
      labelInValue = props.labelInValue,
      _descriptionField = props.descriptionField,
      rest = _objectWithoutProperties(props, ["items", "placeHolder", "value", "onChange", "onSearch", "defaultSelectFirstValue", "mode", "filterOption", "valueField", "labelInValue", "descriptionField"]);

  var valueField = _valueField || 'id';
  var descriptionField = _descriptionField || 'name';
  React.useEffect(function () {
    if (defaultSelectFirstValue) {
      if (items.length && !value) {
        onChange(items[0][valueField]);
      }
    }
  }, [defaultSelectFirstValue, items, valueField, value]);

  var getValue = function getValue() {
    if (labelInValue) {
      if (mode === "multiple") return (value || []).map(function (i) {
        return {
          value: i.value || i[valueField],
          label: i.label || i[descriptionField],
          key: i.key || i[valueField]
        };
      });
      return {
        value: value[valueField],
        label: value[descriptionField]
      };
    }

    return value;
  };

  return /*#__PURE__*/React__default['default'].createElement(antd.Select, _extends({}, rest, {
    mode: mode,
    labelInValue: labelInValue,
    value: getValue(),
    ref: ref,
    showSearch: true,
    placeholder: placeHolder,
    optionFilterProp: "children",
    onChange: onChange,
    onSearch: onSearch
  }), (items || []).map(function (item, index) {
    return /*#__PURE__*/React__default['default'].createElement(Option$1, {
      key: index,
      value: item[valueField]
    }, item[descriptionField]);
  }));
});

var QuerySelect = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  var url = props.url,
      options = props.options,
      rest = _objectWithoutProperties(props, ["url", "options"]);

  var _useApi = useApi(),
      fetched = _useApi.fetched,
      load = _useApi.load,
      response = _useApi.response;

  React.useEffect(function () {
    if (url) {
      load(_objectSpread2({
        endpoint: url
      }, options));
    }
  }, [url, load, options]);
  React.useEffect(function () {
    if (fetched && response) {
      setItems(response.data);
    }
  }, [fetched, response]);
  return /*#__PURE__*/React__default['default'].createElement(SelectItemsRenderer, _extends({
    items: items,
    ref: ref
  }, rest));
});

var Rate = function Rate(props) {
  var value = props.value,
      total = props.total,
      _size = props.size,
      _emptyColor = props.emptyColor,
      style = props.style;

  var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      stars = _useState2[0],
      setStars = _useState2[1];

  var size = _size || 24;
  React.useEffect(function () {
    var _stars = Array(total || 5).fill(0).map(function (i, index) {
      return index < value ? 1 : 0;
    });

    setStars(_stars);
  }, [total, value]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2(_objectSpread2({}, appStyles.center), appStyles.grid), style || {})
  }, stars.map(function (i, index) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      style: {
        margin: 4
      },
      key: index
    }, /*#__PURE__*/React__default['default'].createElement(Show, {
      condition: i
    }, /*#__PURE__*/React__default['default'].createElement(icons.StarFilled, {
      style: {
        color: 'orange',
        fontSize: size
      }
    })), /*#__PURE__*/React__default['default'].createElement(Show, {
      condition: !i
    }, /*#__PURE__*/React__default['default'].createElement(icons.StarOutlined, {
      style: {
        color: "orange",
        fontSize: size
      }
    })));
  }));
};

var RowStretch = function RowStretch(props) {
  var style = props.style,
      children = props.children;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      display: 'flex',
      alignItems: 'stretch',
      flexFlow: 'row wrap'
    }, style || {})
  }, children);
};

var Section = function Section(props) {
  var title = props.title,
      extra = props.extra,
      className = props.className,
      style = props.style,
      children = props.children;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: className,
    style: _objectSpread2({
      border: '1px solid #ddd',
      borderRadius: 20,
      padding: 16,
      margin: 8,
      height: '100%'
    }, style || {})
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, title ? /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      fontWeight: 'bold',
      fontSize: 18
    }
  }, title) : null, extra), children);
};

var Shimmer = function Shimmer(props) {
  var style = props.style;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.card), {}, {
      padding: 16
    }, style || {})
  }, /*#__PURE__*/React__default['default'].createElement(antd.Skeleton, _extends({
    loading: true
  }, props)));
};

var StarCount = function StarCount(props) {
  var quantity = props.quantity,
      style = props.style,
      _size = props.size;
  var size = _size || 24;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.row), {}, {
      alignItems: 'center'
    }, style || {})
  }, /*#__PURE__*/React__default['default'].createElement("p", {
    style: {
      margin: 0,
      fontWeight: 'bold',
      fontSize: size,
      marginRight: 4
    }
  }, quantity), /*#__PURE__*/React__default['default'].createElement(icons.StarFilled, {
    style: {
      color: 'orange',
      fontSize: size
    }
  }));
};

var Tag = function Tag(props) {
  var _color = props.color,
      className = props.className,
      description = props.description,
      generatedColor = props.generatedColor,
      _type = props.type,
      textStyle = props.textStyle,
      style = props.style,
      onClick = props.onClick,
      _neumorphic = props.neumorphic,
      onTextClick = props.onTextClick,
      onClear = props.onClear,
      children = props.children;
  var neumorphic = takeUndefinedAsTrue(_neumorphic);
  var type = _type || "outlined";
  var color = _color || (generatedColor ? generatedColorFromString(description) : "#cccccc");
  var textColor = type === "filled" ? '#ffffff' : color || "";
  var backgroundColor = type === "filled" ? color : "".concat(changeColor(color, 150));
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({
      padding: "8px 16px",
      //border: type === 'filled' ? '' : `1px solid ${color}`,
      borderRadius: 8,
      backgroundColor: backgroundColor,
      maxWidth: 'calc(100% - 16px)'
    }, appStyles.center), style || {}),
    className: "\n             ".concat(takeIf(onClick, "clickable", ""), "\n              ").concat(takeIf(neumorphic, "neumorphic-outset-soft"), " ").concat(className || "", "\n              "),
    onClick: onClick
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: takeIf(onTextClick, "clickable", ""),
    style: _objectSpread2({
      color: textColor,
      margin: 0,
      lineHeight: 1,
      width: '100%'
    }, textStyle || {}),
    onClick: onTextClick
  }, children), /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: onClear
  }, /*#__PURE__*/React__default['default'].createElement(Button, {
    icon: /*#__PURE__*/React__default['default'].createElement(icons.CloseOutlined, {
      style: {
        fontSize: 11
      }
    }),
    onClick: onClear,
    soft: true,
    style: {
      color: 'white',
      marginLeft: 8
    }
  })));
};

var Textfield = function Textfield(props) {
  var className = props.className,
      label = props.label,
      prefix = props.prefix,
      suffix = props.suffix,
      value = props.value,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onPressEnter = props.onPressEnter,
      rest = _objectWithoutProperties(props, ["className", "label", "prefix", "suffix", "value", "onChange", "onBlur", "onPressEnter"]);

  var input = React.useRef(null);
  var focusInput = React.useCallback(function () {
    if (input.current) input.current.focus();
  }, [input]);
  var onKeyPress = React.useCallback(function (e) {
    if (["enter", "Enter"].indexOf(e.key) > -1) if (onPressEnter) onPressEnter(e);
  }, [onPressEnter]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "neumorphic-input",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: label
  }, /*#__PURE__*/React__default['default'].createElement("p", {
    className: "no-select",
    style: {
      fontWeight: 500
    },
    onClick: focusInput
  }, label)), /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.row), {}, {
      alignItems: 'center'
    })
  }, prefix, /*#__PURE__*/React__default['default'].createElement("input", _extends({
    className: "".concat(className || "", " input"),
    style: {
      width: '100%'
    },
    value: value || "",
    ref: input,
    onChange: onChange,
    onBlur: onBlur,
    onKeyPress: onKeyPress
  }, rest)), suffix));
};

var TextListField = function TextListField(props) {
  var _value = props.value,
      _onChange = props.onChange,
      listContainerStyle = props.listContainerStyle,
      _descriptionKey = props.descriptionKey,
      valuesRenderer = props.valuesRenderer,
      label = props.label,
      valueTransformer = props.valueTransformer;
  var descriptionKey = React.useMemo(function () {
    return _descriptionKey || "name";
  }, [_descriptionKey]);

  var _useState = React.useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var values = React.useMemo(function () {
    return _value || [];
  }, [_value]);
  var onSave = React.useCallback(function (e) {
    if (e) e.preventDefault();
    var newValue = valueTransformer ? valueTransformer(value) : value;
    if (!newValue[descriptionKey]) return;

    if (newValue.index !== undefined) {
      var index = newValue.index;
      delete newValue.index;
      values[index] = newValue;

      _onChange(_toConsumableArray(values));
    } else {
      _onChange([].concat(_toConsumableArray(values), [newValue]));
    }

    setValue({});
  }, [value, valueTransformer, values, _onChange, descriptionKey]);
  var onClear = React.useCallback(function (index) {
    values.splice(index, 1);

    _onChange(_toConsumableArray(values));
  }, [values, _onChange]);
  var commitChange = React.useCallback(function (index, _newValue) {
    var newValue = valueTransformer ? valueTransformer(_newValue) : _newValue;
    values[index] = newValue;

    _onChange(_toConsumableArray(values));
  }, [values, valueTransformer, _onChange]);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.grid), listContainerStyle || {})
  }, values.map(function (item, index) {
    return valuesRenderer({
      item: item,
      index: index,
      onClear: onClear,
      setValue: setValue,
      onSave: onSave,
      onChange: commitChange
    });
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.row), {}, {
      marginTop: 8
    })
  }, /*#__PURE__*/React__default['default'].createElement(Textfield, {
    value: value[descriptionKey],
    label: label,
    onChange: function onChange(e) {
      return setValue(_objectSpread2(_objectSpread2({}, value), {}, _defineProperty({}, descriptionKey, e.target.value)));
    },
    onPressEnter: onSave,
    onBlur: onSave,
    suffix: /*#__PURE__*/React__default['default'].createElement(Button, {
      icon: /*#__PURE__*/React__default['default'].createElement(icons.CheckOutlined, null),
      type: "primary",
      disabled: !value[descriptionKey],
      onClick: onSave
    })
  })));
};

var ThreeDot = function ThreeDot(props) {
  var children = props.children;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      display: 'inline-block',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: '100%'
    }
  }, /*#__PURE__*/React__default['default'].createElement(antd.Tooltip, {
    title: children
  }, children));
};

exports.AttachmentImage = AttachmentImage;
exports.Button = Button;
exports.ColorPicker = ColorPicker;
exports.DateDescription = DateDescription;
exports.DescriptionIcon = DescriptionIcon;
exports.DescriptionOverflowImages = DescriptionOverflowImages;
exports.DescriptionRow = DescriptionRow;
exports.EmptyResult = EmptyResult;
exports.Header = Header;
exports.IncDecField = IncDecField;
exports.InfoRow = InfoRow;
exports.InfoRowForm = InfoRowForm;
exports.List = List;
exports.ListItem = ListItem;
exports.Loading = Loading;
exports.Neumorphic = Neumorphic;
exports.OverflowImages = OverflowImages;
exports.PageTitle = PageTitle;
exports.PostCard = PostCard;
exports.QuantityBadge = QuantityBadge;
exports.QuantityField = QuantityField;
exports.QueryAutoComplete = QueryAutoComplete;
exports.QuerySelect = QuerySelect;
exports.Rate = Rate;
exports.RowStretch = RowStretch;
exports.Section = Section;
exports.SelectItemsRenderer = SelectItemsRenderer;
exports.Shimmer = Shimmer;
exports.StarCount = StarCount;
exports.Tag = Tag;
exports.TextListField = TextListField;
exports.Textfield = Textfield;
exports.ThreeDot = ThreeDot;
