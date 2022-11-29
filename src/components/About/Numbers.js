import React from "react";
import Wrapper from "../Layout/Wrapper";
import Title from "../UI/Title";
import Number from "../Number";
import { Row, Col } from "react-bootstrap";
const Numbers = () => {
  return (
    <Wrapper>
      <section className="text-center">
        <Title title="Chiffres clés" color="#313131" />

        <Row>
          <Col>
            <Number year="1984" title="Date de création du groupe" />
          </Col>
          <Col>
            <Number year="20" title="Agences à Paris" />
          </Col>
          <Col>
            <Number year="100" title="Collaborateurs" />
          </Col>
          <Col>
            <Number year="600" title="Biens vendus par an" />
          </Col>
        </Row>
      </section>
    </Wrapper>
  );
};

export default Numbers;
