import { todo } from "./store.js"
import { createElement } from "./utils/createElement.js"
import { renderTodoElement } from "./utils/renderTodoElement.js"
import { setName } from "./utils/setName.js"
import { button } from "./components/button.js"

const root = document.getElementById("root")

const header = createElement("div", {
   className: "header"
})

const deleteAllBtnClickHandler = () => {
   const items = document.querySelectorAll(".field")
   todo = []
   console.log(todo)
   setName(todo)
   items.forEach((item) => {
      item.remove()
   })
}

const deleteAllBtn = button("Delete All", "btn_green", deleteAllBtnClickHandler)

root.appendChild(header)
header.appendChild(deleteAllBtn)



const input = createElement("input", {
   className: "enter-todo",
   type: "text",
   placeholder: "Enter todo...",
})
header.appendChild(input)

const addBtn = button("Add", "btn_green", () => renderTodoElement())

addBtn.addEventListener("click", () => {
   const value = input.value

   let newTodo = {
      id: `${value}-${todo.length}-${Math.random()}`,
      isChecked: false,
      text: value
   };
   todo.push(newTodo);
   setName(todo)
   renderTodoElement(newTodo)
})
header.appendChild(addBtn)

if (localStorage.getItem('todos') === null) {
   console.log(todo)
   setName(todo)
}

todo.forEach((elem) => {
   renderTodoElement(elem)
})
