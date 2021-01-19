import React, {useCallback} from 'react';
import {useHistory} from "@reactivers/hooks";
import Button from "./index";

const ShowAllButton = props => {
    const {path} = props;
    const history = useHistory();
    const pushToPath = useCallback(() => {
        history.push(path);
    }, [path, history])
    return (
        <Button type="link" onClick={pushToPath}>
            Tümünü Gör
        </Button>
    )
}

export default ShowAllButton
