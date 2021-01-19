import React, {useEffect, useState} from 'react';
import {Col, Input, Row} from "antd";


const InfoRowForm = props => {
    const [RenderComponent, setRenderComponent] = useState(undefined);
    const {label, name, onChange, value, component, ...rest} = props;

    useEffect(() => {
        setRenderComponent(React.createElement(component || Input, {}));
    }, [component]);

    return (
        <Row style={{margin: '16px 0'}}>
            <Col span={6}>
                <div style={{fontWeight: '500'}}>{label}</div>
            </Col>
            <Col span={18}>
                {RenderComponent ?
                    <RenderComponent.type value={value} onChange={(...a) => onChange(name, ...a)}
                                          {...(rest || {})}
                    />
                    : null}
            </Col>
        </Row>
    );
};

export default InfoRowForm
