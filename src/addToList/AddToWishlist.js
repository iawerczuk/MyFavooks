import React from "react";
import {Link} from "react-router-dom";

import heartImg from "../images/heart.png";

export default function AddToWishlist() {

    return(
        <>
            <Link to="../wishlist">
                <button className=" button heart" type="submit"><img src={heartImg} alt="wishlist"/></button>
            </Link>
        </>
    )
}