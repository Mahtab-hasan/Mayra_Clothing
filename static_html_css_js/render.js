import { cart, currentProduct } from './state.js';
import { openCartModal, closeCartModal, openProductModal, closeProductModal, goToCheckout, goHome } from './modals.js';
import { filterProducts } from './productFilter.js';
import { removeFromCart, addToCartFromModal } from './cart.js';

export function renderHeader() {
  document.getElementById('header').innerHTML = `
    <nav style="display:flex;justify-content:space-between;align-items:center;padding:1em 2em;">
      <h1>Mayra Clothing</h1>
      <div style="position:relative;">
        <button data-action="openCartModal" style="position:relative;">
          <i class="fas fa-shopping-cart"></i>
          <span class="cart-badge">${cart.reduce((a, b) => a + b.quantity, 0)}</span>
        </button>
      </div>
    </nav>
  `;
}
export function renderHero() {
  document.getElementById('hero').innerHTML = `
    <div style="background:#c1f5c2;padding:3em 1em;text-align:center;">
      <h2>Discover Your Style With <span style="color:#1c1c1c;">Mayra Clothing</span></h2>
      <p>Premium DTF Printed T-Shirts & Fashion Wear in Bangladesh</p>
      <button class="btn" data-action="scrollToShop">Shop Now</button>
    </div>
  `;
}
export function renderCategories() {
  document.getElementById('categories').innerHTML = `
    <h2 style="text-align:center;">Shop by Category</h2>
    <div style="display:flex;gap:2em;justify-content:center;">
      <div class="category-card" data-action="filterProducts" data-category="men" style="cursor:pointer;">
        <img src="images/menfashion.jpg" alt="Men's Fashion" style="width:200px;height:200px;object-fit:cover;border-radius:8px;">
        <h3>Men's Fashion</h3>
      </div>
      <div class="category-card" data-action="filterProducts" data-category="women" style="cursor:pointer;">
        <img src="images/womenfashion.jpeg" alt="Women's Fashion" style="width:200px;height:200px;object-fit:cover;border-radius:8px;">
        <h3>Women's Fashion</h3>
      </div>
    </div>
  `;
}
export function renderProducts(category = 'all') {
  let filtered = category === 'all' ? window.products : window.products.filter(p => p.category === category);
  document.getElementById('shop').innerHTML = `
    <h2>Featured Products</h2>
    <div style="display:flex;flex-wrap:wrap;justify-content:center;">
      ${filtered.map(product => `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>৳${product.price}</p>
          <button data-action="openProductModal" data-id="${product.id}">View</button>
        </div>
      `).join('')}
    </div>
  `;
}
export function renderFooter() {
  document.getElementById('footer').innerHTML = `
    <div style="text-align:center;padding:2em 0;background:#222;color:#fff;">
      &copy; 2024 Mayra Clothing. All rights reserved.
    </div>
  `;
}
export function renderCartModal() {
  document.getElementById('cart-modal').innerHTML = `
    <div style="background:#fff;padding:2em;border-radius:12px;min-width:320px;max-width:90vw;max-height:90vh;overflow:auto;position:relative;">
      <button data-action="closeCartModal" style="position:absolute;top:1em;right:1em;background:none;border:none;font-size:1.5em;">&times;</button>
      <h2>Shopping Cart</h2>
      ${cart.length === 0 ? `<p>Your cart is empty.</p>` : `
        <ul style="list-style:none;padding:0;">
          ${cart.map(item => `
            <li style="display:flex;align-items:center;gap:1em;margin-bottom:1em;">
              <img src="${item.image}" alt="${item.name}" style="width:60px;height:60px;object-fit:cover;border-radius:6px;">
              <div>
                <strong>${item.name}</strong><br>
                Size: ${item.selectedSize} | Color: ${item.selectedColor}<br>
                ৳${item.price} × ${item.quantity} = ৳${item.price * item.quantity}
              </div>
              <button data-action="removeFromCart" data-id="${item.id}" data-size="${item.selectedSize}" data-color="${item.selectedColor}" style="margin-left:auto;">Remove</button>
            </li>
          `).join('')}
        </ul>
        <div style="margin-top:1em;">
          <strong>Total: ৳${cart.reduce((t, i) => t + i.price * i.quantity, 0)}</strong>
        </div>
        <div style="margin-top:1em;display:flex;gap:1em;">
          <button data-action="closeCartModal">Continue Shopping</button>
          <button data-action="goToCheckout">Checkout</button>
        </div>
      `}
    </div>
  `;
  document.getElementById('cart-modal').classList.add('active');
}
export function renderProductModal(product) {
  document.getElementById('product-modal').innerHTML = `
    <div style="background:#fff;padding:2em;border-radius:12px;min-width:320px;max-width:90vw;max-height:90vh;overflow:auto;position:relative;">
      <button data-action="closeProductModal" style="position:absolute;top:1em;right:1em;background:none;border:none;font-size:1.5em;">&times;</button>
      <div style="display:flex;gap:2em;">
        <img src="${product.image}" alt="${product.name}" style="width:180px;height:180px;object-fit:cover;border-radius:8px;">
        <div>
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <p>৳${product.price}</p>
          <div>
            <label>Size:</label>
            <select id="modal-size">
              <option value="">Select</option>
              ${product.sizes.map(s => `<option value="${s}">${s}</option>`).join('')}
            </select>
          </div>
          <div>
            <label>Color:</label>
            <select id="modal-color">
              <option value="">Select</option>
              ${product.colors.map(c => `<option value="${c}">${c}</option>`).join('')}
            </select>
          </div>
          <div>
            <label>Qty:</label>
            <input id="modal-qty" type="number" min="1" value="1" style="width:50px;">
          </div>
          <button data-action="addToCartFromModal" data-id="${product.id}">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
  document.getElementById('product-modal').classList.add('active');
}
export function renderCheckoutPage() {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('checkout-page').classList.add('active');
  document.getElementById('checkout-page').innerHTML = `
    <div style="background:#fff;padding:2em;border-radius:12px;max-width:600px;margin:2em auto;">
      <h2>Checkout</h2>
      <form id="checkout-form">
        <input type="text" name="firstName" placeholder="First Name" required /><br>
        <input type="text" name="lastName" placeholder="Last Name" required /><br>
        <input type="email" name="email" placeholder="Email" required /><br>
        <input type="tel" name="phone" placeholder="Phone" required /><br>
        <input type="text" name="address" placeholder="Address" required /><br>
        <input type="text" name="city" placeholder="City" required /><br>
        <input type="text" name="area" placeholder="Area" required /><br>
        <select name="payment" required>
          <option value="bkash">bKash</option>
          <option value="nagad">Nagad</option>
          <option value="cod">Cash on Delivery</option>
        </select><br>
        <button type="submit" data-action="placeOrder">Place Order</button>
      </form>
      <div style="margin-top:2em;">
        <h3>Order Summary</h3>
        <ul>
          ${cart.map(item => `<li>${item.name} (${item.selectedSize}, ${item.selectedColor}) × ${item.quantity} = ৳${item.price * item.quantity}</li>`).join('')}
        </ul>
        <strong>Total: ৳${cart.reduce((t, i) => t + i.price * i.quantity, 0)}</strong>
      </div>
    </div>
  `;
  document.getElementById('checkout-form').onsubmit = function(e) {
    e.preventDefault();
    const fd = new FormData(this);
    const order = {
      customerInfo: Object.fromEntries(fd.entries()),
      items: cart,
      total: cart.reduce((t, i) => t + i.price * i.quantity, 0),
      orderDate: new Date().toISOString()
    };
    localStorage.setItem('lastOrder', JSON.stringify(order));
    localStorage.setItem('isOrderPlaced', 'true');
    cart = [];
    localStorage.removeItem('cartItems');
    renderHeader();
    renderOrderSuccessPage();
  };
}
export function renderOrderSuccessPage() {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('order-success-page').classList.add('active');
  const order = JSON.parse(localStorage.getItem('lastOrder') || '{}');
  document.getElementById('order-success-page').innerHTML = `
    <div style="background:#fff;padding:2em;border-radius:12px;max-width:600px;margin:2em auto;text-align:center;">
      <h2>Order Placed!</h2>
      <p>Thank you, ${order.customerInfo?.firstName || ''}!</p>
      <p>Your order has been placed successfully.</p>
      <button data-action="goHome">Continue Shopping</button>
    </div>
  `;
}

export function renderAboutSection() {
  document.getElementById('about').innerHTML = `
    <div class="container" style="padding: 3rem 0; text-align: center;">
      <h2>About Mayra Clothing</h2>
      <p>Mayra Clothing is your premier destination for high-quality DTF printed t-shirts and fashion wear in Bangladesh. We are committed to providing our customers with unique designs, comfortable fabrics, and exceptional service. Our mission is to help you express your style with confidence and flair.</p>
      <p>Founded in 2024, Mayra Clothing quickly established itself as a leader in the local fashion scene, known for its innovative designs and commitment to customer satisfaction. We believe in sustainable practices and ethical sourcing, ensuring that every product you purchase not only looks good but also does good.</p>
    </div>
  `;
}

export function renderTestimonialsSection() {
  document.getElementById('testimonials').innerHTML = `
    <div class="container" style="padding: 3rem 0; text-align: center; background-color: #e9ecef;">
      <h2>What Our Customers Say</h2>
      <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 2em;">
        <div class="testimonial-card" style="background: #fff; padding: 1.5em; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); width: 300px;">
          <p>"Absolutely love the quality and unique designs! Mayra Clothing is my go-to for stylish tees."</p>
          <strong>- Jane Doe</strong>
        </div>
        <div class="testimonial-card" style="background: #fff; padding: 1.5em; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); width: 300px;">
          <p>"Fast delivery and the t-shirt exceeded my expectations. Highly recommend!"</p>
          <strong>- John Smith</strong>
        </div>
        <div class="testimonial-card" style="background: #fff; padding: 1.5em; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); width: 300px;">
          <p>"Finally, a brand that offers both style and comfort. Mayra Clothing never disappoints."</p>
          <strong>- Emily White</strong>
        </div>
      </div>
    </div>
  `;
}

export function renderNewsletterSection() {
  document.getElementById('newsletter').innerHTML = `
    <div class="container" style="padding: 3rem 0; text-align: center; background-color: #f8f9fa;">
      <h2>Join Our Newsletter</h2>
      <p>Stay up-to-date with the latest collections and exclusive offers!</p>
      <form style="display: flex; justify-content: center; gap: 1em; margin-top: 1.5em;">
        <input type="email" placeholder="Enter your email" style="width: 300px; padding: 0.8em; border-radius: 5px; border: 1px solid #ddd;" />
        <button type="submit" class="btn">Subscribe</button>
      </form>
    </div>
  `;
}