import './main.css'
import { Todo, todo } from '../todos/todo-item'
import createTodo from '../todos/todo-creation'

export default function main() {
    const main = document.querySelector('main')

    main.appendChild(todo.createTodo(todo.priority))
    // main.appendChild(createTodo())

    return main
}
