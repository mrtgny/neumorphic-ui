import React from 'react';
import {TextListField} from "@reactivers/generic-ui";
import Button from "../Button";

const NTextListField = props => {
    const {
        textfieldContainerClassName: _textfieldContainerClassName,
        checkIcon,
        ...rest
    } = props;
    let textfieldContainerClassName = "neumorphic-input "
    if (textfieldContainerClassName) textfieldContainerClassName += _textfieldContainerClassName;

    return <TextListField textfieldContainerClassName={textfieldContainerClassName}
                          checkButton={(p) => <Button icon={checkIcon}
                                                      type="primary"
                                                      {...p}/>}
                          {...rest} />
}

export default NTextListField;
