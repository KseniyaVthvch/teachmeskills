import {createElement} from "../utils/utils.js";
import {createHeader} from "./header.js";

const root = document.getElementById("root")

const popUpContainer = createElement("div", root, {className: "spinner"})
popUpContainer.style.display = "none"

export const showPopUp = (elem) => {
    popUpContainer.appendChild(elem)
    popUpContainer.style.display = "flex"
}

export const hidePopUp = () => {
    popUpContainer.style.display = "none"
}

popUpContainer.addEventListener("click", (e) => {
    if(e.target.className === "spinner"){
        hidePopUp()
    }
})
