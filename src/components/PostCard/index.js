import React from 'react';
import {appStyles, Show} from "@reactivers/hooks";
import ListItem from "../ListItem";

const PostCard = props => {
    const {
        style,
        avatar,
        title,
        titleRenderer,
        titleStyle,
        headerStyle,
        titleContainerStyle,
        description,
        onHeaderClick,
        subtitle,
        onTitleClick,
        childrenContainerStyle,
        children
    } = props;
    return (
        <div style={{...(style || {}), borderRadius: 10}} className="neumorphic-outset">
            <Show condition={avatar || title || titleRenderer || description || subtitle}>
                <ListItem
                    avatar={avatar}
                    title={title}
                    titleRenderer={titleRenderer}
                    style={{marginBottom: 4, ...(titleContainerStyle || {})}}
                    titleContainerStyle={headerStyle}
                    titleStyle={{fontSize: 18, ...(titleStyle || {})}}
                    description={description}
                    subtitle={subtitle}
                    onTitleClick={onTitleClick}
                    onClick={onHeaderClick}
                />
            </Show>
            {children ?
                <div style={{...appStyles.card, backgroundColor: 'transparent'}}
                >
                    <div style={{margin: "0 16px", ...(childrenContainerStyle || {})}}>
                        {children}
                    </div>
                </div>
                : null}
        </div>
    )
}

export default PostCard
