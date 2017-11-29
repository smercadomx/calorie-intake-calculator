'use strict';

function getBMR(age, sex, height, weight) {
  var weightInKilos = weight / 2.20462,
      bmr = 10 * weightInKilos + 6.25 * height - 5 * age;

  if (sex === 'female') {
    bmr -= 161;
  } else {
    bmr += 5;
  }

  return bmr;
}