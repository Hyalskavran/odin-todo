import './form.css'
import { animals } from '../animals/animals'
import { Todo } from './todo-item';

let todos = [];

const storedTodos = localStorage.getItem('todos');
if (storedTodos) {
    todos = JSON.parse(storedTodos);
    
} 

function createForm() {
    const form = document.createElement('form');
    
    const titleLabel = document.createElement('label');
    titleLabel.classList.add('title-label');
    titleLabel.textContent = 'Title:';

    const titleInput = document.createElement('input');
    titleInput.classList.add('title-input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'title');

    const descriptionLabel = document.createElement('label');
    descriptionLabel.classList.add('description-label');
    descriptionLabel.textContent = 'Description:';

    const descriptionTextArea = document.createElement('textarea');
    descriptionTextArea.classList.add('description-textarea');
    descriptionTextArea.setAttribute('name', 'description');

    const dueDateLabel = document.createElement('label');
    dueDateLabel.classList.add('duedate-label');
    dueDateLabel.textContent = 'Due Date:';

    const dueDateInput = document.createElement('input');
    dueDateInput.classList.add('duedate-input');
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.setAttribute('name', 'due-date');

    const priorityLabel = document.createElement('label');
    priorityLabel.classList.add('priority-label');
    priorityLabel.textContent = 'Priority (1-10):';

    const priorityInput = document.createElement('input');
    priorityInput.classList.add('priority-input');
    priorityInput.setAttribute('type', 'number');
    priorityInput.setAttribute('name', 'priority');
    priorityInput.setAttribute('min', '1');
    priorityInput.setAttribute('max', '10');

    const groupLabel = document.createElement('label');
    groupLabel.classList.add('group-label');
    groupLabel.textContent = 'Group:';

    const groupSelect = document.createElement('select');
    groupSelect.classList.add('group-select');
    groupSelect.setAttribute('name', 'group');

    animals.forEach(animal => {
        const option = document.createElement('option');
        option.value = animal.name;
        option.textContent = animal.name;
        groupSelect.appendChild(option);
    });

    const submitButton = document.createElement('button');
    submitButton.classList.add('submit');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Submit';

    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(descriptionLabel);
    form.appendChild(descriptionTextArea);
    form.appendChild(dueDateLabel);
    form.appendChild(dueDateInput);
    form.appendChild(priorityLabel);
    form.appendChild(priorityInput);
    form.appendChild(groupLabel);
    form.appendChild(groupSelect);
    form.appendChild(submitButton);

    form.addEventListener('submit', function(event) {
        event.preventDefault()

        const titleValue = titleInput.value;
        const descriptionValue = descriptionTextArea.value;
        const dueDateValue = new Date(dueDateInput.value);
        const priorityValue = +priorityInput.value;
        const groupValue = groupSelect.value;

        try {
            const todo = new Todo(titleValue, descriptionValue, dueDateValue, priorityValue, groupValue);
        } catch (error) {
            console.log(error.message);
        }

        this.reset()
    })

    return form
}

export {
    createForm
}