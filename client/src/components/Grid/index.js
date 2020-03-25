import React from 'react';

export function Col (props) {
    return (

        <div className={`column ${props.customClass} ${props.verticalCenter ? 'is-vcentered' : ''} ${props.center ? 'is-center' : ''} `}>
            {props.children}
        </div>

    )
}

export function Section({classes, children}) {
    return (
    <div className={classes}>
            {children}
    </div>
    )
};

export function Container(props) {
    return (

        <div className={`container ${props.fluid ? 'is-fluid' : ''}`}>
            {props.children}
        </div>

    )
};

export function Tile(props) {

    return (

        <div className={
            `tile 
            ${props.ancestor ? 'is-ancestor' : ''}
            ${props.parent ? 'is-parent' : 'is-child'} 
            ${props.vertical ? 'is-vertical' : ''} 
            ${props.customClass} `}>
                {props.children}
        </div>

    )
};

