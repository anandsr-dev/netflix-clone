import React, { useState, useEffect } from 'react'
import { getData } from '../helpers/getData'
import { imgBaseUrl } from '../apiLinks'
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

function Row({ title, url, isLarge = false }) {

    const [movies, setMovies] = useState([])
    const [trailerURL, setTrailerURL] = useState('')
    const [playingId, setPlayingId] = useState('')

    const handleMovieClick = (id) => {
        if (id) {
            if (id === playingId) {
                setTrailerURL('')
                setPlayingId('')
            } else {
                movieTrailer(null, { tmdbId: id })
                    .then(res => {
                        const urlParams = new URLSearchParams(new URL(res).search)
                        setTrailerURL(urlParams.get('v'))
                        setPlayingId(id)
                    })
                    .catch(err => console.log('error -->', err))
            }
        }

    }

    useEffect(() => {
        getData(url).then(res => {
            // console.log('res ', res)
            setMovies(res)
        })
    }, [url])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row_posters">
                {movies?.map(movie => (
                    <img onClick={() => handleMovieClick(movie.id)} className={`row_poster ${isLarge ? 'large_poster' : ''}`} key={movie.id} src={`${imgBaseUrl[500]}${isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.title} />
                ))}
            </div>
            {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
        </div>
    )
}

export default Row
