"use strict";

// 1. Create an HTML page that contains a text area and a button labeled *Create*.



// 1. When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM. You decide the height/width of the card.



// 1. When the user clicks the *Delete* button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually [removed](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild) from the DOM.
/* ------------- VARIABLES --------------*/
var create = document.getElementById("createButton");

var deleteButton = document.getElementById("deleteButton");

var textInput = document.getElementById("textArea");

console.log("textinput", textInput);

/* ------------- LISTENERS --------------*/
create.addEventListener("click", createCard);

deleteButton.addEventListener("click", deleteCard);


// textInput.addEventListener("keyup", function(event));

/* ------------- FUNCTIONS --------------*/
// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM. You decide the height/width of the card.
function createCard () {
	// console.log("inside createCard");
	var newCard = document.createElement("div");
	var xButton = document.createElement("button");
	var cardText = document.createElement("p");
	newCard.className = "w3-card";
	newCard.id = "firstCard";
	cardText.innerHTML = textInput.value;
	cardText.className = "cardInfo";
	xButton.id = "deleteMe";
	xButton.addEventListener("click", deleteCard);

	document.getElementsByTagName("body")[0].appendChild(newCard).appendChild(cardText).appendChild(xButton);

}

function deleteCard () {
	var parent = document.getElementsByTagName("body");
	var child = document.getElementById("firstCard");
	// parent.removeChild(child);
	document.getElementById("firstCard").remove();
}