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



$(".submit-button").on('click' ,function(event){
    event.preventDefault()
    var search = $("#recipes").val()
    console.log(search)
    var queryURL= "https://api.edamam.com/search?q=" + search + "&app_id=ef658656&app_key=7459cb2e2c002db95d605b639d3344b7&from=0&to=1&calories=591-722&health=alcohol-free"

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
    .then(function(response){
        console.log(response.hits[0])
    })

})
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
      window.location.replace("login.html");

    }
  });