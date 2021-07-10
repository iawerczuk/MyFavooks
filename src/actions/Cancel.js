import React from "react";
import {Link} from "react-router-dom";
import logoApp from "../images/favooks.png";


export default function Cancel() {

    return(
        <>
            <Link to="../" ><img className="logo" src={logoApp} alt="logo"/>
            <button ><img src="../images/cancel.png" alt="cancel"/></button>
            </Link>

        </>
    )
}