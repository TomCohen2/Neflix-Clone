const API_KEY = "fe3c5cbff2488f14fd65ae9e7794aeef";

const requests = {
  getTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  getNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_netflix=true`,
  getTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  getActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  getComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  getHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  getRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  getDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
