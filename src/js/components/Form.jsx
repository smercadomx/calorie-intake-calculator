import React from 'react';

export default class Form extends React.PureComponent {
    handleOnSubmit = (e) => {
      e.preventDefault();

      this.props.onSubmit();
    }

    render() {
      const { data, handleInputChange } = this.props;

      return (
        <form id="form" action="calculate" method="post" onSubmit={this.handleOnSubmit}>
          <div className="field">
            <label className="field__label" htmlFor="age">Age</label>
            <input value={data.age} onChange={handleInputChange} className="field__box" id="age" type="number" name="age" required />
          </div>
          <fieldset className="field">
            <legend className="field__label">Sex</legend>
            <input id="sex-male" type="radio" name="sex" value="male" onChange={handleInputChange} checked={data.sex === 'male'} required />
            <label htmlFor="sex-male">Male</label>
            <input id="sex-female" type="radio" name="sex" value="female" onChange={handleInputChange} checked={data.sex === 'female'} required />
            <label htmlFor="sex-female">Female</label>
          </fieldset>
          <fieldset className="field">
            <legend className="field__label">Height</legend>

            <div className="subfields">
              <div className="field subfields__field">
                <label className="field__label field__label--sub" htmlFor="height-feet">Feet</label>
                <input className="field__box" id="height-feet" type="number" step="any" value={data.heightFeet} onChange={handleInputChange} name="heightFeet" required />
              </div>
              <div className="field subfields__field">
                <label className="field__label field__label--sub" htmlFor="height-inches">Inches</label>
                <input className="field__box" id="height-inches" type="number" step="any" value={data.heightInches} onChange={handleInputChange} name="heightInches" />
              </div>
            </div>

          </fieldset>
          <div className="field">
            <label className="field__label" htmlFor="weight">Weight</label>
            <input className="field__box" id="weight" type="number" value={data.weight} onChange={handleInputChange} name="weight" required />
          </div>
          <div className="field">
            <label className="field__label field__label--main" htmlFor="exercise">Excersise Level</label>
            <select value={data.exercise} onChange={handleInputChange} className="field__box" id="exercise" name="exercise" required>
              <option value="1.2">Little or no exercise</option>
              <option value="1.375">Light exercise or sports - 1-3 days/week</option>
              <option value="1.55">Moderate exercise or sports - 3-5 days/week</option>
              <option value="1.725">Hard exercise or sports - 6-7 days/week</option>
              <option value="1.9">Hard daily exercise or sports & physical labor job</option>
            </select>
          </div>
          <button className="button" type="submit">Calculate</button>
        </form>
      );
    }
}
