import {container} from "../newelements/createElement.js";
export let todo = [
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
	const todoText = document.createElement("p")
	todoText.classList.add("input__text")
	todoText.innerText = text
	block2.appendChild(todoText)


	if(isChecked) {
		todoText.style.textDecoration = "line-through"
        localStorage.setItem('todo',JSON.stringify(todo))
	}


	const deleteBtn = document.createElement("button")
	deleteBtn.classList.add("delbtn")
	deleteBtn.innerText = "X"
	block2.appendChild(deleteBtn)
   
	deleteBtn.addEventListener("click", (e) => {
		e.currentTarget.parentElement.remove()
		
		const deleteOneBtnm= todo.map(items=>items.e)
		todo.splice(deleteOneBtnm,1)
    localStorage.setItem('todo',JSON.stringify(todo))
    console.log(todo)
	
		})
	
	const todoDate = document.createElement("div")
	todoDate.classList.add("date")
	const dateNow = new Date()
	todoDate.innerText = `${dateNow.getDate()}.${dateNow.getMonth() + 1}.${dateNow.getFullYear()}`
	block2.appendChild(todoDate)
}
if (localStorage.getItem('todo')===null){
    localStorage.setItem('todo',JSON.stringify(todo))
    console.log(localStorage.getItem('todo'))
}


  todo=JSON.parse(localStorage.getItem('todo'))
todo.forEach((elem) => {
	renderToDoItem(elem)
})
