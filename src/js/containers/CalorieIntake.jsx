import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import Result from '../components/Result';

import '../../css/styles.css';

class CalorieIntake extends React.PureComponent {
  static propTypes = {
    getBMR: PropTypes.func.isRequired,
    calorieIntake: PropTypes.shape({
      maintain: PropTypes.number,
      loose: PropTypes.number,
      gain: PropTypes.number,
    }),
  };

  static defaultProps = {
    calorieIntake: null,
  };

  state = {
    age: '',
    sex: '',
    heightFeet: '',
    heightInches: '',
    weight: '',
    exercise: 1.2,
  }

  onSubmit = () => {
    this.getBMR(this.state);
  };

  getBMR({
    heightFeet, heightInches, age, sex, weight, exercise,
  }) {
    const { getBMR } = this.props;
    const feetInCm = (parseFloat(heightFeet, 10) * 30.48);
    const inchesInCm = heightInches ? (parseFloat(heightInches, 10) * 2.54) : 0;
    const heightInCm = feetInCm + inchesInCm;

    getBMR({
      age, sex, weight, exercise, heightInCm,
    });
  }

  handleInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
  };

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

const mapStateToProps = ({ calorieIntake }) => ({
  calorieIntake,
});

const mapDispatchToProps = dispatch => ({
  getBMR: ({
    age, sex, weight, exercise, heightInCm,
  }) => {
    dispatch({
      type: 'GET_CALORIE_INTAKE',
      formData: {
        age,
        sex,
        weight,
        exercise,
        heightInCm,
      },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CalorieIntake);
