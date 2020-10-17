import React from "react";
import "./Banner.css";

const Banner = () => {
	return (
		<div className="banner">
			<h1>I GROW BY HELPING PEOPLE IN NEED</h1>
			<div className="search">
				<input type="text" className="searchInput" />
				<input type="submit" className="btn btn-info" value="Search" />
			</div>
		</div>
	);
};

export default Banner;
