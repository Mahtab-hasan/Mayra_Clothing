'use client';

import React, { useEffect, useState, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShoppingCart, Package } from 'lucide-react';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
  image: string;
}

interface OrderDetails {
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    area: string;
  };
  items: OrderItem[];
  paymentMethod: string;
  subtotal: number;
  shippingCost: number;
  total: number;
  orderDate: string;
}

export default function OrderSuccessPage() {
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const orderData = localStorage.getItem('lastOrder');
      
      if (orderData) {
        const parsedData = JSON.parse(orderData);
        // Validate the order data
        if (parsedData.items && parsedData.customerInfo && parsedData.total && parsedData.orderDate) {
          setOrderDetails(parsedData);
        } else {
          setError('Invalid order data');
        }
      }
    } catch (err) {
      console.error('Error loading order:', err);
      setError('Error loading order details');
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-exclamation-circle text-4xl text-red-600"></i>
          </div>
          <h1 className="text-2xl font-bold text-black mb-4">Error Loading Order</h1>
          <p className="text-black mb-6">{error}</p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={<div>Loading order details...</div>}>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Header Section */}
        <header className="bg-white shadow-sm py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-black">Mayra Clothing</h1>
              </Link>
              <div className="flex items-center gap-4">
                <Link 
                  href="/" 
                  className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </header>

        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {orderDetails ? (
              <>
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-check text-4xl text-green-600"></i>
                  </div>
                  <h1 className="text-3xl font-bold text-black mb-2">Order Details</h1>
                  <p className="text-black">Here are the details of your recent order.</p>
                </div>

                <div className="bg-white text-black rounded-lg shadow-md p-6 mb-8">
                  <h2 className="text-xl font-semibold mb-4">Order Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Customer Information</h3>
                      <div className="space-y-2">
                        <p><span className="font-medium">Name:</span> {orderDetails.customerInfo.firstName} {orderDetails.customerInfo.lastName}</p>
                        <p><span className="font-medium">Email:</span> {orderDetails.customerInfo.email}</p>
                        <p><span className="font-medium">Phone:</span> {orderDetails.customerInfo.phone}</p>
                        <p><span className="font-medium">Address:</span> {orderDetails.customerInfo.address}, {orderDetails.customerInfo.area}, {orderDetails.customerInfo.city}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Payment Information</h3>
                      <div className="space-y-2">
                        <p><span className="font-medium">Payment Method:</span> {orderDetails.paymentMethod}</p>
                        <p><span className="font-medium">Subtotal:</span> ৳{orderDetails.subtotal}</p>
                        <p><span className="font-medium">Shipping:</span> ৳{orderDetails.shippingCost}</p>
                        <p><span className="font-medium">Total:</span> ৳{orderDetails.total}</p>
                      </div>
                    </div>
                  </div>

                  {/* Order Date and Time */}
                  {orderDetails.orderDate && (
                    <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h3 className="text-lg font-medium mb-2 text-blue-800">Order Confirmation</h3>
                      <div className="space-y-1">
                        <p className="text-blue-700">
                          <span className="font-medium">Order Date:</span> {new Date(orderDetails.orderDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                        <p className="text-blue-700">
                          <span className="font-medium">Order Time:</span> {new Date(orderDetails.orderDate).toLocaleTimeString('en-US', {
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit',
                            hour12: true
                          })}
                        </p>
                      </div>
                    </div>
                  )}

                  <h3 className="text-lg font-medium mb-4">Ordered Items</h3>
                  <div className="space-y-4">
                    {orderDetails.items.map((item) => (
                      <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
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
                            <h4 className="font-medium text-black">{item.name}</h4>
                            <span className="font-semibold text-black">৳{item.price * item.quantity}</span>
                          </div>
                          <div className="mt-2 space-y-1">
                            <div className="flex justify-between text-sm text-black">
                              <span>Size: {item.selectedSize}</span>
                              <span>Color: {item.selectedColor}</span>
                            </div>
                            <div className="flex justify-between text-sm text-black">
                              <span>Price: ৳{item.price}</span>
                              <span>Quantity: {item.quantity}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-10 h-10 text-gray-400" />
                </div>
                <h1 className="text-3xl font-bold text-black mb-2">No Orders Yet</h1>
                <p className="text-black mb-6">You haven&apos;t placed any orders yet. Start shopping to see your orders here!</p>
                <Link 
                  href="/" 
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Start Shopping</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Suspense>
  );
} 