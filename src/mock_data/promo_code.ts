const PROMO_CODES = ['ALPHA2021', 'LOREM', '111']
export const validatePromoCode = (code: string) => {
  return PROMO_CODES.includes(code);
}
