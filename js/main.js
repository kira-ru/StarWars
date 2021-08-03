$(function(){
    let includes = $('[data-include]');
    //document.querySelector("[data-include]").innerText;
    includes.each(function() {
        let file = 'components/' + $(this).data('include') + '.html';
        $(this).load(file);
    });
});

import {theme} from './theme.js'

document.addEventListener('DOMContentLoaded', function() {
   let sColor = localStorage.getItem('secondaryColor');
   let selectedTheme = localStorage.getItem('selectedTheme');
  
   if (sColor !== null && selectedTheme !== null) {
     theme.secondtheme = sColor;
     theme.selectedTheme = selectedTheme;
   }

   theme.coolUpdate();
 })

let themePreview = {
  selectedTheme: 'indigo-theme',
  secondtheme: '#4ebdd4'
}


$('.menu-btn').on('click', function() {
  $('.menu-wrapper').slideToggle('slow');
});


/*
 popUp
*/

// переключатель
let editElement = document.querySelector('.edit-popup');
let editSwitcher = false;
$('#edit').on('click', function() {
  this.classList.remove('pulse');
  editSwitcher = !editSwitcher;

  if (editSwitcher) {
    TweenMax.to(editElement, 1, {x:'2%', display: 'block', height: '65vh', ease: Back.easeOut});
  } else {
    TweenMax.to(editElement, 1, {x:'-200%', display: 'block', height: '0vh', ease: Back.easeOut});
  }

})

$('.content-wrapper').on('click', function() {
  if (editSwitcher) {
    TweenMax.to(editElement, 1, {x:'-200%', display: 'block', height: '0vh', ease: Back.easeOut});
    editSwitcher = !editSwitcher;
  }
})



// смена цветов тем
let preview = document.querySelector('.preview-wrapper');
let themeSelects = document.querySelectorAll('.theme-select')
let previewChilds = function() {
  let nodes = [];
  let progressLine = document.querySelector('.progress-line');
  let btn = document.querySelector('.preview-wrapper>a');
  
  nodes.push(progressLine);
  nodes.push(btn);

  return nodes;
}


$('.theme-select').on('click', function() {
  for (let elem of themeSelects) {
    elem.classList.remove('selected-theme');
  }
  this.classList.add('selected-theme');

  if (this.id === 'indigo') {
    preview.classList.value = 'preview-wrapper indigo-theme';
    themePreview.selectedTheme = 'indigo-theme';
  } else {
    preview.classList.value = 'preview-wrapper black-theme';
    themePreview.selectedTheme = 'black-theme';
  }
})

 $('.radio-item>label>span').on('click', function() {
  previewChilds().forEach(el => el.style.backgroundColor = this.style.color);
  themePreview.secondtheme = this.style.color;
 })

 // сохранение темы
$('#save-theme-btn').on('click', function () {
  // theme.selectedTheme = themePreview.selectedTheme;
  // theme.secondtheme = themePreview.secondtheme;

  localStorage.secondtheme = themePreview.secondtheme;
  localStorage.selectedTheme = themePreview.selectedTheme;
  theme.coolUpdate();
})