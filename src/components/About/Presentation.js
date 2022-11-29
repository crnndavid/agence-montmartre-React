import React from "react";
import styles from "./Presentation.module.css";
import AboutImg from "../../assets/img/about.jpg";
const Presentation = () => {
  return (
    <section className={styles.description}>
      <img src={AboutImg} alt="Logo agence" width="100%" />
      <div className={styles.bio}>
        <h2>Qui sommes nous ?</h2>
        <p>
          Agence Montmartre est un groupe familial fondé en 1984, membre des
          Leading Real Estate Companies of the World et d'Unio, le 1er réseau
          immobilier de luxe parisien. Il fournit des services haut de gamme
          pour la vente, la gestion et la location de biens immobiliers de
          qualité à Paris. Avec 16 agences au cœur des quartiers, 60 000 clients
          français et internationaux, Junot vend 500 biens par an et gère 500
          millions d’euros d’actifs immobiliers, du studio à l’hôtel
          particulier.
        </p>
      </div>
    </section>
  );
};

export default Presentation;
