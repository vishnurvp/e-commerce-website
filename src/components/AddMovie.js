import React, { Fragment } from "react";
import classes from "./AddMovie.module.css";

const AddMovie = (props) => {
  const addMovieClickHandler = (event) => {
    event.preventDefault();
    const movie = {
      title: event.target.elements["movie-name"].value,
      openingText: event.target.elements["opening-text"].value,
      releaseDate: event.target.elements["release-date"].value,
    };
    props.onAddMovie(movie);
    event.target.elements["movie-name"].value = '';
    event.target.elements["opening-text"].value = '';
    event.target.elements["release-date"].value = '';
  };
  return (
    <Fragment>
      <form className={classes.form} onSubmit={addMovieClickHandler}>
        <label htmlFor="movie-name">Movie Name</label>
        <input id="movie-name" type="text" /><br/>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea id="opening-text" type="textarea"></textarea><br/>
        <label htmlFor="release-date">Release Date</label>
        <input id="release-date" type="date" /><br/>
        <button id="addMovieBtn" type="submit">
          Add Movie
        </button>
      </form>
    </Fragment>
  );
};

export default AddMovie;
