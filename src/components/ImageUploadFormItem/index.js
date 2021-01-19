import {Button, Form, Upload} from "antd";
import {UserOutlined} from "@ant-design/icons";
import React from "react";
import {Show} from "@reactivers/hooks";
import AttachmentImage from "../AttachmentImage";

const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

const ImageUploadFormItem = props => {
    const {name, ...rest} = props;
    return (
        <Form.Item name={name} className="center">
            <ImageUpload {...rest}/>
        </Form.Item>
    )
}

const ImageUpload = props => {
    const {value, onChange: _onChange, buttonText: _buttonText, size} = props;
    const {base64Data, id} = value || {}
    const buttonText = _buttonText || "Görsel yükle"
    const onChange = (image) => {
        getBase64(image).then(base64Data => {
            _onChange(
                {
                    ...(value || {}),
                    fileType: image.type,
                    base64Data,
                    fileName: image.name,
                    fileSize: image.size,
                }
            )
        });
        return false;
    }

    return (
        <Upload beforeUpload={onChange}
                fileList={[]}
                className="center">
            <div className="center-column">
                <div className="center neumorphic-outset"
                     style={{
                         backgroundColor: '#eee',
                         flexDirection: 'column',
                         width: size || 250,
                         height: size || 250,
                         borderRadius: '50%',
                         overflow: 'hidden'
                     }}>
                    <Show condition={base64Data}>
                        <img src={base64Data} alt=""
                             style={{width: '100%'}}
                        />
                    </Show>
                    <Show condition={!base64Data && id}>
                        <AttachmentImage id={id} size={"100%"} hidePlaceholder/>
                    </Show>
                    <Show condition={!base64Data && !id}>
                        <UserOutlined style={{fontSize: 64}}/>
                    </Show>
                </div>
                <Button type='link' style={{padding: 0, marginTop: 16}}>{buttonText}</Button>
            </div>
        </Upload>
    )
}

export default ImageUploadFormItem;
