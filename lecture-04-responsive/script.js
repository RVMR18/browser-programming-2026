// Console message
console.log("Portfolio page loaded");

// State variable
let isDarkMode = false;

// Contact info variable
const contactInfo = "https://www.linkedin.com/in/madushan-rajapaksha-164563151/";

// Function 1: Theme toggle
function setTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle("dark");
    console.log("Theme changed. Dark mode:", isDarkMode);
}

// Function 2: Contact quick action
function showContact() {
    alert(contactInfo);
    console.log("Contact info shown:", contactInfo);
}

// Event handlers
document.getElementById("themeBtn").onclick = setTheme;
document.getElementById("contactBtn").onclick = showContact;

