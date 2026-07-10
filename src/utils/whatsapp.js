// src/utils/whatsapp.js
export const generateWhatsAppLink = (cart, total) => {
  const phoneNumber = "573123198725";
  
  let message = `Hola Lepochi Cosmetics 💕\n\nQuiero realizar el siguiente pedido:\n\n🛍 Productos\n\n`;
  
  cart.forEach(item => {
    message += `• ${item.nombre} x${item.cantidad}\n$${(item.precio * item.cantidad).toLocaleString('es-CO')}\n\n`;
  });

  message += `Subtotal:\n$${total.toLocaleString('es-CO')}\n\n`;
  message += `Total:\n$${total.toLocaleString('es-CO')}\n\n`;
  message += `Mi nombre es:\n\nMi dirección es:\n\nMuchas gracias. ✨`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};