import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutImg from "../assets/img/about.jpg";
import Wrapper from "../components/Layout/Wrapper";
import styles from "./About.module.css";
import { GiReticule } from "react-icons/gi";
import { AiOutlineSafetyCertificate, AiOutlineTrophy } from "react-icons/ai";
const About = () => {
  return (
    <Container>
      <section className={styles.description}>
        <img src={AboutImg} alt="Logo agence" width="100%" />
        <div className={styles.bio}>
          <h2>Qui sommes nous ?</h2>
          <p>
            Agence Montmartre est un groupe familial fondé en 1984, membre des
            Leading Real Estate Companies of the World et d'Unio, le 1er réseau
            immobilier de luxe parisien. Il fournit des services haut de gamme
            pour la vente, la gestion et la location de biens immobiliers de
            qualité à Paris. Avec 16 agences au cœur des quartiers, 60 000
            clients français et internationaux, Junot vend 500 biens par an et
            gère 500 millions d’euros d’actifs immobiliers, du studio à l’hôtel
            particulier.
          </p>
        </div>
      </section>
      <section className={styles.values}>
        <Row>
          <Col>
            <div className={styles.value}>
              <GiReticule size={100} />
              <h5>Ethique et transparence</h5>
              <p>
                Nous envisageons notre métier dans la durée, et dans une
                relation de confiance absolue avec nos clients.
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
                Depuis plus de 35 ans, nos équipes pérennes, formées et
                encadrées apportent conseil et savoir-faire pour valoriser les
                biens immobiliers dont nous avons la responsabilité.
              </p>
            </div>
          </Col>
        </Row>
      </section>
      <Wrapper>
        <section className={styles.numbers}>
          <h2>Chiffres clés</h2>
          <Row>
            <Col className={styles.number}>
              <h4>1984</h4>
              <h6>Date de création du groupe</h6>
            </Col>
            <Col className={styles.number}>
              <h4>20</h4>
              <h6>Agences à Paris</h6>
            </Col>
            <Col className={styles.number}>
              <h4>20</h4>
              <h6>Agences à Paris</h6>
            </Col>
            <Col className={styles.number}>
              <h4>100</h4>
              <h6>Collaborateurs</h6>
            </Col>
            <Col className={styles.number}>
              <h4>600</h4>
              <h6>Biens vendus par an</h6>
            </Col>
          </Row>
        </section>
      </Wrapper>
    </Container>
  );
};

export default About;
