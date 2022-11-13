//TASK 1

function getSum(n) {
   if (typeof n === 'number' && n >= 0) {
      let result = 0
      for (let i = 1; i <= n; i++) {
         result = result + i
      }
      return result
   } else {
      return "no correct"
   }
}
const sum = getSum(100)
console.log("sum", sum)


//TASK 2

function calcCred(a) {
   const year = 5
   const per = 1.17
   return a * year * per - a * year
}
let res = calcCred(100)
console.log(res)

// TASK 3
function trimString(str, num1, num2) {
   return str.slice(num1, num2)
}
let str1 = trimString('Привет', 1, 3)
console.log(str1)

// TASK 4

function getSum(num1, num2) {
   let summ = 0;
   for (let j = num1; j <= num2; j++) {
      summ += j;
   }
   return summ
}
let v = getSum(0, 3)
console.log('result = ' + v)



//TASK 5

function fooboo(b, func1, func2) {

   if (b == true) {
      func1();
   } else {
      func2();
   }
}
function foo() {
   console.log("Foo")
}
foo()
function boo() {
   console.log("Boo")
}
boo()
fooboo(false, foo, boo)

//ADVANCED level

// TASK 1

function getTriangle(a, b, c) {
   if (a + b > c && a + c > b && b + c > a) {
      console.log("True")
   } else {
      console.log("False")
   }
}
getTriangle(15, 15, 10)

// TASK 2
function getChoc(n, m) {
   if (n > 1 && m >= 1) {
      const resul = n * m - 1
      return resul
   } else {
      return 0
   }
}
let full = getChoc(1, 1)
console.log(full)




