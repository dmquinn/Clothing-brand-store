import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import { listProducts } from "../actions/productActions";

const HomeScreen = ({ match }) => {
	const keyword = match.params.keyword;

	const pageNumber = match.params.pageNumber || 1;

	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);

	const { loading, error, products, page, pages } = productList;
	window.addEventListener("scroll", function () {
		const target = document.querySelectorAll(".albumImage");
		// const text = document.querySelectorAll("p")
		var i = 0,
			length = target.length;
		for (i; i < length; i++) {
			var pos = window.pageYOffset * target[i].dataset.rate;

			target[i].style.transform = "translate3d(0px, " + pos + "px, 9px)";
		}
	});

	useEffect(() => {
		dispatch(listProducts(keyword, pageNumber));
	}, [dispatch, keyword, pageNumber]);

	return (
		<>
			<Link to="/" className="btn btn-light">
				Back
			</Link>

			{!keyword && <h1 className="mt-5">LATEST</h1>}
			<h1 className="mt-3">{keyword}</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<>
					<Row>
						{products.map((product, i) => (
							<Col sm={12} md={6} lg={4} xl={3}>
								<Product key={i} product={product} />
							</Col>
						))}
					</Row>
					<Paginate
						pages={pages}
						page={page}
						keyword={keyword ? keyword : ""}
					></Paginate>
				</>
			)}
		</>
	);
};

export default HomeScreen;
