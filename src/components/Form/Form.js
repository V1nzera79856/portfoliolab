import React from "react";

import "./form.scss";
import {TWD} from "../TWD/TWD";
import {Input} from "../Input/Input";

export const Form = () => {

    const twd = "Skontaktuj się z nami"
    const btn = "Wyślij"
    const inputs = [{
            label: "Wpisz swoje imię",
            type: "text",
            name: "name",
            placeholder: "Krzysztof"
        }, {
        label: "Wpisz swój email",
            type: "email",
            name: "email",
            placeholder: "abc@xyz.pl"
    }, {
        label: "Wpisz swoją wiadomość",
            type: "textarea",
            name: "text",
            placeholder: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }]

    return (
        <>
            <div className="form-container">
                <TWD text={twd}/>
                <form className="form" action="">
                    <div className="form-inputs">
                        {inputs.map((input, idx) => {
                            return (
                                <Input label={input.label} type={input.type} key={idx} placeholder={input.placeholder}/>
                            )
                        })}
                    </div>
                    <button className="btn-link form-btn">{btn}</button>
                </form>
            </div>
        </>
    )
}