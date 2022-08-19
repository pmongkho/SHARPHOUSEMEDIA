// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBx9m7_jgZdHV5gZfIZtSsMQg52Fco6-wE",
	authDomain: "sharphouse-6490a.firebaseapp.com",
	projectId: "sharphouse-6490a",
	storageBucket: "sharphouse-6490a.appspot.com",
	messagingSenderId: "250866692084",
	appId: "1:250866692084:web:54be206a4b6972367fd3a1",
	measurementId: "G-ZNY5NBKEYX",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
const analytics = getAnalytics(app)
