import React from 'react';


function Hero(props) {

    return (
        <section className="hero">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        {props.title}
                    </h1>
                    <h2 className="subtitle">
                        {props.subTitle}
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Hero;