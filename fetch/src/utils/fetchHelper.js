export const fetchHelper = (url, options = {}) => {
    toggleSpinner()

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            toggleSpinner()
            return data
        })
}

const toggleSpinner = () => {
    const spinner = document.getElementById("spinner")
    if(spinner.style.display === "flex") {
        spinner.style.display = "none"
    } else {
        spinner.style.display = "flex"
    }
}