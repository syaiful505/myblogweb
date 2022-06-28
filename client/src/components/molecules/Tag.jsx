import React from 'react';
import { Link } from 'react-router-dom';

export const Tag = () => {
	return (
		<>
			<div className="tag">
				<div className="title">
					<h3>Tag</h3>
				</div>
				<ul>
					<li><Link to="/">Programming</Link></li>
					<li><Link to="/">Programming</Link></li>
					<li><Link to="/">Programming</Link></li>
					<li><Link to="/">Programming</Link></li>
				</ul>
			</div>
		</>
	)
};