import {createElement} from "../utils/createElement.js"

export const button = (textContent, onClick) => {
    const btn = createElement("button", {
        textContent: textContent
    })

    btn.addEventListener("click", onClick)
    return btn
}