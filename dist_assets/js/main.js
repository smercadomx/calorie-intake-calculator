'use strict';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
} else if ('applicationCache' in window) {
  var iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = 'load-appcache.html';
  document.body.appendChild(iframe);
}

function toJSON(form) {
  var obj = {},
      elements = form.querySelectorAll('input, select, textarea'),
      i = void 0;

  for (i = 0; i < elements.length; ++i) {
    var element = elements[i],
        name = element.name,
        value = element.value;

    if (element.type === 'radio' && element.checked === false) {
      continue;
    }

    if (name) {
      obj[name] = value;
    }
  }

  return obj;
}

var calculatorForm = document.querySelector('#form');
var resultContainer = document.querySelector('.result');
var submitButton = document.querySelector('button');
var submitButtonLabel = submitButton.innerText;

calculatorForm.addEventListener('submit', function (e) {
  e.preventDefault();

  submitButton.disabled = true;
  submitButton.innerText = 'loading...';

  setTimeout(function () {
    var formData = toJSON(calculatorForm);
    var feetInCm = parseFloat(formData.heightFeet, 10) * 30.48;
    var inchesInCm = formData.heightInches ? parseFloat(formData.heightInches, 10) * 2.54 : 0;
    var heightInCm = feetInCm + inchesInCm;
    var result = getBMR(formData.age, formData.sex, heightInCm, formData.weight) * parseFloat(formData.exercise, 10);

    resultContainer.innerHTML = 'changed To maintain weight you need <strong>' + result.toFixed(2) + ' calories</strong><br>';
    resultContainer.innerHTML += 'To loose 1lb a week you need <strong>' + (result - 500).toFixed(2) + ' calories</strong><br>';
    resultContainer.innerHTML += 'To gain 1lb a week you need <strong>' + (result + 500).toFixed(2) + ' calories</strong>';
    resultContainer.focus();

    submitButton.innerText = submitButtonLabel;
    submitButton.disabled = false;
  }, 250);
});