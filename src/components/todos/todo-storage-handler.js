const todoStorage = (function(){
    function getGroup() {
        return localStorage.getItem('selectedGroup')
    }

    function setInitialGroup() {
        if (!getGroup() || getGroup() !== 'LIZARD') {
            localStorage.setItem('selectedGroup', 'LIZARD');
        }
    }

    function setGroup(group) {
        localStorage.setItem('selectedGroup', group)
    }

    function storeTodo(todo, group) {
        // Get the list of new todos from localStorage
        const todosList = JSON.parse(localStorage.getItem(`${group}-todos-list`)) || [];
        // Add the ID to the list
        todosList.push(todo);
        // Store the updated list back in localStorage
        localStorage.setItem(`${group}-todos-list`, JSON.stringify(todosList));
    }

    function retrieveTodos(group) {
        const todosList = JSON.parse(localStorage.getItem(`${group}-todos-list`)) || [];

        return todosList
    }

    return {
        getGroup,
        setInitialGroup,
        setGroup,
        storeTodo,
        retrieveTodos
    }
})();

export {
    todoStorage
}