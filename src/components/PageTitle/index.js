import React from "react";

const PageTitle = props => {
    const {title} = props
    return (
        <h1 className="neumorphic-title">{title}</h1>
    )
}
export default PageTitle;
