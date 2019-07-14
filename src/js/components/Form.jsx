import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends React.PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      age: PropTypes.number,
      sex: PropTypes.string,
      heightFeet: PropTypes.number,
      heightInches: PropTypes.number,
      exercise: PropTypes.number,
    }).isRequired,
    onSubmit: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
  };

  handleOnSubmit = (e) => {
    const { onSubmit } = this.props;
    e.preventDefault();

    onSubmit();
  }

  render() {
    const {
      data: {
        age, sex, heightFeet, heightInches, exercise, weight,
      },
      handleInputChange,
    } = this.props;

    return (
      <form id="form" action="calculate" method="post" onSubmit={this.handleOnSubmit}>
        <div className="field">
          <label className="field__label" htmlFor="age">
            Age
            <input value={age} onChange={handleInputChange} className="field__box" id="age" type="number" name="age" required />
          </label>
        </div>
        <fieldset className="field">
          <legend className="field__label">Sex</legend>
          <label htmlFor="sex-male">
            <input id="sex-male" type="radio" name="sex" value="male" onChange={handleInputChange} checked={sex === 'male'} required />
            Male
          </label>
          <label htmlFor="sex-female">
            <input id="sex-female" type="radio" name="sex" value="female" onChange={handleInputChange} checked={sex === 'female'} required />
            Female
          </label>
        </fieldset>
        <fieldset className="field">
          <legend className="field__label">Height</legend>

          <div className="subfields">
            <div className="field subfields__field">
              <label className="field__label field__label--sub" htmlFor="height-feet">
                Feet
                <input className="field__box" id="height-feet" type="number" step="any" value={heightFeet} onChange={handleInputChange} name="heightFeet" required />
              </label>
            </div>
            <div className="field subfields__field">
              <label className="field__label field__label--sub" htmlFor="height-inches">
                Inches
                <input className="field__box" id="height-inches" type="number" step="any" value={heightInches} onChange={handleInputChange} name="heightInches" />
              </label>
            </div>
          </div>

        </fieldset>
        <div className="field">
          <label className="field__label" htmlFor="weight">
            Weight
            <input className="field__box" id="weight" type="number" value={weight} onChange={handleInputChange} name="weight" required />
          </label>
        </div>
        <div className="field">
          <label className="field__label field__label--main" htmlFor="exercise">
            Exercise Level
            <select value={exercise} onChange={handleInputChange} className="field__box" id="exercise" name="exercise" required>
              <option value="1.2">Little or no exercise</option>
              <option value="1.375">Light exercise or sports - 1-3 days/week</option>
              <option value="1.55">Moderate exercise or sports - 3-5 days/week</option>
              <option value="1.725">Hard exercise or sports - 6-7 days/week</option>
              <option value="1.9">Hard daily exercise or sports & physical labor job</option>
            </select>
          </label>
        </div>
        <button className="button" type="submit">Calculate</button>
      </form>
    );
  }
}
