const root = document.getElementById("root")

const title = document.createElement("h3")
title.setAttribute("class", "title")
title.textContent = "Users"

const users = [
    {
        id: 0,
        position: "Frontend Developer",
        employment: "part-time",
        department: "Engineering",
        format: "Remote"
    },
    {
        id: 1,
        position: "UX/UI Designer",
        employment: "full-time",
        department: "Design",
        format: "Remote"
    },
    {
        id: 2,
        position: "Backend Developer",
        employment: "part-time",
        department: "Engineering",
        format: "Office"
    }
]
root.appendChild(title)

const deleteButtonClickHandler = (currentElem) => {
    console.log(currentElem)
    root.removeChild(currentElem)
}

const editBtnClickHandler = (bth, ...args) => {
    // используем ...args, чтобы функция могла обрабатываеть любое количество элементов
    args.forEach(node => {
        // проверяем, является ли элемент массива NodeElement
        if(node.nodeType === 1) {
            const input = document.createElement("input")
            input.value = node.textContent
            input.type = "text"

            if(node.lastChild.nodeName === "INPUT") {
                bth.textContent = "edit"
                const inputValue = node.lastChild.value
                node.removeChild(node.lastChild)
                console.log(inputValue)
                node.textContent = inputValue
            } else {
                bth.textContent = "save"
                node.textContent = ""
                node.appendChild(input)
            }
        }
    })
}

const renderUserElement = (elem) => {
    const {id, position, department, format, employment} = elem

    const item = document.createElement("div")
    item.classList.add("item")
    item.setAttribute("id", String(id))
    root.appendChild(item)

    const job = document.createElement("div")
    job.innerText = position
    item.appendChild(job)

    const jobTime = document.createElement("div")

    jobTime.classList.add(employment === "part-time" ? "partTime" : "fullTime")
    jobTime.innerText = employment
    item.appendChild(jobTime)

    const domainElem = document.createElement("div")
    domainElem.innerText = department

    const typeElem = document.createElement("div")
    typeElem.innerText = format

    const buttons = document.createElement("div")

    const editBtn = document.createElement("button")
    editBtn.innerText = "edit"

    editBtn.addEventListener("click", () => {
        editBtnClickHandler(editBtn, job, domainElem, typeElem)
    })

    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "X"

    deleteBtn.addEventListener("click", () =>{
        deleteButtonClickHandler(item)
    })

    buttons.appendChild(editBtn)
    buttons.appendChild(deleteBtn)

    item.appendChild(buttons)
    item.appendChild(domainElem)
    item.appendChild(typeElem)
}

users.forEach((elem) => {
    renderUserElement(elem)
})


const rootForm = document.getElementById("form")

const formTitle = document.createElement("h3")
formTitle.textContent = "Create new user"
formTitle.setAttribute("class", "title")
const formWrapper = document.createElement("div")
formWrapper.setAttribute("class", "form")

const formData = ["position", "department", "employment", "format"]

const newData = {}

formData.forEach(elem => {
    const inputWrapper = document.createElement("div")
    inputWrapper.setAttribute("class", "inputWrapper")

    const label = document.createElement("label")
    label.innerText = elem
    label.for = elem

    const inp = document.createElement("input")

    inp.addEventListener("input", (e) => {
        newData[e.target.id] = e.target.value
    })

    inp.type = "text"
    inp.id = elem

    inputWrapper.appendChild(label)
    inputWrapper.appendChild(inp)

    formWrapper.appendChild(inputWrapper)
})

const inputWrapper = document.createElement("div")
inputWrapper.classList.add("inputWrapper")
const btn = document.createElement("button")

btn.id = "save"
btn.classList.add("button")
btn.textContent = "Save"

btn.addEventListener("click", () => {
    newData.id = users.length
    renderUserElement(newData)
})

rootForm.appendChild(formTitle)
rootForm.appendChild(formWrapper)
inputWrapper.appendChild(btn)
rootForm.appendChild(inputWrapper)

// git fetch --all
// git pull --all

// formData

const data = new FormData()