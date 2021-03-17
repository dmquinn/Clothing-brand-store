import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";

import { LinkContainer, Row } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { logout } from "../actions/userActions";
import SearchBox from "./SearchBox";

const Header = () => {
	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const logoutHandler = () => {
		dispatch(logout());
	};
	return (
		<header>
			<Navbar collapseOnSelect>
				<Container>
					<LinkContainer to="/">
						<img
							className="brand"
							src="https://txt.1001fonts.net/img/txt/b3RmLjcyLmZmZmZmZi5hRzl5Y205elkyOXdaWE0uMA/ballowien.regular.png"
							alt=""
						></img>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Route
								render={({ history }) => (
									<SearchBox history={history} />
								)}
							/>

							{userInfo ? (
								<NavDropdown
									title={userInfo.name}
									id="username"
								>
									<LinkContainer to="/profile">
										<NavDropdown.Item>
											Profile
										</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item onClick={logoutHandler}>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<LinkContainer to="/login">
									<Nav.Link>
										<i className="fas fa-user"></i> Sign In
									</Nav.Link>
								</LinkContainer>
							)}
						</Nav>
					</Navbar.Collapse>
					<div className="sideLinksContainer">
						<LinkContainer to="/allproducts">
							<Nav.Link className="sideLink">
								<p className="sideLink">Shop</p>
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/allproducts">
							<Nav.Link className="sideLink">
								<p className="sideLink">Looks</p>
							</Nav.Link>
						</LinkContainer>
					</div>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
