// Formatea un número como $15.000 (sin depender de Intl)
export const formatearMonto = (n) => {
  const entero = Math.round(n).toString();
  return '$' + entero.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};