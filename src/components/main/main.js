import './main.css'
import { Todo, todo } from '../todos/todo-item'

export default function main() {
    const main = document.querySelector('main')

    main.appendChild(todo.createTodo(todo.priority))

    return main
}