
export const container = document.createElement("div")
container.classList.add("container")
root.appendChild(container)

export const block1 = document.createElement("div")
block1.classList.add("block__1")
container.appendChild(block1)

export const inputTodo = document.createElement("input")
inputTodo.classList.add("input__todo")
inputTodo.placeholder = "Enter todo..."
block1.appendChild(inputTodo)

