import React, { useState, useEffect} from "react";
import {Link} from "react-router-dom";
import BooksList from "../lists/BooksList";
import EbooksList from "../lists/EbooksList";
import WishlistList from "../lists/WishlistList";
import BorrowedList from "../lists/BorrowedList";


export default function AddToBooks() {

    const host="http://localhost:3000"
    const [title, setTitle]=useState(null);

    useEffect(() => {
        fetch(`${host}/bookslist`)
            .then(result => result.json())
            .then(title => setTitle(title))
            .catch((err) => console.warn(err))
    },[])

    const handleAdd=(newTitle) => {
        fetch(`${host}/bookslist`, {
            method:"POST",
            body:JSON.stringify(newTitle),
            headers:{
                "Content-Type":'application/json'
            }
        })
            .then((response) => response.json())
            .then((data => setTitle(prev=> [...prev, data])))
    }


    return(
        <>
            <AddToBooks addTitle={handleAdd} />
            <ul>
                {title.map((el)=>{
                    return<li key={el.title}>
                    <p>{el.title}</p>
                    <p>{el.author}</p>
                    <p>{el.note}</p>
                    <button className="button"><img src="../images/books.svg" alt="dodaj do listy książek"/><BooksList/></button>
                    <button className="button"><img src="../images/kindle.png" alt="dodaj do listy ebooków"/><EbooksList/></button>
                    <button className="button"><img src="../images/borrow.png" alt="dodaj do listy książek wypożyczonych"/><BorrowedList/></button>
                    <button className="button"><img src="../images/heart.png" alt="dodaj do wishlist"/><WishlistList/></button>
                    </li>
                })}
            </ul>
        </>
    )
}

