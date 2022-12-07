const root = document.getElementById("root")

const title = document.createElement("h1")
title.setAttribute ("class", "title")
title.textContent = "My list to do "
root.appendChild(title)

const entertodo= document.createElement('div')
entertodo.classList.add("entertodo")
root.appendChild(entertodo)

const buttonDelete = document.createElement('button')
buttonDelete.classList.add("save")
buttonDelete.innerText = 'Delete all'
entertodo.appendChild(buttonDelete)


const add = document.querySelector('#add');
entertodo.appendChild(add)

const todo= document.createElement('div')
todo.classList.add("todo")
root.appendChild(todo)

const checklist = document.querySelector('#checklist');
todo.appendChild(checklist)

const buttonAdd = document.createElement("button")

buttonAdd.type='button'
buttonAdd.classList.add("clear")
buttonAdd.innerText = 'Add'
entertodo.appendChild(buttonAdd)

add.addEventListener('blur', function() {
	const li = document.createElement('li');
	checklist.appendChild(li);

    const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	li.appendChild(checkbox);
	checkbox.addEventListener('click', function() {
		li.classList.toggle('done');
	});
	
	const span = document.createElement('span');
	span.innerHTML = this.value;
	this.value = '';
	li.appendChild(span);
	span.addEventListener('click', function func() {
		let input = document.createElement('input');
		input.value = this.innerHTML;
		this.innerHTML = '';
		this.appendChild(input);
		
		this.removeEventListener('click', func);
		
		input.addEventListener('blur', function() {
			span.innerHTML = this.value;
			span.addEventListener('click', func);
		});
	});
		
	const remove = document.createElement('button');
   	remove.innerHTML = 'X';
	remove.href = '';
	li.appendChild(remove);
	remove.addEventListener('click', function(event) {
		li.parentElement.removeChild(li);
		
		event.preventDefault();
	});

    const buttonDate = document.createElement('button');
    buttonDate.setAttribute('class','button');
    buttonDate.type='date';
    
    buttonDate.innerHTML = '';
        const date = new Date();
        const now = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
        buttonDate.textContent = now;

     li.appendChild(buttonDate);
    
     buttonDelete.addEventListener('click', function(event) {
		li.parentElement.removeChild(li);
		event.preventDefault();
	});

});