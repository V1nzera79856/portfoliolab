import React from "react";
import {WelcomeHeader} from "../WelcomeHeader/WelcomeHeader";
import {WelcomeInfo} from "../WelcomeInfo/WelcomeInfo";
import "./home.scss";
import {Stats} from "../Stats/Stats";
import {Steps} from "../Steps/Steps";
import Icon1 from "../../assets/Icon1.svg";
import Icon2 from "../../assets/Icon2.svg";
import Icon3 from "../../assets/Icon3.svg";
import Icon4 from "../../assets/Icon4.svg";
import {About} from "../About/About";


export const Home = () => {
    return (
        <>
            <section className="welcome">
                <WelcomeHeader/>
                <WelcomeInfo/>
            </section>
            <section className="stats">
                <Stats stats={[{
                    number: 10,
                    title: "Oddanych worków",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
                }, {
                    number: 5,
                    title: "Wspartych Organizacji",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
                }, {
                    number: 7,
                    title: "Zorganizowanych zbiórek",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
                }]}/>
            </section>
            <section className="steps">
                <Steps steps={[{
                    url: Icon1,
                    alt: " t-shirt icon",
                    title: "Wybierz rzeczy",
                    text: "ubrania, zabawki,sprzęt i inne"
                }, {
                    url: Icon2,
                    alt: "shopping bag icon",
                    title: "Spakuj je",
                    text: "skorzystaj z worków na śmieci"
                }, {
                    url: Icon3,
                    alt: "magnifier icon",
                    title: "Zdecyduj komu chcesz pomóc",
                    text: "wybierz zaufane miejsce"
                }, {
                    url: Icon4,
                    alt: "refresh icon",
                    title: "Zmów kuriera",
                    text: "kurier przyjedzie w dogodnym miejscu"
                }]} />
            </section>
            <section className="about">
                <About twd="O nas" text={"Nori grape silver beet broccoli kombu beet \ngreens fava bean potato quandong celery. \nBunya nuts black-eyed pea prairie turnip leek \nlentil turnip greens parsnip."} />
            </section>
        </>
    )
}