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
let customerInput = document.getElementById('customerInput')

const nameButton = document.getElementById('namesubmitButton')

let customerName = "Customer"

nameButton.addEventListener('click', function() {
    
    customerName = customerInput.value;
    
});

//  put toppings in an array

let toppings = [pepperoni,sausage,greenpepper,mushroom,blackolives,onions,grilledchicken,pineapple,bacon,basil,garlic,anchovies]


// pressing Make Your Pizza button 
const completeOrder = document.getElementById('completeOrder');

completeOrder.addEventListener('click', function() {
    const toppinglist = toppings.filter(toppings => toppings.onpizza)
    const toppingtextonly = toppinglist.map(toppinglist => toppinglist.text)
    const toppingstext = toppingtextonly.join(", ");
    let pizzaoutput  = "Hello, " + customerName + "! Your pizza has " + toppingstext + " on it.  Sounds Delicious!"
    document.getElementById("pizzaresult").textContent = pizzaoutput;
});



// dark mode functionality
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }