//TASK1
 const user = {
   name: "Poncik",
   lastName: "Perajok"
 }
    delete user.name
    delete user.lastName

    console.log(user)

//TASK2
const user1 = {
    name: "Poncik",
    lastName: "Perajok"
  }

  console.log("name" in user1)

//TASK3
const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

for (const k in student) {
	console.log(k)
	console.log(student[k])
}

//TASK4
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий',

    },
}

console.log(colors['ru pum pu ru rum'].red, colors['ru pum pu ru rum'].blue)

//TASK5

const salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
}

function sumSalaries(salaries) {
    let sum = 0
    for (let k in salaries) {
        sum += salaries[k];
    }

    return sum/5
}

console.log(sumSalaries(salaries))


//TASK6
    const user2 = {};
    const userName = prompt('Enter your name');
    const userPassword = prompt('Enter your password');
    user2.name = userName;
    user2.password = userPassword;

    const confirmUserName = prompt("Confirm name");
    const confirmUserPassword = promp("Confirm password");
   
    if (user2.name  === confirmUserName && user2.password === confirmUserPassword ) {
        console.log("Welcome.")
    } else { console.log("EROR") }




   

//Advanced level
//Task1
let student1 = {
    name: 'Polina',
    age: 27,
  }
  
  let student2 = {
    name: 'Polina',
    age: 27,
  }
  
  console.log(JSON.stringify(student1) === JSON.stringify(student2));


    
