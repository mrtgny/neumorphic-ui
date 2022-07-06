'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var genericUi = require('@reactivers/generic-ui');
var React = require('react');
var hooks = require('@reactivers/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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

const NButton = props => {
  const {
    type,
    className: _className,
    neumorphic: _neumorphic,
    soft,
    selected,
    ...rest
  } = props;
  const neumorphic = hooks.takeUndefinedAsTrue(_neumorphic);
  let className = hooks.takeIf(neumorphic && hooks.isNullOrUndefined(selected), `neumorphic-button${hooks.takeIf(soft, '-soft', '')}`, "neumorphic-clickable");
  className += hooks.takeIf(selected, " neumorphic-inset", "");

  if (!!type) {
    className += ` button-${type}-neumorphic`;
  }

  if (_className) className += ` ${_className || ""}`;
  return /*#__PURE__*/React__default["default"].createElement(genericUi.Button, _extends({
    className: className
  }, rest));
};

const NCard = props => {
  const {
    className: _className,
    cardStyle: _cardStyle,
    ...rest
  } = props;
  let cardStyle = {
    backgroundColor: 'transparent'
  };
  if (_cardStyle) cardStyle = { ...cardStyle,
    ..._cardStyle
  };
  let className = "neumorphic-outset ";
  if (_className) className += _className;
  return /*#__PURE__*/React__default["default"].createElement(genericUi.Card, _extends({
    className: className,
    cardStyle: cardStyle
  }, rest));
};

const NColorPicker = props => {
  const {
    inputClassName: _inputClassName,
    colorClassName: _colorClassName,
    ...rest
  } = props;
  let inputClassName = "neumorphic-input";
  let colorClassName = "neumorphic-outset-soft";
  if (_inputClassName) inputClassName += _inputClassName;
  if (_colorClassName) colorClassName += _colorClassName;
  return /*#__PURE__*/React__default["default"].createElement(genericUi.ColorPicker, _extends({
    inputClassName: inputClassName,
    colorClassName: colorClassName
  }, rest));
};

const NEmptyResult = props => {
  const {
    iconClassName: _iconClassName,
    ...rest
  } = props;
  let iconClassName = "neumorphic-outset ";
  if (_iconClassName) iconClassName += _iconClassName;
  return /*#__PURE__*/React__default["default"].createElement(genericUi.EmptyResult, _extends({
    iconClassName: iconClassName
  }, rest));
};

const NListItem = props => {
  const {
    className: _className,
    onClick,
    selected,
    ...rest
  } = props;
  let className = `${hooks.takeIf(onClick, "neumorphic-clickable")} ${hooks.takeIf(selected, "neumorphic-outset")}`;
  if (_className) className += _className;
  return /*#__PURE__*/React__default["default"].createElement(genericUi.ListItem, _extends({
    className: className,
    onClick: onClick
  }, rest));
};

const Loading = props => {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: { ...genericUi.appStyles.center
    }
  }, hooks.getLocale({
    name: hooks.Locales.Loading
  }));
};

const Modal = props => /*#__PURE__*/React__default["default"].createElement(genericUi.Modal, props);

const Neumorphic = props => {
  const {
    style,
    type: _type,
    children
  } = props;
  const type = hooks.coalasce(_type, 'outset');
  const className = `neumorphic-${type}`;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: className,
    style: { ...(style || {})
    }
  }, children);
};

const notificationPusher = props => {
  const {
    className: _className,
    onClick
  } = props;
  let className = `${hooks.takeIf(onClick, "neumorphic-clickable ")} neumorphic-outset`;
  if (_className) className += _className;

  genericUi.notificationPusher({ ...props,
    className
  });
};

genericUi.notification.success = props => {
  notificationPusher({ ...props,
    type: "success"
  });
};

genericUi.notification.error = props => {
  notificationPusher({ ...props,
    type: "error"
  });
};

genericUi.notification.warning = props => {
  notificationPusher({ ...props,
    type: "warning"
  });
};

genericUi.notification.info = props => {
  notificationPusher({ ...props,
    type: "info"
  });
};

const PageTitle = props => {
  const {
    title
  } = props;
  return /*#__PURE__*/React__default["default"].createElement("h1", {
    className: "neumorphic-title"
  }, title);
};

const NSelectfield = props => {
  const {
    className: _className,
    ...rest
  } = props;
  let className = 'neumorphic-input';
  if (_className) className += _className;
  return /*#__PURE__*/React__default["default"].createElement(genericUi.Selectfield, _extends({
    className: className,
    selectFieldClassName: "neumorphic-select-field"
  }, rest));
};

const NTag = props => {
  const {
    className: _className,
    neumorphic: _neumorphic,
    closeButtonClassName: _closeButtonClassName,
    ...rest
  } = props;
  const neumorphic = hooks.takeUndefinedAsTrue(_neumorphic);
  let className = `${hooks.takeIf(neumorphic, "neumorphic-outset-soft")} ${_className || ""}`;
  let closeButtonClassName = "neumorphic-outset-soft ";
  if (_closeButtonClassName) closeButtonClassName += _closeButtonClassName;
  return /*#__PURE__*/React__default["default"].createElement(genericUi.Tag, _extends({
    className: className,
    closeButtonClassName: closeButtonClassName
  }, rest));
};

const NTextfield = props => {
  const {
    containerClassName: _containerClassName,
    ...rest
  } = props;
  let containerClassName = "neumorphic-input ";
  if (_containerClassName) containerClassName += _containerClassName;
  return /*#__PURE__*/React__default["default"].createElement(genericUi.Textfield, _extends({
    containerClassName: containerClassName
  }, rest));
};

const NTextListField = props => {
  const {
    textfieldContainerClassName: _textfieldContainerClassName,
    checkIcon,
    ...rest
  } = props;
  let textfieldContainerClassName = "neumorphic-input ";
  if (textfieldContainerClassName) textfieldContainerClassName += _textfieldContainerClassName;
  return /*#__PURE__*/React__default["default"].createElement(genericUi.TextListField, _extends({
    textfieldContainerClassName: textfieldContainerClassName,
    checkButton: p => /*#__PURE__*/React__default["default"].createElement(NButton, _extends({
      icon: checkIcon,
      type: "primary"
    }, p))
  }, rest));
};

Object.defineProperty(exports, 'Badge', {
  enumerable: true,
  get: function () { return genericUi.Badge; }
});
Object.defineProperty(exports, 'Col', {
  enumerable: true,
  get: function () { return genericUi.Col; }
});
Object.defineProperty(exports, 'FadeAnimation', {
  enumerable: true,
  get: function () { return genericUi.FadeAnimation; }
});
Object.defineProperty(exports, 'Field', {
  enumerable: true,
  get: function () { return genericUi.Field; }
});
Object.defineProperty(exports, 'Form', {
  enumerable: true,
  get: function () { return genericUi.Form; }
});
Object.defineProperty(exports, 'Grid', {
  enumerable: true,
  get: function () { return genericUi.Grid; }
});
Object.defineProperty(exports, 'Header', {
  enumerable: true,
  get: function () { return genericUi.Header; }
});
Object.defineProperty(exports, 'Image', {
  enumerable: true,
  get: function () { return genericUi.Image; }
});
Object.defineProperty(exports, 'IncDecField', {
  enumerable: true,
  get: function () { return genericUi.IncDecField; }
});
Object.defineProperty(exports, 'InfiniteScroll', {
  enumerable: true,
  get: function () { return genericUi.InfiniteScroll; }
});
Object.defineProperty(exports, 'Mapper', {
  enumerable: true,
  get: function () { return genericUi.Mapper; }
});
Object.defineProperty(exports, 'OverflowImages', {
  enumerable: true,
  get: function () { return genericUi.OverflowImages; }
});
Object.defineProperty(exports, 'Popover', {
  enumerable: true,
  get: function () { return genericUi.Popover; }
});
Object.defineProperty(exports, 'Rate', {
  enumerable: true,
  get: function () { return genericUi.Rate; }
});
Object.defineProperty(exports, 'Row', {
  enumerable: true,
  get: function () { return genericUi.Row; }
});
Object.defineProperty(exports, 'Section', {
  enumerable: true,
  get: function () { return genericUi.Section; }
});
Object.defineProperty(exports, 'Show', {
  enumerable: true,
  get: function () { return genericUi.Show; }
});
Object.defineProperty(exports, 'ThreeDot', {
  enumerable: true,
  get: function () { return genericUi.ThreeDot; }
});
Object.defineProperty(exports, 'Upload', {
  enumerable: true,
  get: function () { return genericUi.Upload; }
});
Object.defineProperty(exports, 'appStyles', {
  enumerable: true,
  get: function () { return genericUi.appStyles; }
});
Object.defineProperty(exports, 'notification', {
  enumerable: true,
  get: function () { return genericUi.notification; }
});
Object.defineProperty(exports, 'useForm', {
  enumerable: true,
  get: function () { return genericUi.useForm; }
});
exports.Button = NButton;
exports.Card = NCard;
exports.ColorPicker = NColorPicker;
exports.EmptyResult = NEmptyResult;
exports.ListItem = NListItem;
exports.Loading = Loading;
exports.Modal = Modal;
exports.Neumorphic = Neumorphic;
exports.PageTitle = PageTitle;
exports.Selectfield = NSelectfield;
exports.Tag = NTag;
exports.TextListField = NTextListField;
exports.Textfield = NTextfield;
