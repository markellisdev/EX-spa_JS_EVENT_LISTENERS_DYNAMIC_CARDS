"use strict";

/* ------------- VARIABLES --------------*/
var create = document.getElementById("createButton"); //This variable makes it easy to attach event listener to create button.

var textInput = document.getElementById("textArea"); //This variable makes to access the text input area.

var counter = 1; //This counter is set so that a unique id can be added as cards are created.

/* ------------- LISTENERS --------------*/
create.addEventListener("click", createCard);


/* ------------- FUNCTIONS --------------*/
// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM. You decide the height/width of the card.
function createCard () {
	// console.log("inside createCard");
	var newCard = document.createElement("div");
	var xButton = document.createElement("button");
	var cardText = document.createElement("p");
	newCard.className = "w3-card";
	newCard.id = "card-" + counter++;
	cardText.innerHTML = textInput.value;
	cardText.className = "cardInfo";
	xButton.id = "deleteMe";
	newCard.addEventListener("click", function(click) {
		    console.log("e.target: ", event.target);
		    console.log("e.currentTarget: ", event.currentTarget);
		if (event.target.id === "deleteMe") {
			deleteCard(event.currentTarget);
		}
	});

	document.getElementsByTagName("body")[0].appendChild(newCard).appendChild(cardText).appendChild(xButton);

	return counter;
}
// 1. When the user clicks the *Delete* button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually [removed](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild) from the DOM.

function deleteCard () {

	// document.event.currentTarget.remove;


	event.currentTarget.remove();
}