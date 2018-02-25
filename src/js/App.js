import React from 'react';

export default class App extends React.PureComponent {
    render() {
        return (
            <div className="container">
                <h1>Calorie Intake Calculator</h1>
                <form id="form" action="calculate" method="post">
                    <div className="field">
                        <label className="field__label" for="age">Age</label>
                        <input className="field__box" id="age" type="number" name="age" required />
                    </div>
                    <fieldset className="field">
                        <legend className="field__label">Sex</legend>
                        <input id="sex-male" type="radio" name="sex" value="male" required />
                        <label for="sex-male">Male</label>
                        <input id="sex-female" type="radio" name="sex" value="female" required />
                        <label for="sex-female">Female</label>
                    </fieldset>
                    <fieldset className="field">
                        <legend className="field__label">Height</legend>

                        <div className="subfields">
                            <div className="field subfields__field">
                                <label className="field__label field__label--sub" for="height-feet">Feet</label>
                                <input className="field__box" id="height-feet" type="number" step="any" name="heightFeet" required />
                            </div>
                            <div className="field subfields__field">
                                <label className="field__label field__label--sub" for="height-inches">Inches</label>
                                <input className="field__box" id="height-inches" type="number" step="any" name="heightInches" />
                            </div>
                        </div>

                    </fieldset>
                    <div className="field">
                        <label className="field__label" for="weight">Weight</label>
                        <input className="field__box" id="weight" type="number" name="weight" required />
                    </div>
                    <div className="field">
                        <label className="field__label field__label--main" for="exercise">Excersise Level</label>
                        <select className="field__box" id="exercise" name="exercise" required>
                            <option value="1.2">Little or no exercise</option>
                            <option value="1.375">Light exercise or sports - 1-3 days/week</option>
                            <option value="1.55">Moderate exercise or sports - 3-5 days/week</option>
                            <option value="1.725">Hard exercise or sports - 6-7 days/week</option>
                            <option value="1.9">Hard daily exercise or sports & physical labor job</option>
                        </select>
                    </div>
                    <button className="button" type="submit">Calculate</button>
                </form>
                <div className="result" tabindex="-1"></div>
                <div className="legend">This calculator uses the Mifflin-St Jeor Equation.</div>
            </div>   
        );
    }
}
