import React from 'react';
import { FaFacebookSquare,FaYoutube,FaGithubSquare } from "react-icons/fa";

export function Instagram() {
	return <h3>Hello Instagram</h3>
}

export function Youtube() {
	return (
		<div className="youtube-page">
			<li className="link-item">
				<a href="https://www.youtube.com/channel/UCLuajqxl9p2f47ZXmQPGkFQ"><span><FaYoutube/></span></a>
			</li>
		</div>
	)
}