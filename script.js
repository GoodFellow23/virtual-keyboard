
//input
let inputBody =document.createElement('div');
let inputArea = document.createElement('textarea');
document.body.appendChild(inputBody);
inputBody.appendChild(inputArea);


//Keyboard
let keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
document.body.appendChild(keyboard);
keyboard.innerHTML = "<div></div><div></div><div></div><div></div><div></div>";
keyboard.querySelectorAll('.keyboard>div').forEach((el)=> {el.classList.add('keyboard__line')});
keyboard.querySelectorAll('.keyboard__line')[0].innerHTML = "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>";
keyboard.querySelectorAll('.keyboard__line')[0].lastChild.classList.add('keyboard__button--mod1');
keyboard.querySelectorAll('.keyboard__line')[1].innerHTML = "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>";
keyboard.querySelectorAll('.keyboard__line')[1].firstChild.classList.add('keyboard__button--mod2');
keyboard.querySelectorAll('.keyboard__line')[1].lastChild.classList.add('keyboard__button--mod2');
keyboard.querySelectorAll('.keyboard__line')[2].innerHTML = "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>";
keyboard.querySelectorAll('.keyboard__line')[2].firstChild.classList.add('keyboard__button--mod1');
keyboard.querySelectorAll('.keyboard__line')[2].lastChild.classList.add('keyboard__button--mod1');
keyboard.querySelectorAll('.keyboard__line')[3].innerHTML = "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>";
keyboard.querySelectorAll('.keyboard__line')[3].firstChild.classList.add('keyboard__button--mod1');
keyboard.querySelectorAll('.keyboard__line')[3].lastChild.classList.add('keyboard__button--mod2');
keyboard.querySelectorAll('.keyboard__line')[4].innerHTML = "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>";
keyboard.querySelectorAll('.keyboard__line')[4].firstChild.classList.add('keyboard__button--mod2');
keyboard.querySelectorAll('.keyboard__line')[4].firstElementChild.nextSibling.nextSibling.nextSibling.classList.add('keyboard__button--space');
document.querySelector('.keyboard__button--space').nextSibling.nextSibling.classList.add('keyboard__button--mod2');
document.querySelectorAll('.keyboard__line>div').forEach(el => el.classList.add('keyboard__button'));




let arrEng = 
["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
 "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Delete",
 "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
 "Shift", "\\", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "↑", "Shift",
 "Ctrl", "Win", "Alt", " ", "Alt", "Ctrl", "←", "↓", "→"];
 
let arrEngShift = 
["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace",
"Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "Delete",
"CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", '"', "Enter",
"Shift", "\\", "Z", "X", "C", "V", "B", "N", "M", "Б", "Ю", ",", "↑", "Shift",
"Ctrl", "Win", "Alt", " ", "Alt", "Ctrl", "←", "↓", "→"];

const fillButtons = (value) => {
    document.querySelectorAll('.keyboard__button').forEach((el,idx) => {
        el.innerHTML = `<span>${value[idx]}</span>`;
        el.firstChild.id = `${value[idx]}`;
    });
}
fillButtons(arrEng);

document.onkeydown = (event) => {
    document.querySelectorAll('.keyboard__button').forEach(el => {
        if(event.key == el.firstChild.innerHTML) {
            el.classList.add('keyboard__button--mouseover');
            el.classList.add('keyboard__button--pressed');
        } else if(event.key == 'Control' && el.firstChild.innerHTML == 'Ctrl') {
            el.classList.add('keyboard__button--mouseover');
            el.classList.add('keyboard__button--pressed');
        }
    });
    console.log(event.key); 
    if(event.key === 'Shift') {
        fillButtons(arrEngShift);
    } else if(event.key === 'Backspace') {

    } else if(event.key === 'Delete') {

    } else if(event.key === 'Alt') {

    } else if(event.key === 'Control') {

    } else if(event.key === 'Enter') {

    } else if(event.key === 'Tab') {

    } else if(event.key === 'CapsLock') {

    } else {
        inputArea.value += event.key;
    }   
    

   
};
document.onkeyup = (event) => {
    document.querySelectorAll('.keyboard__button').forEach(el => {
        el.classList.remove('keyboard__button--mouseover');
        el.classList.remove('keyboard__button--pressed');
        
    });
    console.log(event.key); 
    if(event.key === 'Shift') {
        fillButtons(arrEng);
    } else if(event.key === 'Backspace') {

    } else if(event.key === 'Delete') {

    } else if(event.key === 'Alt') {

    } else if(event.key === 'Control') {

    } else if(event.key === 'Enter') {

    } else if(event.key === 'Tab') {

    } else if(event.key === 'CapsLock') {

    } else {
        inputArea.value += event.key;
    }    
      
};
/*document.onkeypress = (event) =>  console.log(event.keyCode);
/*document.addEventListener('keyDown', (event) => {
    console.log(event.keyCode);
})*/
//ShiftDown
/*document.onkeydown = (event) => {
   //    if (event.)
};*/
//ShiftUp
keyboard.addEventListener('mouseover',(event) => {
    if(event.target.classList.contains('keyboard__button')) {
         event.target.classList.add('keyboard__button--mouseover');
    }
    if(event.target.tagName == "SPAN" )   {
        event.target.parentElement.classList.add('keyboard__button--mouseover');
    }
});
keyboard.addEventListener('mouseout',(event) => {
    if(event.target.classList.contains('keyboard__button')) {
         event.target.classList.remove('keyboard__button--mouseover');
    } 
    if(event.target.tagName == "SPAN" )   {
        event.target.parentElement.classList.remove('keyboard__button--mouseover');
    }  
});
//Click event here!))

keyboard.addEventListener('mousedown',(event) => {
    if(event.target.classList.contains('keyboard__button')) {
         event.target.classList.add('keyboard__button--pressed');
    } 
    if(event.target.tagName == "SPAN" ){
        event.target.parentElement.classList.add('keyboard__button--pressed');
    }
    inputArea.value += document.querySelector('.keyboard__button--pressed>span').innerText; 
});

keyboard.addEventListener('mouseup',(event) => {
    if(event.target.classList.contains('keyboard__button')) {
         event.target.classList.remove('keyboard__button--pressed');
    } 
    if(event.target.tagName == "SPAN" )   {
        event.target.parentElement.classList.remove('keyboard__button--pressed');
    }  
});
