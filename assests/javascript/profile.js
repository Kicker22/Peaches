
$(".submit-button").on('click', function (event) {
    event.preventDefault()
    // this code adds a container for the for loop recipie item before the loop runs 
    // this way their is an individual container div for each recipe.
    var listDiv = $('<div>')
    listDiv.addClass('mainList')
    $('#recipeList').append(listDiv)

    var titleDiv = $('<div>')
    titleDiv.addClass("title")
    var p = $('<p>')
    p.attr("id","pTitle")
    titleDiv.append(p)

    // this block grab user input from the text box... this is then used to search the API
    var search = $("#recipes").val()
    // console.log(search)
    var queryURL = "https://api.edamam.com/search?q=" + search + "&app_id=ef658656&app_key=7459cb2e2c002db95d605b639d3344b7&from=0&to=2&calories=591-722&health=alcohol-free"

    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {
            var searchResponse = response.hits

            // this block adds a label to the top of the recipe

            // this block adds list items from object array
            // and displays them on individual lines inside of the listDiv 
            for (let i = 0; i < searchResponse.length; i++) {

                console.log(searchResponse)
                var recipeName = searchResponse[i].recipe.label
                var recipe = searchResponse[i].recipe.ingredients
                var label = $('<ul>')
                label.addClass("recipeLabel")
                label.text(recipeName)
                label.attr("id", "recipe_" + i)
                $(listDiv).append(label)
                console.log(recipe)
                for (let j = 0; j < recipe.length; j++) {
                    var newLi = $('<li>')
                    newLi.text(recipe[j].text)
                    $("#recipe_" + i).append(newLi)
                }

            }
            // var label = $('<div>')
            // label.addClass("recipeLabel")
            // label.text(recipeName)
            // $(listDiv).prepend(label)


        });
})






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
