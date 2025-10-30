# Features and Customizations

This project implements a full-featured React movie app using the TMDB API, with extensive enhancements for assignment requirements and modern UI/UX:

- Custom Material-UI theme: red header, black background, dark grey cards, and white text for a bold, modern look
- Responsive layout using MUI Grid and Card components
- Interactive card hover effects for a polished user experience
- Sticky filter card on large screens for easy access to filtering
- Search bar in the header with real-time navigation to results
- Sorting dropdown for search results (popularity, release date, rating, title)
- All major TMDB endpoints: Popular, Top Rated, Now Playing, Upcoming, Movie Details, Actor Details, Recommendations, Reviews
- Context for favorites, must-watch, and reviews
- Dedicated Must Watch page: add movies to your must-watch list from any main movie list page and view them at /movies/must-watch or via the "Must Watch" link in the header
- Cast and actor linking between movies and people
- Recommended movies on each movie details page
- Custom popcorn image for the filter card (replacing the default landscape)
- Robust error handling and loading states
- Clean navigation and linking between all entities

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

### Must Watch Movies Page
- Add any movie to your must-watch list from the Home, Popular, Top Rated, Now Playing, or Upcoming pages using the "Add to Must Watch" button on each movie card
- View all your must-watch movies on a dedicated page at `/movies/must-watch`
- Access the Must Watch page directly from the site header navigation
- Must Watch list is managed globally using React context

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

### Sorting
- Sort search results by popularity, release date, rating, or title (A-Z)
- Sorting dropdown above results grid
- Updates results in real time
- Works on the search results page for all queries

### Extra Work
- Changed colours of the page
- Changed the picture on the genre sorting from the landscape to a simple popcorn logo


