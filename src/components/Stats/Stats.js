import React from "react";

import "./stats.scss";

export const Stats = () => {

    const stats =[{
            number: 10,
            title: "Oddanych worków",
            text: "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
        }, {
        number: 5,
            title: "Wspartych Organizacji",
            text: "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
    }, {
        number: 7,
            title: "Zorganizowanych zbiórek",
            text: "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
    }]

    return (
        <>
            {
                stats.map((el, idx) => {
                    return (
                        <div key={idx} className="stat-container">
                            <h2 className="stat-number">
                                {el.number}
                            </h2>
                            <h4 className="stat-title">
                                {el.title}
                            </h4>
                            <h6 className="stat-text">
                                {el.text}
                            </h6>
                        </div>
                    )
                })
            }
        </>
    )
}