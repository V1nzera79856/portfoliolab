import React from "react";

import "./btn.scss"
import {Link} from 'react-scroll';

export const Btn = ({text, action, linkTo}) => {
    return (
        <Link hashSpy={true} smooth={true} to={linkTo} onClick={action} className="btn-link">{text}</Link>
    )
}