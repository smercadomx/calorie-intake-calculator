function toJSON(form) {
  let obj = {},
    elements = form.querySelectorAll('input, select, textarea'),
    i;

  for (i = 0; i < elements.length; ++i) {
    let element = elements[i],
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

let calculatorForm = document.querySelector('#form');
let resultContainer = document.querySelector('.result');
let submitButton = document.querySelector('button');
let submitButtonLabel = submitButton.innerText;

calculatorForm.addEventListener('submit', (e) => {
  e.preventDefault();

  submitButton.innerText = 'loading...';

  setTimeout(() => {
    let formData = toJSON(calculatorForm);
    let feetInCm = (parseFloat(formData.heightFeet, 10) * 30.48);
    let inchesInCm = formData.heightInches ? (parseFloat(formData.heightInches, 10) * 2.54) : 0;
    let heightInCm =  feetInCm + inchesInCm;
    let result = getBMR(formData.age, formData.sex, heightInCm, formData.weight);

    resultContainer.innerHTML = `Result: ${result.toFixed(0)} calories`;
    resultContainer.focus();

    submitButton.innerText = submitButtonLabel;
  }, 250);
});
