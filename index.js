//NORMAL level

//Task 1 💻

function getSum(n) {
    let myFn = 0
    for(let i = 0; i <= n; i++) {
        myFn += i
    }
    console.log(myFn)
}

getSum(100)  /////////////////////////   (тут почему то не работает , но раньше работала)

//Task 2 💻

function getCredit(amount) {
    const proc = 0.17
    const years = 5

    const a = amount * proc *years

    console.log(a)
}

getCredit(1000)

//Task  3💻

function trimString(string , b, v) {
   let str = string.slice(b,v)
   console.log(str) 
}

trimString(`Привте`,0,2)

//Task 4 💻

function getSum (a,b) {
    let get = 0
    if(a === b) {
        return a
    }else {
        for(let i = a; i <= b; i++) {
            get = get + i
        }
        return get
    }
} 
console.log(getSum(2,7))

//Task 5 💻

const indexBooFoo = prompt(`Введите 1 или 0`,`1`)
const myFn = Boolean(indexBooFoo)

function foo(bool) {
    if(bool === true) {
        console.log(`foo`)
    }
}
function boo(bool) {
    if(bool === false) {
        console.log(`boo`)
    }
}
function fooboo (bool) {
    foo(bool)
    boo(bool)
}
fooboo(myFn)

//ADVANCED level