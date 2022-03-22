const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navbar = document.querySelector('.navbar');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');

var inputErrorAlreadyExists = false;
var selectErrorAlreadyExists = false;

function test() {
  const boxInput = document.querySelector('#input-geo');
  const boxSelect = document.querySelector('#select-type');
  const input = document.querySelector('#geo');
  const select = document.querySelector('select');
  const form = document.querySelector('form');

  const elemErrorInput = document.createElement('p');
  const elemErrorSelect = document.createElement('p');
  
  if (!input.value && !inputErrorAlreadyExists) {
    elemErrorInput.innerHTML = 'Preenchimento obrigatório';
    elemErrorInput.classList.add('hero__error-message');  
    boxInput.appendChild(elemErrorInput);
    inputErrorAlreadyExists = true;
  } else { 
    boxInput.removeChild(elemErrorInput);
  }

  if (!select.value && !selectErrorAlreadyExists) {
    elemErrorSelect.innerHTML = 'Preenchimento obrigatório';
    elemErrorSelect.classList.add('hero__error-message');  
    boxSelect.appendChild(elemErrorSelect);
    selectErrorAlreadyExists = true;
  }

  if (select.value && input.value) {
    form.submit();
  }

}

function mobileMenu() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
  body.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

function highlightMenu() {
  const elem = document.querySelector('.highlight');
  const sobreMenu = document.querySelector('#sobre-link');
  const servicosMenu = document.querySelector('#servicos-link');
  const destaquesMenu = document.querySelector('#destaques-link');
  const contatoMenu = document.querySelector('#contato-link');

  let scrollPos = window.scrollY;

  console.log(window.screen.height);
  
  if (window.innerWidth > 960 && scrollPos < 720) {
    servicosMenu.classList.remove('highlight');
    sobreMenu.classList.remove('highlight');
    destaquesMenu.classList.remove('highlight');
  } else if (window.innerWidth > 960 && scrollPos < 1440 && scrollPos > 720) {
    sobreMenu.classList.add('highlight');
    servicosMenu.classList.remove('highlight');
    return; 
  } else if (window.innerWidth > 960 && scrollPos < 2160) {
    servicosMenu.classList.add('highlight');
    sobreMenu.classList.remove('highlight');
    destaquesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 3120) {
    destaquesMenu.classList.add('highlight');
    servicosMenu.classList.remove('highlight');
    contatoMenu.classList.remove('highlight');
    return; 
  } else if (window.innerWidth > 960 && scrollPos < 3920) {
    contatoMenu.classList.add('highlight');
    destaquesMenu.classList.remove('highlight');
    return;
  } else  {
    contatoMenu.classList.remove('highlight');
  }

  if ((elem && window.innerWIdth < 960) || elem) {
    elem.classList.remove('highlight');
  }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);


function hideMobileMenu() {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);