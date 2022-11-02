import React from "react";

const CreateForm = ({
  onSubmit,
  onChangeName,
  onChangePrice,
  onChangeFile,
  name,
  price,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Titre</label>
      <br />
      <input type="text" onChange={onChangeName} id="name" value={name} />{" "}
      <br />
      <label htmlFor="price">Prix</label>
      <br />
      <input type="number" onChange={onChangePrice} id="price" value={price} />
      <br />
      <label htmlFor="image">Image</label>
      <br />
      <input type="file" onChange={onChangeFile} /> <br />
      <button type="submit">Add Sale</button>
    </form>
  );
};

export default CreateForm;
