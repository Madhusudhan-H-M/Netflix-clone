import './App.css';
import requests from './requests';
import Row from './row.js';
import Nav from './nav';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Banner />
        <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        <h2>Made by Madhu</h2>
      </header>
    </div>
  );
}

export default App;
