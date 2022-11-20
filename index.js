//NORMAL level
//Task 1 💻

const myObj ={
    a: `aaaaaa`,
    b: `bbbbbb`
}

delete myObj.a
console.log(myObj)

//Task 2 🖥

 const myObj2 ={
    a: `aaaaaa`,
    b: `bbbbbb`
 }
console.log(`a` in myObj2)

//Task 3 🖥

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}
for(key in student) {
    console.log(key)
    console.log(student[key])
}

//Task 4 🖥

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};

console.log(colors[ 'ru pum pu ru rum'].red,colors[ 'ru pum pu ru rum'].blue)

//Task 5 🖥

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
}

let sum = 0
for(k in salaries) {
    sum = sum  + salaries[k]
}
const res = sum/5
console.log(res)

//Task 6 🖥.

const entLogin = prompt(`Введите логин`)
const entPassword = prompt(`Введите пароль`)

const entData = {
    login: entLogin,
    Password: entPassword
}

const confirmLogin = prompt(`Подтвердите логин`)
const confirmPassword = prompt(`Подтвердите пароль`)

const confirmData = {
    login: confirmLogin,
    Password: confirmPassword
}

if(entData.login === confirmData.login && entData.Password === confirmData.Password) {
    console.log(`Добро пожаловать`)
}else{
    console.log(`Данные не совпадают`)
}

//ADVANCED level

//Task 1 🖥

    let student1 = {
        name: 'Polina',
        age: 27,
    }

    let student2 = {
        name: 'Polina',
        age: 27,
    }

console.log(JSON.stringify(student1) === JSON.stringify(student2))

//Task 2 🖥

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

console.log(animals.bird?.name)