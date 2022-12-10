import { blocks } from "../store.js"
import { createElemetns } from '../utils/createElem.js'


const root = document.getElementById('root')
const deleteButtonClickHandler = (currentElem, id) => {

   const deleteOneBlock = blocks.map(item => item.id).indexOf(id)
   blocks.splice(deleteOneBlock, 1)
   root.removeChild(currentElem)
   localStorage.setItem('todos', JSON.stringify(blocks))
   console.log(blocks)
}


export const renderBlocks = ((elem) => {
   const { id, isChecked, textTODO, } = elem
   const date1 = new Date()


   const blockOne = createElemetns('div', {
      className: 'block-one',
      id: id,
   })
   root.appendChild(blockOne)


   const checkBox = createElemetns("input", {
      className: 'check',
      type: "checkbox",
      checked: isChecked,
   })
   blockOne.appendChild(checkBox)


   checkBox.addEventListener('change', (e) => {
      if (e.currentTarget.checked === true) {
         text.style.cssText = `
         text-decoration : line-through;
         background-color:rgb(255, 237, 253);
         `
      } else {
         text.style.cssText = `
         text-decoration : ;
         background-color:;
         `
      }
      const addCheck = blocks.find(item => item.id === id)
      addCheck.isChecked = checkBox.checked
      localStorage.setItem('todos', JSON.stringify(blocks))
      console.log(blocks)
   })



   const text = createElemetns('p', {
      className: 'text',
      innerText: textTODO,
   })
   blockOne.appendChild(text)
   if (isChecked) {
      text.style.textDecoration = "line-through"
      text.style.backgroundColor = 'rgb(255, 237, 253)';

   } else {
      text.style.textDecoration = ""
      text.style.backgroundColor = '';

   }

   const rootDate = createElemetns("div", {
      classname: 'root__date'
   })
   blockOne.appendChild(rootDate)

   const buttonDeleteOneToDo = document.createElement('button')
   buttonDeleteOneToDo.classList.add('button__three')
   buttonDeleteOneToDo.innerText = 'X'
   rootDate.appendChild(buttonDeleteOneToDo)

   buttonDeleteOneToDo.addEventListener("click", () => {
      deleteButtonClickHandler(blockOne, id)
   })


   const date = createElemetns('div', {
      className: 'date',
      innerText: `${date1.getDate()}.${date1.getMonth() + 1}.${date1.getFullYear()} `
   })
   rootDate.appendChild(date)
})


