'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useCart } from '@/components/CartCibtext';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function CheckoutPage() {
  const { items, getCartTotal } = useCart();
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState('bkash');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    area: '',
    postalCode: '',
  });

  // Calculate shipping cost based on city
  const [shippingCost, setShippingCost] = useState(80); // Default for Dhaka
  const subtotal = getCartTotal();
  const total = subtotal + shippingCost;

  // Update shipping cost when city changes
  useEffect(() => {
    if (formData.city.toLowerCase() === 'dhaka') {
      setShippingCost(80);
    } else {
      setShippingCost(130);
    }
  }, [formData.city]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle order submission
    toast.success('Order placed successfully! Thank you for shopping with us.', {
      duration: 3000,
    });
    
    setTimeout(() => {
      router.push('/');
    }, 3000);
  };

  if (!mounted) {
    return null; // or <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Delivery Information Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Delivery Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 text-black"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 text-black"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 text-black"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 text-black"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 text-black"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <select
                    required
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 text-black"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                  >
                    <option value="">Select City</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chittagong">Chittagong</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Barisal">Barisal</option>
                    <option value="Rangpur">Rangpur</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Area
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 text-black"
                    value={formData.area}
                    onChange={(e) => setFormData({...formData, area: e.target.value})}
                  />
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Payment Method</h3>
                <div className="space-y-4">
                  <label className="flex items-center p-4 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:border-indigo-500 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="bkash"
                      checked={paymentMethod === 'bkash'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-indigo-600"
                    />
                    <span className="ml-2 flex items-center">
                      <span className="font-medium text-gray-700">bKash</span>
                      <Image src="/images/bkash-logo.png" alt="bKash" width={40} height={40} className="ml-2" />
                    </span>
                  </label>
                  
                  <label className="flex items-center p-4 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:border-indigo-500 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="nagad"
                      checked={paymentMethod === 'nagad'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-indigo-600"
                    />
                    <span className="ml-2 flex items-center">
                      <span className="font-medium text-gray-700">Nagad</span>
                      <Image src="/images/nagad-logo-png.png" alt="Nagad" width={40} height={40} className="ml-2" />
                    </span>
                  </label>

                  <label className="flex items-center p-4 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:border-indigo-500 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-indigo-600"
                    />
                    <span className="ml-2">
                      <span className="font-medium text-gray-700">Cash on Delivery</span>
                    </span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
              >
                Place Order (৳{total})
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md h-fit">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Order Summary</h2>
            
            {/* Cart Items Count */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Items:</span>
                <span className="font-semibold text-gray-800">{items.reduce((total, item) => total + item.quantity, 0)}</span>
              </div>
            </div>
            
            {/* Product List */}
            <div className="space-y-4 max-h-[400px] overflow-y-auto mb-6 pr-2">
              {items.map((item) => (
                <div 
                  key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} 
                  className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100"
                >
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <span className="font-semibold text-gray-800">৳{item.price * item.quantity}</span>
                    </div>
                    <div className="mt-2 space-y-1">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Size: {item.selectedSize}</span>
                        <span>Color: {item.selectedColor}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Price: ৳{item.price}</span>
                        <span>Quantity: {item.quantity}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Breakdown */}
            <div className="border-t border-gray-200 pt-4 space-y-3">
              <div className="flex justify-between items-center text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium text-gray-800">৳{subtotal}</span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <div className="flex items-center gap-2">
                  <span>Shipping</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                    {formData.city.toLowerCase() === 'dhaka' ? 'Inside Dhaka' : 'Outside Dhaka'}
                  </span>
                </div>
                <span className="font-medium text-gray-800">৳{shippingCost}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold pt-4 border-t border-gray-200">
                <span className="text-gray-800">Total</span>
                <span className="text-gray-800">৳{total}</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-600">
                Your order will be delivered within 3-5 days. Shipping cost: ৳80 for Dhaka City, ৳130 for outside Dhaka.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}