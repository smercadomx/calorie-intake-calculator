import React from 'react';
import Form from '../components/Form';
import Result from '../components/Result';
import {connect} from 'react-redux';

import '../../css/styles.css';

class CalorieIntake extends React.PureComponent {
    state = {
        age: "",
        sex: "",
        heightFeet: "",
        heightInches: "",
        weight: "",
        exercise: 1.2
    }

    onSubmit = () => {
        this.getBMR(this.state);
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    getBMR({heightFeet, heightInches, age, sex, weight, exercise}) {
        let feetInCm = (parseFloat(heightFeet, 10) * 30.48);
        let inchesInCm = heightInches ? (parseFloat(heightInches, 10) * 2.54) : 0;
        let heightInCm = feetInCm + inchesInCm;

        this.props.getBMR({age, sex, weight, exercise, heightInCm});
    }

    render() {
        const { calorieIntake } = this.props;

        return (
            <div className="container">
                <h1>Calorie Intake Calculator</h1>

                <Form
                    data={this.state}
                    handleInputChange={this.handleInputChange}
                    onSubmit={this.onSubmit}
                />

                <Result calorieIntake={calorieIntake} />

                <div className="legend">This calculator uses the Mifflin-St Jeor Equation.</div>
            </div>
        );
    }
}

const mapStateToProps = ({calorieIntake}) => {
    return {
        calorieIntake
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getBMR: ({age, sex, weight, exercise, heightInCm}) => {
            dispatch({
                type: 'GET_CALORIE_INTAKE',
                formData: {
                    age,
                    sex,
                    weight,
                    exercise,
                    heightInCm
                }
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CalorieIntake);