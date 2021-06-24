import React, {useState} from "react";
import {Btn} from "../Btn/Btn";
import "./welcomeHeader.scss";

export const WelcomeHeader = () => {
    return (
        <header className="welcome-header">
            <div className="header-login">
                <Btn className="login" text="Zaloguj"/>
                <Btn className="login-add" text="Załóż konto"/>
            </div>
            <nav className="header-nav">
                <ul className="nav-list">
                    <li className="nav-item"><Btn text="Start"/></li>
                    <li className="nav-item"><Btn text="O co chodzi?"/></li>
                    <li className="nav-item"><Btn text="O nas"/></li>
                    <li className="nav-item"><Btn text="Fundacja i organizacja"/></li>
                    <li className="nav-item"><Btn text="Kontakt"/></li>
                </ul>
            </nav>
        </header>
    )
}