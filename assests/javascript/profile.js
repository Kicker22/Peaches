
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
