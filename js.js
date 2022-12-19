const root = document.getElementById(`root`)

const title = document.createElement(`h3`)
title.setAttribute(`class`,`title`)
title.textContent = `Users`
root.appendChild(title)

const users = [
    {
        id: 0,
        jobTitle: `Frontend Developer`,
        time: `part-time`,
        domain: `engineering`,
        type: `Remote`
    },   
    {
        id: 1,
        jobTitle: `UX/UI Developer`,
        time: `full-time`,
        domain: `Design`,
        type: `Remote`
    },
    {
        id: 2,
        jobTitle: `UX/UI Developer`,
        time: `full-time`,
        domain: `Design`,
        type: `Remote`
    }
]

const deleteButtonClickHandler = (currentElem) => {
    root.removeChild(currentElem)
}

const inputKeyDownHandler = (e, alem) => {
    if(e.key === `Enter`) {
        alem.textContent = e.target.value
    }
}

const editBtnClickHandler = (alem) => {
    const input = document.createElement(`input`)
    input.type = `text`
    input.value = alem.textContent
    alem.textContent=``
    input.addEventListener(`keypress`,(e)=> {
        inputKeyDownHandler(e,alem)
    })
    alem.appendChild(input)
    console.log(alem.textContent)
}




const renderUserElement = (alem) => {
    const {id, jobTitle, time, domain, type} = alem

    const item = document.createElement(`div`)
    item.setAttribute(`id`,String(id))
    root.appendChild(item)
    item.classList.add(`item`)

 
    const job = document.createElement(`div`)
    job.innerText = jobTitle
    item.appendChild(job)
    job.type = `text`

    const jobtime = document.createElement(`div`)
    jobtime.classList.add(time === `part-time` ? `partTime` : `fullTime`)
    jobtime.textContent = time
    item.appendChild(jobtime)


    const buttons = document.createElement(`div`)
    item.appendChild(buttons)

    const editBtn = document.createElement(`buttons`)
    const deleteBtn = document.createElement(`buttons`)
    buttons.appendChild(editBtn)
    buttons.appendChild(deleteBtn)



    editBtn.addEventListener(`click`,()=> {
        editBtnClickHandler(job)
    })




    deleteBtn.addEventListener(`click`,(e)=> {
        console.log(e.currentTarget)
        deleteButtonClickHandler(item)
    })

    editBtn.textContent = `edit`
    deleteBtn.textContent = `X`
    

    editBtn.classList.add(`button`)
    deleteBtn.classList.add(`button`)


    buttons.appendChild(editBtn)
    buttons.appendChild(deleteBtn)


    const domainElem = document.createElement(`div`)
    domainElem.textContent = domain
    item.appendChild(domainElem)


    const typeElem = document.createElement(`div`)
    typeElem.textContent = type
    item.appendChild(typeElem)
}

users.forEach((alem) => {   ///////////3
    renderUserElement(alem)
}) 

















const rootForm = document.getElementById(`form`)

const formTitle = document.createElement(`h3`)
formTitle.classList.add(`title`)
formTitle.textContent = `Create new user`

const formWraper = document.createElement(`div`)
formWraper.classList.add(`inputWrapper`)


rootForm.appendChild(formTitle)
rootForm.appendChild(formWraper)

const formData = [`position`, `department`, `employment` ,`format`]

const newdata = {            /// 2

}


formData.forEach(alem => {
    const inputWrapper = document.createElement(`div`)
    inputWrapper.classList.add(`inputWrapper`)

    const label = document.createElement(`label`)
    label.textContent = alem
    label.for = alem

    const inp = document.createElement(`input`)
    inp.type = `text`
    inp.id = alem
    
    inp.addEventListener(`input`,(e)=> {             ///// 1 
        newdata[e.target.id] = e.target.value
    })


    
    inputWrapper.appendChild(label)
    inputWrapper.appendChild(inp)

    formWraper.appendChild(inputWrapper)
})

const btn = document.createElement(`button`)
btn.id = `save`
btn.classList.add(`button`)
btn.textContent = `save`

btn.addEventListener(`click`, ()=> {
    
    newdata.id = users.length
    console.log(newdata)
    renderUserElement(newdata)        /////4
})


rootForm.appendChild(btn)








// setTimeout (() => {
//     const id = prompt(`Enter number (max ${users[users.length -1].id})`)
//     const newalem = document.getElementById(id)
//     root.removeChild(newalem)
// },1000)