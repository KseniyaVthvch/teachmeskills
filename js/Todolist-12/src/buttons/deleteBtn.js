
export const deleteAllButtonHandler = () => {
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

