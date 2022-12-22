const root = document.getElementById("root")

const header = document.createElement("div")
header.classList.add("header")
root.appendChild(header)

const setName = (data => {
   localStorage.setItem('todos', JSON.stringify(data))
})

const deleteAllBtn = document.createElement("button")
deleteAllBtn.classList.add("btn_green")
deleteAllBtn.innerText = "Delete All"
header.appendChild(deleteAllBtn)

const deleteAllBtnClickHandler = () => {
   const items = document.querySelectorAll(".field")
   // todo = []
   // setName(todo)
   items.forEach((item) => {
      item.remove()
   })
}
// сверху вариант, который работает. Снизу, который работает интересно(выборочно)

// const deleteAllBtnClickHandler = () => {
//    todo.forEach((elem) => {
//       const item = document.getElementById(elem.id)
//       root.removeChild(item)
//    })
// }
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
   setName(todo)
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
   // const deleteOneFieldIndex = todo.map(item => item.id).indexOf(id)
   // todo.splice(deleteOneFieldIndex, 1)
   // setName(todo)
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
      const currentElement = todo.find(item => item.id === id).isChecked
      currentElement.isChecked = checkbox.checked
      setName(todo)
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

if (localStorage.getItem("todos") === null) {
   setName(todo)
}
// todo = JSON.parse(localStorage.getItem('todos'))

todo.forEach((elem) => {
   renderTodoElement(elem)
})