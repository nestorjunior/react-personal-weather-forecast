import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfADrhh88QapiJFoQNKuoNMgZ1byVl1sc",
  authDomain: "personal-weather-forecas-66a5a.firebaseapp.com",
  projectId: "personal-weather-forecas-66a5a",
  storageBucket: "personal-weather-forecas-66a5a.appspot.com",
  messagingSenderId: "875046794900",
  appId: "1:875046794900:web:95f93e115173aedfb86681"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}