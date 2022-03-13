const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
let itsJumping = false;
let position = 0;
let isRunning = true;

function jump(){
    itsJumping = true;
    let upInterval = setInterval(() => {
        if(position >= 180){
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
                if(position <= 0){
                    clearInterval(downInterval);
                    itsJumping = false;
                }else{
                    position -= 15;
                    dino.style.bottom = position + "px";
                }
            }, 15);
        }else{
            //Up
            position += 15;
            dino.style.bottom = position + "px";
        }
    }, 15)
}

function handleSpacePress(event){
    if(event.keyCode === 32){
        if(!itsJumping){
            jump();
        }
    }
}

function handleEnterPress(event){
    if(event.keyCode === 13 && isRunning === false){
        window.location.reload();
    }
}

function createCactus(){
    const cactus = document.createElement("div");
    let cactusPosition = window.innerWidth + 60;
    let randomTime = Math.random() * 5000;

    cactus.classList.add("cactus");
    cactus.style.left = cactusPosition + "px";
    background.appendChild(cactus);
    
    let leftInterval = setInterval(() => {
        if(cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Game over</h1><p class="restart">Press ENTER to restart</p>';
            isRunning = false;
        }else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + "px";
        }
    }, 20);

    setTimeout(createCactus, randomTime);
}

createCactus();

document.addEventListener('keypress', handleSpacePress);
document.addEventListener('keypress', handleEnterPress)