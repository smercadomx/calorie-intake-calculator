import React from 'react';
import {render} from 'react-dom';
import App from './App';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
} else if ('applicationCache' in window) {
  var iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = 'load-appcache.html'
  document.body.appendChild(iframe);

  window.addEventListener('load', function(e) {

    window.applicationCache.addEventListener('updateready', e => {
      if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
        // Browser downloaded a new app cache.
        if (confirm('A new version of this site is available. Load it?')) {
          window.location.reload();
        }
      }
    }, false);

  }, false);
}

render(<App />, document.body);

// let calculatorForm = document.querySelector('#form');
// let resultContainer = document.querySelector('.result');
// let submitButton = document.querySelector('button');
// let submitButtonLabel = submitButton.innerText;

// calculatorForm.addEventListener('submit', (e) => {
//   e.preventDefault();

//   submitButton.disabled = true;
//   submitButton.innerText = 'loading...';

//   setTimeout(() => {
//     let formData = toJSON(calculatorForm);
//     let feetInCm = (parseFloat(formData.heightFeet, 10) * 30.48);
//     let inchesInCm = formData.heightInches ? (parseFloat(formData.heightInches, 10) * 2.54) : 0;
//     let heightInCm =  feetInCm + inchesInCm;
//     let result = getBMR(formData.age, formData.sex, heightInCm, formData.weight) * parseFloat(formData.exercise, 10);

//     resultContainer.innerHTML = `To maintain weight you need <strong>${result.toFixed(2)} calories</strong><br>`;
//     resultContainer.innerHTML += `To loose 1lb a week you need <strong>${(result - 500).toFixed(2)} calories</strong><br>`;
//     resultContainer.innerHTML += `To gain 1lb a week you need <strong>${(result + 500).toFixed(2)} calories</strong>`;
//     resultContainer.focus();

//     submitButton.innerText = submitButtonLabel;
//     submitButton.disabled = false;
//   }, 250);
// });
