import React, {useCallback, useEffect} from 'react';
import {useForm} from "antd/es/form/Form";
import {appStyles, useApi} from "@reactivers/hooks";
import {Button, Form} from "antd";
import PostCard from "../PostCard";

const FormWithLoader = props => {
    const {
        isNew,
        title,
        loadOptions,
        saveOptions,
        children,
        onFinish: _onFinish,
        onCancel: _onCancel,
        onSave: _onSave
    } = props;
    const [form] = useForm();
    const {load: loadData, response, fetching: loadFetching} = useApi();
    const {load: saveData, fetching: saveFetching} = useApi();
    const {data: loadedData} = response

    const onCancel = useCallback(() => {
        if (_onCancel) _onCancel();
    }, [_onCancel])


    const onSave = useCallback((values) => {
        saveData({
            ...saveOptions,
            params: {
                ...loadedData,
                ...values
            },
            onSuccess: (response) => _onSave ? _onSave(response) : history.goBack()
        })
    }, [saveData, saveOptions, _onSave, history, loadedData])

    const onFinish = useCallback((values) => {
        if (_onFinish) _onFinish(values)
        else onSave(values)
    }, [_onFinish, onSave])

    const onLoadSuccess = useCallback((response) => {
        const {data} = response;
        form.setFieldsValue(data);
    }, [form])

    const getData = useCallback(() => {
        loadData({
            ...loadOptions,
            onSuccess: onLoadSuccess
        })
    }, [loadData, loadOptions, onLoadSuccess])

    useEffect(() => {
        if (!isNew) getData()
    }, [isNew, getData])

    return <Form onFinish={onFinish} form={form}>
        <PostCard title={title} style={{margin: 16}} childrenContainerStyle={{...appStyles.paddingVertical(16)}}>
            {children}
            <Form.Item>
                <Button type="secondary" loading={saveFetching || loadFetching} onClick={onCancel}>Vazgeç</Button>
                <Button type="primary" loading={saveFetching || loadFetching} style={{marginLeft: 4}}
                        htmlType="submit">Kaydet</Button>
            </Form.Item>
        </PostCard>
    </Form>
}

export default FormWithLoader;
