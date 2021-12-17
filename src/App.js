import React from 'react'
import './App.css';
import Row from './components/Row'
import { movieLists, logos } from './apiLinks';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {

  return (
    <div className="App">

      <Nav logos={logos}/>

      <Banner url={movieLists.trending}/>

      <Row title='NETFLIX ORIGINALS' url={movieLists.originals} isLarge />
      <Row title='Trending' url={movieLists.trending} />
      <Row title='Top Rated' url={movieLists.topRated} />
      <Row title='Horror' url={movieLists.horror} />
      <Row title='Thriller' url={movieLists.thriller} />
      <Row title='Drama' url={movieLists.drama} />
      <Row title='Romance' url={movieLists.romance} />
      <Row title='Sci Fi' url={movieLists.scifi} />
    </div>
  );
}

export default App;
