document.addEventListener("DOMContentLoaded", function () {
    var password = prompt("Please enter 'password' for stickman to move:");
    
    if (password !== "password") {
        
        var table = document.querySelector("table");
        table.style.display = "none"; 

        var stickmanContainer = document.getElementById("stickman-container");
        stickmanContainer.style.display = "none"; 
    } else {
        
        var stickmanContainer = document.getElementById("stickman-container");
        stickmanContainer.style.display = "block"; 
    }

    function wanderStickman() {
        var stickman = document.getElementById("stickman-container");
        var maxX = window.innerWidth - stickman.clientWidth;
        var maxY = window.innerHeight - stickman.clientHeight;

        function getRandomPosition() {
            var x = Math.floor(Math.random() * maxX);
            var y = Math.floor(Math.random() * maxY);
            return { x, y };
        }

        function moveStickman() {
            var position = getRandomPosition();
            stickman.style.left = position.x + "px";
            stickman.style.top = position.y + "px";
        }

        
        setInterval(moveStickman, 300); 
    }

    wanderStickman();
});
