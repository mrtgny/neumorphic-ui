import React from 'react';
import {Card} from "@reactivers/generic-ui";

const NCard = props => {
    const {
        className: _className,
        cardStyle: _cardStyle,
        ...rest
    } = props;

    let cardStyle = {backgroundColor: 'transparent'};
    if (_cardStyle)
        cardStyle = {...cardStyle, ..._cardStyle};
    let className = "neumorphic-outset "
    if (_className)
        className += _className;

    return <Card className={className} cardStyle={cardStyle} {...rest} />
}

export default NCard
