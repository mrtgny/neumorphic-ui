import React from "react";
import {CloseOutlined} from '@ant-design/icons'
import {appStyles, changeColor, generatedColorFromString, Show, takeIf, takeUndefinedAsTrue} from "@reactivers/hooks";
import Button from "../Button";

const Tag = props => {
    const {
        color: _color,
        className,
        description,
        generatedColor,
        type: _type,
        textStyle,
        style,
        onClick,
        neumorphic: _neumorphic,
        onTextClick,
        onClear,
        children
    } = props
    const neumorphic = takeUndefinedAsTrue(_neumorphic);
    const type = _type || "outlined";

    const color = _color || (generatedColor ? generatedColorFromString(description) : "#cccccc")
    const textColor = type === "filled" ? '#ffffff' : (color || "");
    const backgroundColor = type === "filled" ? color : `${changeColor(color, 150)}`
    return (
        <div style={{
            padding: "8px 16px",
            //border: type === 'filled' ? '' : `1px solid ${color}`,
            borderRadius: 8,
            backgroundColor,
            maxWidth: 'calc(100% - 16px)',
            ...appStyles.center, ...(style || {})
        }}
             className={`
             ${takeIf(onClick, "clickable", "")}
              ${takeIf(neumorphic, "neumorphic-outset-soft")} ${className || ""}
              `}
             onClick={onClick}>
            <div className={takeIf(onTextClick, "clickable", "")}
                 style={{
                     color: textColor,
                     margin: 0,
                     lineHeight: 1,
                     width: '100%',
                     ...(textStyle || {})
                 }}
                 onClick={onTextClick}>
                {children}
            </div>
            <Show condition={onClear}>
                <Button icon={<CloseOutlined style={{fontSize: 11}}/>}
                        onClick={onClear}
                        soft
                        style={{color: 'white', marginLeft: 8}}
                />
            </Show>
        </div>
    )
}

export default Tag;
