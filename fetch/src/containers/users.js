import {createElement} from "../utils/utils.js";
import {createHeader} from "../components/header.js";
import {showPopUp, hidePopUp} from "../components/popUp.js";
import {fetchHelper} from "../utils/fetchHelper.js";
import {openForm} from "./form.js";

const root = document.getElementById("root")

const renderDetails = (data) => {
    const {companyName, phrase, country: {country, city}, id} = data

    const detailsWrapper1 = createElement("div", detailsContainer, {className: "inputWrapper"})
    const companyLabel = createElement("div", detailsWrapper1, {textContent: "Company: "})
    const companyValue = createElement("div", detailsWrapper1, {textContent: companyName})

    const detailsWrapper2 = createElement("div", detailsContainer, {className: "inputWrapper"})
    const phraseLabel = createElement("div", detailsWrapper2, {textContent: "Phrase: "})
    const phraseValue = createElement("div", detailsWrapper2, {textContent: phrase})

    const detailsWrapper3 = createElement("div", detailsContainer, {className: "inputWrapper"})
    const cityLabel = createElement("div", detailsWrapper3, {textContent: "City: "})
    const citiValue = createElement("div", detailsWrapper3, {textContent: city})
}

const detailsContainer = createElement("div", false, {className: "root"})
createHeader("Details", "X", detailsContainer, hidePopUp)

// _______________________

const usersContainer = createElement("div", root, {className: "root"})
createHeader("Users", "+", usersContainer, openForm)

const renderElements = (data) => {
    data.forEach(elem => {
        const {id, name, avatar, jobTitle, companyId} = elem
        const item = createElement("div", usersContainer, {className: "item"})
        const image = createElement("img", item, {src: avatar})
        const userInfo = createElement("div", item)
        const userName = createElement("div", userInfo, {className: "name", textContent: name})
        const userJobTitle = createElement("div", userInfo, {textContent: jobTitle})
        const userInfoBtn = createElement("button", item, {className: "details", textContent: "Details"})

        userInfoBtn.addEventListener("click", () => {
            getCompanyData(companyId)
            showPopUp(detailsContainer)
        })
    })
}


const getData = async () => {
    fetchHelper("https://63a36607471b38b2060e3764.mockapi.io/users")
        .then(data => {
            console.log(data)
        renderElements(data)
    })

}

const getCompanyData = (companyId) => {
    let companyData;
   fetch(`https://63a36607471b38b2060e3764.mockapi.io/companies/${companyId}`)
        .then(resp => resp.json())
        .then(data => {
            companyData = data
            return data
        })
        .then(data => {
            fetch(`https://63a36607471b38b2060e3764.mockapi.io/countries/${data.country}`)
                .then(resp => resp.json())
                .then(dataCountry => {
                    const data = {...companyData, country: dataCountry}
                    renderDetails(data)
                })
    })

}

getData()