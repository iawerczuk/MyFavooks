import React from "react";
import logoApp from "../images/favooks.png"
import {HashRouter, Link} from "react-router-dom";
import Add from "../actions/Add";

export default function Nav() {

    return(
        <>
            <div className="nav-logo">
                <Link to="../" ><img className="logo" src={logoApp} alt="logo"/></Link>
                <div className="nav">
                    <HashRouter>
                    <Link to="../AddBook">
                        <Add/>
                    </Link>
                        <Link to="/search"><input type="text" id='text' placeholder="search" autoComplete="off"/></Link>
                    </HashRouter>
                </div>
            </div>
        </>
    )
};