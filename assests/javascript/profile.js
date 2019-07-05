

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
//appends an "active" class to .popup and .popup-content when the "Open" button is clicked



// $(".open").on("click", function() {
//     $(".popup-overlay, .popup-content").addClass("active");
//   });
  
//   //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
//   $(".close, .popup-overlay").on("click", function() {
//     $(".popup-overlay, .popup-content").removeClass("active");
//   });




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
            var perDaily = response.totalDaily
            var calsFrom = response.totalNutrientsKCal
            console.log(labelx);
            console.log(response);
             var nutDiv = $('<div>');
             var parG = $('<p>');
            var ji1 = ("<section class='performance-facts'> \
            <header class='performance-facts__header'> \
              <h1 class='performance-facts__title'>Nutrition Facts</h1> \
            </header> \
            <table class='performance-facts__table'>  \
              <thead> \
                <tr> \
                  <th colspan='3' class='small-info'> \
                    Amount Per Serving \
                  </th> \
                </tr> \
              </thead> \
              <tbody> \
                <tr> \
                  <th colspan='2'> \
                    <b>Calories</b> ")
                    var xi1 = ((labelx.ENERC_KCAL.quantity) + "<th>");

            var ji2 = " <td> \
                     Calories from Fat \ "
            var xi2 = ((calsFrom.FAT_KCAL.quantity) + "</td>" );

            var ji3 =  "</tr> \
            <tr class='thick-row'> \
              <td colspan='3' class='small-info'> \
                <b>% Daily Value*</b> \ "
            var xi3 = perDaily.ENERC_KCAL.quantity

            var ji4 = " </td> \
            </tr> \
            <tr> \
              <th colspan='2'>  \
                <b>Total Fat</b>   \ "
            var xi4 = ((labelx.FAT.quantity) + "g");

            var ji5 = " </th>    \
            </tr>  \
            <tr>   \
              <td class='blank-cell'>  \
              </td>    \
              <th>     \
                Saturated Fat  \ "
            var xi5 = ((labelx.FASAT.quantity) + "g");
            var ji6 = " </th>    \
            </tr>  \
            <tr>   \
              <td class='blank-cell'>  \
              </td>    \
              <th>     \
                Trans Fat  \ "
            var xi6 = ((labelx.FATRN.quantity) + "g")
            var ji7 = " </th>    \
            <td> \
            </td>    \
          </tr>  \
          <tr>   \
            <th colspan='2'> \
              <b>Cholesterol</b> \ "
            var xi7 = ((labelx.CHOLE.quantity) + "mg")
            var ji8 = " </th>    \
            </tr>  \
            <tr>   \
              <th colspan='2'> \
                <b>Sodium</b>  \ "
            var xi8 = ((labelx.NA.quantity) + "mg")
            var ji9 = "<tr class='thick-end'> \
            <th colspan='2'> \
              <b>Protein</b> \ "
            var xi9 = ((labelx.PROCNT.quantity) + "g")
            var ji10 = " </th>    \
            <td> \
            </td>    \
          </tr>  \
        </tbody> \
      </table>   \
      <table class='performance-facts__table--grid'> \
        <tbody>  \
          <tr>   \
            <td colspan='2'> \
              Vitamin A  \ "
            var xi10 = ((perDaily.VITA_RAE.quantity) + "%")
            var ji11 = " </td>    \
            <td> \
              Vitamin C  \ "
            var xi11 = ((perDaily.VITC.quantity) + "%")
            var ji12 = " </td>    \
            </tr>  \
            <tr class='thin-end'>  \
              <td colspan='2'> \
                Calcium    \ "
            var xi12 = ((perDaily.CA.quantity) + "%")
            var ji13 = " </td>    \
            <td> \
              Iron   \ "
            var xi13 = ((perDaily.FE.quantity) + "%")


 nutDiv.addClass('nutList');
             nutDiv.append(parG);
            
            
            
             $(".mainList").append(nutDiv);
             parG.html( ji1 + xi1 + ji2 + xi2 + ji3 + xi3 + ji4 + xi4 + ji5 + xi5 + ji6 + xi6 + ji7 + xi7 + ji8 + xi8 + ji9 + xi9 + ji10 + xi10 + ji11 + xi11 + ji12 + xi12 + ji13 + xi13 +
                " </td>    \
                 </tr>  \
               </tbody> \
             </table>   \
              <p class='small-info'>* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs:</p> \
             <table class='performance-facts__table--small small-info'> \
               <thead>  \
                 <tr>   \
                   <td colspan='2'></td>    \
                   <th>Calories:</th>   \
                   <th>2,000</th>   \
                   <th>2,500</th>   \
                 </tr>  \
               </thead> \
               <tbody>  \
                 <tr>   \
                   <th colspan='2'>Total Fat</th>   \
                   <td>Less than</td>   \
                   <td>65g</td> \
                   <td>80g</td> \
                 </tr>  \
                 <tr>   \
                   <td class='blank-cell'></td> \
                   <th>Saturated Fat</th>   \
                   <td>Less than</td>   \
                   <td>20g</td> \
                   <td>25g</td> \
                 </tr>  \
                 <tr>   \
                   <th colspan='2'>Cholesterol</th> \
                   <td>Less than</td>   \
                   <td>300mg</td>   \
                   <td>300 mg</td>  \
                 </tr>  \
                 <tr>   \
                   <th colspan='2'>Sodium</th>  \
                   <td>Less than</td>   \
                   <td>2,400mg</td> \
                   <td>2,400mg</td> \
                 </tr>  \
                 <tr>   \
                   <th colspan='3'>Total Carbohydrate</th>  \
                   <td>300g</td>    \
                   <td>375g</td>    \
                 </tr>  \
                 <tr>   \
                   <td class='blank-cell'></td> \
                   <th colspan='2'>Dietary Fiber</th>   \
                   <td>25g</td> \
                   <td>30g</td> \
                 </tr>  \
               </tbody> \
             </table>   \
             <p class='small-info'>Calories per gram:</p> \
             <p class='small-info text-center'> \
               Fat 9 \
               &bull; \
               Carbohydrate 4 \
               &bull; \
               Protein 4 \
             </p> \
             </section> ");
             
             

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
