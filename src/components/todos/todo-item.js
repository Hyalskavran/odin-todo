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
        (date instanceof Date) ? this._dueDate = date : alert('Only Dateformat is accepted.')
    }

    get priority() {
        return this._priority
    }

    set priority(num) {
        (typeof num === 'number' & num >= 1 && num <= 10) ? this._priority = num : alert('Only numbers between 1 and 10 are accepted.')
    }

    get notes() {
        return this._notes
    }

    set notes(note) {
        this._notes = note
    }

    get checklist() {
        return this._checklist
    }

    set checklist(item) {
        this._checklist.push(item)
    }
}