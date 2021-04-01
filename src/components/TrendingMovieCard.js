import React from "react"

function TrendingMovieCard(props){
    return(
        <div>
            <img src={`https://image.tmdb.org/t/p/w300${props.image}`} alt={props.title}/>
            <h3>{props.title}</h3>
            {props.allGenres.length !== 0 ? 
                <div>
                    <h4>{props.allGenres[Math.floor(Math.random() * props.allGenres.length)].name}</h4>
                    <h4>{props.allGenres[Math.floor(Math.random() * props.allGenres.length)].name}</h4>
                </div>
                :
                <span></span>
            }
        </div>
    )
}

export default TrendingMovieCard