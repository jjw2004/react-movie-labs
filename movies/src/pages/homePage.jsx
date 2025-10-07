import React, { useState, useEffect } from "react";  
import MovieList from "../components/movieList";
import Grid from "@mui/material/Grid2";
import Header from '../components/headerMovieList';
import FilterCard from "../components/filterMoviesCard";

const HomePage = (props) => {
  const [movies, setMovies] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");

  const genreId = Number(genreFilter);

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  useEffect(() => {
    console.log("TMDB API Key:", import.meta.env.VITE_TMDB_KEY);
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => {
        console.log("API Response:", json);
        return json.results;
      })
      .then((movies) => {
        setMovies(movies);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        // Fallback sample data
        const sampleMovies = [{
          id: 1,
          title: "Sample Movie",
          poster_path: "/sample.jpg",
          release_date: "2023-01-01",
          vote_average: 7.5,
          genre_ids: [28, 12]
        }];
        setMovies(sampleMovies);
      });
  }, []);

  return (
    <Grid container>
      <Grid size={12}>
        <Header title={"Home Page"} />
      </Grid>
      <Grid container sx={{flex: "1 1 500px"}}>
        <Grid key="find" size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} sx={{padding: "20px"}}>
          <FilterCard 
            onUserInput={handleChange} 
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <MovieList movies={displayedMovies}></MovieList>
      </Grid>
    </Grid>
  );
};

export default HomePage;
