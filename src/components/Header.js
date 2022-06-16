/**
 * @file Header.js
 * @description header component for the website
 */

import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
	return (
		<Navbar bg="dark " variant="dark">
			<Container style={{display: 'flex', justifyContent: 'center'}}>
				<Navbar.Text style={{fontSize: '2rem', color: 'white'}}>City-Explorer</Navbar.Text>
			</Container>
		</Navbar>
	);
};

export default Header;
