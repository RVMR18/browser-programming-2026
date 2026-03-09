console.log("Portfolio page loaded");

let isDark = false;

const contactInfo = "https://www.linkedin.com/in/madushan-rajapaksha-164563151/";

function setTheme() {

isDark = !isDark;

document.body.classList.toggle("dark");

localStorage.setItem("portfolio_theme", isDark ? "dark" : "light");

}

function showContact() {

alert(contactInfo);

}

// Load saved theme
window.onload = function(){

const savedTheme = localStorage.getItem("portfolio_theme");

if(savedTheme === "dark"){
document.body.classList.add("dark");
isDark = true;
}

// Last updated text
const today = new Date().toISOString().split("T")[0];

document.getElementById("lastUpdated").textContent =
"Last updated: " + today;

};

document.getElementById("themeBtn").onclick = setTheme;

document.getElementById("contactBtn").onclick = showContact;