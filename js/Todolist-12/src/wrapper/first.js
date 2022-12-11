import{container,block1,delAllBtn} from "./src/newelements/createElement.js"
import{addBtn} from "./src/buttons/Add.js"
import{renderToDoItem} from "./src/utils/render.js"

const root = document.getElementById("root")

export const inputTodo = document.createElement("input")
inputTodo.classList.add("input__todo")
inputTodo.placeholder = "Enter todo..."


root.appendChild(container)
container.appendChild(block1)
block1.appendChild(delAllBtn)
block1.appendChild(inputTodo)
block1.appendChild(addBtn)

let todo = [
    {
        id: 0,
        isChecked: true,
        text: 'Todo text',
    },
    {
        id: 1,
        isChecked: false,
        text: 'Todo text',
    }
]

if (localStorage.getItem('todo')===null){
    localStorage.setItem('todo',JSON.stringify(todo))
    console.log(localStorage.getItem('todo'))
}

  todo=JSON.parse(localStorage.getItem('todo'))
todo.forEach((elem) => {
    renderToDoItem(elem)
})
