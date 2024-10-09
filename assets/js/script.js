// declare toppings as variables

let pepperoni = {
	onpizza: true,
	text: "pepperoni"
	}
let sausage = {
	onpizza: true,
	text: "sausage"
	}
let greenpepper = {
	onpizza: true,
	text: "green pepper"
	}
let mushroom = {
	onpizza: true,
	text: "mushroom"
	}
let blackolives = {
    onpizza: true,
    text: "black olives"
    }
let onions = {
    onpizza: false,
    text: "onions"
    }
let grilledchicken = {
    onpizza: false,
    text: "grilled chicken"
    }
let pineapple = {
    onpizza: false,
    text: "pineapple"
    }
let bacon = {
    onpizza: false,
    text: "bacon"
    }
let basil = {
    onpizza: false,
    text: "basil"
    }
let garlic = {
    onpizza: false,
    text: "garlic"
    }
let anchovies = {
    onpizza: false,
    text: "anchovies"
    }


//  put toppings in an array

const toppings = [pepperoni,sausage,greenpepper,mushroom,blackolives,onions,grilledchicken,pineapple,bacon,basil,garlic,anchovies]

//make list of toppings on pizza by checking for if onpizza is true
const toppinglist = toppings.filter(toppings => toppings.onpizza)

// pulling only the toppinglist.text attribute from the array
const toppingtextonly = toppinglist.map(toppinglist => toppinglist.text)

// creates final string that can be used as a variable on the website
const toppingstext = toppingtextonly.join(", ");


//set toppingstext to an ID that can be called in HTML
document.getElementById("onpizzatoppings").textContent = toppingstext;






