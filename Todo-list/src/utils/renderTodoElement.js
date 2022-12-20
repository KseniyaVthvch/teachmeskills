import { createElement } from "./createElement.js";
import { button, deleteAllButtonClickHandler } from "../component/button.js";
import { root, btnDelete } from "../container/sectionOne.js";
import { todo, setName } from "../container/store.js";


export const renderTodoElement = elem => {
   const {id, isChecked, text} = elem

   const item = createElement("div", {
      className: "item",
      id: String(id),
   })
   root.appendChild(item)

   const inputCheckbox = createElement("input", {
      className: "checkbox",
      type: "checkbox",
      checked: isChecked,
   })
   item.appendChild(inputCheckbox)

   inputCheckbox.addEventListener("change", (e) => {
      if (e.currentTarget.checked === true) {
         textElem.style.textDecoration = "line-through",
         item.style.backgroundColor = "rgb(190, 164, 164)"
      } else {
         textElem.style.textDecoration = "none"
         item.style.backgroundColor = "rgba(221, 220, 220, 0.644)"
      }

      const inputChange = todo.find(item => item.id === id)
      inputChange.isChecked = inputCheckbox.checked
      setName(todo)
   })

   const textElem = createElement("p", {
      className: "text",
      innerText: text,
   })
   item.appendChild(textElem)


   const blockDataDelBtn = createElement("div", {
      className:"blockDataDelBtn"
   })
   item.appendChild(blockDataDelBtn)

   const delBtnElem = button("delBtnElem", "delBtn", "X", () => {
      const DelOneTodo = todo.map(item => item.id).indexOf(id)
      todo.splice(DelOneTodo, 1)
      root.removeChild(item)
      setName(todo)

   } )
   blockDataDelBtn.appendChild(delBtnElem)

   const dateToDo = new Date()

   const date = createElement("div", {
      className: "date",
      innerText: `${dateToDo.getDate()}.${dateToDo.getMonth() + 1}.${dateToDo.getFullYear()}`
   })
   blockDataDelBtn.appendChild(date)

   if (isChecked) {
      textElem.style.textDecoration = "line-through",
      item.style.backgroundColor = "rgb(190, 164, 164)"
   }

   btnDelete.addEventListener("click", () => {
      const todo = []
      localStorage.setItem("todos", JSON.stringify(todo))
      deleteAllButtonClickHandler(item)
   })
}
