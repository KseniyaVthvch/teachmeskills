import {block1} from "../newelements/createElement.js";
 const delAllBtn = document.createElement("button")
delAllBtn.classList.add("del-all__btn")
delAllBtn.innerText = "Delete All"
block1.appendChild(delAllBtn)

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


