const root = document.getElementById('root')
const buttonOne = document.createElement('button')
buttonOne.classList.add('button__one')
buttonOne.innerText = 'Delete all'
root.appendChild(buttonOne)

const inputTitle = document.createElement('input')
inputTitle.type = 'text'
inputTitle.placeholder = 'Enter todo...'
inputTitle.classList.add('text__todo')
root.appendChild(inputTitle)

const buttonTwo = document.createElement('button')
buttonTwo.classList.add('button__two')
buttonTwo.innerText = 'Add'
root.appendChild(buttonTwo)

const blocks = [
   {
      checkBox: true,
      textTODO: 'Todo text',
      // date: '30.11.2022'
   },
   {
      checkBox: true,
      textTODO: 'Todo text',
      // date: '30.11.2022'
   },
]

blocks.forEach((elem) => {
   const { checkBox, textTODO, date } = elem
   const date1 = new Date()
   const blockOne = document.createElement('div')
   blockOne.classList.add('block-one')
   root.appendChild(blockOne)

   const isChecked = document.createElement('input')
   isChecked.classList.add('check')
   isChecked.type = 'checkbox'
   isChecked.checked = checkBox
   blockOne.appendChild(isChecked)

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

   const dateStr = document.createElement('div')
   dateStr.classList.add('date')
   dateStr.innerText = `${date1.getDate()}.${date1.getMonth() + 1}.${date1.getFullYear()}`
   rootDate.appendChild(dateStr)
})
