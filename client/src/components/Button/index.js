import React from 'react';
import './style.css';

function Button(props) {

    return (
        <button className={`button tileButton ${props.customClass}`} {...props}>
            {props.children}
        </button>

    )
}

export default Button;