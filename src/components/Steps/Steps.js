import React from "react";
import "./steps.scss";
import {TWD} from "../TWD/TWD";
import {Btn} from "../Btn/Btn";

export const Steps = (props) => {

    return (
        <>
            <TWD className="steps-twd" text="Wystarczą 4 proste kroki"/>
            <div className="steps-container">

                {
                    props.steps.map((step, idx) => {
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