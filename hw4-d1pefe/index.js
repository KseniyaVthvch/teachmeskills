// task 1

function getSum(n) {
    let sum = 0;
     for (var i = 0; i <= n; i++) {
         sum += i;
      }
     console.log(sum);
}

getSum(100)

// task 2

function getCreditSum(my) {
    const proc = 0.17
    const years = 5
    
    const onlyProcent = (my*proc)*years
    const creditSum = my+onlyProcent

    console.log(creditSum)
}

getCreditSum(10)

//task 3

function trimString (s, k, l) {
	let str = s.slice(k, l)
	return str
}

console.log(trimString(`Привет`, 2, 4))	

//task 4

function getSumSec (a, b) {
    let sumSec = 0
	if (a === b) {
		return a
	} else {
		for(let i = a; i <= b; i++) {
			sumSec = sumSec + i
		}
		return sumSec
	}
}

console.log(getSumSec(1, 2))
console.log(getSumSec(-2, 3))


//task 5

const indexFooBoo = prompt('Введите число для задачи значения(0-false, 1-true)', 1)
const indexFooBooNum = Number(indexFooBoo)
const bole = Boolean(indexFooBooNum)



function foo(bool1) {
    if(bool1 === true){
        console.log('foo')
    }
}

function boo(bool1) {
    if(bool1 === false){
        console.log('boo')
    }
}

function fooboo(bool){
    foo(bool)
    boo(bool)
}

fooboo(bole)

// ADVANCED Level

//Task 1


function triangle(v, m, n){
    if(v + m > n && m + n > v && v + n > m){
        console.log(`true`)
    } else {
        console.log(`false`)
    }
}

const m1 = prompt('Первая сторона треугольника?', 1)
const m2 = prompt('Вторая сторона треугольника?', 1)
const m3 = prompt('Третья сторона треугольника?', 1)

triangle(m1, m2, m3)
