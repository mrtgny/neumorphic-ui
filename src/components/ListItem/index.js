import React from 'react';
import {takeIf} from "@reactivers/hooks";
import {ListItem} from "@reactivers/generic-ui";

const NListItem = props => {
    const {
        className: _className,
        onClick,
        selected,
        ...rest
    } = props;

    let className = `${takeIf(onClick, "neumorphic-clickable")} ${takeIf(selected, "neumorphic-outset")}`;
    if (_className) className += _className;

    return <ListItem className={className} onClick={onClick} {...rest} />
}

export default NListItem
