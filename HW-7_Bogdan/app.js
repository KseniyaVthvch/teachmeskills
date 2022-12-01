//TASK1

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

function fibo(fi) { fi.forEach(element => console.log(element))}

console.log(fibonacci)

fibonacci.forEach(element =>  console.log(element));

//TASK2

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

const newUsers = users.map((element1, index) => {
const newElem = `member ${index + 1}:${element1}`
return newElem
})
console.log(newUsers)


function newUsers1(array) {
    return array.map((element2, index)=> `member ${index+1}: ${element2}`)
}

console.log(newUsers1(users))

//TASK3

const numbers = [7, -4, 32, -90, 54, 32, -21]

const result = numbers.filter(numbers => numbers >= 0);
console.log(result)


function positivNumbers(array1){
    return array1.filter(intem => intem >= 0)
}

console.log(positivNumbers(numbers))

//TASK4

const fibonacci1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

const newValue = 0

const sumNewValue = fibonacci1.reduce((accumulator , currentValue) => accumulator + currentValue, newValue );
console.log(sumNewValue)


function sumNewValue1(array2){
    return array2.reduce((accumulator1,currentValue1) => accumulator1+currentValue1)
}

console.log(sumNewValue1(fibonacci1))

//TASK 5
const numbers3 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

const numbers4 = numbers3.find((number) => {
    return number % 2 === 0;
  })
  console.log(numbers4)
