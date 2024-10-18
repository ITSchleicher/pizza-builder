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
    htmlel: "green-peppers"
	}
let mushroom = {
    name: "mushroom",
	onpizza: false,
	text: "mushroom",
    htmlel: "mushrooms"
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

    
// creating variables and listeners for customer name button and storing them in local storage
let customerInput = document.getElementById('customerInput')

const nameButton = document.getElementById('namesubmitButton')

let customerName = "Customer"

nameButton.addEventListener('click', function() {
    
    customerName = customerInput.value;
    localStorage.setItem('storedname', customerName)
    
});






// checking for previously stored toppings and name adding them, and highlighting the toppings in green
window.onload = function() {
    const storedName = localStorage.getItem('storedname');
    if (storedName){
        customerName = storedName
    }
    const storedArray = localStorage.getItem('storedtoppings');
    let oldtoppings = JSON.parse(storedArray);
    if (oldtoppings) {
        pepperoni = oldtoppings[0]
        sausage = oldtoppings[1]
        greenpepper = oldtoppings[2]
        mushroom = oldtoppings[3]
        blackolives = oldtoppings[4]
        onions = oldtoppings[5]
        grilledchicken = oldtoppings[6]
        pineapple = oldtoppings[7]
        bacon = oldtoppings[8]
        basil = oldtoppings[9]
        garlic = oldtoppings[10]
        anchovies = oldtoppings[11]
        for (let ingredient of oldtoppings) {
            if (ingredient.onpizza === true) {
                const element = document.getElementById(ingredient.htmlel);
                if (element) { 
                    element.classList.toggle("green");
                }
            }
        }
    }
}



// pressing Make Your Pizza button 
const completeOrder = document.getElementById('completeOrder');

// let toppingstext = "cheese"

completeOrder.addEventListener('click', function() {
    
    let toppings = [pepperoni, sausage, greenpepper, mushroom, blackolives, onions, grilledchicken, pineapple, bacon, basil, garlic, anchovies]
    let toppinglist = toppings.filter(toppings => toppings.onpizza)
    const toppingtextonly = toppinglist.map(toppinglist => toppinglist.text)
    let toppingstext = toppingtextonly.join(", ");
    let pizzaoutput;
    if (toppingstext) {
    pizzaoutput = "Hello, " + customerName + "! Your pizza has " + toppingstext + " on it. Sounds Delicious!";
    } else {
    pizzaoutput = "Hello, " + customerName + "! Your pizza has cheese on it. Sounds Delicious!";
    }
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
        pizzaImg.src="https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/ofvjblkm/ddce3352-b36d-4ffb-a097-8ee5a3b3a618.JPG"
    } else if (pepperoni.onpizza === true && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://mlhxrkjoggqr.i.optimole.com/w:600/h:400/q:mauto/rt:fill/g:ce/f:best/https://worldsbestpizza.com/wp-content/uploads/2020/03/01242021caliente-15551.jpg"
    } else if (pepperoni.onpizza === true && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === false) {
        pizzaImg.src="https://southboston.landofpizzasouthie.com/webfile?name=4LANDOS_SPECIAL&hash=1678219501000"
    } else if (pepperoni.onpizza === true && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === true) {
        pizzaImg.src="https://imagedelivery.net/9lr8zq_Jvl7h6OFWqEi9IA/96722a13-db80-4a93-518c-e2ece03a8f00/public"
    } else if (pepperoni.onpizza === false && sausage.onpizza === true && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) { 
        pizzaImg.src="https://d3exbi59yykwt2.cloudfront.net/general-uploads/Menu-Images/_960x800_crop_center-center_none/Sausage.png"
    } else if (pepperoni.onpizza === false && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/10/2/0/FNM_110112-Sicilian-Pizza-With-Sausage-and-Peppers-Recipe_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1382455226932.webp"
    } else if (pepperoni.onpizza === false && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://www.louiselowry.com/wp-content/uploads/2016/04/IMG_1922.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://i.redd.it/sff103ve0g891.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://wendypolisi.com/wp-content/uploads/2016/07/sausage-manchego-red-onion-pizza-3-500x500.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://preview.redd.it/pjwpmx4ps7v61.jpg?width=1080&crop=smart&auto=webp&s=116eec0d9a539880f84342d176fee358b242ff39"
    } else if (pepperoni.onpizza === false && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true  && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://live.staticflickr.com/3346/3577538850_8b96c7f736_b.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD94sL8m9L7wlerakjBSQh2zK4QxWuWBCYkA&s"
    } else if (pepperoni.onpizza === false && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true  && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://images.squarespace-cdn.com/content/v1/5cbf5a350cf57df7fb43982e/1590113417059-RIAAIRS1GZU9XOTDDP1S/XTREME.png"
    } else if (pepperoni.onpizza === false && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === false) {
        pizzaImg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbEglD8eoISqmpTsqDwIxKyEk4imS7VGFq5u0bPOX5DvM92nnE-zK1QbG2IUJf1WrLWFg&usqp=CAU"
    } else if (pepperoni.onpizza === false && sausage.onpizza === true && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === true) {
        pizzaImg.src="https://f4.bcbits.com/img/0002512304_25.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === true && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://images.squarespace-cdn.com/content/v1/5fe3fcd000e52f676c978a91/87cf0a1a-63fd-47e1-a566-8743bf839426/20211031_130020-01_resized.jpeg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://cooksmartsapp.s3-us-west-2.amazonaws.com/meal_photos/1644/20201228-Green-Pepper-Mushroom-Pizza-NM-2.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://as2.ftcdn.net/v2/jpg/00/95/43/19/1000_F_95431931_F5JqEs3nOvoUGAuM21tuGI9ckL8r2j08.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://images.snapwi.re/58a9/550fc005917f757153e15305.w800.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://media-cdn.tripadvisor.com/media/photo-s/16/8c/7a/08/veggie-pizza-with-roasted.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://images.squarespace-cdn.com/content/v1/5f0b5b8f19d176469c4f8ea3/dbb236ac-4257-4e3c-bb84-2d5007738226/BBQ+Chicken+Pizza+with+Bacon+and+Pineapple.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://sisijemimah.com/wp-content/uploads/2016/04/homemade-pizza-6.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://larosasweb295.blob.core.windows.net/images-menu/chicken_and_bacon_pizza.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === false) {
        pizzaImg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1pRPR6IIyCGcwWhqQcGyTbv6BfoDr_HDdw&s"
     } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === true && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === true) {
        pizzaImg.src="https://static.vecteezy.com/system/resources/previews/027/808/505/non_2x/appetizing-vegetarian-pizza-composed-with-cherry-tomatoes-garlic-cloves-tomato-puree-basil-leaves-ricotta-grated-parmesan-dried-oregano-pesto-mushrooms-as-toppings-photo.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === true && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://www.thursdaynightpizza.com/wp-content/uploads/2021/05/finished-without-chives_STAMP.png"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://chefindisguise.com/wp-content/uploads/2011/04/p9.jpg?w=940"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://www.foodandwine.com/thmb/UH79IPSChm0VGjJlOYA6myXUlzE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/jerk-chicken-pizza-FT-RECIPE0920-d30868b74c0841879c483c1703cc763f.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://s23209.pcdn.co/wp-content/uploads/2016/11/White-Mushroom-PizzaIMG_4169edit.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://i0.wp.com/www.splashoftaste.com/wp-content/uploads/2022/08/mushroom-pizza-featured.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://www.thursdaynightpizza.com/wp-content/uploads/2021/05/finished-without-chives_STAMP.png"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCyh6_ZuOofc-eRr4y9HLINgzQRxLWfz-Z7g&s"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === false) {
        pizzaImg.src="https://assets.bonappetit.com/photos/627ac1da37243f2984b7959b/1:1/w_2560%2Cc_limit/0510-barbecue-mushroom-pizza-lede.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === true && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === true) {
        pizzaImg.src="https://www.nicolaspujol.com/wp-content/uploads/2019/04/Spanish-brava-sauce-pizza-with-vegetables-and-side-of-anchovies-500x375.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === true && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://cdn7.kiwilimon.com/recetaimagen/15739/400x400/7759.jpg.webp"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://howtofeedaloon.com/wp-content/uploads/2016/08/pizza-3.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKUdZR1N6NpcCJbsD6aPZgalGV7pxFfAMag&s"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://britneybreaksbread.com/wp-content/uploads/2021/04/Cheesy-Olive-Pizza-with-Mushrooms-3.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://sweetcaramelsunday.com/wp-content/uploads/Black-olive-pizza-110.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://www.ahintofhoney.com/wp-content/uploads/2021/01/DSC04472-731x1024.jpeg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === false) {
        pizzaImg.src="https://images.squarespace-cdn.com/content/v1/5e137a0423bec15dcf0cfbf8/1594236535332-D1E0VWCNXH2J24H7KM1N/Combo+Pizza.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === true && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === true) {
        pizzaImg.src="https://i.redd.it/or5lmf5vnh2b1.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === true && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://i.redd.it/k6kxqk9do2ub1.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://theclevermeal.com/wp-content/uploads/2022/02/onion-pizza_01.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://realitybakes.com/wp-content/uploads/2020/01/Roasted-Red-Pepper-and-Red-Onion-Pizza-8.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://cozycravings.com/wp-content/uploads/2024/03/DSC_5880-2.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://cozycravings.com/wp-content/uploads/2019/02/DSC_3923-2.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === false) {
        pizzaImg.src="https://www.marthastewart.com/thmb/3N-0cJgJfLDyytnCehJd4aVgHJw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/white-pizza-172-d112100_horiz-c868dcf28ed44b21af90f11797d6d7d6.jpgitokKoRSmCVm"
     } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === true && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === true) {
        pizzaImg.src="https://www.delscookingtwist.com/wp-content/uploads/2017/02/Broccoli-Feta-and-Red-Onion-Pizza_0589.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === true && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://www.simplyrecipes.com/thmb/G2VQwX22IUW4TDSPgPVE72heqpA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Chicken-Alfredo-Pizza-Lead-Shot-3b-6df9d82a4fd3451fa954a7f6ae1c6191.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://www.allrecipes.com/thmb/ee0daLeNNIUcrKbm5nxwFXheMDM=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/AR-24878-bbq-chicken-pizza-beauty-4x3-39cd80585ad04941914dca4bd82eae3d.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://bluebowlrecipes.com/wp-content/uploads/2019/05/barbecue-chicken-pizza-0917.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://joyfoodsunshine.com/wp-content/uploads/2022/11/BBQ-chicken-pizza-recipe-9.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === false) {
        pizzaImg.src="https://www.budgetbytes.com/wp-content/uploads/2020/06/BBQ-Chicken-Pizza-one-slice.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === true && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === true) {
        pizzaImg.src="https://thecozycook.com/wp-content/uploads/2023/08/Buffalo-Chicken-Pizza-f.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza ===  true && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://external-preview.redd.it/VAiraxZLBEK8ry39NMYCp6y02tuZqS72bQCTQKBbFmg.png?width=640&crop=smart&auto=webp&s=f2e33f0784b5d99e2c27c38ee7e1d6f0d6ca41d6"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://hips.hearstapps.com/hmg-prod/images/hawaiian-pizza-index-65f4641de4b08.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://cookingwithchefbryan.com/wp-content/uploads/2022/01/Ham-and-Pineapple-Pizza-scaled.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === false) {
        pizzaImg.src="https://www.withspice.com/wp-content/uploads/2022/03/hawaiian-pizza-recipe-with-caramelized-pineapple-prosciutto-and-bacon.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === true && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === true) {
        pizzaImg.src="https://www.bowlofdelicious.com/wp-content/uploads/2020/01/Hawaiian-Pizza-3.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === true && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://savoryreviews.com/wp-content/uploads/2012/10/bcp4.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://hips.hearstapps.com/thepioneerwoman/wp-content/uploads/2015/09/bacon-cheeseburger-pizza-22.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === false) {
        pizzaImg.src="https://thefancypantskitchen.com/wp-content/uploads/2022/04/BARBECUE-BACON-PIZZA5-600x400.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === true && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === true) {
        pizzaImg.src="https://www.cookingclassy.com/wp-content/uploads/2015/03/caramlized-onion-bacon-and-spinach-pizza4-srgb.-480x270.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === true && garlic.onpizza === false && anchovies.onpizza === false) {
        pizzaImg.src="https://cdn.loveandlemons.com/wp-content/uploads/2023/07/margherita-pizza.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === false) {
        pizzaImg.src="https://i0.wp.com/flavorfulife.com/wp-content/uploads/2024/02/Roasted-Garlic-Pizza-close-up.jpg?resize=1200%2C1600&ssl=1"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === true && garlic.onpizza === true && anchovies.onpizza === true) {
        pizzaImg.src="https://files.mob-cdn.co.uk/recipes/2024/07/_1200x630_crop_center-center_82_none/Anchovy-Pizza.jpg?mtime=1720089732"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === true && anchovies.onpizza === false) {
        pizzaImg.src="https://www.fuegowoodfiredovens.com/wp-content/uploads/2021/08/garlic-pizza-bread-1.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === true && anchovies.onpizza === true) {
        pizzaImg.src="https://pizzagoon.com/wp-content/uploads/2014/07/an90-585x600.jpg"
    } else if (pepperoni.onpizza === false && sausage.onpizza === false && greenpepper.onpizza === false && mushroom.onpizza === false && blackolives.onpizza === false && onions.onpizza === false && grilledchicken.onpizza === false && pineapple.onpizza === false && bacon.onpizza === false && basil.onpizza === false && garlic.onpizza === false && anchovies.onpizza === true ) {
        pizzaImg.src="https://preview.redd.it/dine-and-anchovy-pizza-rossa-v0-ixum2p9zqu6a1.jpg?width=1080&crop=smart&auto=webp&s=e8420a06d610bff0636e0a7a2f4aa837f8951516"
   } else {
        pizzaImg.src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg";
   }
};