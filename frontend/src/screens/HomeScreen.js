import React from "react";
import { Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Row } from "react-bootstrap";

window.addEventListener("scroll", function () {
	const target = document.querySelectorAll("img, h1");
	var index = 0,
		length = target.length;
	for (index; index < length; index++) {
		var pos = window.pageYOffset * target[index].dataset.rate;

		target[index].style.transform = "translate3d(0px, " + pos + "px, 9px)";
		console.log(target);
	}
});

const HomeScreen = () => {
	return (
		<>
			<div className="sideLinks"></div>
			<Row>
				<iframe
					title="video"
					src="https://player.vimeo.com/video/147237819?muted=1&autoplay=1&loop=1#t=20s"
					className="videoPlayer"
					frameBorder="0"
				></iframe>
			</Row>
			<Row
				style={{
					position: "relative",
					marginTop: "47%",
					backgroundColor: "black",
				}}
			>
				<div className="barrier"></div>
			</Row>
			<Row style={{ position: "relative" }}>
				<img
					className="bigDress offset-1 mt-5"
					src="https://res.cloudinary.com/danielmurphy/image/upload/v1615917883/clothes/dress1_obqubs.png"
					alt=""
					data-rate="-0.25"
					data-direction="vertical"
				></img>
			</Row>
			<Row className="mt-5">
				<img
					className="bigDress offset-1 mt-5"
					src="https://res.cloudinary.com/danielmurphy/image/upload/v1615933183/clothes/guyOne_mlnqv0.png"
					alt=""
					data-rate="-0.45"
					data-direction="vertical"
				></img>
				<h1
					className="ml-5 mb-5"
					style={{
						color: "white",
						fontSize: "55px",
						textShadow: "2px 2px 8px black",
					}}
					data-rate="-1.35"
				>
					YOUR HORROSCOPE IS LOOKING BLEAK
				</h1>
				<h1
					className="offset-5"
					style={{
						color: "white",
						fontSize: "45px",

						textShadow: "2px 2px 12px black",
					}}
					data-rate="-0.85"
				>
					. . . DRESS ACCORDINGLY
				</h1>
			</Row>
		</>
	);
};

export default HomeScreen;
