// // Task 1
// let number = Number(prompt("number:"))

// function getSum(lastNumber) {
//    if (typeof(lastNumber) === "number" && lastNumber > 0) {
//       let result = 0
//       for (let i = 0; i <= lastNumber; i++) {
//          result = result + i
//       }
//       return result
//    }
//    else if (typeof(lastNumber) === "number" && lastNumber > 0) return 0
//    else return "try again"
// }

// console.log(getSum(number))

// // Task 2
// function getCredit(number){
//    if (typeof(number) === "number" && number > 1000){
//       let result = 0
//       result = number * 0.17 * 5
//       return result  
//    }
//    else return "your loan is not approved"
// }
// console.log(getCredit(2000))

// // Task 3
// function trimString(str, from, to){
//    return str.slice(from, to)
// }
// console.log(trimString("homework", 4, 8))

// // Task 4
// function getSam(a, b) {
//    if (a == b) return a 
//    let result = 0
//    result = a + b
//    return result

// }
// console.log(getSam(10,-6))

// // Task 5
// function fooboo (bool, f1, f2){
//    if(bool){
//       f1()
//    }
//    else {
//       f2()
//    }
// }
// fooboo(true, function (){console.log("foo")}, function (){console.log("boo")})

// ADVANCED level
// // Task 1
// function checkTriangel(a, b, c){
//    return (a + b > c && a + c > b && c + b > a) 
// }
// console.log(checkTriangel(3, 6, 8))

// // Task 2
// function chocolateBar(n, m) {
//    if ((!n || !m) || (n === 0 || m === 0) || (n < 0 || m < 0)) {
//       return 0
//    } else if (n === 1 && m === 1) {
//       return 1
//    } else if (n === 1 && m > 1) {
//       return m - 1
//    }
//    else {
//       return (n - 1) * m
//    }

// }
// console.log(chocolateBar(5, 4))

// Task 3
let myAccount = Number(prompt("введите баланс банковского счета:"))
const tax = 0.15
const phonePrice = 800
const accessoriesPrice = 50

function taxSum() {
   totalTax = (phonePrice + accessoriesPrice) * tax
   return totalTax
}

function resultPrice() {
   totalPrice = taxSum() + (phonePrice + accessoriesPrice)
   return totalPrice
}

function stringFormatig(str){
   return `${str}$`
}

console.log(stringFormatig(resultPrice()))
 
let shoppingCount = 0
while(myAccount > resultPrice()){
   myAccount -= resultPrice()
   shoppingCount++
}
console.log(shoppingCount)
