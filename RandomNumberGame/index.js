const form = document.querySelector("form");
const chose = document.querySelector("#chose");
const winOrlose = document.querySelector("#winOrlose");

const HIDDEN_CLASSNAME="hidden";

function rangeSubmit(event){
    event.preventDefault();
    const rangeNum = parseInt(document.querySelector("#range").value);
    const answer = parseInt(document.querySelector("#guess").value);
    const randomNum = Math.round(Math.random()*rangeNum);
    chose.classList.remove(HIDDEN_CLASSNAME);
    winOrlose.classList.remove(HIDDEN_CLASSNAME);
    chose.innerText = `You chose: ${answer}, the machine chose: ${randomNum}.`;
    if(randomNum===answer){
        winOrlose.innerText = "You won!";
    }else{
        winOrlose.innerText = "You lost!";
    }
}

form.addEventListener("submit", rangeSubmit);
