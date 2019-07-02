

var inglist = [];

$(".submit-button").on('click', function (event) {
    event.preventDefault()
    // this code adds a container for the for loop recipie item before the loop runs 
    // this way their is an individual container div for each recipe.

    // this block grab user input from the text box... this is then used to search the API
    var search = $("#recipes").val()
    // console.log(search)
    var queryURL = "https://api.edamam.com/search?q=" + search + "&app_id=ef658656&app_key=7459cb2e2c002db95d605b639d3344b7&from=0&to=2&calories=591-722"

    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {
            var searchResponse = response.hits
            // console.log(searchResponse)

            // this block adds list items from object array
            // and displays them on individual lines inside of the listDiv 
            for (let i = 0; i < searchResponse.length; i++) {
                var listDiv = $('<div>');
                var p = $('<p>');
            //    // console.log(search);
            //     console.log(response);
            //     console.log(searchResponse);
                var button = $("<button>");
                button.attr("id", "testA")
                button.addClass('nutritionBtn btn btn-lg btn-primary');
                button.text('Get nutrition info');

                listDiv.addClass('mainList')
                listDiv.fadeOut(0)
                $('#recipeList').prepend(listDiv)
                p.attr("id", "pTitle")
                
                var recipeName = searchResponse[i].recipe.label
                var recipe = searchResponse[i].recipe.ingredients
                // $(inglist).push(recipe);
                var recipeImg = searchResponse[i].recipe.image
                var image = $("<img src='" + recipeImg + "'>")
                image.addClass('recipeImg')
                
                p.attr("id", "pTitle")
                p.text(recipeName)
                listDiv.attr('id', 'list_' + i)
                listDiv.append(p)
                listDiv.append(image)
                
                var label = $('<ul>')
                label.append(button);
                $(listDiv).append(label)
                // this .parent . find .li .text
                
                
                for (let j = 0; j < recipe.length; j++) {
                    var newLi = $('<li>')
                    newLi.text(recipe[j].text)
                    label.append(newLi)
                    $(".recipeLabel").append(listDiv)

                }
                listDiv.slideDown(1000)
                        
               // console.log(searchResponse[0].recipe.ingredientLines);
                inglist.push(searchResponse[i].recipe.ingredientLines);




            }
            // var label = $('<div>')
            // label.addClass("recipeLabel")
            // label.text(recipeName)
            // $(listDiv).prepend(label)

        });

})
console.log(inglist);

$("body").on("click", "#testA", function(event) {
    event.preventDefault();
    console.log("TESTEINGNIGNGNIG")
    console.log($(".nutritionBtn").val());
    
    // // console.log(this);
    // var recUrl = (searchResponse[0].recipe.uri);

    var search = $(this).parent().find('li').text();
     var nutURL = "https://api.edamam.com/api/nutrition-data?app_id=1e0daad1&app_key=5631297951d8d491e104a39d6c17a9f9&ingr=" + search 

    

      $.ajax({
          url: nutURL,
           method: "GET"
       })
 
        .then(function (response) {
            
            console.log($(this).parent().find('li').text());
            var labelx = response.totalNutrients
            console.log(labelx);
            
     //   });
 });

});









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
//   })
