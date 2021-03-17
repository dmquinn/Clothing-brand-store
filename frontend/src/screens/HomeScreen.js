import React from "react";
import { Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Row, Col } from "react-bootstrap";

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
			<Row style={{ position: "relative" }} className="w-60 mt-5">
				<Col lg={6}>
					<p style={{ color: "#eabbd9" }} className="offset-2">
						The World card signifies a long journey coming to an
						end. If you've recently accomplished a lifelong goal,
						that's why this card appears. Take a well-earned victory
						lap before you prepare for the next big adventure. The
						card depicts a butterfly at its last stage in life:
						fully transformed and able to fly. Such is the
						representation the World card brings: The end to a long
						journey. As the butterfly rises above, there's a sense
						of accomplishment and success associated with its
						movement. That's because the World's presence is a clear
						indicator that you have lived, you have loved, and you
						have learned. It's time to use that information to live
						the life you want.
					</p>
				</Col>
				<img
					className="bigDress offset-5 mt-5"
					src="https://res.cloudinary.com/danielmurphy/image/upload/v1615917883/clothes/dress1_obqubs.png"
					alt=""
					data-rate="-0.25"
					data-direction="vertical"
				></img>
				<p className="w-50" style={{ color: "#eabbd9" }}>
					<b>
						The World card signifies a long journey coming to an
						end. If you've recently accomplished a lifelong goal,
						that's why this card appears. Take a well-earned victory
						lap before you prepare for the next big adventure. The
						card depicts a butterfly at its last stage in life:
						fully transformed and able to fly. Such is the
						representation the World card brings: The end to a long
						journey. As the butterfly rises above, there's a sense
						of accomplishment and success associated with its
						movement. That's because the World's presence is a clear
						indicator that you have lived, you have loved, and you
						have learned. It's time to use that information to live
						the life you want.
					</b>
				</p>
				<h1
					className="ml-5 mb-5"
					style={{
						fontSize: "55px",
					}}
					data-rate="-0.95"
				>
					YOUR HORROSCOPE LOOKS BLEAK
				</h1>
			</Row>
			<p>
				Horroscopes that don't bring joy bring truth. You've been at
				this open sea for far too long. Take my hand, take a breath,
				there's land ahoy
			</p>
			<Row className="mt-5">
				<img
					className="bigDress offset-1 mt-5"
					src="https://res.cloudinary.com/danielmurphy/image/upload/v1615933183/clothes/guyOne_mlnqv0.png"
					alt=""
					data-rate="-0.45"
					data-direction="vertical"
				></img>

				<h1
					className="offset-5"
					style={{
						color: "black",
						fontSize: "45px",
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
