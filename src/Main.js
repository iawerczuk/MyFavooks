import React from "react";

import Books from "./Books";
import Ebooks from "./Ebooks";
import Borrowed from "./Borrowed";
import Wishlist from "./Wishlist";

export default function Main() {

    return(
        <>
           <Books/>
           <Ebooks/>
           <Borrowed/>
           <Wishlist/>
        </>
    )
};