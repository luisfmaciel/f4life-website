const input = document.querySelector('#contato-email');
const textarea = document.querySelector('#contato-message');
const errorInput = document.querySelector('#error-input');
const errorTextarea = document.querySelector('#error-textarea');
const messageSending = document.querySelector('.message-sending');
const formButton = document.querySelector('.contato__form-button');
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navbar = document.querySelector('.navbar');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');
const elem = document.querySelector('.highlight');
const sobreMenu = document.querySelector('#sobre-link');
const servicosMenu = document.querySelector('#servicos-link');
const destaquesMenu = document.querySelector('#destaques-link');
const contatoMenu = document.querySelector('#contato-link');
const heroButton = document.querySelector('.hero__search-btn');
const textCommingSoon = document.querySelector('#comming-soon');



function mobileMenu() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
  body.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

function highlightMenu() {
  let scrollPos = window.scrollY;

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

  if ((elem && window.innerWidth < 960) || elem) {
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

function validateForm() {
  const splitedEmail = input.value.split('');

  errorInput.style.display = !(validateDomain(splitedEmail) && validateUser(splitedEmail)) ? 'flex' : 'none';
  errorInput.innerHTML = 'Erro no envio: Endereço de mail inválido';
  errorTextarea.style.display = !textarea.value ? 'flex' : 'none';
  errorTextarea.innerHTML = 'Erro no envio: Insira uma mensagem';
  messageSending.innerHTML = `Obrigado pelo contato, ${getUser(splitedEmail).join('')}!`
  messageSending.style.display = (validateDomain(splitedEmail) && validateUser(splitedEmail) && textarea.value) ? 'flex' : 'none';
}

formButton.addEventListener('click', (event) => {
  event.preventDefault();
  validateForm();
});


function getUser(splitedEmail) {
  let arroba = false;
  const array = [];

  splitedEmail.forEach(letra => {
    if (letra == '@') {
      arroba = true;
    }
    if (!arroba) {
      array.push(letra)
    }
  });
  return array;
}

function getDomain(splitedEmail) {
  let arroba = false;
  const array = [];

  splitedEmail.forEach(letra => {
    if (arroba) {
      if (letra == '.') {
        arroba = false;
        return;
      }
      array.push(letra)
    }
    if (letra == '@') {
      arroba = true;
    }
  });
  return array;
}

function validateDomain(splitedEmail) {
  const domain = getDomain(splitedEmail);
  let valid;
  let i = 0;

  
  if (domain.length <= 16 && domain.length >= 1 && splitedEmail.includes('@')) {
    while(i < domain.length) {
      const lowerCase = /^[a-z]/gm.test(domain[i]);
      const numbers = /^[0-9]/gm.test(domain[i]);
      if (lowerCase || numbers) {
        valid = true;
      } else {
        valid = false;
        break;
      }
      i++;
    }
  }
  return valid; 
}

function validateUser(splitedEmail) {
  const user = getUser(splitedEmail);
  console.log(user);
  let valid;
  let i = 0;

  
  if (user.length <= 32 && user.length >= 1 && splitedEmail.includes('@')) {
    while(i < user.length) {
      const lowerCase = /^[a-z]/gm.test(user[i]);
      const upperCase = /^[A-Z]/gm.test(user[i]);
      const numbers = /^[0-9]/gm.test(user[i]);
      if (lowerCase || upperCase || numbers || user[i] == '.') {
        valid = true;
      } else {
        valid = false;
        break;
      }
      i++;
    }
  }
  return valid; 
}

function searchProperty() {
  textCommingSoon.innerHTML = 'Em breve...';
  textCommingSoon.style.display = 'flex';
}

heroButton.addEventListener('click', searchProperty)
