import React from "react";

import "./input.scss";

export const Input = ({label,placeholder,type,name}) => {

    if(type === "textarea") {
        return (
            <label className="input-label label-textarea" htmlFor=""> {label}
                <textarea className="input-textarea input" name={name} id="" cols="30" rows="5" placeholder={placeholder}>

                </textarea>
            </label>
        )
    }
    return (
        <label className="input-label" htmlFor=""> {label}
            <input className="input-text input" name={name} type={type} placeholder={placeholder}/>
        </label>
    )
}