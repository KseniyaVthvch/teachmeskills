const root = document.getElementById("root")

const header = document.createElement("div")
header.classList.add("header")
root.appendChild(header)

const deleteAllBtn = document.createElement("button")
deleteAllBtn.classList.add("btn_green")
deleteAllBtn.innerText = "Delete All"
header.appendChild(deleteAllBtn)

const input = document.createElement("input")
input.classList.add("enter-todo")
input.type = "text"
input.placeholder = "Enter todo..."
header.appendChild(input)

const addBtn = document.createElement("button")
addBtn.classList.add("btn_green")
addBtn.innerText = "Add"
header.appendChild(addBtn)

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
}



todo.forEach((elem) => {
   const { id, isChecked, text } = elem

   const field = document.createElement("div")
   field.classList.add("field")
   field.setAttribute("id", String(id))
   root.appendChild(field)

   const checkbox = document.createElement("input")
   checkbox.classList.add("echeckbox")
   checkbox.type = "checkbox"
   checkbox.checked = isChecked
   field.appendChild(checkbox)

   const todoText = document.createElement("p")
   todoText.classList.add("todo-text")
   todoText.innerText = text
   field.appendChild(todoText)

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
})

deleteAllBtn.addEventListener("click", () => {
   deleteBtnClickHandler(todo)
})
//не понимаю, почему не удаляет весь массив

const newTodo = {}
input.addEventListener("input", (e) => {
   newTodo[e.target.id] = e.target.value
})

addBtn.addEventListener("click", () => {
   newTodo.id = todo.length
   renderTodoElement(newTodo)
})