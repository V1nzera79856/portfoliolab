import React from "react";
import "./form.scss";
import {TWD} from "../TWD/TWD";
import {Input} from "../Input/Input";

export const Form = (props) => {
    return (
        <div className="form-container">
            <TWD text={props.twd}/>
            <form className="form" action="">
                <div className="form-inputs">
                {props.inputs.map((input, idx) => {
                    return (
                        <Input label={input.label} type={input.type} key={idx} placeholder={input.placeholder}/>
                    )
                })}
                </div>
                <button className="btn-link form-btn">{props.btn}</button>
            </form>
        </div>
    )
}