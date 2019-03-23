const links = document.querySelectorAll('.has-tooltip');

for (let link of links) {
    link.addEventListener('click', showHint);

    const hint = `<div class="tooltip">${link.title}</div>`;
    link.insertAdjacentHTML('afterEnd', hint);
}

function showHint(event) {

    event.preventDefault();

    const tooltip = document.querySelector('.tooltip_active');

    if (tooltip) {
        tooltip.classList.remove('tooltip_active');
    }

    event.target.nextSibling.classList.add('tooltip_active');
    
}