import PropTypes from 'prop-types';
import { FeedbackWrapper, FeedbackButton } from './Feedback.styled';

export default function Feedback({ options, onLeaveFeedback }) {
  const optionNames = Object.keys(options);
  return (
      <FeedbackWrapper>
        {optionNames.map((option, index) => (
          <FeedbackButton
            key={index}
            name={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </FeedbackButton>
        ))}
      </FeedbackWrapper>
    )
};

Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
