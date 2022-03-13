const dino = document.querySelector(".dino");
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

document.addEventListener('keyup', handleKeyUp);