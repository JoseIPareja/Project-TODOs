import './style.css';
import createProject from './createProject';
import createTodo from './createTodo';

// INPUTS
const myProjects = [];

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
    let stringifiedprojects = JSON.stringify(myProjects);
    localStorage.setItem("A project", stringifiedprojects);
});


// drawProject
projectbtn.addEventListener('click', () => {
    const span = document.createElement('span');
    span.textContent = projectname.value;
    span.setAttribute('id', projectname.value);
    maincontent.appendChild(span);
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
    myProjects.forEach(project => {
        if (project.projectname == newtodo.projectselector) {
            project.todoslist.push(newtodo);
        } else return;
    });
    localStorage.setItem("A project", JSON.stringify(myProjects));
});


// drawTodo
addbtn.addEventListener('click', () => {
    const adiv = document.createElement('div');
    adiv.classList.add('todo');

    const atitle = document.createElement('p');
    atitle.textContent = todotitle.value;

    const adate = document.createElement('p');
    adate.textContent = date.value;

    const apriority = document.createElement('p');
    apriority.textContent = priority.value;
    if (apriority.textContent == "High") {
        apriority.classList.add('high');
        adiv.classList.add('borderhigh');  
    } else if (apriority.textContent == "Normal") {
        apriority.classList.add('normal');
        adiv.classList.add('bordernormal');
    } else apriority.classList.add('low'), adiv.classList.add('borderlow');

    let allspans = document.querySelectorAll('span');
    allspans.forEach(item => {
        if (item.id == selectProject.value) {
            item.appendChild(adiv);
            adiv.appendChild(atitle);
            adiv.appendChild(adate);
            adiv.appendChild(apriority);
        } else return;
    });
});


//Load & Draw localStorage
window.onload = function () {
    const archive = localStorage.getItem("A project");
    const parsedprojects = JSON.parse(archive);

    parsedprojects.forEach(project => {
        myProjects.push(project);
        //drawProject
        const span = document.createElement('span');
        span.textContent = project.projectname;
        span.setAttribute('id', project.projectname);
        maincontent.appendChild(span);
        //addingSelector
        const option = document.createElement('option');
        option.textContent = project.projectname;
        option.value = project.projectname;
        selectProject.appendChild(option);
        //drawTodo
        project.todoslist.forEach(todo => {
            const adiv = document.createElement('div');
            adiv.classList.add('todo');

            const atitle = document.createElement('p');
            atitle.textContent = todo.title;

            const adate = document.createElement('p');
            adate.textContent = todo.date;

            const apriority = document.createElement('p');
            apriority.textContent = todo.priority;
            if (apriority.textContent == "High") {
                apriority.classList.add('high');
                adiv.classList.add('borderhigh');  
            } else if (apriority.textContent == "Normal") {
                apriority.classList.add('normal');
                adiv.classList.add('bordernormal');
            } else apriority.classList.add('low'), adiv.classList.add('borderlow');

            let allspans = document.querySelectorAll('span');
            allspans.forEach(item => {
                if (item.id == todo.projectselector) {
                    item.appendChild(adiv);
                    adiv.appendChild(atitle);
                    adiv.appendChild(adate);
                    adiv.appendChild(apriority);
                } else return;
            });
        });
    });
};