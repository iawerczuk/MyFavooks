import React, { useState } from "react";

import cancelImg from "../images/cancel.png";
import bookImg from "../images/books.svg"
import ebookImg from "../images/kindle.png"
import borrowedImg from "../images/borrow.png"
import heartImg from "../images/heart.png"
import {SortableItem} from "react-sort-list/src/SortableItem";

export default function Add() {
    const [title, setTitle]=useState("");
    const [author, setAuthor]=useState("");
    const [note, setNote]=useState("");

    const handleAddBook=(e)=> {
        e.preventDefault();
        AddBook({
                title:title,
                author:author,
                note:note,
            },
        )

        const err = [];

        if (title.length < 2) {
            err.push("Tytuł jest za krótki");
        }
        if (author.length < 3) {
            err.push("Nazwisko jest za krótkie");
        }
        if (note.length > 100) {
            err.push("Notatka jest za długa")
        }
    }
    return(
        <>
            <SortableItem>
            <form className="form" onSubmit={handleAddBook}>
                    <label htmlFor="title">tytuł</label>
                <input type="text"
                       className="title"
                       value={ title}
                       onChange={(e) => setTitle(e.target.value)}/>
                <label htmlFor="author">autor</label>
                <input type="text"
                       className="author"
                       value={author}
                       onChange={(e) => setAuthor(e.target.value)}/>
                <label htmlFor="note">rekomendacje</label>
                <input type='text'
                       className="note"
                       value={note}
                       onChange={(e) => setNote(e.target.value)}/>
            </form>
            <div className="actions">
                <button className=" button " type="submit"><img src={cancelImg} alt="anuluj"/></button>
                <button className=" button " type="submit"><img src={bookImg} alt="dodaj do listy książek"/></button>
                <button className=" button " type="submit"><img src={ebookImg} alt="dodaj do listy ebooków"/></button>
                <button className=" button " type="submit"><img src={borrowedImg} alt="dodaj do listy książek pożyczonych"/></button>
                <button className=" button " type="submit"><img src={heartImg} alt="dodaj do wishlist"/></button>
            </div>
        </SortableItem>
        </>
    );
}