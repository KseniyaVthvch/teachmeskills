import { todo } from "./store.js"
import { createElement } from "./utils/createElement.js"
import { renderTodoElement } from "./utils/renderTodoElement.js"
import { button } from "./components/button.js"

const root = document.getElementById("root")

const header = createElement("div", {
   className: "header"
})

const deleteAllBtn = button("Delete All", "btn_green", () => deleteAllBtnClickHandler())

root.appendChild(header)
header.appendChild(deleteAllBtn)

const deleteAllBtnClickHandler = () => {
   const items = document.querySelectorAll(".field")
   items.forEach((item) => {
      item.remove()
   })
}

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
   renderTodoElement(newTodo)
})
header.appendChild(addBtn)



todo.forEach((elem) => {
   renderTodoElement(elem)
})
