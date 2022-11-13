//TASK 1 

    let res = 0

    function getSum (num) {
        for (let i = 0; i <= num; i++) {
            res = res + i
        }
        return res
    }

    console.log(getSum(100))

//TASK 2

    function Credit(bog) {
    const percentage = 0.17
    const years = 5
    let result = bog * percentage * years
    return result
    }
    let result = Credit(100)
    console.log(result)
 
//TASK 3
    function trimString (string, a, b) {
        let res1 = string.slice(a, b)
        return res1
    }

    console.log(trimString("Bogdan", 0, 3))	

//TASK 4

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
//Task1
function getTriangle(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
       console.log("True")
    } else {
       console.log("False")
    }
 }
 getTriangle(1, 5, 9)


 