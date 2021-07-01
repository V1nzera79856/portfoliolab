import React from "react";
import {Link} from "react-router-dom";

import {Btn} from "../Btn/Btn";
import "./welcomeHeader.scss";


export const WelcomeHeader = () => {
    return (
        <header className="welcome-header">
            <div className="header-login">
                <Link to="login" className="login">Zaloguj </Link>
                <Link to="login" className="login-add"> Załóż konto </Link>
            </div>
            <nav className="header-nav">
                <ul className="nav-list">
                    <li className="nav-item"><Btn linkTo="welcome" text="Start"/></li>
                    <li className="nav-item"><Btn linkTo="stats" text="O co chodzi?"/></li>
                    <li className="nav-item"><Btn linkTo="about" text="O nas"/></li>
                    <li className="nav-item"><Btn linkTo="partners" text="Fundacja i organizacja"/></li>
                    <li className="nav-item"><Btn linkTo="form" text="Kontakt"/></li>
                </ul>
            </nav>
        </header>
    )
}