// cart.js

let cartTotal = 0;
let isLoyaltyMember = false;

// Function to register for the loyalty program
function registerForLoyalty() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let preferences = document.getElementById("preferences").value;
    alert(`Thank you, ${name}! You are now a member of our loyalty program.`);
    isLoyaltyMember = true;
}

// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
    let loyaltyCheckbox = document.getElementById("loyaltyCheckbox");
    let discount = 0;

    // Check if user is a member of the loyalty program
    if (loyaltyCheckbox.checked) {
        discount = 0.1; // 10% discount for loyalty members
    }

    // Calculate the total price after discount
    let totalPrice = itemPrice * (1 - discount);

    // Add the item to the cart
    cartTotal += totalPrice;
    alert(`${itemName} added to cart! Total: $${cartTotal.toFixed(2)}`);
}
// language.js

// Function to switch between English and Polish languages
function switchLanguage() {
    let currentLanguage = document.documentElement.lang;

    if (currentLanguage === "en") {
        switchToPolish();
    } else {
        switchToEnglish();
    }
}

// Function to switch to Polish language
function switchToPolish() {
    document.documentElement.lang = "pl";

    // Change navbar links
    document.querySelectorAll(".navbar a").forEach(link => {
        switch (link.textContent) {
            case "Home":
                link.textContent = "Strona główna";
                break;
            case "Retro":
                link.textContent = "Retro";
                break;
            case "Streaming":
                link.textContent = "Streaming";
                break;
            case "Loyalty":
                link.textContent = "Lojalność";
                break;
        }
    });

    // Change button text
    document.querySelector("button").textContent = "Przełącz na angielski";
}

// Function to switch to English language
function switchToEnglish() {
    document.documentElement.lang = "en";

    // Change navbar links
    document.querySelectorAll(".navbar a").forEach(link => {
        switch (link.textContent) {
            case "Strona główna":
                link.textContent = "Home";
                break;
            case "Retro":
                link.textContent = "Retro";
                break;
            case "Streaming":
                link.textContent = "Streaming";
                break;
            case "Lojalność":
                link.textContent = "Loyalty";
                break;
        }
    });

    // Change button text
    document.querySelector("button").textContent = "Switch to Polish";
}
