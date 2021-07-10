import React from "react";
import { Link } from 'react-router-dom';

import ebookImg from '../images/kindle.png';

export default function EbooksContainer() {

    return(
        <div className="main">

            <div className="books container">
                <Link to="/EbooksList"><img src={ebookImg} alt="ebooki"/></Link>
                <h2>ebooki</h2>
                <p>sprawdź, co już masz na kindlu</p>
            </div>

        </div>
    )
};