export const restricStringLenght = (str) => {
  return str.substring(0, 250) + "...";
};

export const formatSalePrice = (num) => {
  return `${num}€`;
};

export const formatRentalPrice = (num) => {
  return `${num}€/mois`;
};
