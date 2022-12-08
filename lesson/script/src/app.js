import users, {addItemHandler} from "./index.js";
import "./button.js"

console.log("hello- !!")
const container = document.querySelector("#root")

if(localStorage.getItem("todo") === null) {
    localStorage.setItem("todo", JSON.stringify(users))
    console.log(localStorage.getItem("todo"))
}
const data = localStorage.getItem("todo")
const storageData = JSON.parse(data)

const todo = []

storageData.forEach((elem) => {
    const toDoElem = document.createElement("div")
    toDoElem.className = "todo"
    toDoElem.textContent = elem.text

    container.appendChild(toDoElem)
})

window.addEventListener("storage", (e) => {
    console.log(e.key)
})



