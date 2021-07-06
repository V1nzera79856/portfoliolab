import React from "react";

import {WelcomeHeader} from "../WelcomeHeader/WelcomeHeader";
import {WelcomeInfo} from "../WelcomeInfo/WelcomeInfo";
import "./home.scss";
import {Stats} from "../Stats/Stats";
import {Steps} from "../Steps/Steps";
import {About} from "../About/About";
import {Partners} from "../Partners/Partners";
import {Form} from "../Form/Form";
import {Footer} from "../Footer/Footer";


export const Home = () => {


    return (
        <>
            <section id="welcome" className="welcome">
                <WelcomeHeader/>
                <WelcomeInfo/>
            </section>
            <section id="stats" className="stats">
                <Stats/>
            </section>
            <section id="steps" className="steps">
                <Steps/>
            </section>
            <section id="about" className="about">
                <About/>
            </section>
            <section id="partners" className="partners">
                <Partners/>
            </section>
            <section id="form" className="home-form">
                <Form/>
            </section>
            <Footer/>
        </>
    )
}