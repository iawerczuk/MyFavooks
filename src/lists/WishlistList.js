import React from "react";
import trash from "../actions/Trash";
import book from "../images/books.svg";
import ebook from "../images/kindle.png"
import heart from "../images/heart.png"
import star from "../images/star.svg"
import {Link} from "react-router-dom";
import Footer from "../parts/Footer";
import heartImg from "../images/heart.png";

export default function WishlistList() {
    return (
        <>
            <div className="main">
            <Link to="/Wishlist">
                <div className="wishlist container">
                    <img src={heartImg} alt="wishlist"/>
                    <h2>wishlist</h2>
                    <p>zapamiętaj, co chcesz kupić</p>
                </div>
            </Link>
            </div>
            <div>
                <ul>
                    {book?.filter(el => el.wishlist).map(item => (
                        <li>{item}</li>
                    ))}
                    <button >usuń</button>
                </ul>
            </div>
        </>
    )
};