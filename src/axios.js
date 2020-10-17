import axios from "axios";

const instance = axios.create({
	baseURL: "https://enigmatic-lake-89243.herokuapp.com/",
});

export default instance;
