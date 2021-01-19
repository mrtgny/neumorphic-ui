import React, {useEffect} from 'react';
import {appStyles, useApi} from "@reactivers/hooks";
import List from "./index";
import Loading from "../Loading";
import EmptyResult from "../EmptyResult";

const ListApi = props => {
    const {options, renderer, emptyRenderer: _emptyRenderer} = props;
    const {load, fetching, response} = useApi();
    const emptyRenderer = _emptyRenderer ||
        <EmptyResult style={{...appStyles.paddingVertical(16)}} title="İçerik Yok"/>
    useEffect(() => {
        load(options);
    }, [load, options])

    const {data} = response;

    return <List items={data}
                 loading={fetching}
                 renderer={renderer}
                 loadingRenderer={Loading}
                 emptyRenderer={emptyRenderer}
    />
}

export default ListApi;
