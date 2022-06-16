/**
 * @file Movies.js
 * @description Displays the movie data that is held in Main.js
 */
import { Accordion, Container } from 'react-bootstrap';

const Movies = (props) => {
	return props.movieData.map((movie, index) => (
		<Container>
			<Accordion key={index}>
				<Accordion.Item eventKey="0">
					<Accordion.Header>
						<p>{movie.title}</p>
					</Accordion.Header>
					<Accordion.Body>
						<p> Overview: {movie.overview}</p>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</Container>
	));
};

export default Movies;
