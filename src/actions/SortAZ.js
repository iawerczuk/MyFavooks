import React, { useState } from "react";
import { SortableItem, swapArrayPositions } from "react-sort-list/src/SortableItem";
import azImg from "../images/a-z.svg"


let books =[
    {id:1, title:"title"},
    {id:2, title:"title"},
]
export default function SortAZ() {
    const [bookState, setBookState] = useState(books);

 function sorting (dragIndex, dropIndex) {
     let swappedBooks = swapArrayPositions(bookState, dragIndex, dropIndex);

     setBookState([...swappedBooks]);
 }
        return (
            <div>
                <ul>
                    <img src={azImg} alt="sortuj a-z"/>
                    {bookState.map(function (book, i) {
                        return (
                            <SortableItem items={bookState} id={book.id} key={book.id} swap={sorting}>
                                <li>{book.title}</li>
                            </SortableItem>
                        )
                    })}
                </ul>
            </div>
        )
    }



// export default function SortZA({books: bookProps}) {
//     const [books, setBooks] = useState([]);
//
//     const sortAZ=()=> {
//         const sortedAZ=books.sort((a, b)=>{
//             return a.books-b.books;
//         });
//         setBooks(sortedAZ);
//     }
//     return (
//         <div>
//             {books.map((book, i)=> {
//                 return <li key={i}>{book}</li>
//             })}
//             <button onClick={sortAZ}><img src={az} alt="sortuj z-a"/></button>
//         </div>)
// };