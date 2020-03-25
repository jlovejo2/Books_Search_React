import React from 'react';

export function Input(props) {
    return (

        <div className="field">
            <div className="control">
                <input className={`input ${props.inputColor}  ${props.inputSize} is-hovered`} type="text" placeholder={`${props.inputPlaceholder}`} />
            </div>
        </div>

    )
}

export function Select(props) {

    return (
        <div className="select">
            <select>
                {props.children}
            </select>
        </div >
    )
}

export function Option(props) {
   return <option>{props.children}</option>
}