import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-child) {
    padding-bottom: 40px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 32px;
  font-weight: 700;
  font-size: 26px;
  line-height: 1.17;
`;
