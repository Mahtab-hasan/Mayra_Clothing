'use client';

import { useEffect, useState, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
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
}

function OrderSuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

  useEffect(() => {
    const orderData = localStorage.getItem('lastOrder');
    if (orderData) {
      setOrderDetails(JSON.parse(orderData));
    } else {
      router.push('/');
    }
  }, [router]);

  if (!orderDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header Section */}
      <header className="bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-gray-900">Mayra Clothing</h1>
            </Link>
            <div className="flex items-center gap-4">
              <Link 
                href="/order-success" 
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Package className="w-5 h-5" />
                <span>View Order</span>
              </Link>
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
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-check text-4xl text-green-600"></i>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h1>
            <p className="text-gray-600">Thank you for shopping with us. Your order has been received.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Order Details</h2>
            
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
                      <h4 className="font-medium text-gray-800">{item.name}</h4>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    }>
      <OrderSuccessContent />
    </Suspense>
  );
} 