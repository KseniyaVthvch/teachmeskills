const root = document.getElementById("root")

const title = document.createElement("h3")
title.setAttribute("class", "title")
title.textContent = "Users"

const users = [
    {
        id: 0,
        jobTitle: "Frontend Developer",
        time: "part-time",
        domain: "Engineering",
        type: "Remote"
    },
    {
        id: 1,
        jobTitle: "UX/UI Designer",
        time: "full-time",
        domain: "Design",
        type: "Remote"
    },
    {
        id: 2,
        jobTitle: "Backend Developer",
        time: "part-time",
        domain: "Engineering",
        type: "Office"
    }
]
root.appendChild(title)

users.forEach((elem) => {
    const {id, jobTitle, time, domain, type} = elem

    const item = document.createElement("div")
    item.classList.add("item")
    item.setAttribute("id", String(id))
    root.appendChild(item)

    const job = document.createElement("div")
    job.innerText = jobTitle
    item.appendChild(job)

    const jobTime = document.createElement("div")

    jobTime.classList.add(time === "part-time" ? "partTime" : "fullTime")
    jobTime.innerText = time
    item.appendChild(jobTime)

    const buttons = document.createElement("div")
    item.appendChild(buttons)

    const editBtn = document.createElement("button")
    const deleteBtn = document.createElement("button")
    editBtn.innerText = "edit"
    deleteBtn.innerText = "X"
    buttons.appendChild(editBtn)
    buttons.appendChild(deleteBtn)

    const domainElem = document.createElement("div")
    domainElem.innerText = domain
    item.appendChild(domainElem)

    const typeElem = document.createElement("div")
    typeElem.innerText = type
    item.appendChild(typeElem)
})

// setTimeout(()=>{
//     const id = prompt(`enter number (max: ${users[users.length - 1].id})`)
//     const elem = document.getElementById(id)
//     root.removeChild(elem)
// }, 3000)


// const date = Date.now()
// console.log(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`)


