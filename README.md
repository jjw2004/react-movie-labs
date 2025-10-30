# React Movie Labs

Assignment for Web app devolpment 2

## What is new for the assignment

### Top Rated Movies Page
- Displays highest-rated movies from TMDB
- Browse curated list of critically acclaimed films
- Add top-rated movies to favorites
- Cached data for improved performance using React Query
- Accessible via header navigation or `/movies/top-rated` route

### Popular Movies Page
- Displays currently trending/popular movies from TMDB
- Browse movies with the most user activity and attention
- Add popular movies to favorites
- Cached data for improved performance using React Query
- Accessible via header navigation or `/movies/popular` route

### Now Playing Page
- Shows movies currently in theaters
- Same layout and interactions as other list pages
- Add now-playing movies to favorites
- Uses React Query for caching
- Accessible via header navigation or `/movies/now-playing` route

### Movie Cast Display
- Shows top 6 cast members on movie details page
- Displays actor photos, names, and character roles
- Uses parameterized `/movie/{id}/credits` endpoint
- Grid layout with responsive design
- Cast members are clickable, linking to actor details page

### Actor Details Page
Parameterized page displaying actor biography and filmography
Shows actor photo, name, birthday, and place of birth
Displays up to 12 movies the actor has appeared in
Each movie in filmography is clickable, linking back to movie details
Creates extensive linking between movies and actors
Uses `/person/{id}` and `/person/{id}/movie_credits` endpoints
Accessible by clicking any cast member on movie details page

### Recommended Movies
- Shows up to 6 recommended movies on each movie details page
- Uses `/movie/{id}/recommendations` parameterized endpoint
- Each recommended movie is clickable and links to its details page
- Grid layout with posters and release dates
- Cached with React Query for performance

### Search Functionality
- Search bar in the site header (desktop)
- Search for movies by title using TMDB `/search/movie` endpoint
- Results displayed in a responsive grid with posters and release dates
- Each result is clickable and links to the movie details page
- Dedicated `/search` route for results page
- Fully integrated with React Query for caching and performance