import React, { useState, useEffect } from "react";

const words=[];
export default function Search() {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [searchResults, setSearchResults] =useState([]);
    const handleChange = event => {
        setSearchPhrase(event.target.value);
    };
    useEffect(() => {
        const results = words.filter(word =>
            word.includes(searchPhrase)
        );
        setSearchResults(results);
    }, [searchPhrase]);

    return (
        <div>
            <input type="text" placeholder="Search" value={searchPhrase} onChange={handleChange}/>
            <ul>
                {searchResults.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    );
}