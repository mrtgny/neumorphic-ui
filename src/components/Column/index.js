import React from "react";
import {Col} from 'antd';

const Column = props => {
    return (
        <Col xs={24} sm={24} md={12} lg={6} xl={6} {...props}/>
    )
}

export default Column;
