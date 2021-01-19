import React from 'react';
import {StarFilled} from '@ant-design/icons'
import {appStyles} from "@reactivers/hooks";

const StarCount = props => {
    const {quantity, style, size: _size} = props
    const size = _size || 24

    return (
        <div style={{...appStyles.row, alignItems: 'center', ...(style || {})}}>
            <p
                style={{margin: 0, fontWeight: 'bold', fontSize: size, marginRight: 4}}>
                {quantity}
            </p>
            <StarFilled style={{color: 'orange', fontSize: size}}/>
        </div>
    )
}

export default StarCount;
