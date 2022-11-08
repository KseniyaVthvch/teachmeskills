let x = 20
let y = 58
let z = 42
let s = x + y + z 
console.log(s)

let secondInMinute = 60
let minuteInHour = 60
let hourInDay = 24
let dayInYear = 365
let myAge = 23
let myAgeInSeconds = secondInMinute * minuteInHour * hourInDay * dayInYear * myAge
console.log(myAgeInSeconds) 

let count = 42
let userName = '42'
let integerToString = count
let stringToInteger = userName
integerToString = String(integerToString)
stringToInteger = Number(stringToInteger)
console.log(integerToString)
console.log(stringToInteger)

let a = 1
let b = 2
let c = "белых медведей"
let d = " "
a = String(a)
b = Number(b)
console.log(a + b + d + c)

let access = "доступ"
let marine = "морпех"
let rost = "наледь"
let reproach = "попрек"
let chopped = "рубило"
let concat = access + marine + rost + reproach + chopped
let lengthWords = concat.length
console.log(lengthWords)

let int = 22
let str = 'apple'
let bool = true
let typeInt = 'Number'
let typeStr = 'String'
let typeBool = 'Boolean'
console.log(`Variable: ${int} have type: ${typeInt}`)
console.log(`Variable: ${str} have type: ${typeStr}`)
console.log(`Variable: ${bool} have type: ${typeBool}`)

let name = prompt('Enter your name:')
let age = prompt('Enter your age:')
console.log(name)
console.log(age)

