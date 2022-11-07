import React from "react";
import Banner from "../components/Banner";
import Wrapper from "../components/Layout/Wrapper";
import Title from "../components/UI/Title";
const Home = ({ colors }) => {
  return (
    <div id="home">
      <Banner />
      <Wrapper bg={colors.dark}>
        <Title title="Ventes - Les nouveautés" />
        {/* <Slider items={formatSales} autoPlay={true} /> */}
      </Wrapper>
      <Wrapper bg={colors.white}>
        <div className="presentation">
          <img src="https://picsum.photos/id/50/300/300/" alt="" />
          <div className="about">
            <Title title="Agence Montmartre" color={colors.dark} />
            <p>
              Maison familiale depuis 1984, Junot est née à Paris de notre
              passion pour l'immobilier et de notre volonté d’offrir des
              services performants et haut de gamme pour vendre, acheter, louer
              ou gérer vos biens. Notre métier, nous l'envisageons avant tout
              comme une expérience humaine. Enthousiasme et rigueur,
              transparence et écoute sont les valeurs fondamentales sur
              lesquelles nos équipes s'appuient au quotidien pour vous
              accompagner dans vos projets. Ces projets immobiliers sont pour
              vous, et pour nous, d'une importance capitale : enjeux
              sentimentaux et financiers majeurs, leur réussite est notre unique
              objectif. Partenaire exclusif à Paris du groupe international
              Knight Frank et membre des Leading Real Estate Companies of the
              World, Junot vous offre le meilleur d'une expertise locale,
              associée à la puissance inégalée d'un réseau international. Nous
              vendons plus d'un appartement par jour, pourquoi pas le vôtre ?
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Home;
