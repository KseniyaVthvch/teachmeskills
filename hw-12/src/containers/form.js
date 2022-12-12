import { createElem } from "../utils/createElement.js"
import { createBtn } from "../controls/button.js"
import { createInp } from "../controls/input.js"
import { setItem } from "../utils/setLocalItem.js"
import { labelList, checkboxList } from "../controls/elementLists.js"
import { allCompleted } from "../controls/allComletedCounter.js"
import { render } from "../utils/renderTodoElement.js"

export let todo = []

const root = document.getElementById("root")

//

const todoList = createElem("div", {
    className: "todo-list",
}, root)

//

const controlsTop = createElem("div", {
    className: "todo-list__controls-top",
}, todoList)

const controlsBottom = createElem("div", {
    className: "todo-list__controls-bottom",
}, todoList)

export const todoListContent = createElem("div", {
    className: "todo-list__content",
}, todoList)

//

const deleteAll = createBtn("Delete All", controlsTop, "click", () => {
    if (labelList().length === 0) {
		alert("Нечего удалять")
	} else {
		for (let i = 0; i < labelList().length; i++) {
			labelList()[i].remove()
			todo.splice(i, 1)
			i--
		}
        setItem()
        allCompleted()
    }
})

const deleteLast = createBtn("Delete Last", controlsTop, "click", () => {
	if (todoListContent.children.length === 0) {
		alert("Нечего удалять")
	} else {
		todoListContent.lastElementChild.remove()
		todo.pop()
        setItem()
        allCompleted()
    }
})

export const enterTodo = createInp("Enter todo...", controlsTop)

const add = createBtn("Add", controlsTop, "click", () => {
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

		setItem()
		render(obj)
	} else {
		alert("Пустое поле")
	}
})

export const all = createElem("div", {
    className: "todo-list__controls-item",
}, controlsBottom)

export const completed = createElem("div", {
    className: "todo-list__controls-item",
}, controlsBottom)

const showAll = createBtn("Show All", controlsBottom, "click", () => {
	for (let item of checkboxList()) {
		item.parentElement.style.display = "block"
	}
})

const showCompleted = createBtn("Show Completed", controlsBottom, "click", () => {
	for (let item of checkboxList()) {
		if (!item.checked) item.parentElement.style.display = "none"
	}
})

const search = createInp("Search..", controlsBottom, "input", (e) => {
	for (let p of document.querySelectorAll(".todo-list__desc")) {
		p.parentElement.style.display = !p.textContent.includes(e.target.value) ? "none" : "block"
	}
})

allCompleted()

if(localStorage.getItem("todo") === null) {
    setItem()
}

todo = JSON.parse(localStorage.getItem("todo"))
todo.forEach(elem => render(elem))