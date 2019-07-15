"use strict";

import moment from 'moment';

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))






const editorArea = document.querySelector('.editor__area--js');
const save = document.querySelector('.editor__buttons-save--js');
const load =  document.querySelector('.editor__buttons-load--js');



save.addEventListener('click' , (e) =>{
    
    localStorage.setItem('save', editorArea.value);
})





if(localStorage.getItem('save')){
    editorArea.value=localStorage.getItem('save');
}








load.addEventListener('click', (e) =>{
    editorArea.value = localStorage.getItem('save');
    
    
})









