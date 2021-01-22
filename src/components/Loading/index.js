import React from "react";
import {appStyles} from "@reactivers/generic-ui";
import {getLocale, Locales} from '@reactivers/hooks'

const Loading = props => {
    return <div style={{...appStyles.center}}>
        {getLocale({name: Locales.Loading})}
    </div>
}

export default Loading;
