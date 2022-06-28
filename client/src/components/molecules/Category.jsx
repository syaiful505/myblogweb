import React from 'react';
import { FiChevronsRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

export const CategoryList = () => {
	return (
		<>
		<div className="category">
            <div className="title">
				<h3>Category</h3>
			</div>
			<div className="cate-list">
				<div className="cate-item">
					<li><FiChevronsRight /><Link to="/">Algorithma</Link></li>
					<span>(5)</span>
				</div>
				<div className="cate-item">
					<li><FiChevronsRight /><Link to="/">Algorithma</Link></li>
					<span>(5)</span>
				</div>
				<div className="cate-item">
					<li><FiChevronsRight /><Link to="/">Algorithma</Link></li>
					<span>(5)</span>
				</div>
			</div>
        </div>
		</>
	)
}