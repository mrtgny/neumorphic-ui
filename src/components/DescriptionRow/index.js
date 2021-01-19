import React from 'react';
import {Col, Row} from "antd";

const DescriptionRow = (props) => {
    const {title, description, descriptionRenderer, titleSpan: _titleSpan, style} = props;
    const titleSpan = _titleSpan || 4
    return (
        <Row style={{...(style || {}), alignItems: 'center'}}>
            <Col span={titleSpan} style={{lineHeight: 0}}>
                <span style={{margin: 0, fontWeight: 'bold', color: 'black', lineHeight: 0}}>{title}</span>
            </Col>
            <Col span={24 - titleSpan}>
                {descriptionRenderer ?
                    descriptionRenderer
                    :
                    <span style={{margin: 0, color: 'black', lineHeight: 0}}>{description}</span>
                }
            </Col>
        </Row>
    );
};

export default DescriptionRow;
