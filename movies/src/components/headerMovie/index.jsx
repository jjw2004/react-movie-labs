import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";

const MovieHeader = (props) => {
  const movie = props.movie;

  return (
    <Paper 
        component="div" 
        sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            padding: 2,
            margin: "0 0 1rem 0",
            width: "100%",
        }}
      >
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <Typography variant="h4" component="h3" sx={{ flexGrow: 1, textAlign: "center" }}>
        {movie.title}
        {movie.homepage && (
          <a href={movie.homepage} style={{ marginLeft: "10px" }}>
            <HomeIcon color="primary" />
          </a>
        )}
        <br />
        <Typography variant="h6" component="span" sx={{ fontStyle: "italic" }}>
          {movie.tagline && `"${movie.tagline}"`}
        </Typography>
      </Typography>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;