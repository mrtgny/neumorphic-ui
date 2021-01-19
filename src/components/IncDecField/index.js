import React from 'react';
import {appStyles} from "@reactivers/hooks";
import Button from "../Button";
import {MinusOutlined, PlusOutlined} from '@ant-design/icons';

const IncDecField = props => {
    const {value, onChange, size: _size, style, minusDisabled, plusDisabled, children} = props;
    const size = _size || 32
    return (
        <div style={{
            marginVertical: 16,
            ...appStyles.row,
            ...appStyles.spreadHorizontally,
            ...(style || {})
        }}>
            <Button icon={<MinusOutlined style={{fontSize: size / 2}}/>}
                    disabled={minusDisabled}
                    shape={"circle"}
                    type='primary'
                    style={{
                        borderRadius: 10,
                    }}
                    onClick={() => onChange(value - 1)}
            />
            {children}
            <Button icon={<PlusOutlined style={{fontSize: size / 2}}/>}
                    disabled={plusDisabled}
                    shape={"circle"}
                    type='primary'
                    style={{
                        borderRadius: 10,
                    }}
                    onClick={() => onChange(value + 1)}
            />
        </div>
    )
}

export default IncDecField;
