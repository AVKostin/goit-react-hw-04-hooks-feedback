import { Component } from 'react';
import { Wrapper } from './App.styled';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

class App extends Component {
static defaultProps = {};
static propTypes = {};

state = {
good: 0,
neutral: 0,
bad: 0,
};

countTotalFeedback = () => {
const { good, neutral, bad } = this.state;

return good + neutral + bad;
};

countPositiveFeedbackPercentage = () =>
this.countTotalFeedback()
    ? Math.floor((this.state.good * 100) / this.countTotalFeedback())
    : 0;

onLeaveFeedback = e => {
const name = e.target.name;
this.setState(prevState => ({
    [name]: prevState[name] + 1,
}));
};

render() {
const { good, neutral, bad } = this.state;
const names = Object.keys(this.state);

return (
    <Wrapper>
    <Section title="Please leave feedback">
        <Feedback options={names} onLeaveFeedback={this.onLeaveFeedback} />
    </Section>

    <Section title="Statistics">
        {this.countTotalFeedback() ? (
        <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
        />
        ) : (
        <Notification message="No  feedback given" />
        )}
    </Section>
    </Wrapper>
);
}
}

export default App;
