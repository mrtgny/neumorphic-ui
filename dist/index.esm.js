import { Button, Card, ColorPicker, EmptyResult, ListItem, appStyles, Modal as Modal$1, notification, notificationPusher as notificationPusher$1, Selectfield, Tag, Textfield, TextListField } from '@reactivers/generic-ui';
export { Badge, Col, FadeAnimation, Field, Form, Grid, Header, Image, IncDecField, InfiniteScroll, Mapper, OverflowImages, Popover, Rate, Row, Section, Show, ThreeDot, Upload, appStyles, notification, useForm } from '@reactivers/generic-ui';
import React from 'react';
import { takeUndefinedAsTrue, takeIf, isNullOrUndefined, getLocale, Locales, coalasce } from '@reactivers/hooks';

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
  const neumorphic = takeUndefinedAsTrue(_neumorphic);
  let className = takeIf(neumorphic && isNullOrUndefined(selected), `neumorphic-button${takeIf(soft, '-soft', '')}`, "neumorphic-clickable");
  className += takeIf(selected, " neumorphic-inset", "");

  if (!!type) {
    className += ` button-${type}-neumorphic`;
  }

  if (_className) className += ` ${_className || ""}`;
  return /*#__PURE__*/React.createElement(Button, _extends({
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
  return /*#__PURE__*/React.createElement(Card, _extends({
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
  return /*#__PURE__*/React.createElement(ColorPicker, _extends({
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
  return /*#__PURE__*/React.createElement(EmptyResult, _extends({
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
  let className = `${takeIf(onClick, "neumorphic-clickable")} ${takeIf(selected, "neumorphic-outset")}`;
  if (_className) className += _className;
  return /*#__PURE__*/React.createElement(ListItem, _extends({
    className: className,
    onClick: onClick
  }, rest));
};

const Loading = props => {
  return /*#__PURE__*/React.createElement("div", {
    style: { ...appStyles.center
    }
  }, getLocale({
    name: Locales.Loading
  }));
};

const Modal = props => /*#__PURE__*/React.createElement(Modal$1, props);

const Neumorphic = props => {
  const {
    style,
    type: _type,
    children
  } = props;
  const type = coalasce(_type, 'outset');
  const className = `neumorphic-${type}`;
  return /*#__PURE__*/React.createElement("div", {
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
  let className = `${takeIf(onClick, "neumorphic-clickable ")} neumorphic-outset`;
  if (_className) className += _className;

  notificationPusher$1({ ...props,
    className
  });
};

notification.success = props => {
  notificationPusher({ ...props,
    type: "success"
  });
};

notification.error = props => {
  notificationPusher({ ...props,
    type: "error"
  });
};

notification.warning = props => {
  notificationPusher({ ...props,
    type: "warning"
  });
};

notification.info = props => {
  notificationPusher({ ...props,
    type: "info"
  });
};

const PageTitle = props => {
  const {
    title
  } = props;
  return /*#__PURE__*/React.createElement("h1", {
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
  return /*#__PURE__*/React.createElement(Selectfield, _extends({
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
  const neumorphic = takeUndefinedAsTrue(_neumorphic);
  let className = `${takeIf(neumorphic, "neumorphic-outset-soft")} ${_className || ""}`;
  let closeButtonClassName = "neumorphic-outset-soft ";
  if (_closeButtonClassName) closeButtonClassName += _closeButtonClassName;
  return /*#__PURE__*/React.createElement(Tag, _extends({
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
  return /*#__PURE__*/React.createElement(Textfield, _extends({
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
  return /*#__PURE__*/React.createElement(TextListField, _extends({
    textfieldContainerClassName: textfieldContainerClassName,
    checkButton: p => /*#__PURE__*/React.createElement(NButton, _extends({
      icon: checkIcon,
      type: "primary"
    }, p))
  }, rest));
};

export { NButton as Button, NCard as Card, NColorPicker as ColorPicker, NEmptyResult as EmptyResult, NListItem as ListItem, Loading, Modal, Neumorphic, PageTitle, NSelectfield as Selectfield, NTag as Tag, NTextListField as TextListField, NTextfield as Textfield };
