import React, { useState, useEffect } from "react";
import trash from "../images/trash.svg";
export default function Trash() {

    const host="http://localhost:3000"
    const [title, setTitle]=useState(null);

    useEffect(() => {
        fetch(`${host}/bookslist`)
            .then(result => result.json())
            .then(books => setTitle(title))
    },[])
    const handleTrash = (title) => {
        fetch(`${host}/books/${title}`, {
            method:"DELETE"
        })
            .then(() => setTitle(prev => prev.filter(el=>el.title !== title)))
            .catch((err) => console.warn(err))
    }

    return (
        <div className="trash">
            <ul>
                {title.map((el) => {
                    return <button type="submit" onClick={() => handleTrash(el.title)}><img src={ trash } alt="usuń"/></button>
                    })}
            </ul>
        </div>
);
}


    // export default function Trash(book) {
//
// const [bookState, setBookState] = useState([]);
//
// const handleDelete = (id) => {
//     setBookState((prev) => prev.filter((el) => el.id !== id));
// };