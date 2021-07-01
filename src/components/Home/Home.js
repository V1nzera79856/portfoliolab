import React, {useEffect} from "react";
import {scrollSpy} from "react-scroll"

import {WelcomeHeader} from "../WelcomeHeader/WelcomeHeader";
import {WelcomeInfo} from "../WelcomeInfo/WelcomeInfo";
import "./home.scss";
import {Stats} from "../Stats/Stats";
import {Steps} from "../Steps/Steps";
import Icon1 from "./Icon1.svg";
import Icon2 from "./Icon2.svg";
import Icon3 from "./Icon3.svg";
import Icon4 from "./Icon4.svg";
import {About} from "../About/About";
import {Partners} from "../Partners/Partners";
import {Form} from "../Form/Form";
import {Footer} from "../Footer/Footer";

const foundations = [[
    "Dbam o Zdrowie",
    "Pomoc osobom znajdującym się w trudnej sytuacji życiowej",
    "ubrania, jedzenie , sprzęt AGD, meble, zabawki"
], [
    "Dla dzieci!",
    "Pomoc dzieciom z ubogich rodzin",
    "ubrania, meble, zabawki"
], [
    "Bez domu",
    "Pomoc dla osób nie posiadających miejsca zamieszkania",
    "ubrania, jedzenie, ciepłe koce"
], ["Przykład 1", "opis celu i misji", "przykładowe przedmioty"], [
    "Przykład 2",
    "opis celu i misji",
    "przykładowe przedmioty"
], ["Przykład 3", "opis celu i misji", "przykładowe przedmioty"], [
    "Przykład 4",
    "opis celu i misji",
    "przykładowe przedmioty"
], ["Przykład 5", "opis celu i misji", "przykładowe przedmioty"], [
    "Przykład 6",
    "opis celu i misji",
    "przykładowe przedmioty"
]]

const ngo = [[
    "Przykład 1",
    "opis celu i misji",
    "przykładowe przedmioty"
], ["Przykład 2", "opis celu i misji", "przykładowe przedmioty"], [
    "Przykład 3",
    "opis celu i misji",
    "przykładowe przedmioty"
], ["Przykład 4", "opis celu i misji", "przykładowe przedmioty"]]

const localOrganizations = [[
    "Przykład 1",
    "opis celu i misji",
    "przykładowe przedmioty"
], ["Przykład 2", "opis celu i misji", "przykładowe przedmioty"], [
    "Przykład 3",
    "opis celu i misji",
    "przykładowe przedmioty"
]]

const description = ["W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis doloribus maiores ratione!",  "aaaaaaaaaaaaaa bbbbbbbbbbbb cccccccccccc dddddddd"]



export const Home = () => {


    return (
        <>
            <section id="welcome" className="welcome">
                <WelcomeHeader/>
                <WelcomeInfo/>

            </section>
            <section id="stats" className="stats">
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
            <section id="steps" className="steps">
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
                }]}/>
            </section>
            <section id="about" className="about">
                <About twd="O nas"
                       text={"Nori grape silver beet broccoli kombu beet \ngreens fava bean potato quandong celery. \nBunya nuts black-eyed pea prairie turnip leek \nlentil turnip greens parsnip."}/>
            </section>
            <section id="partners" className="partners">
                <Partners description={description} twd="Komu pomagamy?" btn1="Fundacjom"
                          btn2="Organizacjom pozarządowym"
                          btn3="Lokalnym zbiórkom" foundations={foundations} ngo={ngo} local={localOrganizations}/>
            </section>
            <section id="form" className="home-form">
                <Form twd="Skontaktuj się z nami" btn="Wyślij" inputs={[{
                    label: "Wpisz swoje imię",
                    type: "text",
                    placeholder: "Krzysztof"
                }, {
                    label: "Wpisz swój email",
                    type: "email",
                    placeholder: "abc@xyz.pl"
                }, {
                    label: "Wpisz swoją wiadomość",
                    type: "textarea",
                    placeholder: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                }]}/>
                <Footer/>
            </section>
        </>
    )
}