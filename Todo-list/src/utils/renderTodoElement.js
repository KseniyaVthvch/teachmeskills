import { button } from "../components/button.js"
import { createElement } from "./createElement.js"
import { setName } from "./setName.js"
import { todo } from "../store.js"
import "../app.js"

const root = document.getElementById("root")

export const renderTodoElement = (elem) => {
   const { id, isChecked, text } = elem

   const field = createElement("div", {
      className: "field",
      "id": String(id)
   })

   const checkbox = createElement("input", {
      className: "checkbox",
      type: "checkbox",
      checked: isChecked,
   })

   checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
         todoText.style.textDecoration = "line-through"
      } else { todoText.style.textDecoration = "none" }
      const currentElement = todo.find(item => item.id === id)
      currentElement.isChecked = checkbox.checked
      setName(todo)
   })

   const todoText = createElement("p", {
      className: "todo-text",
   })
   todoText.innerText = text

   if (isChecked) {
      todoText.style.textDecoration = "line-through"
   }
   const buttons = createElement("div", {
      className: "buttons"
   })

   const deleteBtn = button("X", "x", () => deleteBtnClickHandler(field, id))

   const deleteBtnClickHandler = (elem, id) => {
      root.removeChild(elem)
      const deleteOneFieldIndex = todo.map(item => item.id).index.Of(id)
      todo.splice(deleteOneFieldIndex, 1)
      setName(todo)
   }

   const todoDate = createElement("div", {
      className: "date"
   })

   const dateNow = new Date()
   todoDate.innerText = `${dateNow.getDate()} ${dateNow.getMonth() + 1} ${dateNow.getFullYear()}`

   root.appendChild(field)
   field.appendChild(checkbox)
   field.appendChild(todoText)
   field.appendChild(buttons)
   buttons.appendChild(deleteBtn)
   buttons.appendChild(todoDate)
}