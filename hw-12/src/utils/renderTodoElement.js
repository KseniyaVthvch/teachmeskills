import { enterTodo, todoListContent, todo } from "../containers/form.js"
import { allCompleted } from "../controls/allComletedCounter.js"
import { createElem } from "./createElement.js"
import { setItem } from "./setLocalItem.js"


export const render = elem => {
    const { id, date, text, isChecked } = elem

    const label = document.createElement("label")
    label.classList.add("todo-list__content-item")
    label.setAttribute("for", id)
    todoListContent.appendChild(label)

    const checkboxInp = createElem("input", {
        type: "checkbox",
        name: "select",
        id: id,
        checked: isChecked
    }, label)

    checkboxInp.addEventListener("change", (e) => {
        label.style["background-color"] = checkboxInp.checked ? "#0d1117" : "#21262d"
        todo.find(item => item.id === e.target.id).isChecked = checkboxInp.checked
        setItem()
        allCompleted()
    })

    label.style["background-color"] = checkboxInp.checked ? "#0d1117" : "#21262d"

    const dateElem = createElem("p", {
        className: "todo-list__date",
        innerText: date
    }, label)

    
    const desc = createElem("p", {
        className: "todo-list__desc",
        innerText: text
    }, label)

    const deleteElem = createElem("div", {
        className: "todo-list__content-item_delete",
    }, label)

    deleteElem.addEventListener("click", (e) => {
        label.remove()
        for (let i = 0; i < todo.length; i++) {
            if (todo[i].id === e.target.parentElement.firstElementChild.id) {
                todo.splice(i, 1)
                i--
            }
        }
        setItem()
        allCompleted()
    })

    allCompleted()

    enterTodo.value = ""
}