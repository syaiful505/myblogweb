import React from 'react';
import { Link } from "react-router-dom";
import { FaFacebookSquare,FaYoutube,FaGithubSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
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
								<h1><span className="brand">&lt;/&gt; syaifulstyle</span></h1>
								{/*<h1><span className="brandChange">&lt;/&gt;</span></h1>*/}
							</Link>
							<label className="menu_icon" htmlFor="toggle"><BsListUl /></label>
						</div>
					</div>
					<div className="col-8">
						<ul className="link-list toggle">
							<li className="link-item">
								<Link to="/about" className="navbar-item">About</Link>
							</li>
							<li className="link-item">
								<Link to="/repository" className="navbar-item">Repository</Link>
							</li>
							<li className="link-item">
								<Link to="/contact" className="navbar-item">Contact</Link>
							</li>
							<div className="social-icon">
								<li className="link-item">
									<Link to="/about"><span><FaGithubSquare/></span></Link>
								</li>
								<li className="link-item">
									<Link to="/about"><span><ImLinkedin/></span></Link>
								</li>
								<li className="link-item">
									<Link to="/about"><span><FaYoutube/></span></Link>
								</li>
								<li className="link-item">
									<Link to="/about"><span><FaFacebookSquare/></span></Link>
								</li>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
};