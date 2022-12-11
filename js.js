const root = document.getElementById(`root`)

const deleteBtnAll = (alem) => {
    continer.removeChild(alem)
}
const specificDeletion = (nextAlem) => {
    wraper.removeChild(nextAlem)
}






const continer = document.createElement(`div`)
continer.classList.add(`continer`)
root.appendChild(continer)          



const header = document.createElement(`div`)
header.classList.add(`header`)
continer.appendChild(header)

const buttonone = document.createElement(`a`)
buttonone.classList.add(`btn`)
buttonone.textContent = `Delete All`
header.appendChild(buttonone)  ///btn delete all
buttonone.addEventListener(`click`,()=> {
    deleteBtnAll(wraper)
})

const tupeText = document.createElement(`input`)
tupeText.value = `    Enter todo ...`
tupeText.classList.add(`todo`)
header.appendChild(tupeText)


const buttontwo = document.createElement(`a`)
buttontwo.classList.add(`btn2`)   ///btn add
buttontwo.textContent = `Add`
header.appendChild(buttontwo)


const wraper = document.createElement(`div`)
wraper.classList.add(`section`)//// карточки
continer.appendChild(wraper)


const newalem1 = document.createElement(`div`)
newalem1.classList.add(`newalem1`)
wraper.appendChild(newalem1) 

const checkbox = document.createElement(`input`)
checkbox.type = `checkbox`
checkbox.classList.add(`checkbox`)
checkbox.checked = `true`
newalem1.appendChild(checkbox)


checkbox.addEventListener(`input`,(e)=> {
   console.log( e.currentTarget.checked)
})
  
 


const newText = document.createElement(`input`)
newText.classList.add(`newText`)
newText.value = `              Todo text`
newalem1.appendChild(newText)


const xDate = document.createElement(`div`)
xDate.classList.add(`xDate`)
newalem1.appendChild(xDate)

const fontX = document.createElement(`a`)
fontX.classList.add(`fontX`)
xDate.appendChild(fontX)

const X = document.createElement(`p`)

X.textContent = `X`
X.classList.add(`X`)
fontX.appendChild(X)

X.addEventListener(`click`,()=> {
    specificDeletion(newalem1)
})                                              //////////


const date = document.createElement(`a`)
date.classList.add(`date`)
const dateNew= new Date()
date.textContent = (`${dateNew.getDate()}-${dateNew.getMonth()+1}-${dateNew.getFullYear()}`)
xDate.appendChild(date)

