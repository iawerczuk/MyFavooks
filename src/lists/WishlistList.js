import React from "react";
import trash from "../actions/Trash";
import SortAZ from "../actions/SortAZ";
import SortZA from "../actions/SortZA";
import book from "../images/books.svg";
import ebook from "../images/kindle.png"
import heart from "../images/heart.png"
import star from "../images/star.svg"
import {Link} from "react-router-dom";
import Footer from "../parts/Footer";

export default function WishlistList() {
    return (
        <>
            <div className="wishlist column">
            <button><img src={ heart } alt="wishlist"/></button>
            <h1>lista książek</h1>
            <p>zapamiętaj, co chcesz kupić</p>
        </div>
            <div className="titles">
                <SortAZ/>
                <SortZA/>
                <ul>
                    <li> </li>
                </ul>
            </div>
            <div className="authors">
                <SortAZ/>
                <SortZA/>
                <ul>
                    <li> </li>
                </ul>
            </div>
            <div className="notes">
                <div className="star">
                    <img src={ star } alt="rekomendacje"/>
                </div>
                <ul>

                </ul>
            </div>
            <div className="actions">
                <ul>
                    <li>
                        <Link to="/Books"><img src={book} alt="książki"/></Link>
                        <Link to="/ebooks"><img src={ebook} alt="ebooki"/></Link>
                        <Link to="/trash"><img src={trash} alt="usuń"/></Link>
                    </li>
                </ul>
            </div>
            <Footer/>
        </>
    )
};