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
    }
}