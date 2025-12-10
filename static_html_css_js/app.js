import { cart, saveCart, updateCart } from './state.js';
import { renderHeader, renderHero, renderCategories, renderProducts, renderFooter, renderCartModal, renderProductModal, renderCheckoutPage, renderOrderSuccessPage, renderAboutSection, renderTestimonialsSection, renderNewsletterSection } from './render.js';
import { openCartModal, closeCartModal, openProductModal, closeProductModal, goToCheckout, goHome } from './modals.js';
import { filterProducts } from './productFilter.js';
import { addToCartFromModal, removeFromCart } from './cart.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('App initialized.');
  renderHeader();
  renderHero();
  renderCategories();
  renderProducts();
  renderAboutSection();
  renderTestimonialsSection();
  renderNewsletterSection();
  renderFooter();

  // Event Listeners for dynamically added elements (delegation)
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-action]');
    if (!target) return;

    const action = target.dataset.action;
    const id = target.dataset.id ? parseInt(target.dataset.id) : null;
    const category = target.dataset.category;
    const size = target.dataset.size;
    const color = target.dataset.color;

    switch (action) {
      case 'openCartModal':
        openCartModal();
        break;
      case 'closeCartModal':
        closeCartModal();
        break;
      case 'openProductModal':
        openProductModal(id);
        break;
      case 'closeProductModal':
        closeProductModal();
        break;
      case 'addToCartFromModal':
        addToCartFromModal(id);
        break;
      case 'removeFromCart':
        removeFromCart(id, size, color);
        break;
      case 'goToCheckout':
        goToCheckout();
        break;
      case 'goHome':
        goHome();
        break;
      case 'filterProducts':
        filterProducts(category);
        break;
      case 'scrollToShop':
        document.getElementById('shop').scrollIntoView({behavior:'smooth'});
        break;
      case 'placeOrder':
        // Handled by form submit listener
        break;
      case 'subscribeNewsletter':
        // Handled by form submit listener
        alert('Newsletter subscription not yet implemented.');
        break;
      default:
        console.warn('Unknown action:', action);
    }
  });

  // Checkout form submission
  document.addEventListener('submit', (e) => {
    if (e.target.id === 'checkout-form') {
      e.preventDefault();
      const fd = new FormData(e.target);
      const order = {
        customerInfo: Object.fromEntries(fd.entries()),
        items: cart,
        total: cart.reduce((t, i) => t + i.price * i.quantity, 0),
        orderDate: new Date().toISOString()
      };
      localStorage.setItem('lastOrder', JSON.stringify(order));
      localStorage.setItem('isOrderPlaced', 'true');
      updateCart([]); // Clear cart after order
      renderHeader();
      renderOrderSuccessPage();
    } else if (e.target.matches('[data-action="subscribeNewsletter"]')) {
      e.preventDefault();
      const email = e.target.querySelector('input[type="email"]').value;
      console.log('Subscribing email:', email);
      alert('Thank you for subscribing!');
      e.target.reset();
    }
  });
});