//handle the dice number for dice  1
var RandomNumber1 = Math.random() ;
RandomNumber1 *= 6;
var diceFacesForDiceOne = Math.floor(RandomNumber1) + 1;

//handle the dice number for dice 2
var RandomNumber2 = Math.random() ;
RandomNumber2 *= 6;
var diceFacesForDiceTow = Math.floor(RandomNumber2) + 1;

// handle the first dice number random image
var FirstDiceHandlesource = "./images/dice"+diceFacesForDiceOne+".png";

// handle the seconed dice number random image
var SeconedDiceHAndlesource = "./images/dice"+diceFacesForDiceTow+".png";

var RandomImage1 = document.querySelector(".img1")
.setAttribute("src" , FirstDiceHandlesource);

var RandomImage2 = document.querySelector(".img2")
.setAttribute("src" , SeconedDiceHAndlesource);


// know we will make the game procedure 

