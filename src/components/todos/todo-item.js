import { format } from 'date-fns'
import { todoStorage } from './todo-storage-handler';
import { checkAnimalExists } from '../animals/animals'
import './todo-item.css'

class Todo {
    constructor(title, description, dueDate, priority, group) {
        this.id = Date.now().toString(36) + Math.random().toString(36).substr(2);
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.group = group;
        this.notes = ""
        this.checklist = []

        todoStorage.storeTodo(this, this.group);
    }

    get title() {
        return this._title
    }

    set title(newTitle) {
        if (newTitle.length < 3) {
            throw new Error('Title must be at least 3 characters long.')
        } else {
            this._title = newTitle
        }
    }

    get dueDate() {
        return this._dueDate
    }

    set dueDate(date) {
        if (!(date instanceof Date)) {
            throw new Error('Only Dateformat is accepted.')
        } else {
            this._dueDate = format(date, 'dd/MM/yyyy')
        }
    }

    get priority() {
        return this._priority
    }

    set priority(num) {
        if (!(typeof num === 'number' & num >= 1 && num <= 10)) {
            throw new Error('Only numbers between 1 and 10 are accepted.')
        } else {
            this._priority = num
        }
    }

    get group() {
        return this._group
    }

    set group(animal) {
        if (!(checkAnimalExists(animal))) {
            throw new Error('Invalid group')
        } else {
            this._group = animal
        }
    }
}


export {
    Todo
}