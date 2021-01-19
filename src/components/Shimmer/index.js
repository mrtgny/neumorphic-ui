import React from 'react';
import {Skeleton} from "antd";
import {appStyles} from "@reactivers/hooks";

const Shimmer = (props) => {
    const {style} = props;
    return (
        <div style={{...appStyles.card, padding: 16, ...(style || {})}}>
            <Skeleton loading {...props}/>
        </div>
    );
}

export default Shimmer;
