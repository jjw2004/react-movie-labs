import React from "react";
import Grid from "@mui/material/Grid";
import MovieCard from '../components/movieCard'

const HomePage = (props) => {
  const movies = props.movies;
    
  return (
    <div>
      <h1> HomePage </h1>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <MovieCard movie={movies[0]} />
        </Grid>
      </Grid>
    </div>
  );
};
export default HomePage;
