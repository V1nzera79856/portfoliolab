import React from "react";

import "./footer.scss";
import Facebook from "../Form/Facebook.svg";
import Instagram from "../Form/Instagram.svg";


export const Footer = () => {

    return (
        <footer className="home-footer">
            <p className="footer-text">
                Copyright by Coders Lab
            </p>
            <div className="footer-icons">
                <img src={Facebook} alt="facebook icon"/>
                <img src={Instagram} alt="instagram icon"/>
            </div>
        </footer>
    )
}