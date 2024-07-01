import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlRhsOQ4dRvBSjvpRY_f-BiHQDr7qQ7SY",
  authDomain: "knowfirebase-30a4f.firebaseapp.com",
  projectId: "knowfirebase-30a4f",
  storageBucket: "knowfirebase-30a4f.appspot.com",
  messagingSenderId: "200225448111",
  appId: "1:200225448111:web:180804bc1bf50dd200345a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth()
// it is use to get the data of the project in corresponding project 

export default app;