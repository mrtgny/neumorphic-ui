import React from 'react';
import {appStyles} from "@reactivers/hooks";

const EmptyResult = props => {
    const {icon, title, style, size: _size} = props;
    const size = _size || 120
    return (
        <div style={{...(style || {})}}>
            <div className="center" style={{
                width: '100%',
                flexDirection: 'column'
            }}>
                <div className="center neumorphic-outset" style={{
                    ...appStyles.rounded(size),
                }}>
                    {icon}
                </div>
            </div>
            <div>
                <p style={{
                    textAlign: 'center',
                    fontWeight: '100',
                    fontSize: 24,
                    whiteSpace: 'pre-wrap',
                    color: 'black',
                    marginTop: 16
                }}>{title}</p>
            </div>
        </div>
    )
}
export default EmptyResult;
