// TASK 1
const newObj = {
   name: "Alexandra",
   age: 27
}
delete newObj.name
delete newObj.age
console.log(newObj)

// TASK 2
const secondObg = {
   city: 'Slonim',
   secName: 'Marchik'
}
console.log('city' in secondObg)


// TASK 3
const student = {
   name: 'John',
   age: 19,
   isHappy: true
}
for (let key in student) {
   console.log(key)
   console.log(student[key])
}

// TASK 4
const colors = {
   'ru pum pu ru rum': {
      red: 'красный',
      green: 'зеленый',
      blue: 'синий'
   },
};
console.log(colors["ru pum pu ru rum"].red)
console.log(colors["ru pum pu ru rum"].blue)

// TASK 5
const salaries = {
   andrey: 500,
   sveta: 413,
   anton: 987,
   andrey: 664,
   alexandra: 199,
}
let result = 0
let res2;
function newSal(obj) {
   for (let k in salaries) {
      result += salaries[k]
      res2 = result / 5
   } return res2
}
salaries.sum = res2
console.log(salaries)


// Когда объявляю через const переменные result, res2 появляется ошибка "SyntaxError: Missing initializer in const declaration", но меняю на let  и все ок 

//TASK 6
const regist = {
   log: prompt('Введите логин'),
   par: prompt('Введите пароль'),
   login: prompt('Подтверждение логина'),
   passward: prompt('Подтверждение пароля'),
}
function registYes() {
   if (regist.log === regist.login && regist.par === regist.passward) {
      console.log(alert('Добро пожалоВать.'))
   } else {
      console.log(alert('Введите верные логин/пароль'))
   }
}

registYes()


//ADVANCED level
//Task 1
let student1 = {
   name: 'Polina',
   age: 27,
}
let student2 = {
   name: 'Polina',
   age: 27,
}
console.log(JSON.stringify(student1) === JSON.stringify(student2))

//TASK 2
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
console.log(animals?.cat.name)
console.log(animals?.dog.name)
console.log(animals?.bird)
