import React, { useState, useEffect} from "react";

import heartImg from "../images/heart.png";

export default function AddToBooks() {

    const host = "http://localhost:3005"
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [note, setNote] = useState('')

    useEffect(() => {
        fetch(`${host}/wishedbooks`)
            .then(result => result.json())
            .then(t => setTitle(t))
            .then(a => setAuthor(a))
            .then(n => setNote(n))
            .catch((err) => console.warn(err))
    }, [])

    const handleAdd = (e) => {
        e.preventDefault();

        // if (title.length < 2) {
        //     alert("Tytuł jest za krótki");
        // }
        // if (author.length < 3) {
        //     alert("Nazwisko jest za krótkie");
        // }
        // if (note.length > 100) {
        //     alert("Notatka jest za długa");


        const book = {
            id: 1,
            title: "Czas na języki",
            name: "Scholz S.",
            note: "wyd. PSC",
            paper: true,
            ebook: false,
            borrowed: false,
            wishlist: false,
        }
        fetch(`${host}/wishedbooks`, {
            method: "POST",
            body: JSON.stringify(book),
            headers: {
                "Content-Type": 'application/json'
            }
        })
            .then((response) => response.json())
            .then(title => setTitle(prev => ([
                ...prev,
                title])))
            .then(author => setAuthor(prev => ([
                ...prev,
                author])))
            .then(note => setNote(prev => ([
                ...prev,
                note])))
            .catch((err) => console.warn(err))


        setTitle('')
        setAuthor('')
        setNote('')
    }

    return (
        <form className="form" onSubmit={handleAdd}>
            <div className="form-book">
                <label>tytuł</label>
                <input type="text"
                       name="title"
                       value={title}
                       onChange={(e) => setTitle(e.target.value)}/>
                <label htmlFor="author">autor</label>
                <input type="text"
                       name="author"
                       value={author}
                       onChange={(e) => setAuthor(e.target.value)}/>
                <label htmlFor="note">rekomendacje</label>
                <input type='text'
                       name='note'
                       className="note"
                       value={note}
                       onChange={(e) => setNote(e.target.value)}/>
                <input type="image" className="btn" src={heartImg} alt="dodaj do wishlisty"/>
            </div>
        </form>
    )
}

