import React from "react";
import logoApp from "../images/favooks.png"
import plusImg from "../images/plus.png";
import magnifierImg from "../images/magnifier.svg";
import {HashRouter, Link} from "react-router-dom";
import Search from "../actions/Search";
export default function Nav() {

    return(
        <>
            <div className="nav-logo">
                <Link to="../" ><img className="logo" src={logoApp} alt="logo"/></Link>
                <div className="nav">
                    <form>
                        <Link to="./AddToBooks">
                            <button className=" button plus" type="submit"><img src={plusImg} alt="szukaj"/></button>
                        </Link>
                        <input type="text" id='text' placeholder="search" autoComplete="off"/>
                        <Link to="../search">
                            <button className=" button magnifier" type="submit"><img src={magnifierImg} alt="szukaj"/></button>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    )
};