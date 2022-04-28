// Object that manipulates the DOM(HTML);
export default class Dom {

    static drawProject (aprojectname, appendedplace) {
        const span = document.createElement('span');
        span.textContent = aprojectname;
        span.setAttribute('id', aprojectname);
        appendedplace.appendChild(span);
    };

    static addProjectToForm (aprojectname, appendedplace) {
        const option = document.createElement('option');
        option.textContent = aprojectname;
        option.value = aprojectname;
        appendedplace.appendChild(option);
    };
    
    static classToAdd(classname, element) { classname
        ? element.classList.add(classname)
        : console.log('nada');
    };

    static changeBorder(classname, element) { BorderClasses[classname]
        ? element.classList.add(BorderClasses[classname])
        : console.log('nada');
    };

    static drawToDo (todotitle, date, priority) {
        const adiv = document.createElement('div');
        adiv.classList.add('todo');
        const atitle = document.createElement('p');
        atitle.textContent = todotitle;
        const adate = document.createElement('p');
        adate.textContent = date;
        const apriority = document.createElement('p');
        apriority.textContent = priority;
        this.classToAdd(priority, apriority);
        this.changeBorder(priority, adiv);
    };
}

const BorderClasses = {
    High: 'borderhigh',
    Normal: 'bordernormal',
    Low: 'borderlow'
}