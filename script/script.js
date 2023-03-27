let buttonRef = document.querySelector('#clickMe');

function alertUser(){
    alert('you clicked!');
    // buttonRef.removeEventListener('click', alertUser)
}

buttonRef.addEventListener('click', alertUser, {once:true});


function changeBGPink(){
    document.body.style.backgroundColor = "pink";

}
buttonRef.addEventListener('click',changeBGPink)

function changeText(){
    if(buttonRef.innerHTML === 'Click me'){
        buttonRef.innerHTML = 'Clicked!';
    }else{
        buttonRef.innerHTML = 'Click me';
    }
    
}

buttonRef.addEventListener('click',changeText)