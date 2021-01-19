import React from 'react';
import {appStyles} from "@reactivers/hooks";
import AttachmentImage from "../AttachmentImage";
import {Badge} from "antd";

const OverflowImages = props => {
    const {images, maxCount: _maxCount, size} = props;
    const maxCount = _maxCount || 3;
    const overflowItemsCount = images.length - maxCount;

    return (
        <div style={{...appStyles.center, flexDirection: 'column', marginRight: 8}}>
            <Badge count={overflowItemsCount > 0 ? `+${overflowItemsCount}` : undefined}>
                <div style={{...appStyles.center}}>
                    {
                        images.filter((_, index) => index < maxCount).map((image, index) => {
                            return (
                                <div style={{
                                    border: '1px solid white',
                                    marginLeft: index && -32,
                                    borderRadius: size
                                }} key={index}>
                                    <AttachmentImage id={image} key={index} size={size}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </Badge>
        </div>
    )
}

export default OverflowImages;
