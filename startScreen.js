


function startScreen(){
    const root = document.getElementById("root"); 
    root.innerHTML = "";

    const startButton = document.createElement("button");
    
    startButton.setAttribute("class" ,"startButton");

    startButton.innerHTML = "START"; 

    startButton.addEventListener('click' , function(){
        gameScreen();
    });

    root.appendChild(startButton);
}
