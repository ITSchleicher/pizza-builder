// declare toppings as variables

let pepperoni = {
    name: "pepperoni",
	onpizza: false,
	text: "pepperoni",
    htmlel: "pepperoni"
	}
let sausage = {
    name: "sausage",
	onpizza: false,
	text: "sausage",
    htmlel: "sausage"
	}
let greenpepper = {
    name: "greenpepper",
	onpizza: false,
	text: "green pepper",
    htmlel: "green-pepper"
	}
let mushroom = {
    name: "mushroom",
	onpizza: false,
	text: "mushroom",
    htmlel: "mushroom"
	}
let blackolives = {
    name: "blackolives",
    onpizza: false,
    text: "black olives",
    htmlel: "black-olives"
    }
let onions = {
    name: "onions",
    onpizza: false,
    text: "onions",
    htmlel: "onions"
    }
let grilledchicken = {
    name: "grilledchicken",
    onpizza: false,
    text: "grilled chicken",
    htmlel: "grilled-chicken"
    }
let pineapple = {
    name: "pineapple",
    onpizza: false,
    text: "pineapple",
    htmlel: "pineapple"
    }
let bacon = {
    name: "bacon",
    onpizza: false,
    text: "bacon",
    htmlel: "bacon"
    }
let basil = {
    name: "basil",
    onpizza: false,
    text: "basil",
    htmlel: "basil"
    }
let garlic = {
    name: "garlic",
    onpizza: false,
    text: "garlic",
    htmlel: "garlic"
    }
let anchovies = {
    name: "anchovies",
    onpizza: false,
    text: "anchovies",
    htmlel: "anchovies"
    }

    
// creating variables and listeners for customer name button    
let customerInput = document.getElementById('customerInput')

const nameButton = document.getElementById('namesubmitButton')

let customerName = "Customer"

nameButton.addEventListener('click', function() {
    
    customerName = customerInput.value;
    
});

//  put toppings in an array

let toppings = [pepperoni, sausage, greenpepper, mushroom, blackolives, onions, grilledchicken, pineapple, bacon, basil, garlic, anchovies]


// checking for previously stored toppings and highlighting them in green
window.onload = function() {
    const storedArray = localStorage.getItem('storedtoppings');
    if (storedArray) {
        toppings = JSON.parse(storedArray);
    }
};

for (let ingredient of toppings) {
    if (ingredient.onpizza === true) {
        const element = document.getElementById(ingredient.htmlel);
        if (element) { 
            element.classList.toggle("green");
        }
    }
}


// pressing Make Your Pizza button 
const completeOrder = document.getElementById('completeOrder');



completeOrder.addEventListener('click', function() {
    let toppinglist = toppings.filter(toppings => toppings.onpizza)
    const toppingtextonly = toppinglist.map(toppinglist => toppinglist.text)
    const toppingstext = toppingtextonly.join(", ");
    let pizzaoutput  = "Hello, " + customerName + "! Your pizza has " + toppingstext + " on it.  Sounds Delicious!"
    document.getElementById("pizzaresult").textContent = pizzaoutput;
    //put in local storage
    let storedtoppings = JSON.stringify(toppings);
    localStorage.setItem('storedtoppings', storedtoppings);

});



// dark mode functionality
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }


//Creating event listeners for clicking toppings

const clickpepperoni = document.getElementById('pepperoni');
clickpepperoni.addEventListener('click', function() {
    this.classList.toggle("green");
    pepperoni.onpizza = !pepperoni.onpizza; 
})

const clicksausage = document.getElementById('sausage');
clicksausage.addEventListener('click', function() {
    this.classList.toggle("green");
    sausage.onpizza = !sausage.onpizza; 
})

const clickmushrooms = document.getElementById('mushrooms');
clickmushrooms.addEventListener('click', function() {
    this.classList.toggle("green");
    mushroom.onpizza = !mushroom.onpizza; 
})

const clickgreenpepper = document.getElementById('green-peppers');
clickgreenpepper.addEventListener('click', function() {
    this.classList.toggle("green");
    greenpepper.onpizza = !greenpepper.onpizza; 
})

const clickblackolives = document.getElementById('black-olives');
clickblackolives.addEventListener('click', function() {
    this.classList.toggle("green");
    blackolives.onpizza = !blackolives.onpizza; 
})

const clickonions = document.getElementById('onions');
clickonions.addEventListener('click', function() {
    this.classList.toggle("green");
    onions.onpizza = !onions.onpizza; 
})

const clickgrilledchicken = document.getElementById('grilled-chicken');
clickgrilledchicken.addEventListener('click', function() {
    this.classList.toggle("green");
    grilledchicken.onpizza = !grilledchicken.onpizza; 
})

const clickpineapple = document.getElementById('pineapple');
clickpineapple.addEventListener('click', function() {
    this.classList.toggle("green");
    pineapple.onpizza = !pineapple.onpizza; 
})

const clickbacon = document.getElementById('bacon');
clickbacon.addEventListener('click', function() {
    this.classList.toggle("green");
    bacon.onpizza = !bacon.onpizza; 
})

const clickbasil = document.getElementById('basil');
clickbasil.addEventListener('click', function() {
    this.classList.toggle("green");
    basil.onpizza = !basil.onpizza; 
})

const clickgarlic = document.getElementById('garlic');
clickgarlic.addEventListener('click', function() {
    this.classList.toggle("green");
    garlic.onpizza = !garlic.onpizza; 
})

const clickanchovies = document.getElementById('anchovies');
clickanchovies.addEventListener('click', function() {
    this.classList.toggle("green");
    anchovies.onpizza = !anchovies.onpizza; 
})


