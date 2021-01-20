import React from 'react';
import {EmptyResult} from "@reactivers/generic-ui";

const NEmptyResult = props => {
    const {iconClassName: _iconClassName, ...rest} = props;
    let iconClassName = "neumorphic-outset "
    if (_iconClassName)
        iconClassName += _iconClassName;

    return <EmptyResult iconClassName={iconClassName} {...rest}/>

}
export default NEmptyResult;
