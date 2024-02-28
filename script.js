var character = document.getElementById("character");
var block = document.getElementById("block");
var gameStarted = false;
var checkDead;

function startGame() {
    if (!gameStarted) {
        gameStarted = true;
        checkDead = setInterval(function () {
            var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
            var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
            var characterBottom = characterTop + parseInt(window.getComputedStyle(character).getPropertyValue("height"));
            var blockBottom = 20;

            if (blockLeft <= 0 && characterTop < blockBottom && characterBottom > 0) {
                block.style.animation = "none";
                block.style.display = "none";
                showGameOverAlert();
                clearInterval(checkDead);
            }
        }, 10);
    }
}

function showGameOverAlert() {
    var gameOverAlert = document.getElementById("gameOverAlert");
    gameOverAlert.style.display = "block";

    setTimeout(function () {
        gameOverAlert.style.display = "none";
        resetGame();
    }, 3000);
}

function resetGame() {
    // Reset game state and position
    block.style.animation = "";
    block.style.display = "block";
    gameStarted = false;
}

document.getElementById("startButton").addEventListener("click", startGame);

function dive() {
    if (gameStarted && !character.classList.contains("dive")) {
        character.classList.add("dive");
        setTimeout(function () {
            character.classList.remove("dive");
        }, 500);
    }
}



