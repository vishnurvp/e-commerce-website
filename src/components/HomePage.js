import React, { useState, useEffect } from "react";
import classes from "./HomePage.module.css";
import AddMovie from "./AddMovie";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retry, setRetry] = useState(false);

  const addMovieHandler = async (movie) => {
    const response = await fetch('https://react-http-f04a8-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (data) fetchMoviesHandler();
  };

  const deleteMovieHandler = async (event) => {
    const movieId = event.target.id;
    const url = `https://react-http-f04a8-default-rtdb.firebaseio.com/movies/${movieId}.json`;
    const response = await fetch(url, {
      method: 'DELETE',
    })
    const data = await response.json();
    if(!data) fetchMoviesHandler();
  }

  const cancelRetryingHandler = () => {
    setRetry(false);
  };

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://react-http-f04a8-default-rtdb.firebaseio.com/movies.json");
      if (!response.ok) throw new Error("Somethig went Wrong ... Retrying");
      const data = await response.json();
      // console.log(data);
      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        })
      }

      // const transformedData = loadedMovies.map((movie) => {
      //   return {
      //     id: movie.episode_id,
      //     title: movie.title,
      //     openingText: movie.opening_crawl,
      //     releaseDate: movie.release_date,
      //   };
      // });
      // setMovies(transformedData);
      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
      setRetry(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchMoviesHandler();
    }, 5000);
    if (!retry) {
      clearInterval(interval);
      return;
    }
    return () => clearInterval(interval);
  }, [retry]);

  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  let content = <p>No Movies Found</p>;
  if (movies.length > 0) {
    content = (
      <ul className={classes.list}>
        {movies.map((movies) => (
          <li key={movies.id}>
            <div>
            <h3>{movies.title}</h3>
            <h5>{movies.openingText}</h5>
            <h4>{movies.releaseDate}</h4>
            </div>
            <div>
              <button id={movies.id} onClick={deleteMovieHandler}>Delete Movie</button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
  if (error) content = <p>{error}</p>;
  if (isLoading) content = <p>Loading...</p>;

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
        <div>
          <AddMovie onAddMovie={addMovieHandler} />
        </div>
        <button onClick={fetchMoviesHandler}>Get Movies</button>
        <div>{content}</div>
        {error && retry && (
          <div>
            <button onClick={cancelRetryingHandler}>Cancel Retrying</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
