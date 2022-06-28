import React from 'react';
import { Link } from "react-router-dom";
import { FaYoutube,FaGithubSquare } from "react-icons/fa";
import { ImLinkedin, ImInstagram } from "react-icons/im";
import { BsListUl } from "react-icons/bs";

export default function Navbar() {
	return (
		<div id='navbar' className="navbar">
			<div className="container">
				<div className="row">
					<input type="checkbox" id='toggle'/>
					<div className="col-4">
						<div className="image-menubar">
							<Link className="image" to="/">
								<h1 className="brand">&lt;/&gt; 
									<div className="rotate-words">
										<span>syaifulstyle</span>
										<span>Nice Day</span>
										<span>Awesome</span>
									</div>
								</h1>
							</Link>
							<label className="menu_icon" htmlFor="toggle"><BsListUl /></label>
						</div>
					</div>
					<div className="col-8">
						<ul className="link-list toggle">
							<li className="link-item">
								<Link to="/about" className="navbar-item navbar-item-ltr">About</Link>
							</li>
							<li className="link-item">
								<Link to="/repository" className="navbar-item navbar-item-ltr">Repository</Link>
							</li>
							<li className="link-item">
								<Link to="/contact" className="navbar-item navbar-item-ltr">Contact</Link>
							</li>
							<div className="social-icon">
								<li className="link-item github--icon">
									<Link to="/about"><span><FaGithubSquare/></span></Link>
								</li>
								<li className="link-item linkedin--icon">
									<Link to="/about"><span><ImLinkedin/></span></Link>
								</li>
								<li className="link-item youtube--icon">
									<Link to="/about"><span><FaYoutube/></span></Link>
								</li>
								<li className="link-item instagram--icon">
									<Link to="/about"><span><ImInstagram/></span></Link>
								</li>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
};