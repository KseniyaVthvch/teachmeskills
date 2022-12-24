import { createElement }from "../utils/createElement.js";

export const button = (textContent, css, onClick) => {
    const btn = createElement(`button`, {
        textContent: textContent,
        className: css
    })

    btn.addEventListener(`click`, onClick)
    return btn
}
