import React, {useState} from "react";
import Cancel from "./Cancel";
import AddToBorrowed from "./AddToBorrowed";
import AddToWishlist from "./AddToWishlist";

export default function AddBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [note, setNote]=useState("")

    return(
        <>
            <div className="plus-column">
                <div className="plus-img"/>
                <h1>dodaj nową książkę/ebooka</h1>
            </div>
            <form>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                <input type="text" value={author} onChange={e => setAuthor(e.target.value)}/>
                <input type="text" value={note} onChange={e => setNote(e.target.value)}/>
            </form>
                <Cancel/>
                <AddBook/>
                <AddToBorrowed/>
                <AddToWishlist/>
            </>
    )
}