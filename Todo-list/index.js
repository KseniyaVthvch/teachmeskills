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
   newData.id = todo.length
   newData.text = value
   renderTodoElement(newData)
})

const todo = [
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

   inputCheckbox.addEventListener("click", (e) => {
      if (e.currentTarget.checked === true) {
         textElem.style.textDecoration = "line-through",
         item.style.backgroundColor = "rgb(190, 164, 164)"
      } else {
         textElem.style.textDecoration = "none"
         item.style.backgroundColor = "rgba(221, 220, 220, 0.644)"
      }
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
      root.removeChild(item)
   })

   const date = document.createElement("div")
   date.setAttribute("class", "date")
   const dateToDo = new Date()
   date.innerText = `
   ${dateToDo.getDate()}.${dateToDo.getMonth() + 1}.${dateToDo.getFullYear()}
   `
   blockDataDelBtn.appendChild(date)

   btnDelete.addEventListener("click", () => {
      deleteAllButtonClickHandler(item)
   })
}

todo.forEach(e => {
   renderTodoElement(e)
})

