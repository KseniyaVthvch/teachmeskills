// // // Task 6

// let userAge = prompt("Enter age")
// if (userAge < 15) {
//    console.log("Пей колу")
// }
// else if (userAge >= 16 && userAge <= 18) {
//    console.log("Можешь выкурить сигаретку, только маме не говори")
// } else if (userAge > 19) {
//    console.log("Попей пивка")
// }

// // Task 3
// for (let i = 0; i < 20; i++) {
//    if (i % 3 === 0) {
//       console.log(i)
//    }
// }

// // Task 1
// let a = 'true'
// let b = false
// let c = 17
// let d = undefined
// let e = null
// console.log(typeof (a))
// console.log(typeof (b))
// console.log(typeof (c))
// console.log(typeof (d))
// console.log(typeof (e))

// // Task 2
// let height = 15
// let width = 20
// if (height > width) {
//    console.log(height)
// }
// else if (height < width) {
//    console.log(width)
// }

// // Task 5

// let number = prompt("write number")

// if (number % 5 === 0 && number % 3 === 0) {
//    console.log("FizBuz")
// }
// else if (number % 5 === 0) {
//    console.log("Fiz")
// }
// else if (number % 3 === 0) {
//    console.log("Buz")
// }

// //Task 4 
// let key = true
// let documents = true
// let pen = true
// let apple = true
// let orange = false

// if (key && documents && pen && (apple || orange)) consol.log("I nee go to work")
// else console.log("No")


// // Task 7
//  let world = prompt("напишите сторону света")
// switch (world) {
//    case "юг":
//       console.log("на юг пойдешь счастье найдешь")
//       break;
//    case "серев":
//       console.log("на север пойдешь много денег найдешь")
//       break;
//    case "запад":
//       console.log("на запад пойдешь верного друга найдешь")
//       break;
//    case "восток":
//       console.log("на восток пойдешь разработчиком станешь")
//       break;
//    default:
//       console.log("попробуй еще раз")
// }

// // ADVANCED level
// // Task 3 
// for(let step = 0; step < 7; step++){
//    console.log("#".repeat(step))
// }

// // вариант 2
// let q = prompt("write steps count: ")
// function createSteps(levels) {
//    let i = 1
//    while (i <= levels){
//        console.log("#".repeat(i))
//        i++
//    }
// }
// console.log(createSteps(q))

// Task 1
// let userName = prompt("Write your fullname")

// function upFirstSymbol(str){
//    return str[0].toUpperCase() + str.slice(1).toLowerCase()
// }

// function corectName(name){
//    arr = name.split(" ")
//    result = ""
//    for(let i = 0; i < arr.length; i++){
//       r = upFirstSymbol(arr[i])
//       result += `${r} `
//    }
//    return result
// }

// console.log(corectName(userName))

// // Task 3
// let number = prompt("number:")
// let minus = prompt("minus:")
// let plus = prompt("plus:")
// let multiply = prompt("multiply")
// let divide = prompt("divide:")
// let result = ((((number - minus)+ plus)* multiply)/divide)
// console.log(`Answer: ${result}`)  