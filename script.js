

const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
    const name = prompt("Enter a new name");
    button.textContent = `Player 1: ${name}`;
    
}

const button2 = document.getElementById("button2");

button2.addEventListener("click", updateColor); 

function updateNumber() {
    const number = prompt("Enter a new number");
    button.textContent = `Player ` + number + `: `
}