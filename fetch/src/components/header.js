import {createElement} from "../utils/utils.js";

export const createHeader = (titleContent, buttonContent, container, buttonHandler) => {
    const titleWrapper = createElement("div", container, {className: "title"})
    const title = createElement("h3", titleWrapper, {textContent: titleContent})
    const button = createElement("div", titleWrapper,{textContent: buttonContent})
    button.addEventListener("click", buttonHandler)
}