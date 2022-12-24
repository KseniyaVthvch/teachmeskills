import { createElement } from "./utils/createElement.js"
import { button } from "./components/button.js"
import { users } from "./array.js"
// import "./utils/createElement.js"

const root = document.getElementById(`root`)



const continer = createElement(`div`, {
    className: `continer`,
})
root.appendChild(continer)          


const header = createElement(`div`, {
    className: `header`,
})
continer.appendChild(header)



// const buttonone = document.createElement(`a`)deleteAllBtn(section)
// buttonone.classList.add(`btn`)
// buttonone.textContent = `Delete All` ///btn add All
const buttonone = button(`Delete All`, `btn`, ()=> deleteAllBtn(section))//не подключается функция
const deleteAllBtn = (alem) => {
    continer.removeChild(alem)
    users = []
    // users.splice(users)
    localStorage.setItem(`users`,JSON.stringify(users))     
    
}
header.appendChild(buttonone)



const tupeText = createElement(`input`, {
    value:`    Enter todo ...`,
    className: `todo`
})
header.appendChild(tupeText)



const buttontwo = button(`Add`, `btn`,()=>wraper())
    const wraper = () => {

        const value = tupeText.value
        const newArr = {
            id: users.length,
            checkboxChecked: true,
            text: value
        }
        
        users.push(newArr) 
        localStorage.setItem(`users`,JSON.stringify(users)) 
        
        addingSection(newArr)
    }
header.appendChild(buttontwo)

	


const addingSection = (alem) => {
    const {id, checkboxChecked, text} = alem

    // buttonone.addEventListener(`click`,()=> {
    //     deleteAllBtn(section)    
    // })
   
 
    const section = createElement(`div`, {
        id: String(id),
        className:`section`
    })
    continer.appendChild(section)



    const checkbox1 = createElement(`input`, {
        type: `checkbox`,
        checked: checkboxChecked
    })
    section.appendChild(checkbox1)

    

    checkbox1.addEventListener(`input`,(e)=> {
        if(checkbox1.checked){
            section.style.textDecoration = "none"
        }
        else{
            section.style.textDecoration = "line-through"
        }
       
    //    const chec = users.find(alem=>alem.id === id)
    //    chec.checkboxChecked = checkbox1.checked
    //    localStorage.setItem(`users`,JSON.stringify(users))    //////////////
    })



    const todo = createElement(`div`, {
        className: `div`,
        textContent: text
    }) 
    section.appendChild(todo)


  
    // const deleteBtn = createElement(`div`, {
    //     textContent:`delete`,
    //     className: `deleteBtn`
    // })
    const deleteBtn = button(`delete`, `deleteBtn`, (e)=> myFn(e))
   
        const myFn = (e) => {
            e.currentTarget.parentElement.remove()
                
            const deleteOneUsersIndex = users.map(alem=> alem.id).indexOf()         /////////////////
            users.splice(deleteOneUsersIndex,1)
            localStorage.setItem(`users`,JSON.stringify(users))
        }
 section.appendChild(deleteBtn)
}

    
if(localStorage.getItem(`users`) === null) {
    localStorage.setItem(`users`,JSON.stringify(users))          ////////////
}
users = JSON.parse(localStorage.getItem(`users`))


users.forEach((alem)=> {
    addingSection(alem)
  
})


