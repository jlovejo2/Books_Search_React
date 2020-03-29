import React from 'react';


function Modal(props) {

    return (

        <div className={`modal ${props.active ? 'is-active' : ''}`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head is-warning">
                    <p className="modal-card-title">{props.title}</p>
                    <button className="delete" aria-label="close" onClick={props.closeButton}></button>
                </header>
                <section className="modal-card-body is-danger">
                    {props.children}
                </section>
            </div>
        </div>
    )
}

export default Modal;
