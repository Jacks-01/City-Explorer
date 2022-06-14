/**
 * @file Movies.js
 * @description Displays the movie data that is held in Main.js
 */

const Movies = (props) => {
	return(
		props.movieData.map((movie, index) => (
			<div key={index}>
				<p> Title: {movie.title}</p>
				<p>overview: {movie.overview}</p>
			</div>
		))
	);
};

export default Movies;