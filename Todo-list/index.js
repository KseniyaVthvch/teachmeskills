import {inputTodoButton} from './components/buttons.js'
const root = document.getElementById('root')

const container = document.createElement('div')
container.classList.add('container')

const title = document.createElement('div')
title.classList.add('title')
title.textContent = 'Todos'
container.appendChild(title)

const header = document.createElement('div')
header.classList.add('header')

const inputTodoString = document.createElement('input')
inputTodoString.setAttribute('type', 'text')
inputTodoString.classList.add('inputString')




header.appendChild(inputTodoString)
header.appendChild(inputTodoButton)

container.appendChild(header)

root.appendChild(container)
