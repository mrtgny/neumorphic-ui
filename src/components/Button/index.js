import React from 'react';
import {isNullOrUndefined, takeIf, takeUndefinedAsTrue} from "@reactivers/hooks";
import {Button} from '@reactivers/generic-ui';

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
        className += ` button-${type}-neumorphic`
    }

    if (_className) className += ` ${_className || ""}`

    return <Button className={className} {...rest} />

}

export default NButton;
