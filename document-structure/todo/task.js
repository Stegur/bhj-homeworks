const btn = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');

btn.addEventListener('click', addTask);

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

    console.log(typeof localStorage['tasks'])
    localStorage.tasks.push(text.value);

    text.value = '';

    canBeDeleted();
    console.log(localStorage)
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
    localStorage.tasks.removeItem(key);
}

function init() {


    const tasks = [1, true, 'str'];
    localStorage.setItem('tasks', tasks);
    console.log(typeof localStorage.tasks) /* почему строка? */
    console.log(localStorage.tasks)



    // if (localStorage['tasks'].length !== 0) {

    //     for (let item of localStorage.tasks) {


    //         const task = `<div class="task">
    //                     <div class="task__title">
    //                     ${item}
    //                     </div>
    //                     <a href="#" class="task__remove">&times;</a>
    //                   </div>`;

    //         taskList.insertAdjacentHTML('beforeEnd', task);
    //     }

    //     canBeDeleted();
    // }

}
localStorage.clear()
init();