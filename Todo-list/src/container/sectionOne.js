import { createElement } from "../utils/createElement.js";
import { button } from "../component/button.js";
import { todo, setName } from "./store.js";
import { renderTodoElement } from "../utils/renderTodoElement.js";



const root = document.getElementById("root")

const sectionOne = createElement("div", {
   className: "sectionOne",
})
root.appendChild(sectionOne)

const btnDelete = createElement("button", {
   className:"button",
   className:"delete",
   innerText:"Delete All", 
})
sectionOne.appendChild(btnDelete)

const inputTodo = createElement("input", {
   className: "inputTodo",
   type: "text",
   placeholder: "Enter todo...",
})
sectionOne.appendChild(inputTodo)


const btnAdd = button("button", "add", "Add", () => {
   const newData = {}
   const value = inputTodo.value
   newData.id = `${value}-${todo.length}`
   newData.isChecked = false
   newData.text = value
   todo.push(newData)
   setName(todo)
   renderTodoElement(newData)
})
sectionOne.appendChild(btnAdd)

export { root, btnDelete, btnAdd, inputTodo, sectionOne }