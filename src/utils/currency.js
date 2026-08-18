export const formatCurrency = (value) => {
  if (value === null || value === undefined || Number.isNaN(Number(value))) {
    return 'Contact for Price'
  }

  return new Intl.NumberFormat('en-LK', {
    style: 'currency',
    currency: 'LKR',
    maximumFractionDigits: 0,
  }).format(Number(value))
}

export const formatShortCurrency = (value) => {
  if (value === null || value === undefined || Number.isNaN(Number(value))) {
    return 'Call for price'
  }

  return `Rs. ${new Intl.NumberFormat('en-LK', {
    maximumFractionDigits: 0,
  }).format(Number(value))}`
}
