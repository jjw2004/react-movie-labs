import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSearchMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import { Typography, Grid, Card, CardMedia, CardContent, Box, CardActionArea, Container } from "@mui/material";

function useQueryParam() {
  return new URLSearchParams(useLocation().search);
}

const SearchResultsPage = () => {
  const queryParam = useQueryParam();
  const query = queryParam.get("query") || "";
  const navigate = useNavigate();

  const { data, error, isPending, isError } = useQuery({
    queryKey: ["search", { query }],
    queryFn: getSearchMovies,
    enabled: !!query,
  });

  if (!query) {
    return <Typography variant="h5" sx={{ mt: 4, textAlign: "center" }}>Please enter a search term.</Typography>;
  }
  if (isPending) return <Spinner />;
  if (isError) return <Typography variant="h6">Error: {error.message}</Typography>;

  const movies = data?.results || [];

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Search Results for "{query}"
      </Typography>
      {movies.length === 0 ? (
        <Typography variant="h6">No results found.</Typography>
      ) : (
        <Grid container spacing={2}>
          {movies.map((movie) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={movie.id}>
              <Card sx={{ height: '100%' }}>
                <CardActionArea onClick={() => navigate(`/movies/${movie.id}`)}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                        : "https://via.placeholder.com/200x300?text=No+Image"
                    }
                    alt={movie.title}
                  />
                  <CardContent>
                    <Typography variant="body2" fontWeight="bold" noWrap>
                      {movie.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" noWrap>
                      {movie.release_date}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default SearchResultsPage;
