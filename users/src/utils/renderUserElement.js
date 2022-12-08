import {createElement} from "./createElement.js";
import {button} from "../components/button.js";

const root = document.getElementById("root")

const deleteButtonClickHandler = (currentElem) => {
    console.log(currentElem)
    root.removeChild(currentElem)
}

const editBtnClickHandler = (bth, ...args) => {
    // используем ...args, чтобы функция могла обрабатываеть любое количество элементов
    args.forEach(node => {
        // проверяем, является ли элемент массива NodeElement
        if(node.nodeType === 1) {
            const input = createElement("input", {
                value: node.textContent,
                type: "text"
            })

            if(node.lastChild.nodeName === "INPUT") {
                bth.textContent = "edit"
                const inputValue = node.lastChild.value
                node.removeChild(node.lastChild)
                console.log(inputValue)
                node.textContent = inputValue
            } else {
                bth.textContent = "save"
                node.textContent = ""
                node.appendChild(input)
            }
        }
    })
}


const renderUserElement = (elem) => {
    const {id, position, department, format, employment} = elem

    const item = createElement("div", {
        className: "item",
        id: String(id),
    })

    root.appendChild(item)

    const job = document.createElement("div")
    job.innerText = position
    item.appendChild(job)

    const jobTime = document.createElement("div")

    jobTime.classList.add(employment === "part-time" ? "partTime" : "fullTime")
    jobTime.innerText = employment
    item.appendChild(jobTime)

    const domainElem = document.createElement("div")
    domainElem.innerText = department

    const typeElem = document.createElement("div")
    typeElem.innerText = format

    const buttons = document.createElement("div")

    const editBtn = button("edit", () => editBtnClickHandler(editBtn, job, domainElem, typeElem))

    const deleteBtn = button("x",() => deleteButtonClickHandler(item))

    buttons.appendChild(editBtn)
    buttons.appendChild(deleteBtn)

    item.appendChild(buttons)
    item.appendChild(domainElem)
    item.appendChild(typeElem)
}

export default renderUserElement