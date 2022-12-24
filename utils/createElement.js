
export const createElement = (tag, otions) => {
    const alem = document.createElement(tag)

    Object.keys(otions).forEach(item => {
        alem[item] = otions[item]
    })
    return alem
}
