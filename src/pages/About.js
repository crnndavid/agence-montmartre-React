import { Container } from "react-bootstrap";

import Presentation from "../components/About/Presentation";

import Values from "../components/About/Values";
import Numbers from "../components/About/Numbers";

const About = () => {
  return (
    <Container>
      <Presentation />
      <Values />
      <Numbers />
    </Container>
  );
};

export default About;
