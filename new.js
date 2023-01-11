const root = document.getElementById(`root`)



const continer = document.createElement(`div`)
continer.classList.add(`continer`)
root.appendChild(continer)          



const header = document.createElement(`div`)
header.classList.add(`header`)
continer.appendChild(header)

const buttonone = document.createElement(`a`)
buttonone.classList.add(`btn`)
buttonone.textContent = `Delete All`
header.appendChild(buttonone)




const tupeText = document.createElement(`input`)
tupeText.value = `    Enter todo ...`
tupeText.classList.add(`todo`)
header.appendChild(tupeText)

const buttontwo = document.createElement(`a`)
buttontwo.classList.add(`btn2`)   ///btn add
buttontwo.textContent = `Add`
header.appendChild(buttontwo)

buttontwo.addEventListener(`click`,()=> {
    const value = tupeText.value
    const newArr = {
        id: users.length,
        checkboxChecked: true,
        text: value
    }

    users.push(newArr)
    localStorage.setItem(`users`,JSON.stringify(users)) ///////////
    
    addingSection(newArr)
})





let users = [
    { 
        id: 0,
        checkboxChecked: true,
        text: `todo text`
    },
    { 
        id: 1 ,
        checkboxChecked: true,
        text: `todo text`
    }
]

const deleteAllBtn = (alem) => {
    continer.removeChild(alem)

    users.splice(users)
    localStorage.setItem(`users`,JSON.stringify(users))   ///////////////
}
	



const addingSection = (alem) => {
    const {id, checkboxChecked, text} = alem
    buttonone.addEventListener(`click`,()=> {
        deleteAllBtn(section)    
    })
   
    const section = document.createElement(`div`)
    section.setAttribute(`id`,String(id))

   
    section.classList.add(`section`)
    continer.appendChild(section)


    const checkbox1 = document.createElement(`input`)
    checkbox1.type = `checkbox`
    checkbox1.checked = checkboxChecked
    section.appendChild(checkbox1)

    

    checkbox1.addEventListener(`input`,(e)=> {
        if(checkbox1.checked){
            section.style.textDecoration = "none"
        }
        else{
            section.style.textDecoration = "line-through"
        }
       
       const chec = users.find(alem=>alem.id === id)
       chec.checkboxChecked = checkbox1.checked
       localStorage.setItem(`users`,JSON.stringify(users))    //////////////


    })

    const todo = document.createElement(`div`)
    todo.classList.add(`div`)
    todo.textContent = text
    section.appendChild(todo)

    const deleteBtn = document.createElement(`div`)
    deleteBtn.textContent = `delete`
    deleteBtn.classList.add(`deleteBtn`)
    section.appendChild(deleteBtn)



    deleteBtn.addEventListener(`click`,(e)=> {
        e.currentTarget.parentElement.remove()

        const deleteOneUsersIndex = users.map(alem=> alem.id).indexOf()         /////////////////
        users.splice(deleteOneUsersIndex,1)
        localStorage.setItem(`users`,JSON.stringify(users))
    })
}




if(localStorage.getItem(`users`) === null) {
    localStorage.setItem(`users`,JSON.stringify(users))          ////////////
}
users = JSON.parse(localStorage.getItem(`users`))




users.forEach((alem)=> {
    addingSection(alem)
  
})