import { createElem } from "../utils/createElement.js";

export const createBtn = (value, to, onClick, func) => {
    const elem =  createElem("input", {
        type: "button",
        value
    }, to, onClick, func)

    elem.addEventListener(onClick, func)

    return elem
}