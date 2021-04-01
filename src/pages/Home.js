import React from "react"
import MovieCard from "../components/MovieCard"
import TrendingMovieCard from '../components/TrendingMovieCard'

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            nowPlaying: [],
            trending: [],
            allGenres: []
        }
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=8143678268e8a5f787532a00537d3bcc&page=1")
            .then(response => response.json())
            .then(apiData => {this.setState({nowPlaying: apiData.results})})
        
        fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=8143678268e8a5f787532a00537d3bcc")
            .then(response => response.json())
            .then(apiData => {this.setState({trending: apiData.results})})

        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=8143678268e8a5f787532a00537d3bcc&language=en-US")
            .then(response => response.json())
            .then(apiGenres => {this.setState({allGenres: apiGenres.genres})})
    }

    render(){
        const nowPlaying = this.state.nowPlaying
        const trending = this.state.trending
        const allGenres = this.state.allGenres
        return(
            nowPlaying.length === 0 ?
            <h2>loading...</h2>
            :
            <div>
                <div>
                    <h1 className="movies-h1">Movies</h1>
                    <div className="movie-cards-container">
                    {nowPlaying.slice(0, 5).map(i => 
                        <MovieCard 
                            key={i.id}
                            image={i.poster_path}
                            title={i.title}
                        />
                    )}
                    </div>
                </div>
                <div>
                    <h1>Trending</h1>
                    {trending.slice(0, 5).map(i =>
                        <TrendingMovieCard 
                            key={i.id}
                            image={i.poster_path}
                            title={i.title}
                            allGenres={allGenres}
                            genre_ids={i.genre_ids}
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default Home
