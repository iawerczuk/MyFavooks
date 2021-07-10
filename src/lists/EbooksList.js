import React from "react";
import Trash from "../actions/Trash";
import SortAZ from "../actions/SortAZ";
import SortZA from "../actions/SortZA";
import ebook from "../images/kindle.png"

export default function EbooksList() {

    return(
        <>
            <div className="ebooks column">
                <div className="ebooks-img"/>
                <img src={ebook} alt="książki"/>
                <h1>lista ebooków</h1>
                <p>sprawdź, co już masz na kindlu</p>
            </div>



            <div className="titles">
                <SortAZ books={[]}/>
                <SortZA books={[]}/>
                <ul>
                    <li> </li>
                </ul>
            </div>
            <div className="authors">
                <SortAZ books={[]}/>
                <SortZA books={[]}/>
                <ul>
                    <li> </li>
                </ul>
             </div>
            <div className="notes">
            <div className="star">
                <img src="../images/star.svg" alt="rekomendacje"/>
            </div>
            <ul>

            </ul>
        </div>
            <div className="actions">
                <ul>
                    <li>
                        <Trash/>
                    </li>
                </ul>
            </div>
        </>
    )
};