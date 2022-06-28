import React from 'react';
import { FaYoutube } from "react-icons/fa";
import { ImLinkedin, ImInstagram } from "react-icons/im";

export function Youtube() {
	return (
		<div className="icon-page">
			<a className="icon-item youtube--icon" href="https://www.youtube.com/channel/UCLuajqxl9p2f47ZXmQPGkFQ"><span><ImInstagram/></span></a>
		</div>
	)
}
export function Instagram() {
	return (
		<div className="icon-page">
			<li className="icon-item">
				<a href="https://www.youtube.com/channel/UCLuajqxl9p2f47ZXmQPGkFQ"><span><ImLinkedin/></span></a>
			</li>
		</div>
	)
}
export function Linkedin() {
	return (
		<div className="icon-page">
			<li className="icon-item">
				<a href="https://www.youtube.com/channel/UCLuajqxl9p2f47ZXmQPGkFQ"><span><FaYoutube/></span></a>
			</li>
		</div>
	)
}