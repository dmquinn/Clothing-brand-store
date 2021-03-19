import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";

import { listProducts } from "../actions/productActions";

const HomeScreen = ({ match }) => {
	const [marginJackets, setMarginJackets] = useState(210);
	const [shadowJackets, setShadowJackets] = useState(8);
	const [marginTrousers, setMarginTrousers] = useState(100);
	const [shadowTrousers, setShadowTrousers] = useState(8);

	const keyword = match.params.keyword;
	const pageNumber = match.params.pageNumber || 1;
	let jackets = [];
	let trousers = [];
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);

	const { loading, error, products } = productList;
	if (products) {
		jackets = products.filter(function (product) {
			return product.category === "Jackets";
		});
		trousers = products.filter(function (product) {
			return product.category === "Trousers";
		});
	}

	useEffect(() => {
		dispatch(listProducts(keyword, pageNumber));
	}, [dispatch, keyword, pageNumber]);

	return (
		<>
			<Container>
				<Link to="/" className="btn btn-light">
					Back
				</Link>

				<h1 className="mt-3">{keyword}</h1>
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant="danger">{error}</Message>
				) : (
					<>
						{!keyword && (
							<h1 className="mt-5">Latest Collections</h1>
						)}
						<button
							className="offset-1 arrow"
							onMouseDown={() => {
								setMarginJackets(marginJackets + 200);
								setShadowJackets(shadowJackets + 10);
							}}
						>
							<i className="fas fa-arrow-left"></i>
						</button>
						<button
							className="offset-1 arrow"
							onMouseDown={() => {
								setMarginJackets(marginJackets - 200);
								setShadowJackets(shadowJackets - 10);
							}}
						>
							<i className="fas fa-arrow-right"></i>
						</button>
						<div
							className="sliderContainer"
							style={{
								marginLeft: `${marginJackets}px`,
								transition: "0.7s ease-out",
								filter: `drop-shadow(${shadowJackets}px 22px 5px rgba(0, 0, 0, 0.233))`,
							}}
						>
							<div className="dontClip">
								<Row>
									{!!jackets &&
										jackets.map((product, i) => (
											<Product
												key={i}
												product={product}
												name={"Sport Goth"}
											/>
										))}
								</Row>
							</div>
						</div>

						{!keyword && <h1 className="mt-5">Trousers</h1>}
						<button
							className="offset-1 arrow"
							onMouseDown={() => {
								setMarginTrousers(marginTrousers + 200);
								setShadowTrousers(shadowTrousers + 10);
							}}
						>
							<i className="fas fa-arrow-left"></i>
						</button>
						<button
							className="offset-1 arrow"
							onMouseDown={() => {
								setMarginTrousers(marginTrousers - 200);
								setShadowTrousers(shadowTrousers - 10);
							}}
						>
							<i className="fas fa-arrow-right"></i>
						</button>
						<div
							className="sliderContainer"
							style={{
								marginLeft: `${marginTrousers}px`,
								transition: "0.7s ease-out",
								filter: `drop-shadow(${shadowTrousers}px 22px 5px rgba(0, 0, 0, 0.233))`,
							}}
						>
							<div className="dontClip">
								<Row>
									{!!trousers &&
										trousers.map((product, i) => (
											<Product
												key={i}
												product={product}
												name={"Sport Goth"}
											/>
										))}
								</Row>
							</div>
						</div>
					</>
				)}
			</Container>
		</>
	);
};

export default HomeScreen;
