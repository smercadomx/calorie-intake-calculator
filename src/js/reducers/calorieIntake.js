import getBMR from '../modules/bmr';

const calorieIntake = (state = null, action) => {
  switch (action.type) {
    case 'GET_CALORIE_INTAKE': {
      const {
        age, sex, heightInCm, weight, exercise,
      } = action.formData;

      const bmr = getBMR(age, sex, heightInCm, weight) * parseFloat(exercise, 10);

      return {
        maintain: bmr,
        loose: bmr - 500,
        gain: bmr + 500,
      };
    }
    default:
      return state;
  }
};

export default calorieIntake;
