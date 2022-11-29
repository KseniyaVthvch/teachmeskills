

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

//1

fibonacci.forEach ((alem) => alem)

console.log(fibonacci)

//2

function myFn(alem) {
   console.log(alem)
}

fibonacci.forEach(myFn)

// Task 2 🖥

   const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

//1

function myFn(alem, index) {
   return `member${index +1} : ${alem}`
}

console.log(users.map(myFn))

//2

const member = users.map((alem,index) => `member${index + 1} : ${alem}`)

console.log(member)

// Task 3 🖥

   const numbers = [7, -4, 32, -90, 54, 32, -21]

//1

const filt = numbers.filter((alem) => {
   return alem >= 0
})

console.log(filt)

//2

function myFunc(alem) {
   return alem >= 0
}

console.log(numbers.filter(myFunc))

// Task 4 🖥

const fibonaccci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

//1 

const reduc =  fibonaccci.reduce((acc,alem) => {
   return acc + alem
}, 0)

console.log(reduc)

//2

function reduc2(acc, alem) {
  return acc + alem
} 

console.log(fibonaccci.reduce(reduc2))

// Task 5 🖥

   const numbers2 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

//1

const honest = numbers2.find((alem) => {
   return alem % 2 === 0
})

console.log(honest)

//2

function honest2(alem) {
   return alem % 2 === 0
}

console.log(numbers2.find(honest2))

// ADVANCED level

// Task 1 👨‍🏫

function Student(salary, rate , name) {
   this.salary = salary
   this.rate = rate
   this.name = name

   this.checkRate = function() {
       let credit = 0
       if(this.rate === `A`) {
           return credit = salary * 12
       }else if(this.rate === `B`) {
           return credit = salary * 9
       }else if(this.rate === `C`) {
           return credit = salary * 6
       }else if(this.rate === `D`) {
           return credit = 0
}   }   }
const stud1 = new Student(1000, `A`, `Darya`)
const stud2 = new Student(1000, `B`, `Masha`)
const stud3 = new Student(1000, `C`, `Denis`)
const stud4 = new Student(1000, `D`, `Vitaliy`)
const stud5 = new Student(1000, `A`, `Polina`)

const students = [stud1, stud2, stud3, stud4, stud5]

console.log(students.reduce((acc,alem) => {
   return acc + alem.checkRate()
},0))