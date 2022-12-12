import { all, completed } from "../containers/form.js"
import { labelList, checkboxCheckedList } from "./elementLists.js"

export const allCompleted = () => {
    console.log(labelList().length)
	all.innerText = "All: " + labelList().length
	completed.innerText = "Completed: " + checkboxCheckedList().length
}