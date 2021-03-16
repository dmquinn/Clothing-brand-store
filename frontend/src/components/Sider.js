import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";

import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";

const Sider = () => {
	return (
		<Navbar collapseOnSelect>
			<Container className="sider">
				<LinkContainer to="/"></LinkContainer>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<LinkContainer to="/">
							<Nav.Link>Looks</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/allproducts">
							<Nav.Link>Shop</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/cart">
							<Nav.Link>
								<i className="fas fa-shopping-cart"></i> Cart
							</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Sider;
