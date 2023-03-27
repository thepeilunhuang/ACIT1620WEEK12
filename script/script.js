// let buttonRef = document.querySelector('#clickMe');

// function alertUser(){
//     alert('you clicked!');
//     // buttonRef.removeEventListener('click', alertUser)
// }

// buttonRef.addEventListener('click', alertUser, {once:true});


// function changeBGPink(){
//     document.body.style.backgroundColor = "pink";

// }
// buttonRef.addEventListener('click',changeBGPink)

// function changeText(){
//     if(buttonRef.innerHTML === 'Click me'){
//         buttonRef.innerHTML = 'Clicked!';
//     }else{
//         buttonRef.innerHTML = 'Click me';
//     }
    
// }

// buttonRef.addEventListener('click',changeText)

// function updateImage(){
//     const image = document.querySelector('#shoppingCart');
//     image.setAttribute('src','./img/263142.png');
//     image.setAttribute('width',50);
//     image.setAttribute('height',50);
//     image.setAttribute('alt','shopping cart')
// }

// buttonRef.addEventListener('click', updateImage)

//===========================================================================================
const buttonContainer = document.querySelector('.button-container');

function changeBG(event){
    console.log(event.target.tagname)
    //event.target is the element that we clicked on
   
    event.target.classList.add('greenBG')
}  
buttonContainer.addEventListener('click',changeBG)