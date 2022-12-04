//1
const obj = {
   name: "Misha",
   age: 27,
}
console.log(obj)

delete obj.name
delete obj.age

console.log(obj)

//2
const obje = {
   name1: "Misha",
   age1: 27
}
if ("name1" in obje) {
   console.log(true)
}
else {
   console.log("try again")
}

//3
const student = {
   name: 'John',
   age: 19,
   isHappy: true
}
for (const key in student) {
   console.log(key)
}
for (const key in student) {
   console.log(student[key])
}

//4
const colors = {
   'ru pum pu ru rum': {
      red: 'красный',
      green: 'зеленый',
      blue: 'синий'
   },
};
console.log(colors['ru pum pu ru rum'].red)
console.log(colors['ru pum pu ru rum'].blue)

//5
let salaries = {
   andrey: 500,
   sveta: 413,
   anton: 987,
   andrey: 664,
   alexandra: 199
}
let sum = 0
for (let key in salaries) {
   sum = sum + salaries[key]
}
const result = sum / 5
console.log(result)

//ADVANCED level
//1

let student1 = {
   name: 'Polina',
   age: 27,
}

let student2 = {
   name: 'Polina',
   age: 27,
}
console.log(JSON.stringify(student1) === JSON.stringify(student2))

//2
const animals = {
   cat: {
      name: 'Енчик',
      age: 3,
   },
   dog: {
      name: 'Орео',
      age: 2,
   }
}
console.log(animals?.cat)
console.log(animals?.dog)
console.log(animals?.bird)