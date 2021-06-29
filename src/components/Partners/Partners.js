import React, {useState} from "react";
import "./partners.scss";
import {TWD} from "../TWD/TWD";
import {Btn} from "../Btn/Btn";


export const Partners = (props) => {

    const [description, setDescription] = useState(props.description[0]);
    const [selected, setSelected] = useState(props.foundations)
    const [display, setDisplay] = useState(selected.slice(0, 3));

    const numberOfPages = Math.floor(selected.length / 3)


    return (
        <>
            <TWD text={props.twd}/>
            <div className="partners-types">
                <Btn text={props.btn1}/>
                <Btn text={props.btn2}/>
                <Btn text={props.btn3}/>
            </div>
            <p className="partners-description">
                {description}
            </p>
            <div className="partners-table">
                {display.map((el, idx) => {
                    return (
                        <div key={idx} className="table-row">
                            <div className="row-main">
                                <h2 className="row-name">
                                    {el[0]}
                                </h2>
                                <p className="row-description">
                                    {el[1]}
                                </p>
                            </div>
                            <p className="row-items">
                                {el[2]}
                            </p>
                        </div>
                    )
                })}
            </div>

        </>
    )
}