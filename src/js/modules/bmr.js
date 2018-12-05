export default function getBMR(age, sex, height, weight) {
  const weightInKilos = weight / 2.20462;
  let bmr = (10 * weightInKilos) + (6.25 * height) - (5 * age);

  if (sex === 'female') {
    bmr -= 161;
  } else {
    bmr += 5;
  }

  return bmr;
}
