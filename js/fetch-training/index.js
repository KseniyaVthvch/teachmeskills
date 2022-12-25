const rootTag = document.getElementById('root');
const div=document.createElement('div');
div.classList.add("container");
rootTag.appendChild(div);

const list = document.createElement('ul');
div.appendChild(list);

const printTodos =(item)=> {
    const {id,title}=item;
    const li = document.createElement('li');
     li.classList.add("point")
     li.textContent=`${id}.${title}`
     list.appendChild(li)
 }
async function getTodos(){
    let result= await fetch('https://jsonplaceholder.typicode.com/todos')
    let data = await result.json()
    data.forEach(item => {
        printTodos(item)
     });
}
getTodos()



