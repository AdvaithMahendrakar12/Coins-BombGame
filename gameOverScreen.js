
function gameOverScreen(score) {
    const root = document.getElementById("root");
    root.innerHTML = "";

    const gameOverBox = document.createElement("div");
    gameOverBox.setAttribute('class', "gameOverBox");
    root.appendChild(gameOverBox);
    
    const scoreBox = document.createElement("div");
    scoreBox.setAttribute('class', "scoreBox");
    root.appendChild(scoreBox);
    const scoreText = document.createElement("p");
    scoreText.setAttribute('class', "scoreText");
    scoreText.innerHTML = "Your Score: " + score;
    scoreBox.appendChild(scoreText);

    const restartButton = document.createElement("button");
    restartButton.setAttribute("class","restartButton");
    restartButton.innerHTML = "RESTART";
    restartButton.addEventListener('click', function(){
        startScreen();
    });
    root.appendChild(restartButton);
}