import React from "react";

import "./about.scss"
import People from "./People.jpg";
import {TWD} from "../TWD/TWD";
import Signature from "./Signature.svg";


export const About = () => {

    const twd = "O nas"
    const text = "Nori grape silver beet broccoli kombu beet \ngreens fava bean potato quandong celery. \nBunya nuts black-eyed pea prairie turnip leek \nlentil turnip greens parsnip."

    return (
        <>
            <div className="about-container">
                <TWD className="about title" text={twd} />
                <p className="about-text">
                    {text}
                </p>
                <img src={Signature} alt="signature" className="about-signature"/>
            </div>
            <img src={People} alt="people in a circle" className="about-img"/>
        </>
    )
}