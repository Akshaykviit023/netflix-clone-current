import React, { useEffect, useState } from 'react'
import './Banner.css';
import axios from './axios';
import requests from './Requests';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      const request=await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length-1)
        ]
      );
      return request;
    }
    fetchData();
  }, [setMovie]);

  console.log(movie);

  function truncate(string, n){
      return string?.length > n ? string.substr(0, n-1) + '...' : string;
  }
  return (
    <header 
    className='banner' 
    style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat"
        
    }}>

      <div className="banner__contents">
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">&#9658; &nbsp;Play</button>
          <button className="banner__button">&#43; &nbsp;My List</button>
        </div>
        <h1 className="banner__description">
          {
          truncate(
            movie.overview,
            175
          )}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  )
}

export default Banner