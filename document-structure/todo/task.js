const btn = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');

btn.addEventListener('click', addTask);
// remove.addEventListener('click', removeTask);


function addTask(event) {

    event.preventDefault();

    let text = document.getElementById('task__input');

    const task = `<div class="task">
                    <div class="task__title">
                    ${text.value}
                    </div>
                    <a href="#" class="task__remove">&times;</a>
                  </div>`;

    taskList.insertAdjacentHTML('beforeEnd', task);

    localStorage[text.value] = task;

    text.value = '';

    canBeDeleted();
}

function canBeDeleted() {

    const removeList = document.querySelectorAll('.task__remove');

    for (let item of removeList) {
        item.addEventListener('click', removeTask);
    }
}

function removeTask(event) {

    event.preventDefault();
    event.target.closest('.task').remove();

    let key = event.target.closest('.task').querySelector('.task__title').textContent.trim();
    localStorage.removeItem(key);
}

function init() {

    if (localStorage.length !== 0) {

        for (let key of Object.keys(localStorage)) {
            taskList.insertAdjacentHTML('beforeEnd', localStorage[key]);
        }

        canBeDeleted();
    }

}

init();