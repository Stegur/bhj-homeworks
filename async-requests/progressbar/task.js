const progress = document.getElementById('progress');

form.addEventListener('submit', check);

function check(event) {

    event.preventDefault();

    const form = document.getElementById('form');
    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.onprogress = function (event) {

        progress.value = event.loaded / 1000000;
    }
    xhr.send(formData);

}