const btn = document.getElementById("heartBtn");
const mainText = document.getElementById("mainText")

const heartAmount = 40;
let clickedAmount = 0;
let currentContext = "clickAgain"

btn.addEventListener("click", () => {
    if(clickedAmount >= 3) {
        if(currentContext == "clickAgain") {
            mainText.textContent = "SIIIII ALTRI CUORIII";
            currentContext = "keepClicking";
        } else if(currentContext == "keepClicking") {
            mainText.textContent = "EVVAIIII ANCORA CUORI WOOOOOOOO";
            currentContext = "enough";
        } else if(currentContext == "enough") {
            mainText.textContent = "ok basta troppi cuori";
            currentContext = "default";
            setTimeout(() => {
                if(currentContext == "default") {
                    mainText.textContent = "SCHERZO CONTINUAAAA";
                }
            }, 1500);
        } else if(currentContext == "default") {
            mainText.textContent = "CUORIII CONTINUA A CLICCARE!"
            currentContext = "clickAgain";
        }
        
    }
    clickedAmount++;

    for (let i = 0; i < heartAmount; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";

    // Random position across the viewport
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);
}
