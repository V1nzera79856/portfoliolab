import React from "react";
import {TWD} from "./TWD";
import {Btn} from "./Btn";

export const WelcomeInfo = () => {
    return (
        <div className="welcome-info">
            <TWD className="info-text" text={"Zacznij pomagać!\nOddaj niechciane rzeczy w zaufane ręce"} />
            <div className="info-buttons">
                <Btn text={"Oddaj\nrzeczy"}/>
                <Btn text="Zorganizuj zbiórkę"/>
            </div>
        </div>
    )
}