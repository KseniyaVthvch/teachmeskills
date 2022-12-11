import { createElement } from "../utils/createElement.js";
import { todo } from "../index.js"

//создание кнопки
export const button = (textContent, className, onClick) => {
	const btn = createElement("button", {
		textContent: textContent,
		className: className
	})

	btn.addEventListener("click", onClick)
	return btn
}

//удалить всё (handler)
export const deleteAllButtonHandler = () => {
	const items = document.querySelectorAll(".block__2")
	items.forEach((item) => {
		console.log(item)
		item.remove()
	})
	const deleteAllB = todo.map(item => item.id)
	todo.splice(deleteAllB)
	localStorage.setItem('todos', JSON.stringify(todo))
}