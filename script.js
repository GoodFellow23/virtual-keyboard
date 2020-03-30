
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
 "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "DEL",
 "Caps Lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
 "Shift", "\\", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "↑", "Shift",
 "Ctrl", "Win", "Alt", "", "Alt", "Ctrl", "←", "↓", "→"];
 
let arrEngShift = 
["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace",
"Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "DEL",
"Caps Lock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", '"', "Enter",
"Shift", "\\", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "↑", "Shift",
"Ctrl", "Win", "Alt", "", "Alt", "Ctrl", "←", "↓", "→"];

document.querySelectorAll('.keyboard__button').forEach((el,idx) => el.innerHTML = `<span>${arrEng[idx]}</span>`);
document.onkeypress = (event) => {
    console.log(event);
    

};
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
    if(event.target.tagName == "SPAN" )   {
        event.target.parentElement.classList.add('keyboard__button--pressed');
    }  
});

keyboard.addEventListener('mouseup',(event) => {
    if(event.target.classList.contains('keyboard__button')) {
         event.target.classList.remove('keyboard__button--pressed');
    } 
    if(event.target.tagName == "SPAN" )   {
        event.target.parentElement.classList.remove('keyboard__button--pressed');
    }  
});
