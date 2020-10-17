import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import ActivityCard from "../ActivityCard/ActivityCard";
import axios from "../../axios";
import "./User.css";

const User = () => {
	const [activities, setActivities] = useState([]);
	const user = useSelector(selectUser);
	const getActivities = () => {
		axios
			.get(`/get/userActivityList/${user.uid}`, {
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${sessionStorage.getItem("token")}`,
				},
			})
			.then((res) => {
				setActivities(res.data);
			});
	};
	useEffect(() => {
		getActivities();
	}, []);

	return (
		<div className="user">
			{activities.map((activity) => (
				<ActivityCard
					key={activity.id}
					id={activity.id}
					title={activity.title}
					image={activity.photoURL}
					date={activity.date}
					uid={user.uid}
				/>
			))}
		</div>
	);
};

export default User;
