import { useEffect, useState } from 'react';
import { Wrapper } from './App.styled';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positiveFeedBack, setPositiveFeedback] = useState(0);

  const countTotalFeedback = () => {
    setTotal(good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = () =>
    setPositiveFeedback(Number(((good / total) * 100).toFixed(0)));

  useEffect(() => {
    countTotalFeedback();
    countPositiveFeedbackPercentage();
  });

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(state => state + 1);
        return;
      case 'neutral':
        setNeutral(state => state + 1);
        return;
      case 'bad':
        setBad(state => state + 1);
        return;
      default:
        return;
    }
  };

  const options = {
    good,
    neutral,
    bad,
  };

  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <Feedback options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedBack}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Wrapper>
  );
};

export default App;