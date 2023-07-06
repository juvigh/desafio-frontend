export const formatPrice = (price: number) => {
  const formattedPrice = (price / 100).toFixed(0);
  return `R$ ${formattedPrice}`;
};
