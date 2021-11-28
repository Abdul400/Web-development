let myInput = document.getElementById('inputfield'),
  myBtn = document.getElementById('myButton'),
  regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  myError = document.getElementById('error');

window.onload = () => {
  myError.style.display = 'none';
};

function Check() {
  if (!myInput.value.match(regEx)) {
    myError.style.display = 'block';
    myInput.style.borderColor = 'red';
  } else {
    myError.style.display = 'none';
    myInput.style.borderColor = 'hsl(223, 100%, 88%)';
    return 'passed';
  }
}

myBtn.addEventListener('click', (event) => {
  event.preventDefault();
  Check();
  if (Check() === 'passed') {
    location.href = '/pages/page2.html';
  }
});
