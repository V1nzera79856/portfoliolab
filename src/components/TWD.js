import React from "react";
import Decoration from "../assets/Decoration.svg";



export const TWD = ({text}) => {
    return (
        <div className="twd-container">
            <h2 className="twd-text">{text}</h2>
            <img src={Decoration} alt="text decoration" className="twd-img"/>
        </div>
    )
}