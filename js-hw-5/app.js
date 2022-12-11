// // Task 1
// const myObj = {
//    hight: 175,
//    wight: 60
// }

// delete myObj.hight
// delete myObj.wight
// console.log(myObj)

// // Task 2
// const myObject = {
//    a: "pol",
//    b: "wal"
// }
// if ( ["a"] in myObject){
//    console.log(true)
// }else console.log(false)

// // Task 3
// const student = {
//    name: 'John',
//    age: 19,
//    isHappy: true
// }
// for (const prop in student){
//    console.log("student" + prop + " = " + student[prop])
// }

// // Task 4
// const colors = {
//    'ru pum pu ru rum': {
//        red: 'красный',
//        green: 'зеленый',
//        blue: 'синий'
//    },
// };
// console.log(colors["ru pum pu ru rum"].blue, colors["ru pum pu ru rum"].red)

// //Task 5 
// function averageSalary(salaries) {
//    let sum = 0;
//    for (let salary of Object.values(salaries)){
//       sum += salary;
//    }
//    return sum;
// }

// let salaries = {
//    andrey: 500,
//    sveta: 413,
//    anton: 987,
//    andrey: 664,
//    alexandra: 199
// }
// console.log( averageSalary(salaries))

// // Task 6
// const responseData = {
//    login: prompt("wright login:"),
//    pasword: prompt("wright pasword:")
// }
// const responseData2 = {
//    login: prompt("wright login:"),
//    pasword: prompt("wright pasword:")
// }
// if (responseData.login === responseData2.login && responseData.pasword === responseData2.pasword){
//    console.log("Lasciate ogne speranza, voi ch'entrate")}
// else console.log("try again")


// // ADVANCED level
// // Task 1 
// let student1 = {
//    name: 'Polina',
//    age: 27,
// }

// let student2 = {
//    name: 'Polina',
//    age: 27,
// }

// if (JSON.stringify(student1) === JSON.stringify(student2)) console.log("true")

// Task 2
const animals = {
   cat: {
      name: 'Енчик',
      age: 3,
   },
   dog: {
      name: 'Орео',
      age: 2,
   }
}
try{
   console.log(animals.bird.name)
}
catch (e){
   if (e instanceof TypeError) console.log("All right")
}