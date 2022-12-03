const pikachu = document.querySelector('.walking');
const pikachuStopped = document.querySelector('.stopped');
const stone = document.querySelector('.stone');
const pikachuCrying = document.querySelector('.cry');
const gameOver = document.querySelector('.game-over');
const btn = document.querySelector('#btn');
const count = 0;

btn.addEventListener("click", function() {
    
    location.reload();
});

const jump = () => {
    if(event.key == "ArrowUp"){
        pikachu.classList.add('jump');

        setTimeout(() => {
            pikachu.classList.remove('jump');
            pikachu.style.animationPlayState="running";
        }, 500);
    }
}
const loop = setInterval(() => {
    const stonePosition = stone.offsetLeft;
    const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px', '');

    if(stonePosition <= 200 && stonePosition > 60 && pikachuPosition <= 110 ){
        stone.style.animation = 'none';
        stone.style.left = `${stonePosition}px`
        pikachu.style.animation = 'none';
        pikachuStopped.style.display="none";
        pikachu.style.display="none";
        pikachuCrying.style.display="block";
        pikachuCrying.style.bottom=`${pikachuPosition + 30}px`;      
        gameOver.style.display="block";
    }
}, 10);

const walk = () => {
    if(event.key == "ArrowRight"){
        pikachuStopped.style.display="none";
        pikachu.style.display="block";
        stone.classList.add('stoneAnimation'); 
        stone.style.animationPlayState="running";  
        pikachu.style.animationPlayState="running";           
    } 
}

const stop = () => {
    if (event.key == "ArrowRight"){
        pikachuStopped.style.display="block";
        pikachu.style.display="none";
        stone.style.animationPlayState="paused";
    }
}

document.addEventListener("keydown", jump);
document.addEventListener("keydown", walk);
document.addEventListener("keyup", stop);