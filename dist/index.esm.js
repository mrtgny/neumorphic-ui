import { Button, Card, ColorPicker, EmptyResult, ListItem, appStyles, Modal as Modal$1, notification, notificationPusher as notificationPusher$1, Selectfield, Tag, Textfield, TextListField } from '@reactivers/generic-ui';
export { Badge, Col, FadeAnimation, Field, Form, Grid, Header, Image, IncDecField, InfiniteScroll, Mapper, OverflowImages, Popover, Rate, Redirect, Row, Section, Show, ThreeDot, Upload, appStyles, notification, useForm } from '@reactivers/generic-ui';
import React from 'react';
import { takeUndefinedAsTrue, takeIf, isNullOrUndefined, getLocale, Locales, coalasce } from '@reactivers/hooks';

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

var NButton = function NButton(props) {
  var type = props.type,
      _className = props.className,
      _neumorphic = props.neumorphic,
      soft = props.soft,
      selected = props.selected,
      rest = _objectWithoutProperties(props, ["type", "className", "neumorphic", "soft", "selected"]);

  var neumorphic = takeUndefinedAsTrue(_neumorphic);
  var className = takeIf(neumorphic && isNullOrUndefined(selected), "neumorphic-button".concat(takeIf(soft, '-soft', '')), "neumorphic-clickable");
  className += takeIf(selected, " neumorphic-inset", "");

  if (!!type) {
    className += " button-".concat(type, "-neumorphic");
  }

  if (_className) className += " ".concat(_className || "");
  return /*#__PURE__*/React.createElement(Button, _extends({
    className: className
  }, rest));
};

var NCard = function NCard(props) {
  var _className = props.className,
      _cardStyle = props.cardStyle,
      rest = _objectWithoutProperties(props, ["className", "cardStyle"]);

  var cardStyle = {
    backgroundColor: 'transparent'
  };
  if (_cardStyle) cardStyle = _objectSpread2(_objectSpread2({}, cardStyle), _cardStyle);
  var className = "neumorphic-outset ";
  if (_className) className += _className;
  return /*#__PURE__*/React.createElement(Card, _extends({
    className: className,
    cardStyle: cardStyle
  }, rest));
};

var NColorPicker = function NColorPicker(props) {
  var _inputClassName = props.inputClassName,
      _colorClassName = props.colorClassName,
      rest = _objectWithoutProperties(props, ["inputClassName", "colorClassName"]);

  var inputClassName = "neumorphic-input";
  var colorClassName = "neumorphic-outset-soft";
  if (_inputClassName) inputClassName += _inputClassName;
  if (_colorClassName) colorClassName += _colorClassName;
  return /*#__PURE__*/React.createElement(ColorPicker, _extends({
    inputClassName: inputClassName,
    colorClassName: colorClassName
  }, rest));
};

var NEmptyResult = function NEmptyResult(props) {
  var _iconClassName = props.iconClassName,
      rest = _objectWithoutProperties(props, ["iconClassName"]);

  var iconClassName = "neumorphic-outset ";
  if (_iconClassName) iconClassName += _iconClassName;
  return /*#__PURE__*/React.createElement(EmptyResult, _extends({
    iconClassName: iconClassName
  }, rest));
};

var NListItem = function NListItem(props) {
  var _className = props.className,
      onClick = props.onClick,
      selected = props.selected,
      rest = _objectWithoutProperties(props, ["className", "onClick", "selected"]);

  var className = "".concat(takeIf(onClick, "neumorphic-clickable"), " ").concat(takeIf(selected, "neumorphic-outset"));
  if (_className) className += _className;
  return /*#__PURE__*/React.createElement(ListItem, _extends({
    className: className,
    onClick: onClick
  }, rest));
};

var Loading = function Loading(props) {
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({}, appStyles.center)
  }, getLocale({
    name: Locales.Loading
  }));
};

var Modal = function Modal(props) {
  return /*#__PURE__*/React.createElement(Modal$1, props);
};

var Neumorphic = function Neumorphic(props) {
  var style = props.style,
      _type = props.type,
      children = props.children;
  var type = coalasce(_type, 'outset');
  var className = "neumorphic-".concat(type);
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: _objectSpread2({}, style || {})
  }, children);
};

var notificationPusher = function notificationPusher(props) {
  var _className = props.className,
      onClick = props.onClick;
  var className = "".concat(takeIf(onClick, "neumorphic-clickable "), " neumorphic-outset");
  if (_className) className += _className;

  notificationPusher$1(_objectSpread2(_objectSpread2({}, props), {}, {
    className: className
  }));
};

notification.success = function (props) {
  notificationPusher(_objectSpread2(_objectSpread2({}, props), {}, {
    type: "success"
  }));
};

notification.error = function (props) {
  notificationPusher(_objectSpread2(_objectSpread2({}, props), {}, {
    type: "error"
  }));
};

notification.warning = function (props) {
  notificationPusher(_objectSpread2(_objectSpread2({}, props), {}, {
    type: "warning"
  }));
};

notification.info = function (props) {
  notificationPusher(_objectSpread2(_objectSpread2({}, props), {}, {
    type: "info"
  }));
};

var PageTitle = function PageTitle(props) {
  var title = props.title;
  return /*#__PURE__*/React.createElement("h1", {
    className: "neumorphic-title"
  }, title);
};

var NSelectfield = function NSelectfield(props) {
  var _className = props.className,
      rest = _objectWithoutProperties(props, ["className"]);

  var className = 'neumorphic-input';
  if (_className) className += _className;
  return /*#__PURE__*/React.createElement(Selectfield, _extends({
    className: className,
    selectFieldClassName: "neumorphic-select-field"
  }, rest));
};

var NTag = function NTag(props) {
  var _className = props.className,
      _neumorphic = props.neumorphic,
      _closeButtonClassName = props.closeButtonClassName,
      rest = _objectWithoutProperties(props, ["className", "neumorphic", "closeButtonClassName"]);

  var neumorphic = takeUndefinedAsTrue(_neumorphic);
  var className = "".concat(takeIf(neumorphic, "neumorphic-outset-soft"), " ").concat(_className || "");
  var closeButtonClassName = "neumorphic-outset-soft ";
  if (_closeButtonClassName) closeButtonClassName += _closeButtonClassName;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: className,
    closeButtonClassName: closeButtonClassName
  }, rest));
};

var NTextfield = function NTextfield(props) {
  var _containerClassName = props.containerClassName,
      rest = _objectWithoutProperties(props, ["containerClassName"]);

  var containerClassName = "neumorphic-input ";
  if (_containerClassName) containerClassName += _containerClassName;
  return /*#__PURE__*/React.createElement(Textfield, _extends({
    containerClassName: containerClassName
  }, rest));
};

var NTextListField = function NTextListField(props) {
  var _textfieldContainerClassName = props.textfieldContainerClassName,
      checkIcon = props.checkIcon,
      rest = _objectWithoutProperties(props, ["textfieldContainerClassName", "checkIcon"]);

  var textfieldContainerClassName = "neumorphic-input ";
  if (textfieldContainerClassName) textfieldContainerClassName += _textfieldContainerClassName;
  return /*#__PURE__*/React.createElement(TextListField, _extends({
    textfieldContainerClassName: textfieldContainerClassName,
    checkButton: function checkButton(p) {
      return /*#__PURE__*/React.createElement(NButton, _extends({
        icon: checkIcon,
        type: "primary"
      }, p));
    }
  }, rest));
};

export { NButton as Button, NCard as Card, NColorPicker as ColorPicker, NEmptyResult as EmptyResult, NListItem as ListItem, Loading, Modal, Neumorphic, PageTitle, NSelectfield as Selectfield, NTag as Tag, NTextListField as TextListField, NTextfield as Textfield };
