const root = document.getElementById('root')

const blocks = [
   {
      id: 0,
      checkBox: false,
      textTODO: 'Todo text',
   },
   {
      id: 1,
      checkBox: false,
      textTODO: 'Todo text',
   },
]
const buttonOne = document.createElement('button')
buttonOne.classList.add('button__one')
buttonOne.innerText = 'Delete all'
root.appendChild(buttonOne)

// Думаю это не очень хорошая реализация, потому что если мне нужно,
// чтоб пункт был сразу с checked  он создает две строки с input,
// а также не могу понять почему при добавлении новоой карточки с делом , каждой последующей карточке
//  присваивается id=2, а не id=3 id=4 и т.д.
const newObj = {}
const inputTitleAddToDo = ['textTODO']

inputTitleAddToDo.forEach(elem => {
   const inputTitle = document.createElement('input')
   inputTitle.addEventListener("input", (e) => {
      newObj[e.target.id] = e.target.value
   })
   inputTitle.type = 'text'
   inputTitle.id = elem
   inputTitle.placeholder = 'Enter todo...'
   inputTitle.classList.add('text__todo')
   root.appendChild(inputTitle)
})



const buttonTwo = document.createElement('button')
buttonTwo.classList.add('button__two')
buttonTwo.innerText = 'Add'
buttonTwo.id = 'button__two'
root.appendChild(buttonTwo)

buttonTwo.addEventListener("click", () => {
   newObj.id = blocks.length
   renderBlocks(newObj)
})


const deleteButtonClickHandler = (currentElem) => {
   console.log(currentElem)
   root.removeChild(currentElem)
}


const renderBlocks = ((elem) => {
   const { id, checkBox, textTODO, } = elem
   const date1 = new Date()
   const blockOne = document.createElement('div')
   blockOne.classList.add('block-one')
   blockOne.setAttribute("id", String(id))
   root.appendChild(blockOne)

   buttonOne.addEventListener("click", () => {
      deleteButtonClickHandler(blockOne)
   })


   const isChecked = document.createElement('input')
   isChecked.classList.add('check')
   isChecked.type = 'checkbox'
   isChecked.checked = checkBox
   blockOne.appendChild(isChecked)


   isChecked.addEventListener('click', (e) => {
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

   const buttonThree = document.createElement('button')
   buttonThree.classList.add('button__three')
   buttonThree.innerText = 'X'
   rootDate.appendChild(buttonThree)

   buttonThree.addEventListener("click", () => {
      deleteButtonClickHandler(blockOne)
   })

   const dateStr = document.createElement('div')
   dateStr.classList.add('date')
   dateStr.innerText = `${date1.getDate()}.${date1.getMonth() + 1}.${date1.getFullYear()}`
   rootDate.appendChild(dateStr)
})
blocks.forEach((elem) => {
   renderBlocks(elem)
})




