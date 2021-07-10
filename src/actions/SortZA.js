import React, { useState } from "react";
import za from "../images/z-a.svg"
export default function SortZA({books: bookProps}) {
    const [books, setBooks] = useState([]);

    const sortZA=()=> {
        const sortedAZ=books.sort((a, b)=>{
            return b.books-a.books;
        });
        setBooks(sortedAZ);
    }
    return(
        <div>
            {books.map((book, i)=> {
                return <li key={i}>{book}</li>
            })}
            <button onClick={sortZA}><img src={za} alt="sortuj z-a"/></button>
        </div>
    )
};