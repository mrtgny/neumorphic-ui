import React from 'react';
import {appStyles, Show} from "@reactivers/hooks";
import Button from "../Button";
import {MinusOutlined, PlusOutlined} from '@ant-design/icons'

const QuantityField = props => {
    const {value, onChange, size: _size, style, minusDisabled, plusDisabled, total} = props;
    const size = _size || 32
    return (
        <div style={{
            marginVertical: 16,
            ...appStyles.row,
            ...(style || {})
        }}>
            <Button icon={<MinusOutlined color='white'/>}
                    disabled={minusDisabled}
                    type='primary'
                    style={{
                        borderTopLeftRadius: 4,
                        borderBottomLeftRadius: 4,
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                    }}
                    onClick={() => onChange(value - 1)}
            />
            <div style={{
                ...appStyles.center,
                width: size,
                height: size,
                border: '1px solid #aaa',
            }}>
                <div>
                    {value}
                </div>
            </div>
            <Show condition={total !== undefined}>
                <div style={{
                    ...appStyles.center,
                    backgroundColor: '#eee',
                    width: size,
                    height: size,
                    border: '1px solid #aaa',
                }}>
                    <div>
                        {total}
                    </div>
                </div>
            </Show>
            <Button icon={<PlusOutlined color='white'/>}
                    disabled={plusDisabled}
                    type='primary'
                    style={{
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                        borderTopRightRadius: 4,
                        borderBottomRightRadius: 4,

                    }}
                    onClick={() => onChange(value + 1)}
            />
        </div>
    )
}

export default QuantityField;
