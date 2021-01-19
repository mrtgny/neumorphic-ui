import React from "react";
import {Form} from "antd";
import {sum} from "@reactivers/hooks";

const SumOfValuesFormItem = props => {
    const {name, form, keyName, label} = props;
    const {getFieldsValue} = form;

    return (
        <Form.Item label={label} shouldUpdate>
            {() => {
                const values = getFieldsValue()
                const keyValue = values[name] || [];
                const sumValue = sum(keyValue.map(i => {
                    const stringValue = i[keyName];
                    const value = parseFloat(stringValue);
                    if (!isNaN(value))
                        return value
                    return 0
                }));
                const sumValueText = (sumValue.toFixed(2)).replace(".", ",")
                return <p
                    style={{margin: 0, border: '1px solid #d9d9d9', padding: 4, fontWeight: 'bold'}}>
                    {sumValueText}
                </p>;
            }}
        </Form.Item>
    )
}

export default SumOfValuesFormItem;
