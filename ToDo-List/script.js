// A simple, web - based Personal Task Manager app that lets users add,
//  complete, filter, and delete tasks with priority labels.Tasks are stored 
// temporarily in memory—no backend or database required.Clean UI, 
// efficient functionality, and ideal for managing daily to - dos.


const button = document.getElementById('button');
const taskInput = document.getElementById('taskInput');
const app = document.getElementById('app');
const search = document.getElementById('search');
const searchButton = document.getElementById('search-button')
const ul = document.getElementById('ul')


function addTask() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const input = taskInput.value.trim();
    if (input === '') return;

    tasks.push(input);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskInput.value = ''; // clear input

    const li = document.createElement('li');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';

    const drop = document.createElement('select'); // 👈 new select for this task
    const priorities = ['Select Priority', 'High', 'Medium', 'Low'];
    priorities.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p;
        opt.textContent = p;
        drop.appendChild(opt);
    });

    // Change color on select
    drop.addEventListener('change', () => {
        if (drop.value === 'High') drop.style.color = 'red';
        else if (drop.value === 'Medium') drop.style.color = 'orange';
        else if (drop.value === 'Low') drop.style.color = 'green';
        else drop.style.color = 'black';
    });

    // Initialize color
    drop.style.color = 'black';

    li.textContent = input + ' ';
    li.appendChild(checkBox);
    li.appendChild(drop);
    li.appendChild(deleteButton);

    ul.appendChild(li);
    app.appendChild(ul); // Only needed once ideally, but fine here

    deleteButton.addEventListener('click', (e) => {
        e.target.parentNode.remove();
    });
}






button.addEventListener('click', addTask);

searchButton.addEventListener('click', () => {

    const sinput = search.value.toLowerCase()
    const listItems = document.querySelectorAll('li')

    listItems.forEach((listItem) => {
        const taskText = listItem.firstChild.textContent.toLowerCase();

        if (taskText.includes(sinput)) {
            listItem.style.display = 'block';
        } else {
            listItem.style.display = 'none';
        }
    });

})




