//declaration of variables
const myInpt1 = document.getElementById('input-field1'),
  myInpt2 = document.getElementById('input-field2'),
  myInpt3 = document.getElementById('input-field3'),
  myInpt4 = document.getElementById('input-field4'),
  myError1 = document.getElementById('error-icon1'),
  myError2 = document.getElementById('error-icon2'),
  myError3 = document.getElementById('error-icon3'),
  myError4 = document.getElementById('error-icon4'),
  myWarning1 = document.getElementById('warning1'),
  myWarning2 = document.getElementById('warning2'),
  myWarning3 = document.getElementById('warning3'),
  myWarning4 = document.getElementById('warning4'),
  allInputs = document.getElementsByClassName('input-field'),
  allErrors = document.getElementsByClassName('error-icon'),
  allWarnings = document.getElementsByClassName('warning'),
  myBtn = document.getElementById('btn');

//writing the logic for the input fields
var allErrorsArr = Array.from(allErrors);
var allInputsArr = Array.from(allInputs);
var allWarningsArr = Array.from(allWarnings);

/*
function check() {
  'use strict';
  allInputsArr.forEach((input, index) => {
    input.addEventListener('keyup', () => {
      console.log(index + ' : ' + input.value);
    });
  });
}*/

window.onload = () => {
  allErrorsArr.forEach((error) => {
    error.classList.add('invisible');
  });

  allWarningsArr.forEach((warning) => {
    warning.classList.add('invisible');
  });
};

function field1() {
  myWarning1.classList.remove('invisible');
  myError1.classList.remove('invisible');
  myWarning1.classList.add('visible');
  myError1.classList.add('visible');
}
function field1Remove() {
  myWarning1.classList.remove('visible');
  myError1.classList.remove('visible');
  myWarning1.classList.add('invisible');
  myError1.classList.add('invisible');
}

function field2() {
  myWarning2.classList.remove('invisible');
  myError2.classList.remove('invisible');
  myWarning2.classList.add('visible');
  myError2.classList.add('visible');
}
function field2Remove() {
  myWarning2.classList.remove('visible');
  myError2.classList.remove('visible');
  myWarning2.classList.add('invisible');
  myError2.classList.add('invisible');
}

function field3() {
  myWarning3.classList.remove('invisible');
  myError3.classList.remove('invisible');
  myWarning3.classList.add('visible');
  myError3.classList.add('visible');
}
function field3Remove() {
  myWarning3.classList.remove('visible');
  myError3.classList.remove('visible');
  myWarning3.classList.add('invisible');
  myError3.classList.add('invisible');
}

function field4() {
  myWarning4.classList.remove('invisible');
  myError4.classList.remove('invisible');
  myWarning4.classList.add('visible');
  myError4.classList.add('visible');
}
function field4Remove() {
  myWarning4.classList.remove('visible');
  myError4.classList.remove('visible');
  myWarning4.classList.add('invisible');
  myError4.classList.add('invisible');
}

myBtn.addEventListener('click', (event) => {
  console.log('clicked');
  function first() {
    if (allInputs[0].value == '') {
      field1();
    } else {
      field1Remove();
      return 'passed';
    }
  }
  first();

  function second() {
    if (allInputs[1].value == '') {
      field2();
    } else {
      field2Remove();
      return 'passed';
    }
  }
  second();

  function third() {
    if (
      !allInputs[2].value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      field3();
    } else {
      field3Remove();
      return 'passed';
    }
  }
  third();

  function fourth() {
    if (allInputs[3].value == '') {
      field4();
    } else {
      field4Remove();
      return 'passed';
    }
  }
  fourth();

  if (
    first() === 'passed' &&
    second() === 'passed' &&
    third() === 'passed' &&
    fourth() === 'passed'
  ) {
    location.href = 'pages/page2.html';
  }
});
