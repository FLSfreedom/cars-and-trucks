import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD15tVc_zKw56X0Q8bcfPCpzo6PIEnwwag",
  authDomain: "cars-and-trucks-c9d31.firebaseapp.com",
  projectId: "cars-and-trucks-c9d31",
  storageBucket: "cars-and-trucks-c9d31.appspot.com",
  messagingSenderId: "162631316289",
  appId: "1:162631316289:web:8f4b402aa8a6bf90e467c0"
};

const app = initializeApp(firebaseConfig);

export const iniciarFirestore = () => {
    return app
}