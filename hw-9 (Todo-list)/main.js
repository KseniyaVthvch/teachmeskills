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

const checkboxCheckedList = () => document.querySelectorAll("input[type=checkbox]:checked")
const labelList = () => document.querySelectorAll(".todo-list__content > label")
const checkboxList = () => document.querySelectorAll("input[type=checkbox]")
let counter = 0

deleteAll.addEventListener("click", () => {
	if (labelList().length === 0) {
		alert("Нечего удалять")
	} else {
		counter = 0
		for (let item of labelList()) item.remove()

		all.innerText = "All: " + labelList().length
		completed.innerText = "Completed: " + checkboxCheckedList().length
	}
})

deleteLast.addEventListener("click", () => {
	if (todoListContent.children.length === 0) {
		alert("Нечего удалять")
	} else {
		todoListContent.lastElementChild.remove()
		
		all.innerText = "All: " + labelList().length
		completed.innerText = "Completed: " + checkboxCheckedList().length
	}
})

add.addEventListener("click", () => {
	if (enterTodo.value !== "") {
		counter++
		let selection = "select" + counter

		const label = document.createElement("label")
		label.classList.add("todo-list__content-item")
		label.setAttribute("for", selection)
		todoListContent.appendChild(label)

		const checkboxInp = document.createElement("input")
		checkboxInp.type = "checkbox"
		checkboxInp.name = "select"
		checkboxInp.id = selection
		label.appendChild(checkboxInp)

		const desc = document.createElement("p")
		desc.classList.add("todo-list__desc")
		desc.innerText = enterTodo.value
		label.appendChild(desc)

		const currentDate = new Date().toLocaleString()
		const date = document.createElement("p")
		date.classList.add("todo-list__date")
		date.innerText = `${currentDate}`
		label.appendChild(date)
		
		const deleteElem = document.createElement("div")
		deleteElem.classList.add("todo-list__content-item_delete")
		label.appendChild(deleteElem)
			
		all.innerText = "All: " + labelList().length

		enterTodo.value = ""

		deleteElem.addEventListener("click", () => {
			label.remove()
			
			all.innerText = "All: " + labelList().length
			completed.innerText = "Completed: " + checkboxCheckedList().length
		})

		checkboxInp.addEventListener("change", () => {
			label.style["background-color"] = checkboxInp.checked ? "#0d1117" : "#21262d"

			completed.innerText = "Completed: " + checkboxCheckedList().length
		})
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




