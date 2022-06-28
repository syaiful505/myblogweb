import React from 'react';
import { Navbar } from '../../molecules';
import { Main } from './content/first';

const Home = () => {
	return(
		<div className="home">
			<Navbar />
			<Main />
		</div>
	)
}

export default Home;