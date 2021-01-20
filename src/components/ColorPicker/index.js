import React from 'react';
import {ColorPicker} from "@reactivers/generic-ui";

const NColorPicker = props => {
    const {inputClassName: _inputClassName, colorClassName: _colorClassName, ...rest} = props;
    let inputClassName = "neumorphic-input";
    let colorClassName = "neumorphic-outset-soft";

    if (_inputClassName) inputClassName += _inputClassName;
    if (_colorClassName) colorClassName += _colorClassName;

    return <ColorPicker inputClassName={inputClassName} colorClassName={colorClassName} {...rest}/>
}

export default NColorPicker;
