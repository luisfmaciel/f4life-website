
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

// window.addEventListener('click', test);
