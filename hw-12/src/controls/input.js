import { createElem } from "../utils/createElement.js";

export const createInp = (placeholder, to, onClick, func) => {
    const elem = createElem("input", {
        type: "text",
        placeholder
    }, to)
    
    elem.addEventListener(onClick, func)

    return elem
}