const authState = document.getElementById("authState");
const googleSignIn = document.getElementById("googleSignIn");
const eye = document.getElementById("eye");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const facebookSignIn = document.getElementById("facebookSignIn");
const authSubmit = document.getElementById("authSubmit");

// const signOut = document.getElementById("signOut")

togglePassword.addEventListener("click", function () {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the icon
  this.classList.toggle("bi-eye");
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAa4ET3h3kbI4qX13imDt2KFvMIXqYCsd8",
    authDomain: "devrev-fb8a6.firebaseapp.com",
    projectId: "devrev-fb8a6",
    storageBucket: "devrev-fb8a6.appspot.com",
    messagingSenderId: "1044113886893",
    appId: "1:1044113886893:web:1cd3031b68318cd9e44024"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

authState.addEventListener("click", (e) => {
  const authentication = authState.innerHTML;
  if (authentication == "Login") {
    authState.innerHTML = `Sign Up`;
    authSubmit.innerHTML = `Login`;
  } else {
    authState.innerHTML = `Login`;
    authSubmit.innerHTML = `Sign Up`;
  }
});

authSubmit.addEventListener("click", async (e) => {
  const authentication = authSubmit.innerText;
  console.log(authentication);
  if (authentication == `SIGN UP`) {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(authentication, email, password);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        sessionStorage.setItem("user", true);
        alert("User logged in");
        // ...
      })
      .then(() => {
        window.location = "/LmsBasicFrontend-master/html/librarian/editbookCopies.html";
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log("ERRRORRR");
        alert(errorMessage);
        // ..
      });
  } else {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(authentication, email, password);

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        sessionStorage.setItem("user", true);
        alert("User logged in");
        // ...
      })
      .then(() => {
        window.location = "/LmsBasicFrontend-master/html/librarian/editbookCopies.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
});
