import React from "react";

const Movie = ({name, url}) => {
    return (
        <>
        <ul>
            <li>
                <a href={url}>{name}</a>
            </li>
        </ul>
        </>
    )
  
}

export default Movie;

