const root = document.getElementById("root")

// Создание block1

const container = document.createElement("div")
container.classList.add("container")

const block1 = document.createElement("div")
block1.classList.add("block__1")

const delAllBtn = document.createElement("button")
delAllBtn.classList.add("del-all__btn")
delAllBtn.innerText = "Delete All"

const inputTodo = document.createElement("input")
inputTodo.classList.add("input__todo")
inputTodo.placeholder = "Enter todo..."

const addBtn = document.createElement("button")
addBtn.classList.add("add__btn")
addBtn.innerText = "Add"

// Создание block2
const block2 = document.createElement("div")
block2.classList.add("block__2")

const inputCheckbox = document.createElement("input")
inputCheckbox.classList.add("input__checkbox")
inputCheckbox.type = "checkbox"

const inputText = document.createElement("input")
inputText.classList.add("input__text")
inputText.type = "text"

const delLineBtn = document.createElement("button")
delLineBtn.classList.add("del-line__btn")
delLineBtn.innerText = "X"

const dateText = document.createElement("p")
dateText.classList.add("date")
dateText.innerText = "Date"
// Создание block3
const block3 = document.createElement("div")
block3.classList.add("block__2")

const inputCheckbox3 = document.createElement("input")
inputCheckbox3.classList.add("input__checkbox")
inputCheckbox3.type = "checkbox"

const inputText3 = document.createElement("input")
inputText3.classList.add("input__text")
inputText3.type = "text"

const delLineBtn3 = document.createElement("button")
delLineBtn3.classList.add("del-line__btn")
delLineBtn3.innerText = "X"

const dateText3 = document.createElement("p")
dateText3.classList.add("date")
dateText3.innerText = "Date"

// Подключение block1

root.appendChild(container)
container.appendChild(block1)
block1.appendChild(delAllBtn)
block1.appendChild(inputTodo)
block1.appendChild(addBtn)

// Подключение block2

container.appendChild(block2)
block2.appendChild(inputCheckbox)
block2.appendChild(inputText)
block2.appendChild(delLineBtn)
block2.appendChild(dateText)

// Подключение block3

container.appendChild(block3)
block3.appendChild(inputCheckbox3)
block3.appendChild(inputText3)
block3.appendChild(delLineBtn3)
block3.appendChild(dateText3)











