var character =document.getElementById("character");
var block = document.getElementById("block");

function dive(){
    if(!character.classList.contains ("dive")) {
    character.classList.add("dive");
    setTimeout(function(){
        character.classList.remove("dive");
    },500)
}
}

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var characterBottom = characterTop + parseInt(window.getComputedStyle(character).getPropertyValue("height"));
    var blockBottom = 20;




    if(blockLeft < 20 && blockLeft > 0 && characterTop < blockBottom && characterBottom >0){
            block.style.animation = "none";
            block.style.display = "none";
            alert("you are a FAILURE")
            clearInterval(checkDead);
        }
},10)

