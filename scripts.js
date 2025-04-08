let cupcakesCollection = null;

// $.get("https://6f186305-ab26-4839-b806-380e3560e049.mock.pstmn.io/cupcakes.json", function(data){
//     displayCupcakes(data);
//     cupcakesCollection = data;

// }, "json").fail(function(){
//     $("#cupcakes").empty();
//     $("#cupcakes").append("<div>There was an issue connecting to the server. Please try again.</div>");
// });

//AJAX Call
$.ajax({
    url: "https://6f186305-ab26-4839-b806-380e3560e049.mock.pstmn.io/cupcakes.json",
    method: "GET",
    datatype: "json"
}).done(function(data){
    displayCupcakes(data);
}).fail(function(){
    $("#cupcakes").empty();
    $("#cupcakes").append("<div>There was an issue connecting to the server. Please try again.</div>");
});

function displayCupcakes(data){
    $("#cupcakes").empty();

    let html = "";

    //iterate through cupcakes and create an output string
    for(let cupcake of data){
        html +=
        `<section>
            <img src= "${cupcake.image}" alt="${cupcake.alt}">
            <h4>${cupcake.name}</h4>
            <b>Ingredients</b>
            <p class"ingredients">${cupcake.ingredients}</p>
            <b>${cupcake.frosting} Frosting</b>
            <p class="frosting">${cupcake.frostingIngredients}</p>
        </section>`;
    }

    $("#cupcakes").html(html);

}
