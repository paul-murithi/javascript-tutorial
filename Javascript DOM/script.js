const btnElement = document.querySelector('button');
btnElement.addEventListener('click', changeButton);

function changeButton() {
    btnElement.innerHTML = 'Subscribed';
    btnElement.style.backgroundColor = 'black';
    btnElement.style.color = 'White';
}
