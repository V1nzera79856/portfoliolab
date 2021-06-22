import React from "react";
import {WelcomeHeader} from "./WelcomeHeader";
import {WelcomeInfo} from "./WelcomeInfo";

export const Home = () => {
    return (
        <section className="welcome">
            <WelcomeHeader />
            <WelcomeInfo />
        </section>
    )
}