const player = {
    name:"soyoon",
    sayHello :function(otherPersonsName){
        console.log("hello! "+otherPersonsName);
    }
};
//console.log(player.name);
//player.sayHello(player.name);

const calculator = {
    plus : function(a,b){
        return a+b;
    },
    minus : function(a,b){
        return a-b;
    },
    times : function(a,b){
        return a*b;
    },
    divide : function(a,b){
        return a/b;
    },
    power : function(a,b){
        return a**b;
    }
};

const title = document.getElementById("title"); //객체 반환
//title.innerText = "i changed it!";
//console.log(title.id);
//console.log(title.innerText);

const hellos = document.getElementsByClassName("hello"); //Array 반환
//console.log(hellos);

let h1s = document.getElementsByTagName("h1"); //Array 반환
//console.log(h1s);

h1s = document.querySelectorAll(".hello h1"); //Array 반환
//console.log(h1s);
const titles = document.querySelectorAll("#title"); //Array 반환
//console.log(titles);

const h1 = document.querySelector(".hello h1"); 
// 조건을 만족하는 첫번째 element만 가져옴
//console.log(h1);
//console.dir(h1);
//h1.style.
function handleClick(){
    /*
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor==='blue'){
        newColor = 'tomato';
    }else{
        newColor = 'blue';
    }
    h1.style.color = newColor; */
    const clickedClass = 'clicked';
    if(h1.className===clickedClass){
        h1.className = "";
    }else{
        h1.className = clickedClass
    }
}
function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
}
function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}
function handleWindowResize(){
    document.body.style.backgroundColor = "pink";
}
function handleWindowCopy(){
    alert("copier");
}
function handleWindowOffline(){
    alert("SOS no WIFI");
}
function handleWindowOnline(){
    alert("GOOD");
}
h1.addEventListener("click",handleClick);
//h1.click = handleClick;
h1.addEventListener("mouseenter",handleMouseEnter);
//h1.mouseenter = handleMouseEnter;
h1.addEventListener("mouseleave",handleMouseLeave);
//h1.mouseleave = handleMouseLeave;

window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);