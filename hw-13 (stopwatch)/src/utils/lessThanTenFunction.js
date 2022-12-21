export const lessThenTen = (unit) => {
    let format
    if (unit < 10) {
        format = "0" + unit
    } else {
        format = unit
    }

    return format
}