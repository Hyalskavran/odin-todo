import { format } from 'date-fns'
import './todo-item.css'

class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = ""
        this.checklist = []
    }

    get title() {
        return this._title
    }

    set title(newTitle) {
        (newTitle.length > 2) ? this._title = newTitle : alert('Title must be at least 3 characters long.')
    }

    get description() {
        return this._description
    }

    set description(newDescription) {
        this._description = newDescription
    }

    get dueDate() {
        return this._dueDate
    }

    set dueDate(date) {
        (date instanceof Date) ? this._dueDate = format(date, 'dd/MM/yyyy') : alert('Only Dateformat is accepted.')
    }

    get priority() {
        return this._priority
    }

    set priority(num) {
        (typeof num === 'number' & num >= 1 && num <= 10) ? this._priority = num : alert('Only numbers between 1 and 10 are accepted.')
    }

    // get notes() {
    //     return this._notes
    // }

    // set notes(note) {
    //     this._notes = note
    // }

    // get checklist() {
    //     return this.checklist
    // }

    // set checklist(item) {
    //     this.checklist.push(item)
    // }

    // fillBar(num) {
    //     const priorityElementBar = document.querySelector('.priority-bar');
    //     const percentage = (num / 10) * 100;
    //     priorityElementBar.style.width = `${percentage}%`;
    // }

    createTodo(num) {
        const todoDiv = document.createElement('section');

        const titleElement = document.createElement('h2');
        titleElement.classList.add('title');

        const descriptionElement = document.createElement('p');
        descriptionElement.classList.add('description');

        const dueDateElementHeader = document.createElement('h4');
        dueDateElementHeader.classList.add('due-date-header');

        const dueDateElement = document.createElement('time');
        dueDateElement.classList.add('due-date-time');
        
        const priorityElementHeader = document.createElement('h4');
        priorityElementHeader.classList.add('priority-header');

        const priorityElementContainer = document.createElement('div');
        priorityElementContainer.classList.add('priority-container');

        const priorityElementBar = document.createElement('div');
        priorityElementBar.classList.add('priority-bar');

        // const notesElement = document.createElement('div');
        // const checklistElement = document.createElement('div');
        
        const completeElement = document.createElement('button');
        completeElement.classList.add('green');

        const cancelElement = document.createElement('button');
        cancelElement.classList.add('red');

        const percentage = (num / 10) * 100;

        titleElement.innerText = this.title;
        descriptionElement.innerText = this.description;
        dueDateElementHeader.innerText = "Due Date:"
        dueDateElement.dateTime = this.dueDate;
        dueDateElement.innerText = this.dueDate;
        priorityElementHeader.innerText = "Priority:"
        completeElement.innerText = "Complete ✔";
        cancelElement.innerText = "Cancel ✗";

        priorityElementContainer.appendChild(priorityElementBar);
        priorityElementBar.style.width = `${percentage}%`;
        priorityElementBar.style.backgroundColor = `hsl(${120 - percentage * 1.2}, 100%, 50%)`;

        todoDiv.appendChild(titleElement);
        todoDiv.appendChild(descriptionElement);
        todoDiv.appendChild(dueDateElementHeader);
        todoDiv.appendChild(dueDateElement);
        todoDiv.appendChild(priorityElementHeader);
        todoDiv.appendChild(priorityElementContainer);
        todoDiv.appendChild(completeElement);
        todoDiv.appendChild(cancelElement);

        // this.fillBar(this._priority);
        return todoDiv
    }
}

let todo = new Todo('Title', 'Description', new Date(), 5)

export {
    Todo,
    todo,
}