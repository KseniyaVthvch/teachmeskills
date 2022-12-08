import {users} from "../store.js";
import renderUserElement from "../utils/renderUserElement.js"
import {createElement} from "../utils/createElement.js";
import {input} from "../components/input.js"

const formData = ["position", "department", "employment", "format"]

const newData = {}

const rootForm = document.getElementById("form")

const formTitle = document.createElement("h3")
formTitle.textContent = "Create new user"
formTitle.setAttribute("class", "title")
const formWrapper = document.createElement("div")
formWrapper.setAttribute("class", "form")

formData.forEach(elem => {
    const inputWrapper = document.createElement("div")
    inputWrapper.setAttribute("class", "inputWrapper")

    const label = createElement("label", {
        innerText: elem,
        for: elem
    })

    const inp = input("text", elem, (e) => {
        console.log(e.target.value)
        newData[e.target.id] = e.target.value
    })

    inputWrapper.appendChild(label)
    inputWrapper.appendChild(inp)

    formWrapper.appendChild(inputWrapper)
})

const inputWrapper = document.createElement("div")
inputWrapper.classList.add("inputWrapper")
const btn = document.createElement("button")

btn.id = "save"
btn.classList.add("button")
btn.textContent = "Save"

btn.addEventListener("click", () => {
    newData.id = users.length
    renderUserElement(newData)
})

rootForm.appendChild(formTitle)
rootForm.appendChild(formWrapper)
inputWrapper.appendChild(btn)
rootForm.appendChild(inputWrapper)