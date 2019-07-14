import React from 'react';
import CalorieIntake from '../CalorieIntake';
import {fireEvent} from '@testing-library/react';
import {renderWithRedux} from '../../testUtils';

test('calculates calorie intake', () => {
  const { getByLabelText, getByText, container } = renderWithRedux(<CalorieIntake />);

  // fill out the form
  fireEvent.change(getByLabelText("Age"), { target: { value: '31' } });
  fireEvent.change(getByLabelText("Male"), { target: { value: 'male' } });
  fireEvent.change(getByLabelText("Feet"), { target: { value: '5' } });
  fireEvent.change(getByLabelText("Inches"), { target: { value: '11' } });
  fireEvent.change(getByLabelText("Weight"), { target: { value: '160' } });

  // click calculate
  fireEvent.click(getByText("Calculate"));

  // check results
  expect(container.querySelector('.result')).toHaveTextContent([
    "To maintain weight you need 2043.45 calories",
    "To loose 1lb a week you need 1543.45 calories",
    "To gain 1lb a week you need 2543.45 calories"
  ].join(''));
});
