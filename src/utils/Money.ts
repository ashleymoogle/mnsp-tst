const formatMoney = (number: number, decimals = false) => {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: decimals ? 2 : 0 }).format(number)
}

export { formatMoney }
