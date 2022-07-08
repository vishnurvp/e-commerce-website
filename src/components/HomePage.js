import React, { useState } from "react";
import classes from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  async function fetchMoviesHandler() {
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();

    const transformedData = data.results.map((movie) => {
      return {
        id: movie.episode_id,
        title: movie.title,
        openingText: movie.opening_crawl,
        releaseDate: movie.release_date,
      };
    });
    setMovies(transformedData);
  }

  return (
    <div>
      <div className={classes.headingDiv}>
        <h1 className={classes.heading}>The Generics</h1>
        <h2>Get Our Latest Album</h2>
        <h3 className={classes.play}>Play</h3>
      </div>
      <div>
        <h1>Tours</h1>
        <ul className={classes.list}>
          <li>
            event one <button>Buy Tickets</button>
          </li>
          <li>
            event two <button>Buy Tickets</button>
          </li>
          <li>
            event three <button>Buy Tickets</button>
          </li>
          <li>
            event four <button>Buy Tickets</button>
          </li>
          <li>
            event five <button>Buy Tickets</button>
          </li>
        </ul>
      </div>
      <div>
        <h1>Movies</h1>
        <button onClick={fetchMoviesHandler}>Get Movies</button>
        <ul className={classes.list}>
          {movies.map((movies) => (
            <li key={movies.id}>
              <h3>{movies.title}</h3>
              <h5>{movies.openingText}</h5>
              <h4>{movies.releaseDate}</h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
