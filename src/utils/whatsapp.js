export const WHATSAPP_NUMBER = '947XXXXXXXX'

export const generateWhatsAppMessage = ({ productName, quantity, total, customerName, phone, address }) => {
  const lines = [
    'Hello, I am interested in ordering:',
    '',
    `Product: ${productName || 'N/A'}`,
    `Quantity: ${quantity || 1}`,
    `Total: ${total || 'N/A'}`,
    '',
    `Customer Name: ${customerName || 'N/A'}`,
    `Phone: ${phone || 'N/A'}`,
    `Address: ${address || 'N/A'}`
  ]

  return lines.join('\n')
}

export const createWhatsAppLink = (message) => {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
}
