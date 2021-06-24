import React from "react";
import "./stats.scss";

export const Stats = (props) => {

    return (
        <>
            {
                props.stats.map((el, idx) => {
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