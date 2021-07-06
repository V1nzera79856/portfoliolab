import React from "react";

import "./steps.scss";
import {TWD} from "../TWD/TWD";
import {Btn} from "../Btn/Btn";
import Icon1 from "../Home/Icon1.svg";
import Icon2 from "../Home/Icon2.svg";
import Icon3 from "../Home/Icon3.svg";
import Icon4 from "../Home/Icon4.svg";

export const Steps = () => {

    const steps =[{
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
    }]

    return (
        <>
            <TWD className="steps-twd" text="Wystarczą 4 proste kroki"/>
            <div className="steps-container">

                {
                    steps.map((step, idx) => {
                        return (
                            <div key={idx} className="step-column">
                                <img alt={step.alt} src={step.url} className="step-icon">

                                </img>
                                <h4 className="step-title">
                                    {step.title}
                                </h4>
                                <p className="step-text">
                                    {step.text}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
            <Btn className="steps-btn" text={"Oddaj\nRzeczy"}/>
        </>
    )
}