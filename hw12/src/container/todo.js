import { createElement } from "../utils/createElement.js"
import { button, deleteAllButtonHandler } from "../component/button.js";

const root = document.getElementById("root")
const container = createElement("div", {
	className: "container",
})
const block1 = createElement("div", {
	className: "block__1",
})

const delAllBtn = button("Delete All", "del-all__btn", () => deleteAllButtonHandler())

const inputTodo = createElement("input", {
	className: "input__todo",
	textContent: "Enter todo..."
})
const addBtn = createElement("button", {
	className: "add__btn",
	textContent: "Add"
})

root.appendChild(container)
container.appendChild(block1)
block1.appendChild(delAllBtn)
block1.appendChild(inputTodo)
block1.appendChild(addBtn)

export { container, block1, delAllBtn, inputTodo, addBtn }