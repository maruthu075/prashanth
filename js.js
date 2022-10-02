// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARfcfblQDIMDPQ7WbH8bx4OBeY8nLPJQc",
  authDomain: "keethana-silks.firebaseapp.com",
  projectId: "keethana-silks",
  storageBucket: "keethana-silks.appspot.com",
  messagingSenderId: "425795328872",
  appId: "1:425795328872:web:5cc0bb4ef4a740602214dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import{getDatabase,ref ,get ,child ,update ,remove} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
// var i1 =  document.getElementById('img1');
const dp = getDatabase();
const refe= ref(dp);
var s='img1';
// dp.on('value',snap => il.src = snap.val());
get(child(refe,'/')).then((snapshot)=>{
    // i1.src =  snapshot.val().img1;
    document.getElementById('slide1').src= snapshot.val().slide1;
});
