import { blocks } from '../store.js'
import { renderBlocks } from './renderBlocks.js'
import { buttonDeleteAllToDo } from '../components/buttonDeleteAll.js'
import { buttonAddToDo } from '../components/buttonAdd.js'


const root = document.getElementById('root')


blocks.forEach((elem) => {
   renderBlocks(elem)
})
