$(document).ready(function () {


    $("#newSearch").on("submit", function(e){
        let foodType = $("#foodType").val()
        let zipcode = $("#zipcode").val()
        e.preventDefault()
        ApiRequest(foodType, zipcode)

    })

  })


function ApiRequest(foodType, zipcode){
    $.ajax({
    url: `https://data.cityofnewyork.us/resource/9w7m-hzhe.json?cuisine_description=${foodType}&zipcode=${zipcode}`,
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "TaVErwg2t2DTwbyCpjNa04ele"
    }
}).done(function(data) {
  makeRestos(data)
});
}


function makeRestos(data){
    let spots = []
    data.forEach(function(obj){
        var resto = new Resto(obj.dba, obj.street, obj.violation_description, obj.cuisine_description)
        spots.push(resto)

    })
    appendRestos(spots)
}

function appendRestos(array){
    let str = ``
    array.map(function(element){
        str += `<h1>${element.name}</h1>
        <ul><li>${element.name}</li> <li>${element.street}</li>
        <li id='violationDescription'>${element.violation}</li>
        </ul>`

    })
    $("#infoHolder").html(str)
}
