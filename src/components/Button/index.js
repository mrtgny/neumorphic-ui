import React, {useCallback} from 'react';
import {appStyles, isNullOrUndefined, Show, takeIf, takeUndefinedAsTrue} from "@reactivers/hooks";

const Button = props => {
    const {
        style,
        type,
        icon,
        title,
        className: _className,
        iconSize: _iconSize,
        neumorphic: _neumorphic,
        onClick: _onClick,
        htmlType: _htmlType,
        soft,
        selected,
        children,
    } = props;

    const iconSize = _iconSize || 32;
    const htmlType = takeIf(!!_htmlType, _htmlType, 'button')
    const iconButton = !children && !title;
    const neumorphic = takeUndefinedAsTrue(_neumorphic);

    let className = `no-select `

    className += takeIf(neumorphic && isNullOrUndefined(selected), `neumorphic-button${takeIf(soft, '-soft', '')}`, "neumorphic-clickable");
    className += takeIf(selected, " neumorphic-inset", "");

    const onClick = useCallback((e) => {
        if (htmlType !== 'submit')
            e.preventDefault()
        if (_onClick) _onClick(e);
    }, [htmlType, _onClick])

    if (!!type) {
        className += ` button-${type}-neumorphic`
    }

    if (_className)
        className += ` ${_className || ""}`

    return (
        <button style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: takeIf(iconButton, iconSize),
            height: takeIf(iconButton, iconSize),
            borderRadius: takeIf(iconButton, "50%"),
            boxShadow: takeIf(selected === undefined, ''),
            ...(style || {}),
        }}
                type={htmlType}
                onClick={onClick}
                className={className}>
            <Show condition={icon}>
                <div style={{
                    marginRight: takeIf(!iconButton, 8),
                    ...appStyles.center,
                    fontSize: takeIf(iconButton, 18, 12),
                    width: takeIf(iconButton, "100%", 12),
                    height: takeIf(iconButton, "100%", 12)
                }}>
                    {icon}
                </div>
            </Show>
            <div style={{fontSize: 14}}>
                {children || title}
            </div>
        </button>
    )
}

export default Button;
