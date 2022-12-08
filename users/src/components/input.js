import {createElement} from "../utils/createElement.js"

export const input = (type, id, onInput) => {
    const inputElem = createElement("input", {
        type,
        id
    })

    inputElem.addEventListener("input", onInput)

    return inputElem
}
