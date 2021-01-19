import React, {useEffect, useState} from 'react';
import {appStyles, Show} from "@reactivers/hooks";
import {StarFilled, StarOutlined} from '@ant-design/icons'

const Rate = props => {
    const {value, total, size: _size, emptyColor: _emptyColor, style} = props;
    const [stars, setStars] = useState([])
    const size = _size || 24
    const emptyColor = _emptyColor || "#eee";

    useEffect(() => {
        const _stars = Array(total || 5).fill(0).map((i, index) => index < value ? 1 : 0);
        setStars(_stars)
    }, [total, value]);

    return (
        <div style={{...appStyles.center, ...appStyles.grid, ...(style || {})}}>
            {stars.map((i, index) => {
                return (
                    <div style={{margin: 4}} key={index}>
                        <Show condition={i}>
                            <StarFilled style={{color: 'orange', fontSize: size}}/>
                        </Show>
                        <Show condition={!i}>
                            <StarOutlined style={{color: "orange", fontSize: size}}/>
                        </Show>
                    </div>
                )
            })}
        </div>
    )
}

export default Rate
