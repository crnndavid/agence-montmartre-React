import React from "react";
import Banner from "../components/Banner";
import Wrapper from "../components/Layout/Wrapper";
import Title from "../components/UI/Title";
import Container from "react-bootstrap/Container";
import Slider from "../components/Slider";
import AgenceImg from "../assets/img/agence.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Home = ({ colors, rentals, sales, isLoading }) => {
  return (
    <Container>
      <Banner />
      <Wrapper bg={colors.dark}>
        <Title title="Vente - Les nouveautés" />
        <Slider items={sales} />
      </Wrapper>
      <Wrapper bg={colors.white}>
        <Row>
          <Col sm={12} md={4} className="d-flex align-items-center">
            <div className="presentation">
              <img src={AgenceImg} alt="" width="100%" />
            </div>
          </Col>
          <Col>
            <div className="about">
              <Title title="Agence Montmartre" color={colors.dark} />
              <p>
                Maison familiale depuis 1984, Junot est née à Paris de notre
                passion pour l'immobilier et de notre volonté d’offrir des
                services performants et haut de gamme pour vendre, acheter,
                louer ou gérer vos biens. Notre métier, nous l'envisageons avant
                tout comme une expérience humaine. Enthousiasme et rigueur,
                transparence et écoute sont les valeurs fondamentales sur
                lesquelles nos équipes s'appuient au quotidien pour vous
                accompagner dans vos projets. Ces projets immobiliers sont pour
                vous, et pour nous, d'une importance capitale : enjeux
                sentimentaux et financiers majeurs, leur réussite est notre
                unique objectif. Partenaire exclusif à Paris du groupe
                international Knight Frank et membre des Leading Real Estate
                Companies of the World, Junot vous offre le meilleur d'une
                expertise locale, associée à la puissance inégalée d'un réseau
                international. Nous vendons plus d'un appartement par jour,
                pourquoi pas le vôtre ?
              </p>
            </div>
          </Col>
        </Row>
      </Wrapper>
      <Wrapper bg={colors.dark}>
        <Title title="Location - Les nouveautés" />
        <Slider items={rentals} />
      </Wrapper>
    </Container>
  );
};

export default Home;
