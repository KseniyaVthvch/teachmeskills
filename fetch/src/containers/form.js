import {createElement} from "../utils/utils.js";
import {showPopUp, hidePopUp} from "../components/popUp.js";
import {createHeader} from "../components/header.js";
import {fetchHelper} from "../utils/fetchHelper.js";

const formContainer = createElement("div", false, {className: "root"})

export const openForm = () => {
    showPopUp(formContainer)
    getData()
}

createHeader("Create", "X", formContainer, hidePopUp)

const inpWrapper1 = createElement("div", formContainer, {className: "inputWrapper"} )
const label1 = createElement("label", inpWrapper1, {
    for: "name",
    textContent: "Name"
})
const input1 = createElement("input", inpWrapper1, {
    id: "name",
    type: "text"
})

const inpWrapper2 = createElement("div", formContainer, {className: "inputWrapper"} )
const label2 = createElement("label", inpWrapper2, {
    for: "jobTitle",
    textContent: "Job Title"
})
const input2 = createElement("input", inpWrapper2, {
    id: "jobTitle",
    type: "text"
})

const inpWrapper3 = createElement("div", formContainer, {className: "inputWrapper"} )
const label3 = createElement("label", inpWrapper3, {
    for: "companyId",
    textContent: "Company"
})
const select = createElement("select", inpWrapper3, {id: "companyId"})
const getData = () => {
    fetchHelper("https://63a36607471b38b2060e3764.mockapi.io/companies/")
        .then(data => {
            data.forEach(item => {
                const option = createElement("option", select, {
                    value: item.id,
                    textContent: item.companyName
                })
            })
        })
}


