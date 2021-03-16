import React from "react";
import { Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
const HomeScreen = () => {
	return (
		<>
			<div className="sideLinks"></div>
			<iframe
				title="video"
				src="https://player.vimeo.com/video/147237819?muted=1&autoplay=1&loop=1#t=20s"
				className="videoPlayer"
				frameBorder="0"
			></iframe>
			<img src="https://res.cloudinary.com/danielmurphy/image/upload/v1615917883/clothes/dress1_obqubs.png"></img>
		</>
	);
};

export default HomeScreen;
