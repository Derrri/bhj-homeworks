const tasksForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

function addTask(title) {
    const taskElement = document.createElement('div');
    taskElement.className = 'task';

    const taskTitle = document.createElement('div');
    taskTitle.className = 'task__title';
    taskTitle.textContent = title;

    const taskRemove = document.createElement('a');
    taskRemove.href = '#';
    taskRemove.className = 'task__remove';
    taskRemove.textContent = '×';

    taskRemove.addEventListener('click', function(event) {
        event.preventDefault();
        tasksList.removeChild(taskElement);
    });

    taskElement.appendChild(taskTitle);
    taskElement.appendChild(taskRemove);
    tasksList.appendChild(taskElement);
}

tasksForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskTitle = taskInput.value.trim();

    if (taskTitle) {
        addTask(taskTitle);
        taskInput.value = '';
    }
});

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const taskTitle = taskInput.value.trim();

        if (taskTitle) {
            addTask(taskTitle);
            taskInput.value = '';
        }
    }
});