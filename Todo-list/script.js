const root = document.getElementById('root')


const blocks = [
   {
      id: 0,
      isChecked: false,
      textTODO: 'Todo text',
   },
   {
      id: 1,
      isChecked: false,
      textTODO: 'Todo text',
   },
]

const buttonDeleteAllToDo = document.createElement('button')
buttonDeleteAllToDo.classList.add('button__one')
buttonDeleteAllToDo.innerText = 'Delete all'
root.appendChild(buttonDeleteAllToDo)

//  Я правильно поняла, что тут нужно тоже сделать так,
// чтоб при удалении всех карточек, из blocks они тоже удалялись
//  или в  данном случае нет в этом смысла?
buttonDeleteAllToDo.addEventListener("click", () => {
   const items = document.querySelectorAll(".block-one")
   items.forEach((item, id) => {
      root.removeChild(item)
      blocks.splice(id)
      console.log(blocks)
   })
})



const inputTitleAddToDo = ['textTODO']

inputTitleAddToDo.forEach(elem => {
   const inputTitle = document.createElement('input')
   inputTitle.type = 'text'
   inputTitle.id = elem
   inputTitle.placeholder = 'Enter todo...'
   inputTitle.classList.add('text__todo')
   root.appendChild(inputTitle)
})


const buttonAddToDo = document.createElement('button')
buttonAddToDo.classList.add('button__two')
buttonAddToDo.innerText = 'Add'
buttonAddToDo.id = 'button__two'
root.appendChild(buttonAddToDo)


buttonAddToDo.addEventListener("click", () => {
   newObj = {}
   const inputValue = document.getElementById(inputTitleAddToDo[0]).value
   newObj.id = inputValue + blocks.length
   newObj.isChecked = false
   newObj.textTODO = inputValue
   blocks.push(newObj)
   console.log(blocks)
   renderBlocks(newObj)
})


const deleteButtonClickHandler = (currentElem, id) => {
   console.log(currentElem)
   root.removeChild(currentElem)
   blocks.splice(id, 1)
   console.log(blocks)
}


const renderBlocks = ((elem) => {
   const { id, isChecked, textTODO, } = elem
   const date1 = new Date()
   const blockOne = document.createElement('div')
   blockOne.classList.add('block-one')
   blockOne.setAttribute("id", String(id))
   root.appendChild(blockOne)


   const checkBox = document.createElement('input')
   checkBox.classList.add('check')
   checkBox.type = 'checkbox'
   checkBox.checked = isChecked
   blockOne.appendChild(checkBox)



   checkBox.addEventListener('click', (e) => {
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
   })


   const text = document.createElement('p')
   text.classList.add('text')
   text.innerText = textTODO
   blockOne.appendChild(text)

   const rootDate = document.createElement('div')
   rootDate.classList.add('root__date')
   blockOne.appendChild(rootDate)

   const buttonDeleteOneToDo = document.createElement('button')
   buttonDeleteOneToDo.classList.add('button__three')
   buttonDeleteOneToDo.innerText = 'X'
   rootDate.appendChild(buttonDeleteOneToDo)

   buttonDeleteOneToDo.addEventListener("click", () => {
      deleteButtonClickHandler(blockOne, id)
   })


   const dateStr = document.createElement('div')
   dateStr.classList.add('date')
   dateStr.innerText = `${date1.getDate()}.${date1.getMonth() + 1}.${date1.getFullYear()}`
   rootDate.appendChild(dateStr)
})

blocks.forEach((elem) => {
   renderBlocks(elem)
})
