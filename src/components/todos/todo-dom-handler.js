import main from '../main/main';
import { todoStorage } from './todo-storage-handler'
import { createForm } from './form';

const todoDom = (function() {
    function getSideNavButtons() {
        const addTaskBtn = document.querySelector('.Add-Task');

        const sideNavButtons = [addTaskBtn]

        return sideNavButtons
    }
    
    function getAllNavButtons() {
        // Nav Buttons
        const LizardNav = document.querySelector('.LIZARD-btn');
        const SpiderNav = document.querySelector('.SPIDER-btn');
        const TurtleNav = document.querySelector('.TURTLE-btn');
        const FishNav = document.querySelector('.FISH-btn');
        const SnakeNav = document.querySelector('.SNAKE-btn');
        const MantisNav = document.querySelector('.MANTIS-btn');
        const FrogNav = document.querySelector('.FROG-btn');
        const SnailNav = document.querySelector('.SNAIL-btn');
        const CrabNav = document.querySelector('.CRAB-btn');
        const PetNav = document.querySelector('.PET-btn');
        const OtherNav = document.querySelector('.OTHER-btn');

        // Nav Buttons: List of all
        const navButtons = [LizardNav, SpiderNav, TurtleNav, FishNav, SnakeNav, MantisNav, FrogNav, SnailNav, CrabNav, PetNav, OtherNav]

        return navButtons
    }

    function buttonsGetGroup() {
        getAllNavButtons().forEach(btn => {
            btn.addEventListener('click', function() {
                todoStorage.setGroup(btn.innerText)
                renderTodos(btn.innerText, 'main')
            })
        })
    }

    function sideNavButtons() {
        getSideNavButtons().forEach(btn => {
            btn.addEventListener('click', function() {
                renderAddTask('main')
            })
        })
    }

    function renderTodo(todo) {
        // Todo element
        const todoDiv = document.createElement('section');
        todoDiv.classList.add('todo')

        // Title
        const titleElement = document.createElement('h2');
        titleElement.classList.add('title');
        titleElement.innerText = todo._title;
        todoDiv.appendChild(titleElement);

        // Description
        const descriptionElement = document.createElement('p');
        descriptionElement.classList.add('description');
        descriptionElement.innerText = todo.description;
        todoDiv.appendChild(descriptionElement);

        // Due date
        const dueDateElementHeader = document.createElement('h4');
        dueDateElementHeader.classList.add('due-date-header');
        dueDateElementHeader.innerText = "Due Date:"
        todoDiv.appendChild(dueDateElementHeader);

        const dueDateElement = document.createElement('time');
        dueDateElement.classList.add('due-date-time');
        dueDateElement.dateTime = todo._dueDate;
        dueDateElement.innerText = todo._dueDate;
        todoDiv.appendChild(dueDateElement);
        
        // Priority
        const priorityElementHeader = document.createElement('h4');
        priorityElementHeader.classList.add('priority-header');
        priorityElementHeader.innerText = "Priority:"
        todoDiv.appendChild(priorityElementHeader);

        const priorityElementContainer = document.createElement('div');
        priorityElementContainer.classList.add('priority-container');
        todoDiv.appendChild(priorityElementContainer);

        const priorityElementBar = document.createElement('div');
        priorityElementBar.classList.add('priority-bar');

        const percentage = (todo._priority / 10) * 100;

        priorityElementContainer.appendChild(priorityElementBar);
        priorityElementBar.style.width = `${percentage}%`;
        priorityElementBar.style.backgroundColor = `hsl(${120 - percentage * 1.2}, 100%, 50%)`;

        // const notesElement = document.createElement('div');
        // const checklistElement = document.createElement('div');
        
        // Button: Complete
        const completeElement = document.createElement('button');
        completeElement.classList.add('green');
        completeElement.innerText = "Complete ✔";
        todoDiv.appendChild(completeElement);

        // Button: Cancel
        const cancelElement = document.createElement('button');
        cancelElement.classList.add('red');
        cancelElement.innerText = "Cancel ✗";
        todoDiv.appendChild(cancelElement);

        const buttons = [completeElement, cancelElement]

        buttons.forEach(btn => {
            btn.addEventListener('click', function() {
                const todosList = todoStorage.retrieveTodos(todo._group)
                const updatedTodosList = todosList.filter(item => item.id !== todo.id)

                localStorage.setItem(`${todo._group}-todos-list`, JSON.stringify(updatedTodosList))

                renderTodos(todo._group, 'main')
            })
        })

        return todoDiv
    }

    function renderTodos(group, domMainElement) {
        const mainDom = document.querySelector(domMainElement);
        const existingGroupSection = document.querySelector('.group-section');
        const existingAddTaskSection = document.querySelector('.add-task-section');

        if (existingGroupSection) {
            existingGroupSection.remove()
        } else if (existingAddTaskSection) {
            existingAddTaskSection.remove()
        }

        const groupSection = document.createElement('section');
        groupSection.classList.add('group-section');

        const todos = todoStorage.retrieveTodos(group)
        todos.forEach(todo => {
            groupSection.appendChild(renderTodo(todo))
        })

        mainDom.appendChild(groupSection);

        return mainDom
    }

    function renderAddTask(domMainElement) {
        const mainDom = document.querySelector(domMainElement);
        const existingGroupSection = document.querySelector('.group-section');
        const existingAddTaskSection = document.querySelector('.add-task-section');

        if (existingGroupSection) {
            existingGroupSection.remove()
        } else if (existingAddTaskSection) {
            existingAddTaskSection.remove()
        }

        const addTaskSection = document.createElement('section');
        addTaskSection.classList.add('add-task-section');

        addTaskSection.appendChild(createForm());
        mainDom.appendChild(addTaskSection);

        return mainDom
    }

    return {
        renderTodo,
        buttonsGetGroup,
        renderTodos,
        renderAddTask,
        sideNavButtons
    }
})();

export {
    todoDom
}