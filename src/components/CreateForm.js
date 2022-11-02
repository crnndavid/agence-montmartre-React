import React from "react";

const CreateForm = ({ onSubmit, onChangeName, onChangePrice }) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Titre</label>
      <br />
      <input type="text" onChange={onChangeName} id="name" /> <br />
      <label htmlFor="price">Prix</label>
      <br />
      <input type="number" onChange={onChangePrice} id="price" />
      <br />
      <button type="submit">Add Sale</button>
    </form>
  );
};

export default CreateForm;
