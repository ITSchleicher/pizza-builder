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

    pizzaIcon();
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


// Adding a green toggle to each topping

document.getElementById('pepperoni').addEventListener('click', function() {
    this.classList.toggle("green");
});
document.getElementById('sausage').addEventListener('click', function() {
    this.classList.toggle("green");
});
document.getElementById('mushrooms').addEventListener('click', function() {
    this.classList.toggle("green");
});
document.getElementById('green-peppers').addEventListener('click', function() {
    this.classList.toggle("green");
});
document.getElementById('black-olives').addEventListener('click', function() {
    this.classList.toggle("green");
});
document.getElementById('onions').addEventListener('click', function() {
    this.classList.toggle("green");
});
document.getElementById('grilled-chicken').addEventListener('click', function() {
    this.classList.toggle("green");
});
document.getElementById('pineapple').addEventListener('click', function() {
    this.classList.toggle("green");
});
document.getElementById('bacon').addEventListener('click', function() {
    this.classList.toggle("green");
});
document.getElementById('basil').addEventListener('click', function() {
    this.classList.toggle("green");
});
document.getElementById('garlic').addEventListener('click', function() {
    this.classList.toggle("green");
});
document.getElementById('anchovies').addEventListener('click', function() {
    this.classList.toggle("green");
});

localStorage.setItem('completeOrder', JSON.stringify(completeOrder));

var retrievedObject = localStorage.getItem('toppings');

console.log('completeOrder', JSON.parse(retrievedObject));





const pizzalist =JSON.stringify(completeOrder)

localStorage.setItem("completeOrder", pizzalist)
// Changing Pizza Icon

function pizzaIcon() {
    const pizzaImg = document.getElementById("pizza-img")
    if (pepperoni.onpizza === true && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src= "https://www.simplyrecipes.com/thmb/KE6iMblr3R2Db6oE8HdyVsFSj2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-1024x682-583b275444104ef189d693a64df625da.jpg";
    } else if (pepperoni.onpizza === true && sausage.onpizza === true && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://www.homeruninnpizza.com/wp-content/uploads/2023/02/Media_C_SausagePepperoni.jpg"
    } else if (pepperoni.onpizza === true && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false  && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyCTZZF9e8MNpYqB0j3bfrYGh3HKtvq85Cw&s"
    } else if (pepperoni.onpizza === true && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false  && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://bigbenspizzeria.us/wp-content/uploads/2020/07/supreme.jpg"
    } else if (pepperoni.onpizza === true && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false  && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://live.staticflickr.com/65535/48843694528_57d0d540bf.jpg"
    } else if (pepperoni.onpizza === true && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === false && pineapple.onpizza === false  && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://i0.wp.com/djalalicooks.com/wp-content/uploads/2023/04/IMG_4795.jpg?fit=1875%2C2500&ssl=1"
    } else if (pepperoni.onpizza === true && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://preview.redd.it/pjwpmx4ps7v61.jpg?width=1080&crop=smart&auto=webp&s=116eec0d9a539880f84342d176fee358b242ff39"
    } else if (pepperoni.onpizza === true && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://img.craiyon.com/2024-10-16/LGNkTmbZSNmfqBlO0gpLyw.webp"
    } else if (pepperoni.onpizza === true && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === true && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === true && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === true && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === true) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === true && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) { 
        pizzaImg.src="https://d3exbi59yykwt2.cloudfront.net/general-uploads/Menu-Images/_960x800_crop_center-center_none/Sausage.png"
    } else if (pepperoni.onpizza === false && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true  && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true  && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === true) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === true && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://images.squarespace-cdn.com/content/v1/5fe3fcd000e52f676c978a91/87cf0a1a-63fd-47e1-a566-8743bf839426/20211031_130020-01_resized.jpeg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === false) {
        pizzaImg.src=""
     } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === true) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === true && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://www.thursdaynightpizza.com/wp-content/uploads/2021/05/finished-without-chives_STAMP.png"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === true && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://cdn7.kiwilimon.com/recetaimagen/15739/400x400/7759.jpg.webp"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === true) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === true && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://i.redd.it/k6kxqk9do2ub1.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === false) {
        pizzaImg.src=""
     } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === true) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === true && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://www.simplyrecipes.com/thmb/G2VQwX22IUW4TDSPgPVE72heqpA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Chicken-Alfredo-Pizza-Lead-Shot-3b-6df9d82a4fd3451fa954a7f6ae1c6191.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === true) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza ===  true && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://external-preview.redd.it/VAiraxZLBEK8ry39NMYCp6y02tuZqS72bQCTQKBbFmg.png?width=640&crop=smart&auto=webp&s=f2e33f0784b5d99e2c27c38ee7e1d6f0d6ca41d6"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === true) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === true && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://savoryreviews.com/wp-content/uploads/2012/10/bcp4.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === true) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === true && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://cdn.loveandlemons.com/wp-content/uploads/2023/07/margherita-pizza.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === false) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === true) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === true && anchovies.onpizza === false) {
        pizzaImg.src="https://www.plattertalk.com/wp-content/uploads/2023/03/A-finished-garlic-pizza.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === true && anchovies.onpizza === true) {
        pizzaImg.src=""
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === true ) {
        pizzaImg.src="https://preview.redd.it/dine-and-anchovy-pizza-rossa-v0-ixum2p9zqu6a1.jpg?width=1080&crop=smart&auto=webp&s=e8420a06d610bff0636e0a7a2f4aa837f8951516"
   } else {
        pizzaImg.src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg";
   }
};