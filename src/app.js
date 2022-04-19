import './style.css';
import createProject from './createProject';
import createTodo from './createTodo';

const myProjects = [];

const projectbtn = document.querySelector('#projectbtn');
projectbtn.addEventListener('click', () => {
    const projectname = document.querySelector('#projectinput');
    const newproject = createProject(projectname.value);
    myProjects.push(newproject);
    const maincontent = document.querySelector('.maincontent');
    const aqua = document.createElement('span');
    aqua.textContent = myProjects[myProjects.length - 1]['projectname'];
    maincontent.appendChild(aqua);
});

const addbtn = document.querySelector('#addbtn');
addbtn.addEventListener('click', () => {
    // Form Inputs:
    const todotitle = document.querySelector('#todotitle');
    const descrip = document.querySelector('#description');
    const date = document.querySelector('#date');
    const priority = document.querySelector('#priority');
    const selectProject = document.querySelector('#selectProject');
    // Form Button:
    const newtodo = createTodo(todotitle.value, descrip.value, date.value, priority.value, selectProject.value);
    if (newtodo.projectselector.value ===  aqua.textContent) {
        aqua.appendChild(newtodo);
    } else console.log("No Project Found");
    //
});
