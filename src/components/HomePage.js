import React, { useState } from "react";
import classes from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retry, setRetry] = useState(true);

  const cancelRetryingHandler = () => {
    setRetry(false);
  }

  const retryFetch = () => {
    return new Promise((res)=>setTimeout(res,5000))
  }

  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/film");
      if (!response.ok) {
        throw new Error('Somethig went Wrong ... Retrying');
      }

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
    } catch (error) {
      setError(error.message);
      if (retry) retryFetch().then(fetchMoviesHandler);
    }
    setIsLoading(false);
  }

  let content = <p>No Movies Found</p>;
  if (movies.length>0) {
    content = <ul className={classes.list}>
    {movies.map((movies) => (
      <li key={movies.id}>
        <h3>{movies.title}</h3>
        <h5>{movies.openingText}</h5>
        <h4>{movies.releaseDate}</h4>
      </li>
    ))}
  </ul>
  }

  if (error) content = <p>{error}</p>;
  if (isLoading) content = <p>Loading...</p>

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
        <div>{content}</div>
        {error && retry && <div><button onClick={cancelRetryingHandler}>Cancel Retrying</button></div>}
      </div>
    </div>
  );
};

export default HomePage;
