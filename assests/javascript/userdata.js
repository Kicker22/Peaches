
// Firebase goes here
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

// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
//       var displayName = user.displayName;
//       var email = user.email;
//       var emailVerified = user.emailVerified;
//       var photoURL = user.photoURL;
//       var isAnonymous = user.isAnonymous;
//       var uid = user.uid;
//       var providerData = user.providerData;
//       // ...
//     } else {
//       // User is signed out.
//       window.location.replace("login.html");
  
//     }
//   });





var edamam = "https://api.edamam.com/search?q=chicken&app_id=ef658656&app_key=7459cb2e2c002db95d605b639d3344b7&from=0&to=3&calories=591-722&health=alcohol-free"

var start = document.getElementById("#start-btn");
start.addEventListener("click", start);

// Create questions
var questions ={
   question: "What's your current weight?",
   question1: "What's your level of excercise?", 
   question2: "Would you like to lose weight or bulk up?", 
   question3: "How frequently are you planning to work out?",
   question4: "How much weight would you like to lose?",
   question5: "What is your preferred diet?",
   
},
 

// console.log(questions);

// Variables that store the input of the user













//   BMI Calculator 
function computeBMI() {
  // user inputs
  var height = Number(document.getElementById("height").value);
  var heightunits = document.getElementById("heightunits").value;
  var weight = Number(document.getElementById("weight").value);
  var weightunits = document.getElementById("weightunits").value;


  //Convert all units to metric
  if (heightunits == "inches") height /= 39.3700787;
  if (weightunits == "lb") weight /= 2.20462;

  //Perform calculation

        var BMI = weight /Math.pow(height, 2)*10000;
  var BMI = Math.round(weight / Math.pow(height, 2) * 10000);

  //Display result of calculation
  document.getElementById("output").innerText = Math.round(BMI * 100) / 100;

  var output = Math.round(BMI * 100) / 100
  if (output < 18.5)
      document.getElementById("comment").innerText = "Underweight";
  else if (output >= 18.5 && output <= 25)
      document.getElementById("comment").innerText = "Normal";
  else if (output >= 25 && output <= 30)
      document.getElementById("comment").innerText = "Obese";
  else if (output > 30)
      document.getElementById("comment").innerText = "Overweight";
   document.getElementById("answer").value = output; 
}

computeBMI()

