import React from 'react';

const Neumorphic = props => {
    const {style, children} = props;
    return (
        <div className="neumorphic-outset"
             style={{...(style || {}), borderRadius: 10}}>
            {children}
        </div>
    )
}
export default Neumorphic
