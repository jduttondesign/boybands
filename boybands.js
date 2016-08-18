
var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];


//number of loops
var count = bands.length;

//DOM element for bands
var bandItem = document.getElementById("Boy Bands");

//DOM element for veggies
var veggieItem = document.getElementById("Veggies");

// for (var i = 0; i < arrayLength; i++) {
//     alert(myStringArray[i]);
//     //Do something
// }

//Now make the loop
for (var NowLoop = 0; NowLoop < count; NowLoop i++) {

//band names
	bandsElement.innerHTML += "<div> + bands[i] + </div>";

//veggie names
	vegetablesElement.innerHTML += "<div> + veggies[i] + </div>";

}



}