// declare toppings as variables

let pepperoni = {
	onpizza: false,
	text: "pepperoni"
	}
let sausage = {
	onpizza: false,
	text: "sausage"
	}
let greenpepper = {
	onpizza: false,
	text: "green pepper"
	}
let mushroom = {
	onpizza: false,
	text: "mushroom"
	}
let blackolives = {
    onpizza: false,
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


//Creating event listeners for clicking toppings

const clickpepperoni = document.getElementById('pepperoni');
clickpepperoni.addEventListener('click', function() {
    pepperoni.onpizza = !pepperoni.onpizza; 
})

const clicksausage = document.getElementById('sausage');
clicksausage.addEventListener('click', function() {
    sausage.onpizza = !sausage.onpizza; 
})

const clickmushrooms = document.getElementById('mushrooms');
clickmushrooms.addEventListener('click', function() {
    mushroom.onpizza = !mushroom.onpizza; 
})

const clickgreenpepper = document.getElementById('green-peppers');
clickgreenpepper.addEventListener('click', function() {
    greenpepper.onpizza = !greenpepper.onpizza; 
})

const clickblackolives = document.getElementById('black-olives');
clickblackolives.addEventListener('click', function() {
    blackolives.onpizza = !blackolives.onpizza; 
})

const clickonions = document.getElementById('onions');
clickonions.addEventListener('click', function() {
    onions.onpizza = !onions.onpizza; 
})

const clickgrilledchicken = document.getElementById('grilled-chicken');
clickgrilledchicken.addEventListener('click', function() {
    grilledchicken.onpizza = !grilledchicken.onpizza; 
})

const clickpineapple = document.getElementById('pineapple');
clickpineapple.addEventListener('click', function() {
    pineapple.onpizza = !pineapple.onpizza; 
})

const clickbacon = document.getElementById('bacon');
clickbacon.addEventListener('click', function() {
    bacon.onpizza = !bacon.onpizza; 
})

const clickbasil = document.getElementById('basil');
clickbasil.addEventListener('click', function() {
    basil.onpizza = !basil.onpizza; 
})

const clickgarlic = document.getElementById('garlic');
clickgarlic.addEventListener('click', function() {
    garlic.onpizza = !garlic.onpizza; 
})

const clickanchovies = document.getElementById('anchovies');
clickanchovies.addEventListener('click', function() {
    anchovies.onpizza = !anchovies.onpizza; 
})