import React, { useState, useEffect} from "react";

import ebookImg from "../images/kindle.png";

export default function AddToEbooks() {

    const host = "http://localhost:3005"
    const [ebooks, setEbooks] = useState(null)
    const [values, setValues] = useState({
        title: "",
        author: "",
        note: ""
    })

    const handleChange = (e) => {
        const { value, name } = e.target;
        setValues(prev => ({
            ...prev,
            [name]: value
        }))
    }

    useEffect(() => {
        fetch(`${host}/ebooks`)
            .then(result => result.json())
            .then(t => setEbooks(t))

            .catch((err) => console.warn(err))
    }, [])

    const handleAdd = (e) => {
        e.preventDefault();

        if (values.title.length < 2) {
            alert("Tytuł jest za krótki");
        }
        if (values.author.length < 3) {
            alert("Nazwisko jest za krótkie");
        }
        if (values.note.length > 100) {
            alert("Notatka jest za długa");
        }


        const ebook = {
            id: 1,
            title: "Czas na języki",
            name: "Scholz S.",
            note: "wyd. PSC",
        }
        fetch(`${host}/ebooks`, {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                "Content-Type": 'application/json'
            }
        })
            .then((response) => response.json())
            .then(ebook => setEbooks(prev => ([
                ...prev, ebook
            ])))
            .catch((err) => console.warn(err))
    }

    return (
        <>
            <form className="form" onSubmit={handleAdd}>
                <div className="form-book">
                    <label>tytuł</label>
                    <input type="text"
                           name="title"
                           value={values.title}
                           onChange={handleChange}/>
                    <label htmlFor="author">autor</label>
                    <input type="text"
                           name="author"
                           value={values.author}
                           onChange={handleChange}/>
                    <label htmlFor="note">rekomendacje</label>
                    <input type='text'
                           name='note'
                           className="note"
                           value={values.note}
                           onChange={handleChange}/>
                    <input type="image" className="btn" src={ebookImg} alt="dodaj do listy książek"/>
                </div>
            </form>
            <ul className="list">
                {ebooks?.map((ebook, id) => {
                    return(
                        <li key={id}>{ebook.title} {ebook.author} {ebook.note}</li>
                    );
                })}
            </ul>
        </>
    )
}