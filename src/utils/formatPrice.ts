export const formatPrice = (price: number) => {
  const formattedPrice = (price / 100).toLocaleString('pt-BR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return `R$${formattedPrice}`;
};
