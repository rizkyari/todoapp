import React from "react";
import './index.css';

const Title = (props) => {
    const {text} = props;

    return (
        <div className="text-wrapper">
            <h3>{text}</h3>
        </div>
    )
}


export default Title;