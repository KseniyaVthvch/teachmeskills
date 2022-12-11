import { createElem } from "../utils/createElement.js";

export const createBtn = (value, to) => {
    return createElem("input", {
        type: "button",
        value
    }, to)
}