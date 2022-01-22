const toDoForm =  document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //전의 toDos까지 합쳐서 localStorage에 저장
}
function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter((item)=>item.id!==parseInt(li.id));
    li.remove();
    saveToDos();
}
function paintToDo(newToDoObj){
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}
function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text : newToDo,
        id : Date.now() //같은 text끼리 구분하기 위해
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

//local storage에 array로 저장이 안되기 때문에 
//JSON.stringify로 array처럼 생긴 string으로 저장한 후 
//다시 JSON.parse 이용해 array로 꺼내는 방법

if(savedToDos!==null){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(paintToDo);
    toDos = parsedToDos; //이전에 localStorage에 저장된 것들을 초기화된 toDos 배열로 옮겨줌
}

// ❤ 전체 코드는 처음 실행하거나 브라우저 새로고침했을 때 실행 