import React from "react";
import {Link} from "react-router-dom";
import plus from "../images/plus.png";

export default function Add() {

    return(
        <>
            <Link to="/AddBook">
                <button className="button plus"><img src={plus} alt="dodaj nową książkę"/><Link to="/AddBook"/></button>
            </Link>
        </>
    )
};