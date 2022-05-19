import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
   padding: 5px;
  `;

export const StatisticsItem = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  & span {
    margin-left: 20px;
  }
`;
