import React from "react";
import axios from "./axios";
import { useEffect } from "react";
import "./styles/Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrlForImages = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = React.useState([]);
  const [trailerUrl, setTrailerUrl] = React.useState("");
  const [movieTitle, setMovieTitle] = React.useState("");

  function handleClick(movie) {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          console.log(urlParams);
        })
        .catch((error) => {
          console.log(error);
          alert("Trailer not found");
        });
    }
  }

  useEffect(() => {
    async function fetchData() {
      if (fetchUrl !== null && fetchUrl !== undefined) {
        const response = await axios.get(fetchUrl);
        setMovies(response.data.results);
        return response;
      }
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="row__block">
      <h1>{title}</h1>
      <div className="row">
        {movies.map(
          (movie) =>
            movie.poster_path && (
              <img
                onClick={() => handleClick(movie)}
                key={movie.id}
                src={
                  isLargeRow
                    ? baseUrlForImages + movie.poster_path
                    : baseUrlForImages + movie.backdrop_path
                }
                alt={movie.name}
              />
            )
        )}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
