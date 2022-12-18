const root = document.getElementById("root")

// Создание block1

let data = localStorage.getItem('todos')
let todo = JSON.parse(data)
// let todo = []
// if(data) {
// 	todo = JSON.parse(data)
// }    это есть на строке 59

const container = document.createElement("div")
container.classList.add("container")

const block1 = document.createElement("div")
block1.classList.add("block__1")

const delAllBtn = document.createElement("button")
delAllBtn.classList.add("del-all__btn")
delAllBtn.innerText = "Delete All"

const deleteAllButtonHandler = () => {
	const items = document.querySelectorAll(".block__2")
	items.forEach((item) => {
		console.log(item)
		item.remove()
	})
	const deleteAllB = todo.map(item => item.id)
	todo.splice(deleteAllB)
	localStorage.setItem('todos', JSON.stringify(todo))
}

delAllBtn.addEventListener("click", deleteAllButtonHandler)


const inputTodo = document.createElement("input")
inputTodo.classList.add("input__todo")
inputTodo.placeholder = "Enter todo..."

const addBtn = document.createElement("button")
addBtn.classList.add("add__btn")
addBtn.innerText = "Add"
addBtn.addEventListener('click', () => {
	const dateNow = new Date()
	const dateTodo = `${dateNow.getDate()}.${dateNow.getMonth() + 1}.${dateNow.getFullYear()}`
	const value = inputTodo.value
	let newtodo = {
		id: `${value}-${todo.length}-${Math.random()}`,
		date: dateTodo,
		isChecked: false,
		text: value
	};
	todo.push(newtodo);
	setName()
	renderToDoItem(newtodo)
	console.log(todo)

})
if (localStorage.getItem("todos") === null) {
	localStorage.setItem("todos", JSON.stringify(todo))
}

function setName() {
	localStorage.setItem("todos", JSON.stringify(todo))
}

// Подключение block1


root.appendChild(container)
container.appendChild(block1)
block1.appendChild(delAllBtn)
block1.appendChild(inputTodo)
block1.appendChild(addBtn)

// toDeleteItem.remove()
// parentElem.removeChild(toDeleteItem)

const renderToDoItem = (elem) => {
	const { id, isChecked, text, date } = elem

	const block2 = document.createElement("div")
	block2.classList.add("block__2")
	block2.setAttribute("id", String(id))
	container.appendChild(block2)

	const checkbox = document.createElement("input")
	checkbox.classList.add("input__checkbox")
	checkbox.type = "checkbox"
	checkbox.checked = isChecked
	block2.appendChild(checkbox)

	//change, input

	checkbox.addEventListener("change", (e) => {
		console.log(e.currentTarget.parentElement)
		if (e.currentTarget.checked) {
			todoText.style.textDecoration = "line-through"
		} else {
			todoText.style.textDecoration = "none"
		}
		const currentElem = todo.find(items => items.id === id)
		currentElem.isChecked = checkbox.checked
		localStorage.setItem('todos', JSON.stringify(todo))
		console.log(todo)
	})

	const todoText = document.createElement("p")
	todoText.classList.add("input__text")
	todoText.innerText = text
	block2.appendChild(todoText)

	if (isChecked) {
		todoText.style.textDecoration = "line-through"
	}

	const deleteBtn = document.createElement("button")
	deleteBtn.classList.add("delbtn")
	deleteBtn.innerText = "X"
	block2.appendChild(deleteBtn)

	deleteBtn.addEventListener("click", (e) => {
		e.currentTarget.parentElement.remove()
		const deleteOneBlock = todo.map(item => item.id)
		const deleteOneBlockIndex = deleteOneBlock.indexOf(id)
		todo.splice(deleteOneBlockIndex, 1)
		localStorage.setItem('todos', JSON.stringify(todo))
		console.log(todo)
	})

	const todoDate = document.createElement("div")
	todoDate.classList.add("date")
	const dateNow = new Date()
	todoDate.innerText = `${dateNow.getDate()}.${dateNow.getMonth() + 1}.${dateNow.getFullYear()}`
	block2.appendChild(todoDate)
}

todo.forEach((elem) => {
	renderToDoItem(elem)
})