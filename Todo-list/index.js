const root = document.getElementById("root")

const sectionOne = document.createElement("div")
sectionOne.className = "sectionOne"
root.appendChild(sectionOne)

const btnDelete = document.createElement("button")
btnDelete.classList.add("button", "delete")
btnDelete.innerText = "Delete All"
sectionOne.appendChild(btnDelete)

const inputTodo = document.createElement("input")
inputTodo.setAttribute("class", "inputTodo")
inputTodo.setAttribute("type", "text")
inputTodo.setAttribute("placeholder", "Enter todo...")
sectionOne.appendChild(inputTodo)

const btnAdd = document.createElement("button")
btnAdd.classList.add("button", "add")
btnAdd.innerText = "Add"
sectionOne.appendChild(btnAdd)

btnAdd.addEventListener("click", () => {
   const newData = {}
   const value = inputTodo.value
   newData.id = `${value}-${todo.length}`
   newData.isChecked = false
   newData.text = value
   todo.push(newData)
   localStorage.setItem("todos", JSON.stringify(todo))
   renderTodoElement(newData)
})

let todo = [
   {
      id: 0,
      isChecked: false, 
      text: "Todo text"
   },
   {
      id: 1,
      isChecked: false, 
      text: "Todo text"
   },
]

if (localStorage.getItem("todos") === null) {
   localStorage.setItem("todos", JSON.stringify(todo))
}

const getItem = localStorage.getItem("todos")
todo = JSON.parse(getItem)

const deleteAllButtonClickHandler = currentElem => {
   root.removeChild(currentElem)
}

const renderTodoElement = elem => {
   const {id, isChecked, text} = elem

   const item = document.createElement("div")
   item.setAttribute("class", "item")
   item.setAttribute("id", String(id))
   root.appendChild(item)

   const inputCheckbox = document.createElement("input")
   inputCheckbox.setAttribute("class", "checkbox")
   inputCheckbox.setAttribute("type", "checkbox")
   inputCheckbox.checked = isChecked
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
      localStorage.setItem("todos", JSON.stringify(todo))
   })

   const textElem = document.createElement("p")
   textElem.setAttribute("class", "text")
   textElem.innerText = text
   item.appendChild(textElem)

   const blockDataDelBtn = document.createElement("div")
   blockDataDelBtn.setAttribute("class", "blockDataDelBtn")
   item.appendChild(blockDataDelBtn)

   const delBtnElem = document.createElement("button")
   delBtnElem.classList.add("delBtnElem", "delBtn")
   delBtnElem.innerText = "X"
   blockDataDelBtn.appendChild(delBtnElem)

   delBtnElem.addEventListener("click", () => {
      const DelOneTodo = todo.filter(item => item.id).indexOf(id)
      todo.splice(DelOneTodo, 1)
      root.removeChild(item)
      localStorage.setItem("todos", JSON.stringify(todo))
   })

   const date = document.createElement("div")
   date.setAttribute("class", "date")
   const dateToDo = new Date()
   date.innerText = `
   ${dateToDo.getDate()}.${dateToDo.getMonth() + 1}.${dateToDo.getFullYear()}
   `
   blockDataDelBtn.appendChild(date)

   if (inputCheckbox.checked === true) {
      textElem.style.textDecoration = "line-through",
      item.style.backgroundColor = "rgb(190, 164, 164)"
   } else {
      textElem.style.textDecoration = "none"
      item.style.backgroundColor = "rgba(221, 220, 220, 0.644)"
   }

   btnDelete.addEventListener("click", () => {
      todo = []
      localStorage.setItem("todos", JSON.stringify(todo))
      deleteAllButtonClickHandler(item)
   })
}

todo.forEach(e => {
   renderTodoElement(e)
})

