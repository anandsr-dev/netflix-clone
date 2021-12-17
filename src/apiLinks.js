
export const movieLists = {
    trending: `/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
    originals: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&with_networks=203&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    topRated: `/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`,
    thriller: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&with_genres=53&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    drama: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&with_genres=18&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    horror: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&with_genres=27&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    romance: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&with_genres=10749&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    scifi: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&with_genres=878&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate`
}

export const imgBaseUrl = {
    200: `https://image.tmdb.org/t/p/w200`,
    500: `https://image.tmdb.org/t/p/w500`,
    original: `https://image.tmdb.org/t/p/original`
}

export const logos = {
    netflix: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png',
    avatar: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png'
}