import React, {useCallback, useRef} from "react";
import {appStyles, Show} from "@reactivers/hooks";

const Textfield = props => {
    const {className, label, prefix, suffix, value, onChange, onBlur, onPressEnter, ...rest} = props;
    const input = useRef(null);

    const focusInput = useCallback(() => {
        if (input.current) input.current.focus()
    }, [input])

    const onKeyPress = useCallback((e) => {
        if (["enter", "Enter"].indexOf(e.key) > -1)
            if (onPressEnter) onPressEnter(e)
    }, [onPressEnter])

    return (
        <div className="neumorphic-input"
             style={{width: '100%'}}>
            <Show condition={label}>
                <p className="no-select" style={{fontWeight: 500}} onClick={focusInput}>{label}</p>
            </Show>
            <div style={{...appStyles.row, alignItems: 'center'}}>
                {prefix}
                <input className={`${className || ""} input`}
                       style={{width: '100%'}}
                       value={value || ""}
                       ref={input}
                       onChange={onChange}
                       onBlur={onBlur}
                       onKeyPress={onKeyPress}
                       {...rest}/>
                {suffix}
            </div>
        </div>
    )
}

export default Textfield;
