let buttonRef = document.querySelector('#clickMe');

function alertUser(){
    alert('you clicked!');
    // buttonRef.removeEventListener('click', alertUser)
}

buttonRef.addEventListener('click', alertUser, {once:true});


