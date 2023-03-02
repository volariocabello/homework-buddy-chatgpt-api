import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAwJTIkfcaGQEIJYOqSWlfLOI125h_bd_o",
	authDomain: "robossay-6af53.firebaseapp.com",
	projectId: "robossay-6af53",
	storageBucket: "robossay-6af53.appspot.com",
	messagingSenderId: "566491156580",
	appId: "1:566491156580:web:46c3777e02851960614f71",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
