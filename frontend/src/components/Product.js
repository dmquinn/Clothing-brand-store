import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Products = ({ product }) => {
	return (
		<Card className="my-3 p-3 rounded" style={{ backgroundColor: "black" }}>
			<Link to={`/product/${product._id}`}>
				<Card.Img
					src={product.image}
					variant="top"
					className="albumImage"
				/>
			</Link>

			<Card.Body>
				<Link to={`/product/${product._id}`}>
					<Card.Title as="div">
						<strong>{product.name}</strong>
					</Card.Title>
				</Link>

				<Card.Text as="h6">€{product.price}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Products;
