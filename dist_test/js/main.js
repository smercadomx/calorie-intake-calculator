'use strict';

function toJSON(form) {
  var obj = {},
      elements = form.querySelectorAll('input, select, textarea');

  for (var i = 0; i < elements.length; ++i) {
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

  submitButton.innerText = 'loading...';

  setTimeout(function () {
    var formData = toJSON(calculatorForm);
    var feetInCm = parseFloat(formData.heightFeet, 10) * 30.48;
    var inchesInCm = formData.heightInches ? parseFloat(formData.heightInches, 10) * 2.54 : 0;
    var heightInCm = feetInCm + inchesInCm;
    var result = getBMR(formData.age, formData.sex, heightInCm, formData.weight);

    resultContainer.innerHTML = 'Result: ' + result.toFixed(0) + ' calories';
    resultContainer.focus();

    submitButton.innerText = submitButtonLabel;
  }, 250);
});