import React from "react";
import "./btn.scss"

export const Btn = ({text}) => {
    return (
        <a className="btn-link">{text}</a>
    )
}