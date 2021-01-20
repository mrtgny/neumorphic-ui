import React from "react";
import {Textfield} from "@reactivers/generic-ui";

const NTextfield = props => {
    const {containerClassName: _containerClassName, ...rest} = props;
    let containerClassName = "neumorphic-input "
    if (_containerClassName)
        containerClassName += _containerClassName

    return <Textfield containerClassName={containerClassName} {...rest} />
}

export default NTextfield;
