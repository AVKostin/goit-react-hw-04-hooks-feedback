import PropsType from 'prop-types';
import { Container, Title } from './Section.styled';
const Section = ({ title, children }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  );
};

Section.propTypes = {
  title: PropsType.string,
};

export default Section;
