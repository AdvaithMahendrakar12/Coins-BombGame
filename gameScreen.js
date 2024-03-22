function gameScreen() {
    const root = document.getElementById("root");
    root.innerHTML = "";

    const gameBox = document.createElement("div");
    gameBox.setAttribute('class', "gameBox");

    root.appendChild(gameBox);

    let score = 0;

    const scoreBox = document.createElement("div");
    scoreBox.setAttribute('class', "scoreBox");
    scoreBox.innerText = "Score: " + score;
    gameBox.appendChild(scoreBox);

    setInterval(() => {
        const coin = document.createElement('img');
        coin.setAttribute('class', "coin");
        coin.setAttribute('src', "./coin.png");

        coin.style.top = Math.floor(Math.random() * 100) + 'vh';
        coin.style.left = Math.floor(Math.random() * 100) + 'vw';
        coin.style.position = 'absolute';

        coin.addEventListener('mouseover', () => {
            gameBox.removeChild(coin);
            const audio = new Audio('./coin.wav');
            audio.play();
            score += 10;
            scoreBox.innerText = "Score: " + score;
        });

        const bomb = document.createElement('img');
        bomb.setAttribute('class', "bomb");
        bomb.setAttribute('src', "https://imgs.search.brave.com/gvZRmd9pGbCpEr0PigtKYHspTj64GuvoClJjG6TBwmA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/ZWxlbWVudF9waWMv/MDAvMTYvMDgvMDc1/N2E2ZmM1NzljYjRm/LmpwZw");
        bomb.style.top = Math.floor(Math.random() * 100) + 'vh';
        bomb.style.left = Math.floor(Math.random() * 100) + 'vw';
        bomb.style.position = 'absolute';

        bomb.addEventListener('mouseover', () => {
            const audio = new Audio('./bomb.wav');
            audio.play();
            gameOverScreen(score);
        });

        gameBox.appendChild(bomb);
        gameBox.appendChild(coin);
        setTimeout(() => {
            gameBox.removeChild(bomb);
        }, 1000);
    }, 500);
}