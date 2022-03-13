const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
let itsJumping = false;

function jump(){
    let position = 0;
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

function handleKeyUp(event){
    if(event.keyCode === 32){
        if(!itsJumping){
            jump();
        }
    }
}

function createCactus(){
    const cactus = document.createElement("div");
    let cactusPosition = 1000;
    let randomTime = Math.random() * 5000;

    cactus.classList.add("cactus");
    cactus.style.left = cactusPosition + "px";
    background.appendChild(cactus);
    
    let leftInterval = setInterval(() => {
        if(cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + "px";
        }
    }, 20);

    setTimeout(createCactus, randomTime);
}

createCactus();

document.addEventListener('keyup', handleKeyUp);