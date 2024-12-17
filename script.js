const button = document.getElementById("target-button");
const message = document.getElementById("message");

let clicksRequired = 7; // Nombre de clics avant de terminer le jeu

function randomPosition() {
    const containerWidth = window.innerWidth - button.offsetWidth;
    const containerHeight = window.innerHeight - button.offsetHeight;

    const randomX = Math.floor(Math.random() * containerWidth);
    const randomY = Math.floor(Math.random() * containerHeight);

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

function startGame() {
    button.classList.remove("hidden");
    randomPosition();

    button.addEventListener("click", () => {
        clicksRequired--;

        if (clicksRequired > 0) {
            randomPosition();
        } else {
            button.classList.add("hidden");
            message.classList.remove("hidden");
        }
    });
}

window.onload = startGame;
