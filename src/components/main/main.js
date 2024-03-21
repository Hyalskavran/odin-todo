import './main.css'
import { Todo } from '../todos/todo-item'
import { todoDom } from '../todos/todo-dom-handler'
import { todoStorage } from '../todos/todo-storage-handler'
import { createForm } from '../todos/form'

export default function main() {
    todoStorage.setInitialGroup();
    todoDom.buttonsGetGroup();
    todoDom.sideNavButtons();
    todoDom.renderTodos("LIZARD", 'main');

    // main.appendChild(todoDom.renderTodo(todo))
    // main.appendChild(createForm())

    return main
}
