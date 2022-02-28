import "./App.css";
import requests from "./request";
import Row from "./Row";
import { useState } from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
function App() {
  const [isLargeRow, setIsLargeRow] = useState(false);
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="Netflix Originals"
        isLargeRow={true}
        fetchUrl={requests.getNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.getTrending} />
      <Row title="Top Rated" fetchUrl={requests.getTopRated} />
      <Row title="Action Movies" fetchUrl={requests.getActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.getComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.getHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.getRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.getDocumentaries} />
    </div>
  );
}

export default App;
