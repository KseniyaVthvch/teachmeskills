import "./src/container/sectionOne.js"

import { todo } from "./src/container/store.js";
import { renderTodoElement } from "./src/utils/renderTodoElement.js";



todo.forEach(e => {
   renderTodoElement(e)
})