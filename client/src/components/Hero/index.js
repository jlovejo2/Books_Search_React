import React from 'react';


function Hero(props) {

    return (
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        {props.title}
                    </h1>
                    <h2 class="subtitle">
                        {props.subTitle}
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Hero;