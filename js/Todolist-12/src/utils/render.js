import{todoText,deleteBtn,todoDate} from "./src/newelements/createElement.js"

export const renderToDoItem = (elem) => {
    const { id, isChecked, text } = elem

    const block2 = document.createElement("div")
    block2.classList.add("block__2")
    block2.setAttribute("id", String(id))
    container.appendChild(block2)

    const checkbox = document.createElement("input")
    checkbox.classList.add("input__checkbox")
    checkbox.type = "checkbox"
    checkbox.checked = isChecked
    block2.appendChild(checkbox)
    
    

    checkbox.addEventListener("change", (e) => {
        
        console.log(e.currentTarget.parentElement)
        if(e.currentTarget.checked) {
            todoText.style.textDecoration = "line-through"
            localStorage.setItem('todo',JSON.stringify(todo))
        } else {
            todoText.style.textDecoration = "none"
        } 
        const currentElem= todo.find(items=>items.id===id)
    currentElem.isChecked=checkbox.checked
    localStorage.setItem('todo',JSON.stringify(todo))
    console.log(todo)
    })
    
   
}