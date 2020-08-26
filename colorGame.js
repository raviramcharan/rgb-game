var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
 setupModeButtons();
 setupSquares();
reset();
}

function setupModeButtons() {
		//mode button listeners
	for(i=0; i<modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent === 'Makkelijk' ? numSquares = 3 : numSquares = 6;
		reset();
	})
}
}

function setupSquares() {
	for(i=0;i<squares.length;i++) {
	//add initial colors to squares
	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Juist!";
			resetButton.textContent = "Opnieuw!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Jammer!";
		}
	})
}
}


function reset() {
	//generate new colors
	colors = generateRandomColors(numSquares);
	//pick a random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "Speel!";
	messageDisplay.textContent = "";
	//change colors of squares 
	for(i=0; i<squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];	
		} else {
			squares[i].style.display = "none";
		}
		
	}
	h1.style.backgroundColor = "steelblue";
}



resetButton.addEventListener("click", function() {
	reset();
})




function changeColors(color) {
	//loop through all squares
	for(i=0; i<squares.length; i++) {
		// change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	//pick a random number
	var random = Math.floor(Math.random() * colors.length)
	//return color
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//repeat num times
	for(i=0; i<num; i++) {
		// get random color and push into array
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor() {
	//pick a red 
	var r = Math.floor(Math.random() * 256);
	//pick a green
	var g = Math.floor(Math.random() * 256);
	//pick a blue
	var b = Math.floor(Math.random() * 256);

	return `rgb(${r}, ${g}, ${b})`;
}