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

// ===============================
// External API Data Loader
// ===============================

// Why do we use async/await?
// It allows asynchronous code (like API requests) to be written in a cleaner
// and easier-to-read way compared to promise chains.

async function loadExternalData() {

const status = document.getElementById("dataStatus");
const list = document.getElementById("userData");

status.textContent = "Loading...";
list.innerHTML = "";

try {

const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

// Why do we check response.ok?
// It confirms the request succeeded (status code 200-299)
// before trying to read the data.

if(!response.ok){
throw new Error("Network response was not ok");
}

const data = await response.json();

status.textContent = "";

// Display data dynamically
list.innerHTML = `
<li><strong>Name:</strong> ${data.name}</li>
<li><strong>Email:</strong> ${data.email}</li>
<li><strong>Company:</strong> ${data.company.name}</li>
`;

}
catch(error){

// Why do we use try/catch?
// It handles errors such as network problems or failed requests
// so the application does not crash.

status.textContent = "Error loading data";

console.error(error);

}

}

// Button event
document.getElementById("loadDataBtn").onclick = loadExternalData;