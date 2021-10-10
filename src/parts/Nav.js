import React from "react";
import logoApp from "../images/favooks.png"
import { Link} from "react-router-dom";
export default function Nav() {

    return(
        <>
            <div className="nav-logo">
                <Link to="../" ><img className="logo" src={logoApp} alt="logo"/></Link>
                <div className="nav">
                    <form>
                        <Link to="../search">
                            <input type="text" className="search" placeholder="szukaj..."/>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    )
};