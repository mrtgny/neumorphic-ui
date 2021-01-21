import React from 'react';
import {Selectfield} from '@reactivers/generic-ui'

const NSelectfield = props => {
    const {className: _className, ...rest} = props;
    let className = 'neumorphic-input';
    if (_className) className += _className;

    return (
        <Selectfield className={className}
                     selectFieldClassName="neumorphic-select-field"
                     {...rest} />
    )
}

export default NSelectfield;
