import { blocks } from "../store.js"
import { createElemetns } from "../utils/createElem.js"
import { renderBlocks } from "../contain/renderBlocks.js"

const inputTitleAddToDo = ['textTODO']

inputTitleAddToDo.forEach(elem => {

   const inputTitle = createElemetns('input', {
      type: 'text',
      id: elem,
      placeholder: 'Enter todo',
      className: "text__todo"
   })
   root.appendChild(inputTitle)
})

export const buttonAddToDo = createElemetns('button', {
   className: 'button__two',
   innerText: 'Add',
   id: 'button__two'
})
root.appendChild(buttonAddToDo)


buttonAddToDo.addEventListener("click", () => {

   const inputValue = document.getElementById(inputTitleAddToDo[0]).value
   const newObj = {
      id: `${inputValue} +${blocks.length} `,
      isChecked: false,
      textTODO: inputValue,
   }
   blocks.push(newObj)
   localStorage.setItem('todos', JSON.stringify(blocks))
   renderBlocks(newObj)
   console.log(blocks)
})
