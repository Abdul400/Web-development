let myInput = document.getElementById('input'),
  myBtn = document.getElementById('button'),
  errorIcon = document.getElementById('error'),
  warning = document.getElementById('warning');

console.log(errorIcon);

window.onload = function () {
  errorIcon.classList.remove('visible');
  warning.classList.remove('visible');

  errorIcon.classList.add('invisible');
  warning.classList.add('invisible');
};

myInput.addEventListener('keyup', () => {
  'use strict';
  let text = myInput.value;
  let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (text === '') {
    errorIcon.classList.remove('visible');
    warning.classList.remove('visible');

    errorIcon.classList.add('invisible');
    warning.classList.add('invisible');
  } else if (!text.match(pattern)) {
    errorIcon.src = '/images/icon-error.svg';
    warning.innerHTML = 'please provide a valid email';
    warning.style.color = 'red';

    errorIcon.classList.remove('invisible');
    warning.classList.remove('invisible');

    errorIcon.classList.add('visible');
    warning.classList.add('visible');
  } else if (text.match(pattern)) {
    errorIcon.src = '/images/check.png';
    warning.innerHTML = 'Email is Valid';
    warning.style.color = '#32BEA6';

    errorIcon.classList.remove('invisible');
    warning.classList.remove('invisible');

    errorIcon.classList.add('visible');
    warning.classList.add('visible');
  }
});

myBtn.addEventListener('click', () => {
  'use strict';
  let text = myInput.value;
  let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (text === '') {
    window.alert('email field cannot be empty');
  } else if (text.match(pattern)) {
    location.href = 'page2.html';
  } else if (!text.match(pattern)) {
    window.alert('email is invalid. please provide a valid mail');
  }
});

myInput.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    let text = myInput.value;
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (text === '') {
      window.alert('email field cannot be empty');
    } else if (text.match(pattern)) {
      location.href = 'page2.html';
    } else if (!text.match(pattern)) {
      window.alert('email is invalid. please provide a valid mail');
    }
  }
});
