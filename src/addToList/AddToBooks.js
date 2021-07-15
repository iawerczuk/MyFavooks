import React, { useState, useEffect} from "react";
import {Link} from "react-router-dom";

import BooksList from "../lists/BooksList";
import EbooksList from "../lists/EbooksList";
import WishlistList from "../lists/WishlistList";
import BorrowedList from "../lists/BorrowedList";
import bookImg from "../images/books.svg";
import kindleImg from "../images/kindle.png";
import borrowedImg from "../images/books.svg";
import heartImg from "../images/heart.png";

export default function AddToBooks() {

    const host="http://localhost:3005"
    const [books, setBooks] = useState(books)

    useEffect(() => {
        fetch(`${host}/books`)
            .then(result => result.json())
            .then(r => setBooks(r))
            .catch((err) => console.warn(err))
    },[])

    const handleAdd=(id) => {
        id.preventDefault();
        const book = {
            id:1,
            title: "Czas na języki" ,
            name: "Scholz S." ,
            note: "wyd. PSC",
            paper: true,
            ebook: false,
            borrowed: false,
            wishlist: false,
        }
        fetch(`${host}/books`, {
            method:"POST",
            body:JSON.stringify(book),
            headers:{
                "Content-Type":'application/json'
            }
        })
            .then((response) => response.json())
            .then(book => setBooks(prev => ([
                ...prev,
                book
            ])))
            // .then(data => setTitle(prev=> [...prev, data]))
            // .catch((err) => console.warn(err))

        // if (title.length < 2) {
        //     err.push("Tytuł jest za krótki");
        // }
        // if (author.length < 3) {
        //     err.push("Nazwisko jest za krótkie");
        // }
        // if (note.length > 100) {
        //     err.push("Notatka jest za długa")
    }

    return (
        <>
            //formularz, powieniem mieć handle add

            <form className="form" onSubmit={handleAdd}>
                {books.map((books)=>{
                    return <div>
                        <label >tytuł</label>
                    <input key={id} type="text"
                           name="title"
                           value={book.title}/>
                    <label htmlFor="author">autor</label>
                    <input type="text"
                           name="author"
                           value={books.author}/>
                    <label htmlFor="note">rekomendacje</label>
                    <input type='text'
                           name='note'
                           className="note"
                           value={books.note}/>
                    </div>
                })}
            </form>
                {/*{books?.map((el)=>{*/}
                {/*    return<li key={el.title}>*/}
                {/*        <p>{el.title}</p>*/}
                {/*        <p>{el.author}</p>*/}
                {/*        <p>{el.note}</p>*/}
                {/*        <p>{el.paper} {el.ebook} {el.borrowed} {el.wishlist}</p>*/}
                       <Link to="./BooksList"><button className="button" onClick={() => handleAdd(books.id)}><img src={bookImg} alt="dodaj do listy książek"/></button></Link>
                        <button className="button"><img src={kindleImg} alt="dodaj do listy ebooków"/></button>
                        <button className="button"><img src={borrowedImg} alt="dodaj do listy książek wypożyczonych"/></button>
                        <button className="button"><img src={heartImg} alt="dodaj do wishlist"/></button>
                })}
        </>
    )
}