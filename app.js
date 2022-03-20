
var errorAlreadyExist = false;

function test() {
  const box = document.querySelector('#input_geo');
  const input = document.querySelector('#geo');
  const elem = document.createElement('p');
  
  if (!input.value && !errorAlreadyExist) {
    elem.innerHTML = 'Preenchimento obrigatório';
    elem.classList.add('hero__error-message');  
    input.style.color = 'red';
    box.appendChild(elem);
    errorAlreadyExist = true;
  }
}

// window.addEventListener('click', test);
