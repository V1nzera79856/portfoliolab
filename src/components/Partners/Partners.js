import React, {useEffect, useState} from "react";

import "./partners.scss";
import {TWD} from "../TWD/TWD";
import {Btn} from "../Btn/Btn";


export const Partners = (props) => {

    const [description, setDescription] = useState(props.description[0]);
    const [selected, setSelected] = useState(props.foundations)
    const [page, setPage] = useState([])
    const [display, setDisplay] = useState(selected.slice(0, 3));


    useEffect(() => {
        let pages = [];
        for (let i = 0; i <= selected.length - 1; i += 3) {
            pages.push(selected.slice(i, i + 3))
        }
        setPage(pages)
        setDisplay(pages[0]);
    }, [selected])


    const handleFoundation = (e) => {
        e.preventDefault();
        setSelected(props.foundations);
        setDescription(props.description[0]);
    }
    const handleNGO = (e) => {
        e.preventDefault();
        setSelected(props.ngo);
        setDescription(props.description[1]);
    }
    const handleLocal = (e) => {
        e.preventDefault();
        setSelected(props.local);
        setDescription(props.description[2]);
    }

    const handlePageChange = number => e => {
        e.preventDefault();

        setDisplay(page[number]);

    }


    return (
        <div className="partners-container">
            <TWD text={props.twd}/>
            <div className="partners-types">
                <Btn action={handleFoundation} text={props.btn1}/>
                <Btn action={handleNGO} text={props.btn2}/>
                <Btn action={handleLocal} text={props.btn3}/>
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
                                   Fundacja  "{el[0]}"
                                </h2>
                                <p className="row-description">
                                    Cel i misja: {el[1]}
                                </p>
                            </div>
                            <p className="row-items">
                                {el[2]}
                            </p>
                        </div>
                    )
                })}
            </div>
            <div className="partners-pages">
                {page.map((page, idx, array) => {
                    if (array.length < 2) {
                        return null;
                    }

                    return (
                        <a onClick={handlePageChange(idx)} className="partners-page" key={idx}>
                            {idx + 1}
                        </a>
                    )
                })}
            </div>
        </div>
    )
}