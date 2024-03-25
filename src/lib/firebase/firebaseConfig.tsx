import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyBIxRO10QLMVMbN65q2vCyH8jZPbIEQyO4",
	authDomain: "smart-home-iot-auth.firebaseapp.com",
	databaseURL:
		"https://smart-home-iot-auth-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "smart-home-iot-auth",
	storageBucket: "smart-home-iot-auth.appspot.com",
	messagingSenderId: "1022327188094",
	appId: "1:1022327188094:web:99957648d6389c4102462f",
};

const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = initializeAuth(FIREBASE_APP);
const FIREBASE_DB = getDatabase(FIREBASE_APP);

export { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_DB };
