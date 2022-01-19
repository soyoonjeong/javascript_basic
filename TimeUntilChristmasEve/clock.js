const clockTitle = document.querySelector(".js-clock");
function getClock(){
    const date = new Date();
    let year = date.getFullYear();
    if(date.getMonth()===11 && date.getDate()>24){
        year = year+1;
    }
    const christmasEve= new Date(year, 11,24);
    const elapsed = parseInt((christmasEve.getTime()-date.getTime())/1000);
    const second = elapsed%60;
    const minute = parseInt(elapsed/60)%60;
    const hour =  parseInt(elapsed/(60*60))%24;
    const day = parseInt(elapsed/(60*60*24));
    clockTitle.innerText= `${day}d ${hour}h ${minute}m ${second}s`;
    
    
}

getClock();
setInterval(getClock, 1000);