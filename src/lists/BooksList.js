import React, {useState, useEffect } from "react";
import AddToBooks from "../addToList/AddToBooks";


export default function BooksList({ books, onTrash}) {
    const host = "http://localhost:3005"
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [note, setNote] = useState('')

    useEffect(() => {
        fetch(`${host}/books`)
            .then(result => result.json())
            .then(t => setTitle(t))
            .then(a => setAuthor(a))
            .then(n => setNote(n))
            .catch((err) => console.warn(err))
    }, [])

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
            fetch(`${host}/books`, {
                method: "PUT",
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

    return (
            <div className="main">
                {books.map((book, i) => (
                    <AddToBooks key={i} book={book} onTrash={onTrash} />
                        ))}
            </div>
    )
}