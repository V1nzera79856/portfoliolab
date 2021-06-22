import React, {useState} from "react";
import {Btn} from "./Btn"

export const WelcomeHeader = () => {
    return (
        <header className="welcome-header">
            <div className="header-login">
                <Btn className="login" text="Zaloguj"/>
                <Btn className="login-add" text="Załóż konto"/>
            </div>
            <nav className="header-nav">
                <ul className="nav-list">
                    <li className="nav-item">Start</li>
                    <li className="nav-item">O co chodzi?</li>
                    <li className="nav-item">O nas</li>
                    <li className="nav-item">Fundacja i organizacja</li>
                    <li className="nav-item">Kontakt</li>
                </ul>
            </nav>
        </header>
    )
}