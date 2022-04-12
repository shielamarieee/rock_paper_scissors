function computerPlay() {
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
}

const playerSelection = prompt("Choose between Rock, Paper, Scissors");

if (playerSelection.toUpperCase() === "ROCK") {
    alert("ROCK");
}