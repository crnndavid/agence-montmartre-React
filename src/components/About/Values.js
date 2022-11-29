import React from "react";
import styles from "./Values.module.css";
import { Row, Col } from "react-bootstrap";
import { GiReticule } from "react-icons/gi";
import { AiOutlineSafetyCertificate, AiOutlineTrophy } from "react-icons/ai";
const Values = () => {
  return (
    <section className={styles.values}>
      <Row>
        <Col>
          <div className={styles.value}>
            <GiReticule size={100} />
            <h5>Ethique et transparence</h5>
            <p>
              Nous envisageons notre métier dans la durée, et dans une relation
              de confiance absolue avec nos clients.
            </p>
          </div>
        </Col>
        <Col>
          <div className={styles.value}>
            <AiOutlineSafetyCertificate size={100} />
            <h5>Sérieux</h5>
            <p>
              Nous sommes très carrés et exigeants, car nous intervenons dans
              des opérations fondamentales dans la vie de nos clients.
            </p>
          </div>
        </Col>
        <Col>
          <div className={styles.value}>
            <AiOutlineTrophy size={100} />
            <h5>Savoir-faire</h5>
            <p>
              Depuis plus de 35 ans, nos équipes pérennes, formées et encadrées
              apportent conseil et savoir-faire pour valoriser les biens
              immobiliers dont nous avons la responsabilité.
            </p>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Values;
