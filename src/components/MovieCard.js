import React from "react"

function MovieCard(props){
    return(
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w300${props.image}`} alt={props.title}/>
            <h3>{props.title}</h3>
        </div>
    )
}

export default MovieCard