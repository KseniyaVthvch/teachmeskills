const root = document.getElementById("root")

//

const todoList = document.createElement("div")
todoList.classList.add("todo-list")
root.appendChild(todoList)

//

const controlsTop = document.createElement("div")
controlsTop.classList.add("todo-list__controls-top")
todoList.appendChild(controlsTop)

const controlsBottom = document.createElement("div")
controlsBottom.classList.add("todo-list__controls-bottom")
todoList.appendChild(controlsBottom)

const todoListContent = document.createElement("div")
todoListContent.classList.add("todo-list__content")
todoList.appendChild(todoListContent)

//

const deleteAll = document.createElement("input")
deleteAll.type = "button"
deleteAll.value = "Delete All"

const deleteLast = document.createElement("input")
deleteLast.type = "button"
deleteLast.value = "Delete Last"

const enterTodo = document.createElement("input")
enterTodo.type = "text"
enterTodo.placeholder = "Enter todo..."

const add = document.createElement("input")
add.type = "button"
add.value = "Add"

const all = document.createElement("div")
all.classList.add("todo-list__controls-item")
contentChild = todoListContent.children.length
all.innerText = "All: " + contentChild

const completed = document.createElement("div")
completed.classList.add("todo-list__controls-item")
completed.innerText = "Completed: 0"

const showAll = document.createElement("input")
showAll.type = "button"
showAll.value = "Show All"

const showCompleted = document.createElement("input")
showCompleted.type = "button"
showCompleted.value = "Show Completed"

const search = document.createElement("input")
search.type = "text"
search.placeholder = "Search.."

controlsTop.appendChild(deleteAll)
controlsTop.appendChild(deleteLast)
controlsTop.appendChild(enterTodo)
controlsTop.appendChild(add)

controlsBottom.appendChild(all)
controlsBottom.appendChild(completed)
controlsBottom.appendChild(showAll)
controlsBottom.appendChild(showCompleted)
controlsBottom.appendChild(search)

//

let todo = []

const checkboxCheckedList = () => document.querySelectorAll("input[type=checkbox]:checked")

const labelList = () => document.querySelectorAll(".todo-list__content > label")

const checkboxList = () => document.querySelectorAll("input[type=checkbox]")

const allCompleted = () => {
	all.innerText = "All: " + labelList().length
	completed.innerText = "Completed: " + checkboxCheckedList().length
}

allCompleted()

deleteAll.addEventListener("click", () => {
	if (labelList().length === 0) {
		alert("Нечего удалять")
	} else {
		for (let i = 0; i < labelList().length; i++) {
			labelList()[i].remove()
			todo.splice(i, 1)
			i--
		}
		localStorage.setItem("todo", JSON.stringify(todo))

		allCompleted()
	}
})

deleteLast.addEventListener("click", () => {
	if (todoListContent.children.length === 0) {
		alert("Нечего удалять")
	} else {
		todoListContent.lastElementChild.remove()
		todo.pop()
		localStorage.setItem("todo", JSON.stringify(todo))

		allCompleted()
	}
})

const render = elem => {
		const { id, date, text, isChecked } = elem

		const label = document.createElement("label")
		label.classList.add("todo-list__content-item")
		label.setAttribute("for", id)
		todoListContent.appendChild(label)

		const checkboxInp = document.createElement("input")
		checkboxInp.type = "checkbox"
		checkboxInp.name = "select"
		checkboxInp.id = id
		checkboxInp.checked = isChecked
		label.appendChild(checkboxInp)

		label.style["background-color"] = checkboxInp.checked ? "#0d1117" : "#21262d"

		const dateElem = document.createElement("p")
		dateElem.classList.add("todo-list__date")
		dateElem.innerText = `${date}`
		label.appendChild(dateElem)

		const desc = document.createElement("p")
		desc.classList.add("todo-list__desc")
		desc.innerText = text
		label.appendChild(desc)

		const deleteElem = document.createElement("div")
		deleteElem.classList.add("todo-list__content-item_delete")
		label.appendChild(deleteElem)

		allCompleted()

		enterTodo.value = ""

		deleteElem.addEventListener("click", (e) => {
			label.remove()
			const a = todo.filter(item => item.id !== e.target.parentElement.firstElementChild.id)
			todo = a
			localStorage.setItem("todo", JSON.stringify(todo))
			allCompleted()
		})

		checkboxInp.addEventListener("change", (e) => {
			label.style["background-color"] = checkboxInp.checked ? "#0d1117" : "#21262d"
			todo.find(item => item.id === e.target.id).isChecked = checkboxInp.checked
			localStorage.setItem("todo", JSON.stringify(todo))

			allCompleted()
		})
}

if(localStorage.getItem("todo") === null) {
    localStorage.setItem("todo", JSON.stringify(todo))
}

todo = JSON.parse(localStorage.getItem("todo"))
todo.forEach(elem => render(elem))

add.addEventListener("click", () => {
	if (enterTodo.value !== "") {
		let selection = "select" + labelList().length + Math.random()

		const currentDate = new Date().toLocaleString()

		const obj = {
			id: selection,
			date: currentDate,
			text: enterTodo.value,
			isChecked: false,
		}

		todo.push(obj)
		console.log(todo)
		localStorage.setItem("todo", JSON.stringify(todo))
		render(obj)
	} else {
		alert("Пустое поле")
	}
})


showAll.addEventListener("click", () => {
	for (let item of checkboxList()) {
		item.parentElement.style.display = "block"
	}
})

showCompleted.addEventListener("click", () => {
	for (let item of checkboxList()) {
		if (!item.checked) item.parentElement.style.display = "none"
	}
})

search.addEventListener("input", (e) => {
	for (let p of document.querySelectorAll(".todo-list__desc")) {
		p.parentElement.style.display = !p.textContent.includes(e.target.value) ? "none" : "block"
	}
})




