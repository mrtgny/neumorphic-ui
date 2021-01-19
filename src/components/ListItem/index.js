import React from 'react';
import {Show,takeIf} from "@reactivers/hooks";

const ListItem = props => {
    const {
        style,
        avatar,
        title,
        lastItem,
        titleRenderer,
        description,
        titleStyle,
        subtitleStyle,
        titleContainerStyle,
        onClick,
        onTitleClick,
        subtitle,
        subtitleRenderer,
        headerContainerStyle,
        selected,
        children
    } = props;
    return (
        <div style={{borderBottom: lastItem && '1px solid #eee', padding: 4, ...(style || {})}}
             className={`${takeIf(onClick, "neumorphic-clickable")} ${takeIf(selected, "neumorphic-outset")}`}
             onClick={onClick}>
            <div style={{display: "flex", alignItems: 'center', ...(headerContainerStyle || {})}}>
                <Show condition={avatar}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginRight: takeIf(!!title || !!titleRenderer, 8, 0)
                    }}>
                        {avatar}
                    </div>
                </Show>
                <div style={{width: '100%'}} onClick={onTitleClick}
                     className={onTitleClick ? "clickable" : ""}>
                    <div style={{padding: 4, ...(titleContainerStyle || {})}}>
                        <Show condition={titleRenderer}>
                            {titleRenderer}
                        </Show>
                        <Show condition={title}>
                            <div style={{
                                margin: 0,
                                color: takeIf(selected, "#1890ff"),
                                ...(titleStyle || {})
                            }}>{title}</div>
                        </Show>
                        <Show condition={subtitle}>
                            <div style={{
                                margin: 0,
                                fontSize: 10,
                                color: 'black', ...(subtitleStyle || {})
                            }}>{subtitle}</div>
                        </Show>
                        <Show condition={subtitleRenderer}>
                            {subtitleRenderer}
                        </Show>
                    </div>
                </div>
                <Show condition={description}>
                    {description}
                </Show>
            </div>
            {children}
        </div>
    )
}

export default ListItem
