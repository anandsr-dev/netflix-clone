import React, { useState, useEffect, useRef } from 'react'
import { imgBaseUrl } from '../apiLinks'
import { getData } from '../helpers/getData'
import './Banner.css'
function Banner({ url }) {

    const [movie, setMovie] = useState({})
    const banner = useRef(null)

    const loadMovie = async () => {
        const res = await getData(url)
        setMovie(res[Math.floor(Math.random() * res.length)])
    }

    const loadBanner = () => {
        banner.current.style.backgroundImage = `url(${imgBaseUrl.original}${movie.backdrop_path})`
    }

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str
    }

    useEffect(() => {
        loadMovie()
    }, [])

    useEffect(() => {
        loadBanner()
    }, [movie])

    console.log(movie)
    return (
        <header ref={banner} className='banner'>
            <div className="banner__contents">
                <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name || movie?.original_title}</h1>

                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

                <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className="banner--fadeBottom"></div>
        </header>
    )
}

export default Banner
