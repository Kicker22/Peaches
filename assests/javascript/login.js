$( document ).ready(function() {
    console.log( "ready!" );

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDNkPIYCwuYptD01RHymGZ01dlrCo-N2ts",
    authDomain: "peach-104be.firebaseapp.com",
    databaseURL: "https://peach-104be.firebaseio.com",
    projectId: "peach-104be",
    storageBucket: "peach-104be.appspot.com",
    messagingSenderId: "587739641952",
    appId: "1:587739641952:web:edc84b1675374132"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var emailTxt = $("#emailtxt");
  var passTxt = $("#passwordtxt");
  var loginBtn = $("#loginbtn");
  var signupBtn = $("#singupbtn");
// adding event listeners 
  loginBtn.on("click", function () {

    const email = emailTxt.val();
    const pass = passTxt.val();
    const auth = firebase.auth();

    auth.signInWithEmailAndPassword(email, pass);
  });
  // adding singup button listener
  signupBtn.on("click", function () {
    const email = emailTxt.val();
    const pass = passTxt.val();
    const auth = firebase.auth();

    auth.signInWithEmailAndPassword(email, pass);

  });

});