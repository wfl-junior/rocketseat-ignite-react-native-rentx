const formatter = Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function formatPrice(price: number): string {
  return formatter.format(price);
}
