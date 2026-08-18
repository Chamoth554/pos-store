export const orderService = {
  submitOrder: async (orderData) => {
    await new Promise((resolve) => setTimeout(resolve, 500))

    return {
      success: true,
      orderId: `POS-${Date.now()}`,
      message: 'Order placed successfully. This is a front-end simulation and can be replaced with a real backend later.',
      data: orderData,
    }
  },
}
