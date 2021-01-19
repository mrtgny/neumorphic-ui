import React from 'react';
import moment from "moment";
import {dateToDescription} from "@reactivers/hooks";

const DateDescription = (props) => {
    const {date} = props;
    const description = dateToDescription(date);

    return (
        <div style={{
            minWidth: 100,
            alignItems: 'flex-end'
        }} className="center-column">
            <p style={{color: '#aaa', margin: 0}}>
                {description}
            </p>
            <p style={{color: '#aaa', margin: 0}}>{moment(date).format("HH:mm")}</p>
        </div>
    )
}


export default DateDescription
