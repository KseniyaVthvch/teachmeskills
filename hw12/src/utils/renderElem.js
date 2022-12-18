import { createElement } from "./createElement.js"
import { button } from "../component/button.js";
import { container } from "../container/todo.js"
import { todo } from "../index.js";
export const renderToDoItem = (elem) => {
	const { id, isChecked, text, date } = elem

	const block2 = createElement("div", {
		className: "block__2",
		id: String(id)
	})
	container.appendChild(block2)

	const checkbox = createElement("input", {
		className: "input__checkbox",
		type: "checkbox",
		checked: isChecked,
	})
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

	let delBtnClickHandler = (e) => {
		e.currentTarget.parentElement.remove()
		const deleteOneBlock = todo.map(item => item.id)
		todo.splice(deleteOneBlock, 1)
		localStorage.setItem('todos', JSON.stringify(todo))
		console.log(todo)
	}

	const deleteBtn = button("X", "delbtn", delBtnClickHandler)
	block2.appendChild(deleteBtn)


	const todoDate = document.createElement("div")
	todoDate.classList.add("date")
	const dateNow = new Date()
	todoDate.innerText = `${dateNow.getDate()}.${dateNow.getMonth() + 1}.${dateNow.getFullYear()}`
	block2.appendChild(todoDate)
}
