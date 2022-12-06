const divMessage = document.createElement("div")
const container = document.querySelector("#root")

container.appendChild(divMessage)

const clickButton = document.getElementById("btn")
const input = document.querySelector("#message")

const todo = [
    {id: "1", text: "Hello"},
    {id: "2", text: "World"},
    {id: "3", text: "!!"},
]

clickButton.addEventListener("click", () => {
    const inputValue = input.value
    const obj = {
        id: `${inputValue}-${todo.length}`,
        text: inputValue,
    }
    todo.push(obj)
    localStorage.setItem("todo", JSON.stringify(todo))
    const toDoElem = document.createElement("div")
    toDoElem.textContent = obj.text
    container.appendChild(toDoElem)
})

if(localStorage.getItem("todo") === null) {
    localStorage.setItem("todo", JSON.stringify(todo))
    console.log(localStorage.getItem("todo"))
}
const data = localStorage.getItem("todo")
const storageData = JSON.parse(data)

storageData.forEach((elem) => {
    const toDoElem = document.createElement("div")
    toDoElem.textContent = elem.text

    container.appendChild(toDoElem)
})

window.addEventListener("storage", (e) => {
    console.log(e.key)
})

