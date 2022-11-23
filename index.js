 Hw-6Yan
// Task 1 💻

const colors = ['red', 'green', 'blue']
console.log(colors.length)

// Task 2🖥

const animals = ['monkey', 'dog', 'cat']
console.log(animals[animals.length -1])

// Task 3🖥

const numbers = [5, 43, 63, 23, 90]

numbers.splice(0,numbers.length)
console.log(numbers)

// Task 4🖥

const students = ['Polina', 'Dasha', 'Masha']

students.pop()
students.push(`Borya`)

students.shift()
students.unshift(`Andrey`)

console.log(students)

// Task 5🖥
// Выведите в консоль все элементы массива. Сначала через цикл for, затем for of.
const cats = ['Gachito', 'Tom', 'Batman']

for(let i = 0; i < cats.length; i++) {
    console.log(cats[i])
}

for(let i of cats) {
    console.log(i)
}

// Task 6🖥

const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]

const newArr = evenNumbers.concat(oddNumbers).indexOf(8)
console.log(newArr)

// Task 7 🖥

const binary = [0, 0, 0, 0]
const arr = binary.join(`1`)
console.log(arr)

// ADVANCED level

// Task 2 👨‍🏫

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]

function myFn(mtx) {
    let a = 0
    let b =0
    for(let i = 0; i < mtx.length; i++) {
        a += mtx[i].length
        for(let j = 0; j < mtx[i].length; j++) {
            b += mtx[i][j]
        }
    }
    return a/b
}

console.log(myFn(matrix)) 

// Task 3 👨‍🏫

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]

const plusNumbers = []
const minusNumber = []

for(let i = 0; i <mixedNumbers.length; i++) {
    if(mixedNumbers[i] >= 0) {
        plusNumbers.push(mixedNumbers[i])
    }else{
        minusNumber.push(mixedNumbers[i])
    }
}
console.log(plusNumbers,minusNumber)


//Task 1 

const x = 20
const y = 58
const z = 42

console.log(x + y + z)

//Task 2

const minutes = 60
const hours = 60
const days = 24
const years = 365

let myAgeInSeconds = 630720000

console.log(minutes*hours*days*years*myAgeInSeconds)
//Task 3

const count = 42
const userName = '42'

console.log(typeof String(count))
console.log(typeof Number(userName))

//Task 4

let a = 1
let b = 2
let c = "белых медведей"

console.log(a + String(b)+ c)

//Task 5 

let aa = "доступ"
let bb = "морпех"
let ss = "наледь"
let xx = "попрек"
let zz = "рубило"

let lengthWords = aa.length + bb.length + ss.length + xx.length + zz.length

console.log(lengthWords)

//Task 6 

const string = "морпех"
const number = 43
const boolean = false

console.log(`Variable:` + string + ` have type:` + typeof string)
console.log(`Variable:` + number + ` have type:` + typeof number)
console.log(`Variable:` + boolean + ` have type:` + typeof boolean)

//Task 7

alert(`Hello`);
let name = prompt("NAME");
let age = prompt('age?', 18);
alert(age)
const info = `name:${name}
age:${age}`
console.log(info)

//ADVANCED level

//В данном послании скрыт шифр! Чтобы его разгадать нам нужно соединить все вторые символы слов!

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

const cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]

console.log(cipher)
//Создайте переменную **`cipher`** и поместите туда необходимые символы
 Yan_Skvoroda
