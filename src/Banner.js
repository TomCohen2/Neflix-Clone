import React from "react";
import "./styles/Banner.css";
import { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./request";
import Navbar from "./Navbar";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrlForImages = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = React.useState([]);
  const [trailerUrl, setTrailerUrl] = React.useState("");
  const [showTrailer, setShowTrailer] = React.useState(false);

  // function handleClick() {
  //   if (trailerUrl) {
  //     setTrailerUrl("");
  //   } else {
  //     movieTrailer(movie.name || movie.title || movie.original_name || "")
  //       .then((url) => {
  //         const urlParams = new URLSearchParams(new URL(url).search);
  //         setTrailerUrl(urlParams.get("v"));
  //         console.log(urlParams.get("v"));
  //       })
  //       .catch((error) => {
  //         console.log("ERROR");

  //         // alert("Trailer not found");
  //       });
  //     setShowTrailer(true);
  //     console.log(movie);
  //   }
  // }

  function handleClick() {
    showTrailer ? setShowTrailer(false) : setShowTrailer(true);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.getActionMovies);
      let num = Math.floor(Math.random() * response.data.results.length);
      setMovie(response.data.results[num]);
      console.log(response.data.results[num].name);
      await movieTrailer(
        response.data.results[num].name ||
          response.data.results[num].title ||
          response.data.results[num].original_name ||
          ""
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          console.log(urlParams.get("v"));
        })
        .catch((error) => {});

      return response;
    }
    fetchData();
  }, [requests.getActionMovies]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  // opts for youtube
  return (
    <>
      <header
        className="main__banner"
        style={{
          backgroundImage: `url(${baseUrlForImages + movie.backdrop_path})`,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="banner__content">
          {/* title */}
          <p className="banner__title">{movie.name}</p>
          {/* buttons */}
          <div className="banner__buttons">
            <button className="banner__button" onClick={() => handleClick()}>
              Play
            </button>
            <button className="banner__button">My List</button>
          </div>
          {/* description */}

          <div className="banner__description">{movie.overview}</div>
        </div>
        <div className="banner__footer" />
      </header>
      {/* {showTrailer && trailerUrl && ( */}
      {showTrailer && <YouTube videoId={trailerUrl} opts={opts} />}
      {/* )} */}
    </>
  );
}

export default Banner;
