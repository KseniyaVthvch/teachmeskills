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
addBtn.addEventListener('click', () => {
	let newtodo = {
		id: todo.length - 1,
		isChecked: true,
		text: 'Todo text'
	};
	todo.push(newtodo);
})


// Подключение block1


root.appendChild(container)
container.appendChild(block1)
block1.appendChild(delAllBtn)
block1.appendChild(inputTodo)
block1.appendChild(addBtn)



const todo = [
	{
		id: 0,
		isChecked: true,
		text: 'Todo text',
	},
	{
		id: 1,
		isChecked: false,
		text: 'Todo text',
	}
]

todo.forEach((elem) => {
	const { id, isChecked, text } = elem

	const block2 = document.createElement("div")
	block2.classList.add("block__2")
	block2.setAttribute("id", String(id))
	container.appendChild(block2)

	const checkbox = document.createElement("input")
	checkbox.classList.add("input__checkbox")
	checkbox.type = "checkbox"
	checkbox.checked = (isChecked === true ? true : false)
	block2.appendChild(checkbox)

	const todoText = document.createElement("p")
	todoText.classList.add("input__text")
	todoText.innerText = text
	block2.appendChild(todoText)

	const deleteBtn = document.createElement("button")
	deleteBtn.classList.add("delbtn")
	deleteBtn.innerText = "X"
	block2.appendChild(deleteBtn)

	const todoDate = document.createElement("div")
	todoDate.classList.add("date")
	const dateNow = new Date()
	todoDate.innerText = `${dateNow.getDate()}.${dateNow.getMonth() + 1}.${dateNow.getFullYear()}`
	block2.appendChild(todoDate)
})












