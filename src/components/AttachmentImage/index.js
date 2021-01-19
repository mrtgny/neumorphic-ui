import React, {useState} from 'react';
import {appStyles, getAppNames, getAppURL, Show} from "@reactivers/hooks";

const AttachmentImage = props => {
    const [loaded, setLoaded] = useState(false);
    const {id, size: _size, style, className, placeholder: _placheholder, hidePlaceholder, ...rest} = props;
    const size = _size ? {width: _size, height: _size, borderRadius: '50%'} : {}
    const placeholder = _placheholder || "P"
    const fontSize = isNaN(_size / 2) ? 24 : _size / 2;
    return (
        <div style={{
            ...size,
            ...appStyles.defaultShadow,
            ...appStyles.center,
            backgroundColor: "#eee",
            overflow: "hidden",
            ...style,
        }} className={`${className || ""}`}>
            <Show condition={id}>
                <img
                    onLoad={() => setLoaded(true)}
                    src={`${getAppURL(getAppNames().HTTP_REST_SERVER)}/attachments/stream/${id}`}
                    alt=""
                    style={{
                        ...appStyles.roundedImage,
                        ...style,
                        width: '100%',
                        display: loaded ? undefined : 'none'
                    }}
                    {...rest}
                />
            </Show>
            <Show condition={!loaded && !hidePlaceholder}>
                <div style={{width: '100%', height: '100%', ...appStyles.center}}>
                    <p style={{margin: 0, fontSize, fontWeight: 'bold', padding: 4}}>{placeholder}</p>
                </div>
            </Show>
        </div>
    )
}

export default AttachmentImage;
