import React, {useCallback} from 'react';
import {Popover} from "antd";
import {SwatchesPicker} from "react-color";
import {Show} from "@reactivers/hooks";

const ColorPicker = props => {
    const {value: _value, label, onChange: _onChange, children} = props;

    const onChange = useCallback(({hex}) => {
        _onChange(hex)
    }, [_onChange])

    return (
        <Popover content={
            <SwatchesPicker onChange={onChange}/>
        } title="Renk">
            <Show condition={children}>
                {children}
            </Show>
            <Show condition={!children}>
                <div className="neumorphic-input">
                    <p style={{fontWeight: 500}}>{label}</p>
                    <div className='neumorphic-outset-soft' style={{backgroundColor: _value, height: 32, width: '100%'}}/>
                </div>
            </Show>
        </Popover>
    )
}

export default ColorPicker;
