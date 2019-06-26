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
    const password = passTxt.val();
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
      });
  });
  // adding singup button listener
  signupBtn.on("click", function () {
    const email = emailTxt.val();
    const password = passTxt.val();

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        console.log(errorCode);
        
        var errorMessage = error.message;
        console.log(errorMessage);
        // ...
      });

  });


  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });

  });



  