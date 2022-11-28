import React from "react";
import styles from "./CreateForm.module.css";
import { LOCATION_VALUES, STAIRS_VALUES } from "../constants";
import { Row, Col } from "react-bootstrap";
const CreateForm = ({
  onSubmit,
  onChangeName,
  onChangePrice,
  onChangeFile,
  onChangeCategory,
  onChangeStair,
  onChangeLocation,
  onChangeDescription,
  onChangeSurface,
  name,
  price,
  description,
  stair,
  location,
  image,
  category,
  surface,
}) => {
  return (
    <form onSubmit={onSubmit} className={styles.formCreate}>
      <div className={styles.formControl}>
        <label htmlFor="name">Titre</label>
        <input
          type="text"
          onChange={onChangeName}
          id="name"
          value={name}
          required
        />
      </div>
      <div className={styles.formControl}>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          onChange={onChangeDescription}
          value={description}
          required
        />
      </div>
      <Row>
        <Col sm={12} md={4}>
          <div className={styles.formControl}>
            <label htmlFor="price">Prix</label>
            <input
              type="number"
              onChange={onChangePrice}
              id="price"
              value={price}
              required
            />
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div className={styles.formControl}>
            <label htmlFor="surface">Surface</label>
            <input
              type="number"
              onChange={onChangeSurface}
              id="surface"
              value={surface}
              required
            />
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div className={styles.formControl}>
            <label htmlFor="stair">Etage</label>
            <select
              name="stair"
              id="stair"
              onChange={onChangeStair}
              value={stair}
              required
            >
              <option value="">--- Please select a floor---</option>
              {STAIRS_VALUES.map((stair) => (
                <option value={stair.value}>{stair.text}</option>
              ))}
            </select>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <div className={styles.formControl}>
            <label htmlFor="type">Type</label>
            <select
              name="type"
              id="type"
              onChange={onChangeCategory}
              value={category}
              required
            >
              <option value="">--- Please select a type ---</option>
              <option value="location">Location</option>
              <option value="vente">Vente</option>
            </select>
          </div>
        </Col>
        <Col>
          <div className={styles.formControl}>
            <label htmlFor="location">Lieu</label>
            <select
              name="location"
              id="location"
              onChange={onChangeLocation}
              required
              value={location}
            >
              <option value="">--- Please select a location ---</option>
              {LOCATION_VALUES.map((location) => (
                <option value={location.value}>{location.text}</option>
              ))}
            </select>
          </div>
        </Col>
        <Col>
          <div className={styles.formControl}>
            <label htmlFor="image">Image</label>
            <input type="file" onChange={onChangeFile} required />
          </div>
        </Col>
      </Row>

      <button type="submit">Add Sale</button>
    </form>
  );
};

export default CreateForm;
