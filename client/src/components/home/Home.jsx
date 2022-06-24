import React from 'react';
import Navbar from './Navbar';

const Home = () => {
	return(
		<div className="home">
			<Navbar />
			<div className="row">
				<div className="col-2">
					<h3>Hello World</h3>
				</div>
			</div>
		</div>
	)
}

export default Home;