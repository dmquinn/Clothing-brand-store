import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Sider from "./components/Sider";

import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import AllProductsScreen from "./screens/AllProductsScreen";

const App = () => {
	return (
		<>
			<Router>
				<Header />

				<main>
					<Route path="/shipping" component={ShippingScreen} />
					<Route path="/payment" component={PaymentScreen} />
					<Route path="/placeOrder" component={PlaceOrderScreen} />
					<Route path="/order/:id" component={OrderScreen} />
					<Route path="/login" component={LoginScreen} />
					<Route path="/register" component={RegisterScreen} />
					<Route path="/profile" component={ProfileScreen} />
					<Route path="/product/:id" component={ProductScreen} />
					<Route path="/cart/:id?" component={CartScreen} />
					<Route path="/admin/userList" component={UserListScreen} />
					<Route
						path="/admin/user/:id/edit"
						component={UserEditScreen}
					/>
					<Route
						path="/admin/productList"
						component={ProductListScreen}
					/>
					<Route
						path="/admin/productList/:pageNumber"
						component={ProductListScreen}
						exact
					/>
					<Route
						path="/admin/product/:id/edit"
						component={ProductEditScreen}
					/>
					<Route
						path="/admin/orderList"
						component={OrderListScreen}
					/>

					<Route path="/" component={HomeScreen} exact />
					<Route
						path="/search/:keyword"
						component={HomeScreen}
						exact
					/>

					<Route
						path="/page/:pageNumber"
						component={HomeScreen}
						exact
					/>
					<Route
						path="/search/:keyword/page/:pageNumber"
						component={HomeScreen}
						exact
					/>
					<Route path="/allproducts" component={AllProductsScreen} />

					{/* <Sider /> */}
				</main>
			</Router>
			<Footer />
		</>
	);
};

export default App;
