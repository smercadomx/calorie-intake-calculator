import React from 'react';
import getBMR from './calorieCalculator';

import '../css/styles.css';

export default class App extends React.PureComponent {
    state = {
        age: "",
        sex: "",
        heightFeet: "",
        heightInches: "",
        weight: "",
        exercise: 1.2,
        result: ""
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.setState({result: this.getResult(this.state)}, () => {
            this.result.focus();
        });
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    getResult(formData) {
        let feetInCm = (parseFloat(formData.heightFeet, 10) * 30.48);
        let inchesInCm = formData.heightInches ? (parseFloat(formData.heightInches, 10) * 2.54) : 0;
        let heightInCm =  feetInCm + inchesInCm;
        return getBMR(formData.age, formData.sex, heightInCm, formData.weight) * parseFloat(formData.exercise, 10);
    }

    render() {
        return (
            <div className="container">
                <h1>Calorie Intake Calculator Changed</h1>
                <form id="form" action="calculate" method="post" onSubmit={this.onSubmit}>
                    <div className="field">
                        <label className="field__label" htmlFor="age">Age</label>
                        <input value={this.state.age} onChange={this.handleInputChange} className="field__box" id="age" type="number" name="age" required />
                    </div>
                    <fieldset className="field">
                        <legend className="field__label">Sex</legend>
                        <input id="sex-male" type="radio" name="sex" value="male" onChange={this.handleInputChange} checked={'male' === this.state.sex} required />
                        <label htmlFor="sex-male">Male</label>
                        <input id="sex-female" type="radio" name="sex" value="female" onChange={this.handleInputChange} checked={'female' === this.state.sex} required />
                        <label htmlFor="sex-female">Female</label>
                    </fieldset>
                    <fieldset className="field">
                        <legend className="field__label">Height</legend>

                        <div className="subfields">
                            <div className="field subfields__field">
                                <label className="field__label field__label--sub" htmlFor="height-feet">Feet</label>
                                <input className="field__box" id="height-feet" type="number" step="any" value={this.state.heightFeet} onChange={this.handleInputChange} name="heightFeet" required />
                            </div>
                            <div className="field subfields__field">
                                <label className="field__label field__label--sub" htmlFor="height-inches">Inches</label>
                                <input className="field__box" id="height-inches" type="number" step="any" value={this.state.heightInches} onChange={this.handleInputChange} name="heightInches" />
                            </div>
                        </div>

                    </fieldset>
                    <div className="field">
                        <label className="field__label" htmlFor="weight">Weight</label>
                        <input className="field__box" id="weight" type="number" value={this.state.weight} onChange={this.handleInputChange} name="weight" required />
                    </div>
                    <div className="field">
                        <label className="field__label field__label--main" htmlFor="exercise">Excersise Level</label>
                        <select value={this.state.exercise} onChange={this.handleInputChange} className="field__box" id="exercise" name="exercise" required>
                            <option value="1.2">Little or no exercise</option>
                            <option value="1.375">Light exercise or sports - 1-3 days/week</option>
                            <option value="1.55">Moderate exercise or sports - 3-5 days/week</option>
                            <option value="1.725">Hard exercise or sports - 6-7 days/week</option>
                            <option value="1.9">Hard daily exercise or sports & physical labor job</option>
                        </select>
                    </div>
                    <button className="button" type="submit">Calculate</button>
                </form>
                {this.state.result &&
                    <div
                        className="result"
                        tabIndex="-1"
                        ref={(result) => {this.result = result;}}
                    >
                        To maintain weight you need <strong>{this.state.result.toFixed(2)} calories</strong><br />
                        To loose 1lb a week you need <strong>{(this.state.result - 500).toFixed(2)} calories</strong><br />
                        To gain 1lb a week you need <strong>{(this.state.result + 500).toFixed(2)} calories</strong>
                    </div>
                }
                <div className="legend">This calculator uses the Mifflin-St Jeor Equation.</div>
            </div>   
        );
    }
}
