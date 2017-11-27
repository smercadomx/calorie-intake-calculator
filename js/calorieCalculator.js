function getBMR(age, sex, height, weight) {
  let weightInKilos = weight / 2.20462,
    bmr = (10 * weightInKilos) + (6.25 * height) - (5 * age);

    console.log(height);
    console.log(weightInKilos);

  if (sex === 'female') {
    bmr -= 161;
  } else {
    bmr += 5;
  }

  return bmr;
}
