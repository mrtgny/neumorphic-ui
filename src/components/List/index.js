import React from 'react';

const List = props => {
    const {items: _items, loading, renderer, emptyRenderer, loadingRenderer} = props;
    const items = _items || [];

    if (loading)
        return loadingRenderer;

    if (!items.length)
        return emptyRenderer;

    return (
        <>
            {
                items.map((item, index) => {
                    return renderer({item, index});
                })
            }
        </>
    )
}

export default List;
