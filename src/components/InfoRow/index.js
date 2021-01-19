import React from "react";
import {Col, Row} from "antd";

const InfoRow = props => {
    const {label, content, children} = props;
    return (
        <Row style={{margin: '16px 0'}}>
            <Col span={6}>
                <div style={{fontWeight: '500'}}>{label}</div>
            </Col>
            <Col span={18}>
                <div style={{color: '#aaa'}}>
                    {content || children}
                </div>
            </Col>
        </Row>
    );
};
export default InfoRow
