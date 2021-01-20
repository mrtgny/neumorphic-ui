import React from "react";
import {takeIf, takeUndefinedAsTrue} from "@reactivers/hooks";
import {Tag} from "@reactivers/generic-ui";

const NTag = props => {
    const {
        className: _className,
        neumorphic: _neumorphic,
        closeButtonClassName: _closeButtonClassName,
        ...rest
    } = props

    const neumorphic = takeUndefinedAsTrue(_neumorphic);
    let className = `${takeIf(neumorphic, "neumorphic-outset-soft")} ${_className || ""}`

    let closeButtonClassName = "neumorphic-outset-soft ";
    if (_closeButtonClassName) closeButtonClassName += _closeButtonClassName;

    return <Tag className={className}
                closeButtonClassName={closeButtonClassName}
                {...rest} />
}

export default NTag;
