import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyChnRRw06O9p_Y8NRoH-ZcD_1cIgMm397g',
	authDomain: 'candles-story.firebaseapp.com',
	projectId: 'candles-story',
	storageBucket: 'candles-story.firebasestorage.app',
	messagingSenderId: '519402620284',
	appId: '1:519402620284:web:82aadffcda9db1731cd0f9',
	measurementId: 'G-PLW8W7ZK1F'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
