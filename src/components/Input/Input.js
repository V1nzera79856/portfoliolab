import React from "react";

import "./input.scss";

export const Input = (props) => {

    if(props.type === "textarea") {
        return (
            <label className="input-label label-textarea" htmlFor=""> {props.label}
                <textarea className="input-textarea input" name="" id="" cols="30" rows="5" placeholder={props.placeholder}>

                </textarea>
            </label>
        )
    }
    return (
        <label className="input-label" htmlFor=""> {props.label}
            <input className="input-text input" type={props.type} placeholder={props.placeholder}/>
        </label>
    )
}