import React from 'react';
import {coalasce} from "@reactivers/hooks";

const Neumorphic = props => {
    const {style, type: _type, children} = props;
    const type = coalasce(_type, 'outset')
    const className = `neumorphic-${type}`
    return (
        <div className={className}
             style={{...(style || {})}}>
            {children}
        </div>
    )
}
export default Neumorphic
