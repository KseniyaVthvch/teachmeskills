//1
function getSum(a) {
   let b = 0;
   for (let i = 0; i <= a; i++) {
      b += i;
   }
   console.log(b);
}
getSum(100)

//2
function Credit(c) {
   const procent = 0.17
   const years = 5

   const s = procent * years * c
   console.log(s)
}
Credit(1000)

//3
function strimString(string, w, e) {
   let str = string.slice(w, e)
   console.log(str)
}
strimString(`privet`, 1, 5)

//4
function getSum(a, b) {
   let g = 0

   for (let i = a; i <= b; i++) {
      g = g + i
   }
   return g
}

console.log(getSum(1, 0))    //не понимаю почему у меня тут получается  0
console.log(getSum(1, 2))
console.log(getSum(0, 1))
console.log(getSum(1, 1))
console.log(getSum(-1, 0))
console.log(getSum(-1, 2))

//5


function fooboo(a, a1, a2) {
   if (a === true) {
      a1()
   }
   else {
      a2()
   }
}

function foo() {
   console.log("foo")
}

function boo() {
   console.log("boo")
}
fooboo(true, foo, boo)

//Advanced 
//1

function getNum(a, b, c) {
   let result = true
   if ((a + b > c) && (a + c > b) && (c + b > a)) {
      result = false
   }
   return result
}
console.log(getNum())



