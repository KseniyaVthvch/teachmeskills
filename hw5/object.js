// Task 1 
//Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта.

const obj = {
   name : "Julia",
   age: 22,
}

console.log(obj);

delete obj.name
delete obj.age

console.log(obj);

// ниже код не по заданию, просто попробовала сделать так:
function user(name3, age3) {
   const objUser = {
      name3,
      age3,
   }
   return objUser
}
console.log(user("Ju", 22));

// Task 2 🖥
//Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true**

const newObj = {
   name2 : "Artem",
   age2 : 22,
}

if ("name2" in newObj) {  //если без ковычек, то это обращение к переменной (пометила для себя)
   console.log(true);
} else {
   console.log("try again");
}

// Task 3 

//Дан обьект. C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта.

    const student = {
        name: 'John',
        age: 19,
        isHappy: true,
    }

    for (const key in student) {
      console.log(key);
    }

    for (const key in student) {
      console.log(student[key]);
    }

// Task 4 

//Дан обьект. Вывести в консоль слово красный и синий

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};


console.log(colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].blue);

//! Task 5 

//Дан обьект. Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

    let salaries = {
        andrey: 500,     //одинаковые имена у ключей, так и должно быть?
        sveta: 413,
        anton: 987,
        andrey: 664,
        alexandra: 199
    }

let sum = 0
for (let k in salaries) {
   sum = sum + salaries[k]
}

const res = sum/5

console.log(res);

//! Task 6 

// Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект.
// Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение **Добро пожалоВать**.




// ADVANCED level

// Task 1 

// Даны два одинаковых обьекта. Сравните их так чтобы они были равны

    let student1 = {
        name: 'Polina',
        age: 27,
    }

    let student2 = {
        name: 'Polina',
        age: 27,
    }

console.log(JSON.student1 === JSON.student2);

// Task 2 

// У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль. Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим **ОШИБКУ**.
// Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше.

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