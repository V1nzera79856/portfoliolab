import React, {useEffect, useState} from "react";

import "./partners.scss";
import {TWD} from "../TWD/TWD";
import {Btn} from "../Btn/Btn";


export const Partners = () => {

    const foundations = [[
        "Dbam o Zdrowie",
        "Pomoc osobom znajdującym się w trudnej sytuacji życiowej",
        "ubrania, jedzenie , sprzęt AGD, meble, zabawki"
    ], [
        "Dla dzieci!",
        "Pomoc dzieciom z ubogich rodzin",
        "ubrania, meble, zabawki"
    ], [
        "Bez domu",
        "Pomoc dla osób nie posiadających miejsca zamieszkania",
        "ubrania, jedzenie, ciepłe koce"
    ], ["Przykład 1", "opis celu i misji", "przykładowe przedmioty"], [
        "Przykład 2",
        "opis celu i misji",
        "przykładowe przedmioty"
    ], ["Przykład 3", "opis celu i misji", "przykładowe przedmioty"], [
        "Przykład 4",
        "opis celu i misji",
        "przykładowe przedmioty"
    ], ["Przykład 5", "opis celu i misji", "przykładowe przedmioty"], [
        "Przykład 6",
        "opis celu i misji",
        "przykładowe przedmioty"
    ]]

    const ngo = [[
        "Przykład 1",
        "opis celu i misji",
        "przykładowe przedmioty"
    ], ["Przykład 2", "opis celu i misji", "przykładowe przedmioty"], [
        "Przykład 3",
        "opis celu i misji",
        "przykładowe przedmioty"
    ], ["Przykład 4", "opis celu i misji", "przykładowe przedmioty"]]

    const localOrganizations = [[
        "Przykład 1",
        "opis celu i misji",
        "przykładowe przedmioty"
    ], ["Przykład 2", "opis celu i misji", "przykładowe przedmioty"], [
        "Przykład 3",
        "opis celu i misji",
        "przykładowe przedmioty"
    ]]

    const description = ["W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis doloribus maiores ratione!", "aaaaaaaaaaaaaa bbbbbbbbbbbb cccccccccccc dddddddd"]

    const btn = ["Fundacjom",
        "Organizacjom pozarządowym", "Lokalnym zbiórkom"];

    const twd = "Komu pomagamy?";

    const [descriptions, setDescriptions] = useState(description[0]);
    const [selected, setSelected] = useState(foundations)
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
        setSelected(foundations);
        setDescriptions(description[0]);
    }
    const handleNGO = (e) => {
        e.preventDefault();
        setSelected(ngo);
        setDescriptions(description[1]);
    }
    const handleLocal = (e) => {
        e.preventDefault();
        setSelected(localOrganizations);
        setDescriptions(description[2]);
    }

    const handlePageChange = number => e => {
        e.preventDefault();

        setDisplay(page[number]);

    }


    return (
        <div className="partners-container">
            <TWD text={twd}/>
            <div className="partners-types">
                <Btn action={handleFoundation} text={btn[0]}/>
                <Btn action={handleNGO} text={btn[1]}/>
                <Btn action={handleLocal} text={btn[2]}/>
            </div>
            <p className="partners-description">
                {descriptions}
            </p>
            <div className="partners-table">
                {display.map((el, idx) => {
                    return (
                        <div key={idx} className="table-row">
                            <div className="row-main">
                                <h2 className="row-name">
                                    Fundacja "{el[0]}"
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