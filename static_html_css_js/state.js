export let cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
export let currentProduct = null;

export function saveCart() {
  localStorage.setItem('cartItems', JSON.stringify(cart));
}

export function updateCart(newCart) {
  cart = newCart;
  saveCart();
}

export function updateCurrentProduct(product) {
  currentProduct = product;
}