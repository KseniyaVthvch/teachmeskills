const root = document.getElementById("root")

const container = document.createElement("div")
container.classList.add("container")

const block1 = document.createElement("div")
block1.classList.add("block__1")

const delAllBtn = document.createElement("button")
delAllBtn.classList.add("del-all__btn")
delAllBtn.innerText = "Delete All"

const deleteAllButtonHandler = () => {
	let items = document.querySelectorAll(".block__2")

	items.forEach((item)=> {
		console.log(item)
		item.remove()
	})
		
	const deleteAllB= todo.map(item=>item.e)
	todo.splice(deleteAllB)
localStorage.setItem('todo',JSON.stringify(todo))
console.log(todo)
   
}

delAllBtn.addEventListener("click", deleteAllButtonHandler)


const inputTodo = document.createElement("input")
inputTodo.classList.add("input__todo")
inputTodo.placeholder = "Enter todo..."

const addBtn = document.createElement("button")
addBtn.classList.add("add__btn")
addBtn.innerText = "Add"
addBtn.addEventListener('click', () => {
	let value = inputTodo.value
	let newtodo = {
		id: `${value}-${todo.length}-${Math.random()}`,
		isChecked: false,
		text: value
	};
	todo.push(newtodo);
    localStorage.setItem("todo",JSON.stringify(todo))
	renderToDoItem(newtodo)
    console.log(value)
})


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


const renderToDoItem = (elem) => {
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


