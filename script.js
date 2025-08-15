// DOM elements
const greeting = document.getElementById("greeting");
const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");

// Button click event - change greeting text
greetBtn.addEventListener("click", function() {
    const name = nameInput.value.trim();
    if (name) {
        greeting.textContent = `Hello, ${name}`;
    } else {
        greeting.textContent = "Hello";
    }
});

// Change box color on click
document.getElementById("redBox").addEventListener("click", () => {
    document.getElementById("redBox").style.backgroundColor = "red";
});

document.getElementById("blueBox").addEventListener("click", () => {
    document.getElementById("blueBox").style.backgroundColor = "blue";
});

document.getElementById("greenBox").addEventListener("click", () => {
    document.getElementById("greenBox").style.backgroundColor = "green";
});

document.getElementById("yellowBox").addEventListener("click", () => {
    document.getElementById("yellowBox").style.backgroundColor = "yellow";
});
