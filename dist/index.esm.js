import React, { useState, useCallback, useRef, useEffect, cloneElement, useMemo } from 'react';
import 'moment';
import 'moment/locale/tr';
import 'react-router-dom';
import { createBrowserHistory } from 'history';
import { SwatchesPicker } from 'react-color';

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
var isNullOrUndefined = function isNullOrUndefined(item) {
  return item === null || item === undefined;
};
var coalasce = function coalasce(first, second) {
  if (isNullOrUndefined(first)) return second;
  return first;
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

var history = createBrowserHistory();

var Show = function Show(props) {
  var condition = props.condition,
      willUnmount = props.willUnmount,
      children = props.children;
  useEffect(function () {
    return willUnmount;
  }, [willUnmount]);
  if (condition) return children;
  return null;
};

var Mapper = function Mapper(props) {
  var items = props.items,
      map = props.map,
      children = props.children;
  if (children) return (items || []).map(function (item, index) {
    return /*#__PURE__*/cloneElement(children, _objectSpread2$1(_objectSpread2$1({}, item), {}, {
      key: index
    }));
  });
  return (items || []).map(map);
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
  centerInColumn: {
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: 'column'
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
    objectFit: "cover",
    borderRadius: "50%"
  },
  threeDot: {
    whiteSpace: 'nowrap',
    width: '100%',
    display: 'inline-block',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  toolTip: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: 'white',
    padding: "2px 6px",
    borderRadius: 10
  }
};

var Image = function Image(props) {
  var style = props.style,
      className = props.className,
      hidePlaceholder = props.hidePlaceholder,
      src = props.src,
      alt = props.alt,
      _onLoad = props.onLoad,
      _placheholder = props.placeholder,
      _size = props.size,
      rest = _objectWithoutProperties(props, ["style", "className", "hidePlaceholder", "src", "alt", "onLoad", "placeholder", "size"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loaded = _useState2[0],
      setLoaded = _useState2[1];

  var size = takeIf(_size, {
    width: _size,
    height: _size,
    borderRadius: '50%'
  }, {});
  var placeholder = coalasce(_placheholder, "P");
  var fontSize = takeIf(isNaN(_size / 2), 24, _size / 2);
  var displayImage = takeIf(loaded, undefined, 'none');
  var onLoad = useCallback(function () {
    setLoaded(true);
    if (_onLoad) _onLoad();
  }, [_onLoad]);
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, size), appStyles.defaultShadow), appStyles.center), {}, {
      backgroundColor: "#eee",
      overflow: "hidden"
    }, style),
    className: className
  }, /*#__PURE__*/React.createElement(Show, {
    condition: src
  }, /*#__PURE__*/React.createElement("img", _extends({
    onLoad: onLoad,
    src: src,
    alt: alt,
    style: _objectSpread2(_objectSpread2(_objectSpread2({}, appStyles.roundedImage), style), {}, {
      display: displayImage
    })
  }, rest))), /*#__PURE__*/React.createElement(Show, {
    condition: !loaded && !hidePlaceholder
  }, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({
      width: '100%',
      height: '100%'
    }, appStyles.center)
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: fontSize,
      fontWeight: 'bold',
      padding: 4
    }
  }, placeholder))));
};

var Badge = function Badge(props) {
  var title = props.title,
      children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      borderRadius: 10,
      backgroundColor: '#eee'
    }
  }, title), children);
};

var Button = function Button(props) {
  var style = props.style,
      icon = props.icon,
      title = props.title,
      _className = props.className,
      _iconSize = props.iconSize,
      _onClick = props.onClick,
      _htmlType = props.htmlType,
      children = props.children;
  var iconSize = coalasce(_iconSize, 32);
  var htmlType = coalasce(_htmlType, "button");
  var iconButton = !children && !title;
  var className = "no-select ";
  var onClick = useCallback(function (e) {
    if (htmlType !== 'submit') e.preventDefault();
    if (_onClick) _onClick(e);
  }, [htmlType, _onClick]);
  if (_className) className += " ".concat(_className || "");
  return /*#__PURE__*/React.createElement("button", {
    style: _objectSpread2({
      justifyContent: 'center',
      alignItems: 'center',
      width: takeIf(iconButton, iconSize),
      minWidth: takeIf(iconButton, iconSize),
      height: takeIf(iconButton, iconSize),
      minHeight: takeIf(iconButton, iconSize),
      borderRadius: takeIf(iconButton, "50%")
    }, style || {}),
    type: htmlType,
    onClick: onClick,
    className: className
  }, /*#__PURE__*/React.createElement(Show, {
    condition: icon
  }, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({
      marginRight: takeIf(!iconButton, 8),
      fontSize: takeIf(iconButton, 18, 12),
      width: takeIf(iconButton, "100%", 12),
      height: takeIf(iconButton, "100%", 12)
    }, appStyles.center)
  }, icon)), /*#__PURE__*/React.createElement("div", null, children || title));
};

var styles = {
  popover: {
    position: 'absolute',
    zIndex: '2'
  },
  cover: {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
    zIndex: 1
  }
};

var Popover = function Popover(props) {
  var overlay = props.overlay,
      _trigger = props.trigger,
      _alignment = props.alignment,
      children = props.children;
  var trigger = coalasce(_trigger, "click");
  var alignment = coalasce(_alignment, "bottom");
  var target = useRef(null);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      displayColorPicker = _useState2[0],
      setDisplayColorPicker = _useState2[1];

  var _useState3 = useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      position = _useState4[0],
      setPosition = _useState4[1];

  var showPopover = useCallback(function () {
    setDisplayColorPicker(true);

    if (target.current) {
      var _ref = target.current.getBoundingClientRect() || {},
          left = _ref.left,
          top = _ref.top,
          bottom = _ref.bottom,
          right = _ref.right,
          height = _ref.height;

      switch (alignment) {
        case "bottom":
          setPosition({
            left: left,
            top: bottom
          });
          break;

        case "top":
          setPosition({
            left: left,
            bottom: top
          });
          break;

        case "left":
          setPosition({
            right: left,
            top: top
          });
          break;

        case "right":
          setPosition({
            left: right,
            top: top
          });
          break;
      }
    }
  }, [target]);
  var showPopoverClick = useCallback(function (e) {
    if (trigger === "click") showPopover();
  }, [showPopover, trigger]);
  var showPopoverMouseEnter = useCallback(function (e) {
    if (trigger === "mouse") showPopover();
  }, [showPopover, trigger]);
  var stopPropagation = useCallback(function (e) {
    e.stopPropagation();
  }, []);
  var closePopover = useCallback(function () {
    setDisplayColorPicker(false);
  }, []);
  var closePopoverClick = useCallback(function () {
    if (trigger === "click") closePopover();
  }, [target, closePopover]);
  var closePopoverMouseEnter = useCallback(function () {
    if (trigger === "mouse") closePopover();
  }, [target, closePopover]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    onClick: showPopoverClick,
    onMouseEnter: showPopoverMouseEnter,
    ref: target
  }, children), /*#__PURE__*/React.createElement(Show, {
    condition: displayColorPicker
  }, /*#__PURE__*/React.createElement("div", {
    style: styles.cover,
    onClick: closePopoverClick,
    onMouseEnter: closePopoverMouseEnter
  }, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2(_objectSpread2({}, styles.popover), position),
    onClick: stopPropagation,
    onMouseEnter: stopPropagation
  }, overlay))));
};

var ColorPicker = function ColorPicker(props) {
  var label = props.label,
      _value = props.value,
      _onChange = props.onChange,
      title = props.title,
      inputClassName = props.inputClassName,
      colorClassName = props.colorClassName,
      children = props.children;
  var onChange = useCallback(function (_ref) {
    var hex = _ref.hex;

    _onChange(hex);
  }, [_onChange]);
  return /*#__PURE__*/React.createElement(Popover, {
    overlay: /*#__PURE__*/React.createElement("div", {
      style: {
        backgroundColor: 'white',
        padding: 16
      }
    }, /*#__PURE__*/React.createElement("h3", null, title || "Renk"), /*#__PURE__*/React.createElement(SwatchesPicker, {
      onChange: onChange
    }))
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Show, {
    condition: children
  }, children), /*#__PURE__*/React.createElement(Show, {
    condition: !children
  }, /*#__PURE__*/React.createElement("div", {
    className: inputClassName
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    className: colorClassName,
    style: {
      backgroundColor: _value,
      height: 32,
      width: '100%'
    }
  })))));
};

var EmptyResult = function EmptyResult(props) {
  var icon = props.icon,
      title = props.title,
      style = props.style,
      iconClassName = props.iconClassName,
      _size = props.size;
  var size = _size || 120;
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({}, style || {})
  }, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({
      width: '100%'
    }, appStyles.centerInColumn)
  }, /*#__PURE__*/React.createElement("div", {
    className: iconClassName,
    style: _objectSpread2(_objectSpread2({}, appStyles.center), appStyles.rounded(size))
  }, icon)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
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

var ListItem = function ListItem(props) {
  var style = props.style,
      avatar = props.avatar,
      title = props.title,
      lastItem = props.lastItem,
      titleRenderer = props.titleRenderer,
      description = props.description,
      className = props.className,
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
  var borderBottom = takeIf(lastItem, '1px solid #eee');
  var titleContainerClassName = takeIf(onTitleClick, "clickable", "");
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({
      borderBottom: borderBottom,
      padding: 4
    }, style || {}),
    className: className,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({
      display: "flex",
      alignItems: 'center'
    }, headerContainerStyle || {})
  }, /*#__PURE__*/React.createElement(Show, {
    condition: avatar
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginRight: takeIf(!!title || !!titleRenderer, 8, 0)
    }
  }, avatar)), /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({
      width: '100%',
      padding: 4
    }, titleContainerStyle || {}),
    onClick: onTitleClick,
    className: titleContainerClassName
  }, /*#__PURE__*/React.createElement(Show, {
    condition: titleRenderer
  }, titleRenderer), /*#__PURE__*/React.createElement(Show, {
    condition: title
  }, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({
      margin: 0,
      color: takeIf(selected, "#1890ff")
    }, titleStyle || {})
  }, title)), /*#__PURE__*/React.createElement(Show, {
    condition: subtitle
  }, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({
      margin: 0,
      fontSize: 10,
      color: 'black'
    }, subtitleStyle || {})
  }, subtitle)), /*#__PURE__*/React.createElement(Show, {
    condition: subtitleRenderer
  }, subtitleRenderer)), /*#__PURE__*/React.createElement(Show, {
    condition: description
  }, description)), children);
};

var OverflowImages = function OverflowImages(props) {
  var images = props.images,
      _maxCount = props.maxCount,
      size = props.size;
  var maxCount = _maxCount || 3;
  var overflowItemsCount = images.length - maxCount;
  var count = takeIf(overflowItemsCount > 0, "+".concat(overflowItemsCount));
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.center), {}, {
      flexDirection: 'column',
      marginRight: 8
    })
  }, /*#__PURE__*/React.createElement(Badge, {
    title: count
  }, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({}, appStyles.center)
  }, /*#__PURE__*/React.createElement(Mapper, {
    items: images.filter(function (_, index) {
      return index < maxCount;
    })
  }, /*#__PURE__*/React.createElement(OverflowImage, {
    size: size
  })))));
};

var OverflowImage = function OverflowImage(props) {
  var src = props.src,
      index = props.index,
      size = props.size;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid white',
      marginLeft: takeIf(index, -32),
      borderRadius: size
    },
    key: index
  }, /*#__PURE__*/React.createElement(Image, {
    src: src,
    key: index,
    size: size
  }));
};

var Card = function Card(props) {
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
      className = props.className,
      cardStyle = props.cardStyle,
      childrenContainerStyle = props.childrenContainerStyle,
      children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({
      borderRadius: 10,
      padding: 16
    }, style || {}),
    className: className
  }, /*#__PURE__*/React.createElement(Show, {
    condition: avatar || title || titleRenderer || description || subtitle
  }, /*#__PURE__*/React.createElement(ListItem, {
    avatar: avatar,
    title: title,
    titleRenderer: titleRenderer,
    style: _objectSpread2({
      margin: 0,
      padding: 0
    }, titleContainerStyle || {}),
    titleContainerStyle: headerStyle,
    titleStyle: _objectSpread2({
      fontSize: 18
    }, titleStyle || {}),
    description: description,
    subtitle: subtitle,
    onTitleClick: onTitleClick,
    onClick: onHeaderClick
  })), /*#__PURE__*/React.createElement(Show, {
    condition: children
  }, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.card), cardStyle || {})
  }, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({}, childrenContainerStyle || {})
  }, children))));
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
      onTextClick = props.onTextClick,
      closeIcon = props.closeIcon,
      onClear = props.onClear,
      closeButtonClassName = props.closeButtonClassName,
      closeButtonStyle = props.closeButtonStyle,
      children = props.children;
  var type = _type || "outlined";
  var color = _color || (generatedColor ? generatedColorFromString(description) : "#cccccc");
  var textColor = type === "filled" ? '#ffffff' : color || "";
  var backgroundColor = type === "filled" ? color : "".concat(changeColor(color, 150));
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2(_objectSpread2({
      padding: "8px 16px",
      borderRadius: 8,
      backgroundColor: backgroundColor,
      maxWidth: 'calc(100% - 16px)'
    }, appStyles.center), style || {}),
    className: "\n             ".concat(takeIf(onClick, "clickable", ""), "\n              ").concat(className || "", "\n              "),
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: takeIf(onTextClick, "clickable", ""),
    style: _objectSpread2({
      color: textColor,
      margin: 0,
      lineHeight: 1,
      width: '100%'
    }, textStyle || {}),
    onClick: onTextClick
  }, children), /*#__PURE__*/React.createElement(Show, {
    condition: onClear
  }, /*#__PURE__*/React.createElement(Button, {
    icon: closeIcon,
    onClick: onClear,
    className: closeButtonClassName,
    style: _objectSpread2({
      color: 'white',
      marginLeft: 8
    }, closeButtonStyle || {})
  })));
};

var Textfield = function Textfield(props) {
  var containerClassName = props.containerClassName,
      className = props.className,
      label = props.label,
      prefix = props.prefix,
      suffix = props.suffix,
      value = props.value,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onPressEnter = props.onPressEnter,
      rest = _objectWithoutProperties(props, ["containerClassName", "className", "label", "prefix", "suffix", "value", "onChange", "onBlur", "onPressEnter"]);

  var input = useRef(null);
  var focusInput = useCallback(function () {
    if (input.current) input.current.focus();
  }, [input]);
  var onKeyPress = useCallback(function (e) {
    if (["enter", "Enter"].indexOf(e.key) > -1) if (onPressEnter) onPressEnter(e);
  }, [onPressEnter]);
  return /*#__PURE__*/React.createElement("div", {
    className: containerClassName,
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Show, {
    condition: label
  }, /*#__PURE__*/React.createElement("p", {
    className: "no-select",
    style: {
      fontWeight: 500
    },
    onClick: focusInput
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.row), {}, {
      alignItems: 'center'
    })
  }, prefix, /*#__PURE__*/React.createElement("input", _extends({
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
      textfieldContainerClassName = props.textfieldContainerClassName,
      checkButton = props.checkButton,
      label = props.label,
      checkIcon = props.checkIcon,
      valueTransformer = props.valueTransformer;
  var descriptionKey = useMemo(function () {
    return _descriptionKey || "name";
  }, [_descriptionKey]);

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var values = useMemo(function () {
    return _value || [];
  }, [_value]);
  var onSave = useCallback(function (e) {
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
  var onClear = useCallback(function (index) {
    values.splice(index, 1);

    _onChange(_toConsumableArray(values));
  }, [values, _onChange]);
  var commitChange = useCallback(function (index, _newValue) {
    values[index] = valueTransformer ? valueTransformer(_newValue) : _newValue;

    _onChange(_toConsumableArray(values));
  }, [values, valueTransformer, _onChange]);
  var suffix = takeIf(checkButton, checkButton({
    disabled: !value[descriptionKey],
    onClick: onSave
  }), /*#__PURE__*/React.createElement(Button, {
    icon: checkIcon,
    type: "primary",
    disabled: !value[descriptionKey],
    onClick: onSave
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.row), {}, {
      marginTop: 8
    })
  }, /*#__PURE__*/React.createElement(Textfield, {
    value: value[descriptionKey],
    containerClassName: textfieldContainerClassName,
    label: label,
    onChange: function onChange(e) {
      return setValue(_objectSpread2(_objectSpread2({}, value), {}, _defineProperty({}, descriptionKey, e.target.value)));
    },
    onPressEnter: onSave,
    onBlur: onSave,
    suffix: suffix
  })));
};

var ThreeDot = function ThreeDot(props) {
  var title = props.title,
      children = props.children;
  return /*#__PURE__*/React.createElement(Popover, {
    trigger: "mouse",
    alignment: "top",
    overlay: /*#__PURE__*/React.createElement("div", {
      style: appStyles.toolTip
    }, title || children)
  }, /*#__PURE__*/React.createElement("div", {
    style: appStyles.threeDot
  }, children));
};

function _defineProperty$2(obj, key, value) {
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

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
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

  return _extends$1.apply(this, arguments);
}

function ownKeys$2(object, enumerableOnly) {
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

function _objectSpread2$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$2(Object(source), true).forEach(function (key) {
        _defineProperty$2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$2(Object(source)).forEach(function (key) {
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

function _defineProperty$3(obj, key, value) {
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

function ownKeys$3(object, enumerableOnly) {
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

function _objectSpread2$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$3(Object(source), true).forEach(function (key) {
        _defineProperty$3(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$3(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var mainColor$1 = "#002171";
var successColor$1 = "green";
var dangerColor$1 = "#EF5350";
var appURLs$1 = {
  HTTP_REST_SERVER: {
    development: "http://localhost:8080/api",
    production: "http://localhost:8080/api"
  },
  WS_REST_SERVER: {
    development: "ws://localhost:8080/ws",
    production: "ws://localhost:8080/ws"
  }
};
var APP_NAMES$1 = {
  WS_REST_SERVER: "WS_REST_SERVER",
  HTTP_REST_SERVER: "HTTP_REST_SERVER"
};
var getAppURLs$1 = function getAppURLs() {
  return appURLs$1;
};
var getAppNames$1 = function getAppNames() {
  return APP_NAMES$1;
};

var getAppURL$1 = function getAppURL(appname) {
  var NODE_ENV = process.env.NODE_ENV;
  var appURLs = getAppURLs$1() || {};
  return appURLs[appname][NODE_ENV];
};

var getMainColor$1 = function getMainColor() {
  return mainColor$1;
};
var getSuccessColor$1 = function getSuccessColor() {
  return successColor$1;
};
var getDangerColor$1 = function getDangerColor() {
  return dangerColor$1;
};
var constants$1 = {
  mainColor: getMainColor$1(),
  successColor: getSuccessColor$1(),
  mainDangerColor: getDangerColor$1(),
  REST_SERVER: getAppURL$1(getAppNames$1().HTTP_REST_SERVER),
  WS_SERVER: getAppURL$1(getAppNames$1().WS_REST_SERVER)
};

var trTRLocales$1 = {
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
var languageKeys$2 = ["tr"];

var exportLocales$2 = function exportLocales(languageKeys, languages) {
  var exp = {};
  languageKeys.forEach(function (i) {
    exp[i] = languages;
  });
  return exp;
};

var TRLocales$1 = exportLocales$2(languageKeys$2, trTRLocales$1);

var enUSLocales$1 = {
  Stores: function Stores() {
    return "Stores";
  },
  Home: function Home() {
    return "Home";
  }
};
var languageKeys$1$1 = ["en", "en-us"];

var exportLocales$1$1 = function exportLocales(languageKeys, languages) {
  var exp = {};
  languageKeys.forEach(function (i) {
    exp[i] = languages;
  });
  return exp;
};

var ENLocales$1 = exportLocales$1$1(languageKeys$1$1, enUSLocales$1);

var AllLocales$1 = _objectSpread2$3(_objectSpread2$3({}, TRLocales$1), ENLocales$1);
var takeUndefinedAsTrue = function takeUndefinedAsTrue(parameter) {
  return parameter === undefined ? true : parameter;
};
var takeIf$1 = function takeIf(condition, value) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

  if (condition) {
    return value;
  } else {
    return defaultValue;
  }
};
var isNullOrUndefined$1 = function isNullOrUndefined(item) {
  return item === null || item === undefined;
};
var coalasce$1 = function coalasce(first, second) {
  if (isNullOrUndefined$1(first)) return second;
  return first;
};
var monthsNumberArray$1 = Array(12).fill(0).map(function (_, index) {
  return index % 12 + 1;
});

var authActions$1 = {
  SET_TOKEN: "set-token",
  UPDATE_AUTH: "update-auth",
  LOGIN: 'login',
  LOGOUT: 'logout',
  SIGNUP: 'signup'
};
var notificationActions$1 = {
  PUSH_IN_APP_NOTIFICATION: 'pushInAppNotification',
  POP_IN_APP_NOTIFICATION: 'popInAppNotification'
};
var modalActions$1 = {
  SHOW_MODAL: 'show-modal',
  HIDE_MODAL: 'hide-modal',
  DELETE_MODAL: "delete-modal"
};
var lodaingActions$1 = {
  INCREASE_LOADING_QUEUE: 'increaseLoadingQueue',
  DECREASE_LOADING_QUEUE: 'decreaseLoadingQueue'
};
var socketActions$1 = {
  ADD_MESSAGE_LISTENER: 'addMessageListener',
  REMOVE_MESSAGE_LISTENER: 'removeMessageListener',
  SET_SOCKET: 'setSocket'
};

var actions$1 = _objectSpread2$3(_objectSpread2$3(_objectSpread2$3(_objectSpread2$3(_objectSpread2$3({}, authActions$1), notificationActions$1), modalActions$1), lodaingActions$1), socketActions$1);

var history$1 = createBrowserHistory();

var NButton = function NButton(props) {
  var type = props.type,
      _className = props.className,
      _neumorphic = props.neumorphic,
      soft = props.soft,
      selected = props.selected,
      rest = _objectWithoutProperties$1(props, ["type", "className", "neumorphic", "soft", "selected"]);

  var neumorphic = takeUndefinedAsTrue(_neumorphic);
  var className = takeIf$1(neumorphic && isNullOrUndefined$1(selected), "neumorphic-button".concat(takeIf$1(soft, '-soft', '')), "neumorphic-clickable");
  className += takeIf$1(selected, " neumorphic-inset", "");

  if (!!type) {
    className += " button-".concat(type, "-neumorphic");
  }

  if (_className) className += " ".concat(_className || "");
  return /*#__PURE__*/React.createElement(Button, _extends$1({
    className: className
  }, rest));
};

var NColorPicker = function NColorPicker(props) {
  var _inputClassName = props.inputClassName,
      _colorClassName = props.colorClassName,
      rest = _objectWithoutProperties$1(props, ["inputClassName", "colorClassName"]);

  var inputClassName = "neumorphic-input";
  var colorClassName = "neumorphic-outset-soft";
  if (_inputClassName) inputClassName += _inputClassName;
  if (_colorClassName) colorClassName += _colorClassName;
  return /*#__PURE__*/React.createElement(ColorPicker, _extends$1({
    inputClassName: inputClassName,
    colorClassName: colorClassName
  }, rest));
};

var NEmptyResult = function NEmptyResult(props) {
  var _iconClassName = props.iconClassName,
      rest = _objectWithoutProperties$1(props, ["iconClassName"]);

  var iconClassName = "neumorphic-outset ";
  if (_iconClassName) iconClassName += _iconClassName;
  return /*#__PURE__*/React.createElement(EmptyResult, _extends$1({
    iconClassName: iconClassName
  }, rest));
};

var NListItem = function NListItem(props) {
  var _className = props.className,
      onClick = props.onClick,
      selected = props.selected,
      rest = _objectWithoutProperties$1(props, ["className", "onClick", "selected"]);

  var className = "".concat(takeIf$1(onClick, "neumorphic-clickable"), " ").concat(takeIf$1(selected, "neumorphic-outset"));
  if (_className) className += _className;
  return /*#__PURE__*/React.createElement(ListItem, _extends$1({
    className: className,
    onClick: onClick
  }, rest));
};

var Loading = function Loading(props) {
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2$2({}, appStyles.center)
  }, "Y\xFCkleniyor");
};

var Neumorphic = function Neumorphic(props) {
  var style = props.style,
      _type = props.type,
      children = props.children;
  var type = coalasce$1(_type, 'outset');
  var className = "neumorphic-".concat(type);
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: _objectSpread2$2({}, style || {})
  }, children);
};

var PageTitle = function PageTitle(props) {
  var title = props.title;
  return /*#__PURE__*/React.createElement("h1", {
    className: "neumorphic-title"
  }, title);
};

var NCard = function NCard(props) {
  var _className = props.className,
      _cardStyle = props.cardStyle,
      rest = _objectWithoutProperties$1(props, ["className", "cardStyle"]);

  var cardStyle = {
    backgroundColor: 'transparent'
  };
  if (_cardStyle) cardStyle = _objectSpread2$2(_objectSpread2$2({}, cardStyle), _cardStyle);
  var className = "neumorphic-outset ";
  if (_className) className += _className;
  return /*#__PURE__*/React.createElement(Card, _extends$1({
    className: className,
    cardStyle: cardStyle
  }, rest));
};

var NTag = function NTag(props) {
  var _className = props.className,
      _neumorphic = props.neumorphic,
      _closeButtonClassName = props.closeButtonClassName,
      rest = _objectWithoutProperties$1(props, ["className", "neumorphic", "closeButtonClassName"]);

  var neumorphic = takeUndefinedAsTrue(_neumorphic);
  var className = "".concat(takeIf$1(neumorphic, "neumorphic-outset-soft"), " ").concat(_className || "");
  var closeButtonClassName = "neumorphic-outset-soft ";
  if (_closeButtonClassName) closeButtonClassName += _closeButtonClassName;
  return /*#__PURE__*/React.createElement(Tag, _extends$1({
    className: className,
    closeButtonClassName: closeButtonClassName
  }, rest));
};

var NTextfield = function NTextfield(props) {
  var _containerClassName = props.containerClassName,
      rest = _objectWithoutProperties$1(props, ["containerClassName"]);

  var containerClassName = "neumorphic-input ";
  if (_containerClassName) containerClassName += _containerClassName;
  return /*#__PURE__*/React.createElement(Textfield, _extends$1({
    containerClassName: containerClassName
  }, rest));
};

var NTextListField = function NTextListField(props) {
  var _textfieldContainerClassName = props.textfieldContainerClassName,
      checkIcon = props.checkIcon,
      rest = _objectWithoutProperties$1(props, ["textfieldContainerClassName", "checkIcon"]);

  var textfieldContainerClassName = "neumorphic-input ";
  if (textfieldContainerClassName) textfieldContainerClassName += _textfieldContainerClassName;
  return /*#__PURE__*/React.createElement(TextListField, _extends$1({
    textfieldContainerClassName: textfieldContainerClassName,
    checkButton: function checkButton(p) {
      return /*#__PURE__*/React.createElement(NButton, _extends$1({
        icon: checkIcon,
        type: "primary"
      }, p));
    }
  }, rest));
};

export { NButton as Button, NCard as Card, NColorPicker as ColorPicker, NEmptyResult as EmptyResult, Image, NListItem as ListItem, Loading, Neumorphic, OverflowImages, PageTitle, Popover, NTag as Tag, NTextListField as TextListField, NTextfield as Textfield, ThreeDot, appStyles };
