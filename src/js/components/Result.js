import React from 'react';

export default class Result extends React.PureComponent {
    renderUI(calorieIntake) {
        return (
            <div
                className="result"
                tabIndex="-1"
                ref={(result) => { result && result.focus(); }}
            >
                To maintain weight you need <strong>{calorieIntake.maintain.toFixed(2)} calories</strong><br />
                To loose 1lb a week you need <strong>{(calorieIntake.loose).toFixed(2)} calories</strong><br />
                To gain 1lb a week you need <strong>{(calorieIntake.gain).toFixed(2)} calories</strong>
            </div>
        );
    }

    render() {
        const {calorieIntake} = this.props;

        return (calorieIntake ? this.renderUI(calorieIntake) : null);
    }
}