import './style.css';
import createProject from './createProject';
import createTodo from './createTodo';

// INPUTS
const myProjects = [];
const myTodos = [];
const mySpans = [];
const projectname = document.querySelector('#projectinput');
const maincontent = document.querySelector('.maincontent');

const todotitle = document.querySelector('#todotitle');
const descrip = document.querySelector('#description');
const date = document.querySelector('#date');
const priority = document.querySelector('#priority');
const selectProject = document.querySelector('#selectProject');


// createProject
const projectbtn = document.querySelector('#projectbtn');
projectbtn.addEventListener('click', () => {
    const newproject = createProject(projectname.value);
    myProjects.push(newproject);
    const span = document.createElement('span');
    span.textContent = myProjects[myProjects.length - 1]['projectname'];
    span.setAttribute('id', myProjects[myProjects.length - 1]['projectname']);
    maincontent.appendChild(span);
    const anspan = Object.values(newproject);
    mySpans.push(anspan);
});


// addingSelector
projectbtn.addEventListener('click', () => {
    const option = document.createElement('option');
    option.textContent = projectname.value;
    option.value = projectname.value;
    selectProject.appendChild(option);
});


// createTodo
const addbtn = document.querySelector('#addbtn');
addbtn.addEventListener('click', () => {
    const newtodo = createTodo(todotitle.value, descrip.value, date.value, priority.value, selectProject.value);
    myTodos.push(newtodo);

    const adiv = document.createElement('div');
    adiv.classList.add('todo');
    
    let allspans = document.querySelectorAll('span');
    allspans.forEach(item => {
        if (item.id == newtodo.projectselector) {
            item.appendChild(adiv);
        } else return;
    });

    mySpans.forEach(arr => {
        if (arr == newtodo.projectselector) {
            const atitle = document.createElement('p');
            atitle.textContent = newtodo.title;
            adiv.appendChild(atitle);

            const adate = document.createElement('p');
            adate.textContent = newtodo.date;
            adiv.appendChild(adate);

            const apriority = document.createElement('p');
            apriority.textContent = newtodo.priority;
            adiv.appendChild(apriority);
            if (apriority.textContent == "High") {
                apriority.classList.add('high');
                adiv.classList.add('borderhigh');
            } else if (apriority.textContent == "Normal") {
                apriority.classList.add('normal');
                adiv.classList.add('bordernormal');
            } else apriority.classList.add('low'), adiv.classList.add('borderlow');
        } else return;
    });
});
