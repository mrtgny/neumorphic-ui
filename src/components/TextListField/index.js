import React, {useCallback, useMemo, useState} from 'react';
import {appStyles} from "@reactivers/hooks";
import {CheckOutlined} from "@ant-design/icons";
import Textfield from "../Textfield";
import Button from "../Button";

const TextListField = props => {
    const {
        value: _value,
        onChange: _onChange,
        listContainerStyle,
        descriptionKey: _descriptionKey,
        valuesRenderer,
        label,
        valueTransformer
    } = props;
    const descriptionKey = useMemo(() => _descriptionKey || "name", [_descriptionKey]);
    const [value, setValue] = useState({});
    const values = useMemo(() => _value || [], [_value]);

    const onSave = useCallback((e) => {
        if (e) e.preventDefault()
        const newValue = valueTransformer ? valueTransformer(value) : value
        if (!newValue[descriptionKey]) return;

        if (newValue.index !== undefined) {
            const {index} = newValue;
            delete newValue.index;
            values[index] = newValue;
            _onChange([...values])
        } else {
            _onChange([...values, newValue])
        }

        setValue({})
    }, [value, valueTransformer, values, _onChange, descriptionKey])

    const onClear = useCallback((index => {
        values.splice(index, 1)
        _onChange([...values])
    }), [values, _onChange])

    const commitChange = useCallback((index, _newValue) => {
        const newValue = valueTransformer ? valueTransformer(_newValue) : _newValue;
        values[index] = newValue
        _onChange([...values])
    }, [values, valueTransformer, _onChange])

    return (
        <>
            <div style={{...appStyles.grid, ...(listContainerStyle || {})}}>
                {values.map((item, index) => valuesRenderer({
                    item,
                    index,
                    onClear,
                    setValue,
                    onSave,
                    onChange: commitChange
                }))}
            </div>
            <div style={{...appStyles.row, marginTop: 8}}>
                <Textfield value={value[descriptionKey]}
                           label={label}
                           onChange={e => setValue({...value, [descriptionKey]: e.target.value})}
                           onPressEnter={onSave}
                           onBlur={onSave}
                           suffix={
                               <Button icon={<CheckOutlined/>}
                                       type="primary"
                                       disabled={!value[descriptionKey]}
                                       onClick={onSave}
                               />
                           }
                />

            </div>
        </>
    )
}

export default TextListField;
