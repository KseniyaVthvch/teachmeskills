// import { users } from "../array.js"

// const continer = createElement(`div`, {
//     className: `continer`,
// })




// const addingSection = (alem) => {
//     const {id, checkboxChecked, text} = alem

//     // buttonone.addEventListener(`click`,()=> {
//     //     deleteAllBtn(section)    
//     // })
   
 
//     const section = createElement(`div`, {
//         id: String(id),
//         className:`section`
//     })
//     continer.appendChild(section)



//     const checkbox1 = createElement(`input`, {
//         type: `checkbox`,
//         checked: checkboxChecked
//     })
//     section.appendChild(checkbox1)

    

//     checkbox1.addEventListener(`input`,(e)=> {
//         if(checkbox1.checked){
//             section.style.textDecoration = "none"
//         }
//         else{
//             section.style.textDecoration = "line-through"
//         }
       
//     //    const chec = users.find(alem=>alem.id === id)
//     //    chec.checkboxChecked = checkbox1.checked
//     //    localStorage.setItem(`users`,JSON.stringify(users))    //////////////
//     })



//     const todo = createElement(`div`, {
//         className: `div`,
//         textContent: text
//     }) 
//     section.appendChild(todo)


  
//     // const deleteBtn = createElement(`div`, {
//     //     textContent:`delete`,
//     //     className: `deleteBtn`
//     // })
//     const deleteBtn = button(`delete`, `deleteBtn`, (e)=> myFn(e))
   
//         const myFn = (e) => {
//             e.currentTarget.parentElement.remove()
                
//             const deleteOneUsersIndex = users.map(alem=> alem.id).indexOf()         /////////////////
//             users.splice(deleteOneUsersIndex,1)
//             localStorage.setItem(`users`,JSON.stringify(users))
//         }
//  section.appendChild(deleteBtn)
// }


// if(localStorage.getItem(`users`) === null) {
//     localStorage.setItem(`users`,JSON.stringify(users))          ////////////
// }
// users = JSON.parse(localStorage.getItem(`users`))


// users.forEach((alem)=> {
//     addingSection(alem)
  
// })
