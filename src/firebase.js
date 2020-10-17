// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDQQQaeJ9sY3E_YYGl0IiyW9U9HEJr5-vs",
	authDomain: "volunteer-activity.firebaseapp.com",
	databaseURL: "https://volunteer-activity.firebaseio.com",
	projectId: "volunteer-activity",
	storageBucket: "volunteer-activity.appspot.com",
	messagingSenderId: "304229540314",
	appId: "1:304229540314:web:88e623a18dbf491f24e0e3",
	measurementId: "G-YFMD90Q7CE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };
