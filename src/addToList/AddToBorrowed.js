import React from "react";
import {Link} from "react-router-dom";

import borrowedImg from "../images/borrow.png";

export default function AddToBorrowed() {

    return(
        <>
            <Link to="../borrowed">
                <button className=" button borrow" type="submit"><img src={borrowedImg} alt="wypożyczone"/></button>
            </Link>
        </>
    )
}
