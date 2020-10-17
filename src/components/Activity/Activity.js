import React, { useEffect, useState } from "react";
import "./Activity.css";

import axios from "../../axios";
import ActivityCard from "../ActivityCard/ActivityCard";

const Activity = () => {
	const [activities, setActivities] = useState([]);
	const getActivities = () => {
		axios.get("/get/activityList").then((res) => {
			setActivities(res.data);
		});
	};
	useEffect(() => {
		getActivities();
	}, []);

	return (
		<div className="activity">
			{activities.map((activity) => (
				<ActivityCard
					key={activity.id}
					id={activity.id}
					title={activity.name}
					image={activity.photoURL}
				/>
			))}
		</div>
	);
};

export default Activity;
