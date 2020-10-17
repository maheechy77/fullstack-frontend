import React from "react";
import Activity from "../Activity/Activity";
import Banner from "../Banner/Banner";
import "./Home.css";

const Home = () => {
	return (
		<div className="home">
			<Banner />
			<Activity />
		</div>
	);
};

export default Home;
