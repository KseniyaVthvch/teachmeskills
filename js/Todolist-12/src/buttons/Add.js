import {block1} from "../newelements/createElement.js";
import {inputTodo} from "../newelements/createElement.js";
import{todo} from "../utils/render.js"
import{renderToDoItem}from "../utils/render.js"
const addBtn = document.createElement("button")
addBtn.classList.add("add__btn")
addBtn.innerText = "Add"
block1.appendChild(addBtn)
addBtn.addEventListener('click',() => {
    let value = inputTodo.value
    let newtodo = {
        id: `${value}-${todo.length}-${Math.random()}`,
        isChecked: false,
        text: value
    };
    todo.push(newtodo);
    localStorage.setItem("todo",JSON.stringify(todo))
    renderToDoItem(newtodo)
    console.log(value)
} )