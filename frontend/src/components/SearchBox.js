import React, { useState } from "react";
import { Form, Button, NavDropdown } from "react-bootstrap";

const SearchBox = ({ history }) => {
	let [keyword, setKeyword] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		if (keyword.trim()) {
			history.push(`/search/${keyword}`);
		} else {
			history.push("/");
		}
		console.log(keyword);
	};
	const changeHandler = (eventKey) => {
		keyword = eventKey;
		if (keyword.trim()) {
			history.push(`/search/${keyword}`);
		} else {
			history.push("/");
		}
		console.log(keyword);
	};

	return (
		<>
			<Form onSubmit={submitHandler} inline>
				<Form.Control
					type="text"
					name="q"
					onChange={(e) => setKeyword(e.target.value)}
					placeholder="Search Products..."
					className="mr-sm-2 ml-sm-5 searchBar"
				></Form.Control>
				<Button type="submit" className="p-2 searchButton">
					Search
				</Button>
			</Form>
		</>
	);
};

export default SearchBox;
