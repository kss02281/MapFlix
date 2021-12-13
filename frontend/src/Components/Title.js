import React from 'react';


function Title (props) {
    const title = props.title.length < 25? props.title : props.title.slice(0, 23)+'..';
    const id = props.id;

    return (
        <span id={id} className="contentTitle">{title}</span>
    )
}

export default Title;