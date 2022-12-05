

const root = document.getElementById(`root`)


const continer = document.createElement(`div`)
continer.classList.add(`continer`)
root.appendChild(continer)



const header = document.createElement(`div`)
header.classList.add(`header`)
continer.appendChild(header)

const buttonone = document.createElement(`a`)
buttonone.classList.add(`btn`)
buttonone.textContent = `Delete All`
header.appendChild(buttonone)


const tupeText = document.createElement(`input`)
tupeText.value = `    Enter todo ...`
tupeText.classList.add(`todo`)
header.appendChild(tupeText)


const buttontwo = document.createElement(`a`)
buttontwo.classList.add(`btn2`)
buttontwo.textContent = `Add`
header.appendChild(buttontwo)




const wraper = document.createElement(`div`)
wraper.classList.add(`section`)
continer.appendChild(wraper)



const newalem1 = document.createElement(`div`)
newalem1.classList.add(`newalem1`)
wraper.appendChild(newalem1) 

const checkbox = document.createElement(`input`)
checkbox.type = `checkbox`
checkbox.classList.add(`checkbox`)
checkbox.checked = `true`
newalem1.appendChild(checkbox)


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

const date = document.createElement(`a`)
date.classList.add(`date`)
date.textContent = `Dale`
xDate.appendChild(date)



const wraper2 = document.createElement(`div`)
wraper2.classList.add(`section`)
continer.appendChild(wraper2)



const newalem12 = document.createElement(`div`)
newalem12.classList.add(`newalem1`)
wraper.appendChild(newalem12) 

const checkbox2 = document.createElement(`input`)
checkbox2.type = `checkbox`
checkbox2.classList.add(`checkbox`)
checkbox2.checked = `true`
newalem12.appendChild(checkbox2)


const newText2 = document.createElement(`input`)
newText2.classList.add(`newText`)
newText2.value = `              Todo text`
newalem12.appendChild(newText2)


const xDate2 = document.createElement(`div`)
xDate2.classList.add(`xDate`)
newalem12.appendChild(xDate2)

const fontX2 = document.createElement(`a`)
fontX2.classList.add(`fontX`)
xDate2.appendChild(fontX2)

const X2 = document.createElement(`p`)
X2.textContent = `X`
X2.classList.add(`X`)
fontX2.appendChild(X2)

const date2 = document.createElement(`a`)
date2.classList.add(`date`)
date2.textContent = `Dale`
xDate2.appendChild(date2)

