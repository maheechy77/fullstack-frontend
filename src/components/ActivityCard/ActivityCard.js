import React from "react";
import "./ActivityCard.css";
import { Link, useHistory } from "react-router-dom";
import axios from "../../axios";
import { useDispatch, useSelector } from "react-redux";
import { setActivities } from "../../features/activity/activitySlice";
import { selectUser } from "../../features/user/userSlice";

const ActivityCard = ({ id, title, image, date, uid }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const user = useSelector(selectUser);
	const dispatchActivity = () => {
		dispatch(
			setActivities({
				id,
				title,
				image,
			})
		);
	};
	const deleteActivity = () => {
		axios
			.delete(`/delete/activity?title=${title}`)
			.then((res) => {
				console.log("deleted");
				history.push(`/`);
			})
			.catch((err) => console.log(err.message));
	};
	return uid ? (
		<>
			<div className="userActivities">
				<div className="userActivityCard">
					<img src={image} />
					<span className="userActivityTitle">
						<div className="title_date">
							<h4 className="title">{title}</h4>
							<p>{date}</p>
						</div>
						<button onClick={deleteActivity}>Cancel</button>
					</span>
				</div>
			</div>
		</>
	) : (
		<>
			<Link onClick={dispatchActivity} to={`/register/${id}`}>
				<div className="activities">
					<div className="activityCard">
						<img src={image} />
						<span className="background">
							<h4 className="title">{title}</h4>
						</span>
					</div>
				</div>
			</Link>
		</>
	);
};

export default ActivityCard;
