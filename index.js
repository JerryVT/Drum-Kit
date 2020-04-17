/*document.querySelector("button").addEventListener("click", handleClick);	//if parenthesis is used then it directly calls the fn when scanning html, it reaches the script tag and comes here.Hence we are passing the fn name as arg which will be called only when clicked.

function handleClick()  {
  alert("I got clicked");
}*/
//alert("I got clicked");

//var kickBass = new Audio("sounds/kick-bass.mp3");
var numberOfDrumButtons = document.querySelectorAll(".drum").length;		//retreives no of elements in html havinf=g class name "drum"

for (var i = 0; i < numberOfDrumButtons; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click",function() {
var buttonInnerHtml = this.innterHTML;
makeSound(buttonInnerHtml);
buttonAnimation(buttonInnerHtml);
});
}

//Detecting Keyboard Press

document.addEventListener("keydown", function(event){		// no fnname if fn is going to be defined here 
	makeSound(event.key);
	buttonAnimation(event.key);
});


function makeSound(key)
{
	switch(key)	{
	case "w" :
		var tom1 = new Audio("sounds/tom-1.mp3");
		tom1.play();
		break;

	case "a" :
		var tom2 = new Audio("sounds/tom-2.mp3");
		tom2.play();
		break;

	case "s" :
		var tom3 = new Audio("sounds/tom-3.mp3");
		tom3.play();
		break;

	case "d" :
		var tom4 = new Audio("sounds/tom-4.mp3");
		tom4.play();
		break;

	case "j" :
		var snare = new Audio("sounds/snare.mp3");
		snare.play();
		break;

	case "k" :
		var crash = new Audio("sounds/crash.mp3");
		crash.play();
		break;

	case "l" :
		var kick = new Audio("sounds/kick-bass.mp3");
		kick.play();
		break;

		default: console.log(key);
}
}

function buttonAnimation(currentkey) {
	var activeButton = document.querySelector("."+ currentkey);

	activeButton.classList.add("pressed");

	setTimeout(function () {
		activeButton.classList.remove("pressed");
	}, 100);
}

/*
for (var i =0; i < numberOfDrumButtons; i++)  {
 document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    
    alert("I got clicked");
    
    
   // kickBass.play();
  });
*/
    
