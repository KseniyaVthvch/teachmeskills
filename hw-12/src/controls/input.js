import { createElem } from "../utils/createElement.js";

export const createInp = (placeholder, to) => {
    return createElem("input", {
        type: "text",
        placeholder
    }, to)
}