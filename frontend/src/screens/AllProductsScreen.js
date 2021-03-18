import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";

import { listProducts } from "../actions/productActions";

const HomeScreen = ({ match }) => {
	const [margin, setMargin] = useState(100);
	const [shadow, setShadow] = useState(8);

	const keyword = match.params.keyword;
	const pageNumber = match.params.pageNumber || 1;

	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);

	const { loading, error, products } = productList;

	useEffect(() => {
		dispatch(listProducts(keyword, pageNumber));
	}, [dispatch, keyword, pageNumber]);

	return (
		<>
			<Container>
				<Link to="/" className="btn btn-light">
					Back
				</Link>

				{!keyword && <h1 className="mt-5">Jackets</h1>}

				<h1 className="mt-3">{keyword}</h1>
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant="danger">{error}</Message>
				) : (
					<>
						<button
							className="offset-1 arrow"
							onMouseDown={() => {
								setMargin(margin + 200);
								setShadow(shadow + 10);
							}}
						>
							<i class="fas fa-arrow-left"></i>
						</button>
						<button
							className="offset-1 arrow"
							// style={{ backgroundColor: "none" }}
							onMouseDown={() => {
								setMargin(margin - 200);
								setShadow(shadow - 10);
							}}
						>
							<i class="fas fa-arrow-right"></i>
						</button>
						<div
							className="sliderContainer"
							style={{
								marginLeft: `${margin}px`,
								transition: "0.7s ease-out",
								filter: `drop-shadow(${shadow}px 2px 25px rgba(0, 0, 0, 0.233))`,
							}}
						>
							<div className="dontClip">
								<Row>
									{products.map((product, i) => (
										<Product key={i} product={product} />
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
