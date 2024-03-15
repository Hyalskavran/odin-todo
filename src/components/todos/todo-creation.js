import './form.css'

export default function createTodo() {
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
    form.appendChild(submitButton);

    return form
}