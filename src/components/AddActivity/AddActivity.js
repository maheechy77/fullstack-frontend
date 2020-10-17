import Axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./AddActivity.css";
import axios from "../../axios";

const AddActivity = () => {
	const history = useHistory();
	const [title, setTitle] = useState("Default Title");
	const [date, setDate] = useState("2020-10-10");
	const [image, setImage] = useState(
		"https://i.ibb.co/H4rZsPL/river-Clean.png"
	);
	const [description, setDescription] = useState("Default Description");

	const addActivity = () => {
		axios
			.post("/new/activity", {
				eventTitle: title,
				eventDate: date,
				imageURL: image,
				description: description,
			})
			.then((res) => {
				history.push("/Admin/userlist");
			})
			.catch((err) => console.log(err.message));
	};

	return (
		<div className="addActivity">
			<div className="inputs">
				<h4>Event Title</h4>
				<input
					type="text"
					onChange={(e) => setTitle(e.target.value)}
					value={title}
				/>
				<h4>Event Date</h4>
				<input
					type="date"
					onChange={(e) => setDate(e.target.value)}
					value={date}
				/>
				<h4>Image URL</h4>
				<input
					type="text"
					onChange={(e) => setImage(e.target.value)}
					value={image}
				/>
				<h4>Description</h4>
				<input
					type="text"
					onChange={(e) => setDescription(e.target.value)}
					value={description}
				/>
				<input
					type="submit"
					className="btn btn-success"
					value="Add Activity"
					onClick={addActivity}
				/>
			</div>
		</div>
	);
};

export default AddActivity;
