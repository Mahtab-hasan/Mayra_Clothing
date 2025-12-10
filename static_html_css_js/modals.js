import { renderCartModal, renderProductModal, renderHeader, renderProducts, renderOrderSuccessPage } from './render.js';
import { updateCurrentProduct } from './state.js';

export function openCartModal() {
  renderCartModal();
}
export function closeCartModal() {
  document.getElementById('cart-modal').classList.remove('active');
}
export function openProductModal(id) {
  updateCurrentProduct(window.products.find(p => p.id === id));
  renderProductModal(currentProduct);
}
export function closeProductModal() {
  document.getElementById('product-modal').classList.remove('active');
}
export function goToCheckout() {
  closeCartModal();
  renderCheckoutPage();
}
export function goHome() {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  renderHeader();
  renderProducts();
}