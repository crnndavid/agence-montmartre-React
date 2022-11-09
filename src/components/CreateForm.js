import React from "react";
import styles from "./CreateForm.module.css";

const LOCATION_VALUES = [
  { value: "Paris 01", text: "Paris 01" },
  { value: "Paris 02", text: "Paris 02" },
  { value: "Paris 03", text: "Paris 03" },
  { value: "Paris 04", text: "Paris 04" },
  { value: "Paris 05", text: "Paris 05" },
  { value: "Paris 06", text: "Paris 06" },
  { value: "Paris 07", text: "Paris 07" },
  { value: "Paris 08", text: "Paris 08" },
  { value: "Paris 09", text: "Paris 09" },
  { value: "Paris 10", text: "Paris 10" },
  { value: "Paris 11", text: "Paris 11" },
  { value: "Paris 12", text: "Paris 12" },
  { value: "Paris 13", text: "Paris 13" },
  { value: "Paris 14", text: "Paris 14" },
  { value: "Paris 15", text: "Paris 15" },
  { value: "Paris 16", text: "Paris 16" },
  { value: "Paris 17", text: "Paris 17" },
  { value: "Paris 18", text: "Paris 18" },
  { value: "Paris 19", text: "Paris 19" },
  { value: "Paris 20", text: "Paris 20" },
];

const STAIRS_VALUES = [
  { value: "rdc", text: "RDC" },
  { value: "1", text: "1" },
  { value: "2", text: "2" },
  { value: "3", text: "3" },
  { value: "4", text: "4" },
  { value: "5", text: "5" },
  { value: "6", text: "6" },
  { value: "7", text: "7" },
];

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
