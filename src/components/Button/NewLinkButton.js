import React, {useCallback} from 'react';
import {useHistory} from "@reactivers/hooks";
import Button from "./index";

const NewLinkButton = props => {
    const {path} = props;
    const history = useHistory();

    const pushToPath = useCallback(() => {
        history.push(path);
    }, [history, path])

    return <Button type="link" onClick={pushToPath}>
        Yeni
    </Button>
}

export default NewLinkButton;
