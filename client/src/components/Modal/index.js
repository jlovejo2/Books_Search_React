import React from 'react';


function Modal(props) {

    return (

        <div class={`modal ${props.active ? 'is-active' : ''}`}>
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head is-warning">
                    <p class="modal-card-title">{props.title}</p>
                    <button class="delete" aria-label="close" onClick={props.closeButton}></button>
                </header>
                <section class="modal-card-body is-danger">
                    {props.children}
                </section>
            </div>
        </div>
    )
}

export default Modal;
