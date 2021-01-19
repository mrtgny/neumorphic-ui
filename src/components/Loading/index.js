import React from "react";
import {Spin} from "antd";
import {appStyles} from "@reactivers/hooks";

const Loading = props => {
    return <div style={{...appStyles.center}}>
        <Spin {...props} />
    </div>
}

export default Loading;
