const root = document.getElementById("root")

const header = document.createElement("div")
header.classList.add("header")
root.appendChild(header)

const deleteAllBtn = document.createElement("button")
deleteAllBtn.classList.add("btn_green")
deleteAllBtn.innerText = "Delete All"
header.appendChild(deleteAllBtn)

const deleteAllBtnClickHandler = () => {
   const items = document.querySelectorAll(".field")
   items.forEach((item) => {
      item.remove()
   })
}

deleteAllBtn.addEventListener("click", deleteAllBtnClickHandler)

const input = document.createElement("input")
input.classList.add("enter-todo")
input.type = "text"
input.placeholder = "Enter todo..."
header.appendChild(input)

const addBtn = document.createElement("button")
addBtn.classList.add("btn_green")
addBtn.innerText = "Add"
header.appendChild(addBtn)

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

const todo = [
   {
      id: 0,
      isChecked: true,
      text: 'Todo text',
   },
   {
      id: 1,
      isChecked: true,
      text: 'Todo text',
   }
]


const deleteBtnClickHandler = (elem) => {
   root.removeChild(elem)
}


const renderTodoElement = (elem) => {
   const { id, isChecked, text } = elem

   const field = document.createElement("div")
   field.classList.add("field")
   field.setAttribute("id", String(id))
   root.appendChild(field)

   const checkbox = document.createElement("input")

   checkbox.classList.add("checkbox")
   checkbox.type = "checkbox"
   checkbox.checked = isChecked
   field.appendChild(checkbox)

   checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
         todoText.style.textDecoration = "line-through"
      } else { todoText.style.textDecoration = "none" }
   })

   const todoText = document.createElement("p")
   todoText.classList.add("todo-text")
   todoText.innerText = text
   field.appendChild(todoText)

   if (isChecked) {
      todoText.style.textDecoration = "line-through"
   }

   const buttons = document.createElement("div")
   buttons.classList.add("buttons")
   field.appendChild(buttons)

   const deleteBtn = document.createElement("button")
   deleteBtn.classList.add("x")
   deleteBtn.innerText = "X"
   buttons.appendChild(deleteBtn)

   deleteBtn.addEventListener("click", () => {
      deleteBtnClickHandler(field)
   })

   const todoDate = document.createElement("div")
   todoDate.classList.add("date")
   const dateNow = new Date()
   todoDate.innerText = `${dateNow.getDate()} ${dateNow.getMonth() + 1} ${dateNow.getFullYear()}`
   buttons.appendChild(todoDate)
}

todo.forEach((elem) => {
   renderTodoElement(elem)
})