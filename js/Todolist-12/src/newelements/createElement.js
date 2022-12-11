import {deleteAllButtonHandler} from "./src/buttons/deleteBtn.js"
import {inputTod} from "./src/wrapper/first.js"

export const container = document.createElement("div")
container.classList.add("container")

export const block1 = document.createElement("div")
block1.classList.add("block__1")

export const delAllBtn = document.createElement("button")
delAllBtn.classList.add("del-all__btn")
delAllBtn.innerText = "Delete All"

export const todoText = document.createElement("p")
    todoText.classList.add("input__text")
    todoText.innerText = text
    block2.appendChild(todoText)

    if(isChecked) {
        todoText.style.textDecoration = "line-through"
        localStorage.setItem('todo',JSON.stringify(todo))
    }

export const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delbtn")
    deleteBtn.innerText = "X"
    block2.appendChild(deleteBtn)
   
    deleteBtn.addEventListener("click", (e) => {
        e.currentTarget.parentElement.remove()
        
        const deleteOneBtnm= todo.map(items=>items.e)
        todo.splice(deleteOneBtnm,1)
    localStorage.setItem('todo',JSON.stringify(todo))
    console.log(todo)
    
        })    

    export const todoDate = document.createElement("div")
    todoDate.classList.add("date")
    const dateNow = new Date()
    todoDate.innerText = `${dateNow.getDate()}.${dateNow.getMonth() + 1}.${dateNow.getFullYear()}`
    block2.appendChild(todoDate)