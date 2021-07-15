import React from "react";
import {Link} from "react-router-dom";

import kindleImg from "../images/kindle.png";


export default function AddToEbooks () {

    return(
        <>
            <Link to="../ebooks">
                <button className=" button kindle" type="submit"><img src={kindleImg} alt="ebooki"/></button>
            </Link>
        </>
    )
}