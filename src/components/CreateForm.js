import React from "react";
import styles from "./CreateForm.module.css";
import { LOCATION_VALUES, STAIRS_VALUES } from "../constants";

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

      <div className={styles.formControl}>
        <label htmlFor="image">Image</label>
        <input type="file" onChange={onChangeFile} required />
      </div>
      <div className={styles.formControl}>
        <label htmlFor="stair">Etage</label>
        <select
          name="stair"
          id="stair"
          onChange={onChangeStair}
          value={stair}
          required
        >
          {STAIRS_VALUES.map((stair) => (
            <option value={stair.value}>{stair.text}</option>
          ))}
        </select>
      </div>
      <div className={styles.formControl}>
        <label htmlFor="location">Lieu</label>
        <select
          name="location"
          id="location"
          onChange={onChangeLocation}
          required
          value={location}
        >
          {LOCATION_VALUES.map((location) => (
            <option value={location.value}>{location.text}</option>
          ))}
        </select>
      </div>
      <div className={styles.formControl}>
        <label htmlFor="type">Type</label>
        <select
          name="type"
          id="type"
          onChange={onChangeCategory}
          value={category}
          required
        >
          <option value="location">Location</option>
          <option value="vente">Vente</option>
        </select>
      </div>

      <button type="submit">Add Sale</button>
    </form>
  );
};

export default CreateForm;
