
$(".submit").on("click",function() {
    var search = $(this).attr('data-search');
    console.log(search)
    var queryURL = "https://api.edamam.com/search?q=" + search + "&app_id=ef658656&app_key=7459cb2e2c002db95d605b639d3344b7&from=0&to=3&calories=591-722&health=alcohol-free"
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })


        .then(function (response) {
            var results = response;
            // console.log(results.hits[0].recipe.label)
            // console.log(results.hits[0].recipe.ingredientLines)
            // console.log(results.hits[1].recipe.label)
            // console.log(results.hits[1].recipe.ingredientLines)
            // console.log(results.hits[2].recipe.label)
            // console.log(results.hits[2].recipe.ingredientLines)

    
        })


})
