// Task 1
let x = 20
let y = 58
let z = 42
console.log(x+y+z)
// Task 2
const sec = 60
const min = 60
const hours = 24
const day = 365
let myAgeInSeconds = 30*day*hours*min*sec
console.log(myAgeInSeconds) 
// Task 3
let count = 42
let userName = '42'
console.log(typeof String(count)) 
console.log(typeof Number(userName))
// Task 4
let a = 1
let b = 2
let c = "белых медведей"
console.log(String(String(a)+String(b)+c))
// Task 5
let d = 'доступ' 
let f = 'морпех'
let g = 'наледь'
let h = 'попрек'
let j = 'рубило'
let lengthWords = d+f+g+h+j
console.log (lengthWords.length)
// Task 6
let age = 30
let me = 'Veronika'
let all = true
console.log(("Variable:")+('age ') +("have type:")+(typeof age))
console.log(("Variable:")+('me ') +("have type:")+(typeof me))
console.log(("Variable:")+('all ') +("have type:")+(typeof all))

// Task 7
let namber1 ={
    age:23,
    Name:'Andrey'
}
console.log(namber1.age+namber1.Name)

let namber2 ={
    age:21,
    Name:'Daniil'
}
console.log(namber2.age+namber2.Name)

let namber3 ={
    age:21,
    Name:'Alexsandra'
}
console.log(namber3.age+namber3.Name)

const nameYour = prompt("Введите имя");
const ageYour = prompt("Введите возраст")
console.log(nameYour+ageYour)



// Task 8

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "анонс";
let cipher = codeWord1[1]+codeWord2[1]+codeWord3[1]+codeWord4[1]+codeWord5[1]
console.log(cipher)


