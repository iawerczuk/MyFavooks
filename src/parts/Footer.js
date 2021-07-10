import React from "react";
import logoApp from "../images/favooks.png"
import logo from "../images/ia.png"


export default function Footer() {

    return(
        <>
            <div className="footer">
                <div className="copyright">
                    <h2>©iawerczuk 2021</h2>
                    <img src={logo} alt="logo"/>
                </div>
                <div className="footer-logo">
                    <img src={logoApp} alt="logo"/>
                </div>
            </div>
        </>
    )
};