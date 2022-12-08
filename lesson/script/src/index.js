const todo = [
    {id: "1", text: "Hello"},
    {id: "2", text: "World"},
    {id: "3", text: "!!"},
]

const addItemHandler = (input, container) => {
    const inputValue = input.value
    const obj = {
        id: `${inputValue}-${todo.length}`,
        text: inputValue,
    }
    todo.push(obj)
    localStorage.setItem("todo", JSON.stringify(todo))
    const toDoElem = document.createElement("div")
    toDoElem.classList.add("todo")
    toDoElem.textContent = obj.text
    container.appendChild(toDoElem)

    console.log(todo)
}

export {addItemHandler}

export default todo // -> import lala from ".////"

//export const todo || export {todo} -> import {todo} from ".///"

