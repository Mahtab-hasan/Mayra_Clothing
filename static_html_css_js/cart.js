import { cart, saveCart, updateCart } from './state.js';
import { renderCartModal, renderHeader, closeProductModal } from './render.js';

export function addToCartFromModal(productId) {
  const product = window.products.find(p => p.id === productId);
  const size = document.getElementById('modal-size').value;
  const color = document.getElementById('modal-color').value;
  const qty = parseInt(document.getElementById('modal-qty').value, 10);
  if (!size || !color || qty < 1) {
    alert('Please select size, color, and quantity.');
    return;
  }
  const existing = cart.find(i => i.id === productId && i.selectedSize === size && i.selectedColor === color);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      selectedSize: size,
      selectedColor: color,
      quantity: qty
    });
  }
  saveCart();
  closeProductModal();
  renderHeader();
}
export function removeFromCart(id, size, color) {
  updateCart(cart.filter(i => !(i.id === id && i.selectedSize === size && i.selectedColor === color)));
  renderCartModal();
  renderHeader();
}