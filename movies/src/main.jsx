import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";

const App = () => {
  return (
    <BrowserRouter>
      <ul style={{
        display: "flex",
        listStyle: "none",
        padding: "1rem",
        margin: 0,
        backgroundColor: "#f5f5f5",
        borderBottom: "1px solid #ddd",
        gap: "2rem"
      }}>
        <li>
          <Link to="/" style={{
            textDecoration: "none",
            color: "#1976d2",
            fontWeight: "bold",
            fontSize: "1.1rem"
          }}>Home</Link>
        </li>
        <li>
          <Link to="/movies/favorites" style={{
            textDecoration: "none",
            color: "#1976d2",
            fontWeight: "bold",
            fontSize: "1.1rem"
          }}>Favorites</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);
