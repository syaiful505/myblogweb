import React from 'react';
import Navbar from './Navbar';
import { PopularArticle } from './Content';
import { Youtube } from './FollowPage';

const Home = () => {
	return(
		<div className="home">
			<Navbar />
			<div className="main-content">
				<div className="container">
					<div className="row">
						<div className="col-8">
							<h3>Article</h3>
						</div>
						<div className="col-4">
							<div className="search-category-tag">
								<div className="search">
									<h2>What Do You Search?</h2>
									<div className="form-group">
										<input type="text" className="form-control" placeholder="search" />
									</div>
									<div className="form-group">
										<button className="btn btn-block">Search</button>
									</div>
								</div>
								<div className="popular-article">
									<div className="title">
										<h3>Popular Article</h3>
									</div>
									<PopularArticle />
								</div>
								<div className="follow-page">
									<div className="title">
										<h3>Follow Me</h3>
										<div className="row">
											<div className="col-4">
												<Youtube />
											</div>
											<div className="col-4">
												<Youtube />
											</div>
											<div className="col-4">
												<Youtube />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home;