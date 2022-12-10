import { blocks } from "../store.js"
import { createElemetns } from "../utils/createElem.js"


export const buttonDeleteAllToDo = createElemetns('button', {
   className: 'button__one',
   innerText: 'Delete all'
})
root.appendChild(buttonDeleteAllToDo)


buttonDeleteAllToDo.addEventListener("click", () => {
   const items = document.querySelectorAll(".block-one")
   const blocks = []
   localStorage.setItem('todos', JSON.stringify(blocks))
   console.log(blocks)
   items.forEach((item) => {
      root.removeChild(item)
   })
})


