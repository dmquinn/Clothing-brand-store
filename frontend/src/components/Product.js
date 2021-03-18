import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Products = ({ product }) => {
	return (
		<Card className="my-3 p-3 rounded" border="rgba(255, 255, 255, 0)">
			<Link to={`/product/${product._id}`}>
				<Card.Img
					src={product.image}
					variant="top"
					className="productImage"
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
