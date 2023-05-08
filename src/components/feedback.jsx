import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions';
import { Statistics } from './Statistics.js';
import {Section, Title} from './Section.styled'
class Counter extends React.Component {
  static defaultProps = {
    initState: {
      good: 0,
      neutral: 0,
      bad: 0,
    },
  };
  state = {
    good: this.props.initState.good,
    neutral: this.props.initState.neutral,
    bad: this.props.initState.bad,
  };
  btnReview = event => {
    const btnValue = event.currentTarget.value;
    this.setState(prevState => ({
      ...prevState,
      [btnValue]: prevState[btnValue] + 1,
    }));
  };
  // handButtonPressGood = () => {
  //   console.log(`добре ${this.state.good}`);
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };
  // handButtonPressNeutral = () => {
  //   console.log(`нейтрально ${this.state.neutral}`);
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };
  // handButtonPressBad = () => {
  //   console.log(`погано ${this.state.bad}`);
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };
  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    let percentage = `${Math.round(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100
    )}%`;
    return percentage;
  };

  render() {
    // const { good, neutral, bad } = this.state;
    const btnNames = Object.keys(this.state);
    return (
      <div>
        <Section><Title>Please leave feedback</Title></Section>
          <Button
          options={btnNames} onReview={this.btnReview} />
             {/* onButtonPressGood={this.handButtonPressGood}
             onButtonPressNeutral={this.handButtonPressNeutral}
             onButtonPressBad={this.handButtonPressBad} */}
         
          
          {this.countTotalFeedback() ? (
            <Statistics
              onGood={this.state.good}
              onNeutral={this.state.neutral}
              onBad={this.state.bad}
              onCountTotalFeedback={this.countTotalFeedback}
              onCountPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
            />
          ) : null}
       
        {!this.countTotalFeedback() ? <Section><Title>There is no feedback</Title></Section> : null}
      </div>
    );
  }
}
Button.propTypes={
  onButtonPressGood:PropTypes.func,
  onButtonPressNeutral:PropTypes.func,
  onButtonPressBad:PropTypes.func,

};
Statistics.propTypes={
  onGood:PropTypes.number,
  onNeutral:PropTypes.number,
  onBad:PropTypes.number,
  onCountTotalFeedback:PropTypes.func,
  onCountPositiveFeedbackPercentage:PropTypes.func,

}

export default Counter;

// <button type="button" onClick={this.handButtonPressGood}>
// Good
// </button>
// <button type="button" onClick={this.handButtonPressNeutral}>
// Neutral
// </button>
// <button type="button" onClick={this.handButtonPressBad}>
// Bad
// </button>

//       <p>Good:{this.state.good}</p>
//       <p>Neutral:{this.state.neutral}</p>
//       <p>Bad:{this.state.bad}</p>
//       <p>Total:{this.countTotalFeedback()}</p>
//       <p>Positive feedback: {this.countPositiveFeedbackPercentage()}</p>
//     </div>

//         <p>There is no feedback</p>
