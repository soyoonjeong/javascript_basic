const today = document.querySelector("#clock h3");
const time = document.querySelector("#clock h2");

function getClock(){
    const date = new Date();
    const month = String(date.getMonth()+1).padStart(2,"0");
    const day = String(date.getDate()).padStart(2,"0");
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    time.innerText = `${hours}:${minutes}:${seconds}`;
    today.innerText = `${date.getFullYear()}/${month}/${day}`;
}

getClock();
setInterval(getClock, 1000);
