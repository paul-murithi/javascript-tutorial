let sub_btn = document.querySelector('button');
sub_btn.addEventListener('click', handleSubClick);
function handleSubClick() {
    if(sub_btn.innerHTML === 'Subscribe') {
        sub_btn.classList.add('button-1');
        sub_btn.innerText = 'Subscribed';
    }
    else if(sub_btn.innerHTML === 'Subscribed') {
        sub_btn.classList.remove('button-1');
        sub_btn.innerHTML = ('Subscribe');
    }
}


