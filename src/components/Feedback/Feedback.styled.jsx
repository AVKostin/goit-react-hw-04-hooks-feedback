import styled from '@emotion/styled';

export const FeedbackWrapper = styled.div`
  display: flex;
`;

export const FeedbackButton = styled.button`
  &:not(:last-child) {
    margin-right: 10px;
  }
  width: 110px;
  height: 30px;
  border: 1px solid #030e1845;
  border-radius: 4px;
  transform: scale(1);

  transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
  color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:nth-of-type(1):hover,
  &:nth-of-type(1):focus {
    font-weight: 700;
    transform: scale(1.05);
    background-color: #0045e1;
    color: #66df4edc;
  }

  &:nth-of-type(2):hover,
  &:nth-of-type(2):focus {
    font-weight: 700;
    transform: scale(1.05);
    background-color: #0045e1;
    color: #93a790dc;
  }

  &:nth-of-type(3):hover,
  &:nth-of-type(3):focus {
    font-weight: 700;
    transform: scale(1.05);
    background-color: #0045e1;
    color: #f10b0bdf;
  }
`;
