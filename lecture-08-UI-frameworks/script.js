// THEME
const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
};

window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }
};

// LINKS
function openLinkedIn() {
    window.open("https://www.linkedin.com/in/madushan-rajapaksha-164563151/", "_blank");
}

function openGitHub() {
    window.open("https://github.com/RVMR18", "_blank");
}



// API
async function loadData() {
    const status = document.getElementById("status");
    const list = document.getElementById("data");

    status.textContent = "Loading...";
    list.innerHTML = "";

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await res.json();

        status.textContent = "Loaded:";
        list.innerHTML = `
            <li>${data.name}</li>
            <li>${data.email}</li>
            <li>${data.address.city}</li>
        `;
    } catch {
        status.textContent = "Error";
    }
}