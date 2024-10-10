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


// creating variables and listeners for customer name button    
const customerInput = document.getElementById('customerInput')

const nameButton = document.getElementById('namesubmitButton')

let customerName = "Customer"

nameButton.addEventListener('click', function() {
    
    let customerName = customerInput.value;
    console.log(customerName)
});

//  put toppings in an array

let toppings = [pepperoni,sausage,greenpepper,mushroom,blackolives,onions,grilledchicken,pineapple,bacon,basil,garlic,anchovies]

//make list of toppings on pizza by checking for if onpizza is true
const toppinglist = toppings.filter(toppings => toppings.onpizza)

// pulling only the toppinglist.text attribute from the array
const toppingtextonly = toppinglist.map(toppinglist => toppinglist.text)

// creates final string of toppings
const toppingstext = toppingtextonly.join(", ");

// concacting name of customer with pizza toppings into final output
const pizzaoutput  = "Hello, " + customerName + "! Your pizza has " + toppingstext + " on it.  Sounds Delicious!"

//set toppingstext to an ID that can be called in HTML
document.getElementById("pizzaresult").textContent = pizzaoutput;

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }