import React from 'react';
import { Link } from 'react-router-dom';

export const PopularArticle = () => {
	return (
		<>
		<div className="popular-article">
			<div className="title">
				<h3>Popular Article</h3>
			</div>
			<div className="row">
			<div className="col-4">
				<Link to="/" className="image">
					<img src="/article/images/react.png" alt="" />
				</Link>
			</div>
			<div className="col-8">
				<div className="title-time">
					<Link to='/'>Mengenai ReactJS</Link>
					<br />
					<span>26 June 2022</span>
				</div>
			</div>
			</div>
			<div className="row">
				<div className="col-4">
					<Link to="/" className="image">
						<img src="/article/images/react.png" alt="" />
					</Link>
				</div>
				<div className="col-8">
					<div className="title-time">
						<Link to='/'>Mengenai ReactJS</Link>
						<br />
						<span>26 June 2022</span>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-4">
					<Link to="/" className="image">
						<img src="/article/images/react.png" alt="" />
					</Link>
				</div>
				<div className="col-8">
					<div className="title-time">
						<Link to='/'>Mengenai ReactJS</Link>
						<br />
						<span>26 June 2022</span>
					</div>
				</div>
			</div>	
        </div>
		</>
	)
};