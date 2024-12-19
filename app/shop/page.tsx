'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

const ShopPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "Premium Chess Set",
      description: "Hand-crafted wooden chess pieces with marble board",
      price: 299.99,
      image: "/chess-set.jpg"
    },
    {
      id: 2, 
      name: "Digital Timer",
      description: "Professional tournament-grade chess clock",
      price: 49.99,
      image: "/timer.jpg"
    },
    {
      id: 3,
      name: "Strategy Guide",
      description: "Comprehensive guide to advanced chess tactics",
      price: 29.99,
      image: "/book.jpg"
    },
    {
      id: 4,
      name: "Travel Set",
      description: "Magnetic chess set perfect for travel",
      price: 39.99,
      image: "/travel-set.jpg"
    }
  ];

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id 
            ? {...item, quantity: item.quantity + 1}
            : item
        );
      }
      return [...prev, {...product, quantity: 1}];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId
          ? {...item, quantity: newQuantity}
          : item
      )
    );
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Chess Shop</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 text-gray-600 dark:text-gray-300"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <span className="text-2xl">🛒</span>
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-violet-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </motion.button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map(product => (
            <motion.div
              key={product.id}
              whileHover={{ y: -5 }}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="h-48 bg-gray-300 dark:bg-gray-700"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{product.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-violet-600 dark:text-violet-400">
                    ${product.price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => addToCart(product)}
                    className="px-4 py-2 bg-violet-600 text-white rounded-lg text-sm hover:bg-violet-700 transition-colors"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cart Sidebar */}
        {isCartOpen && (
          <div className="fixed inset-y-0 right-0 w-full sm:w-96 bg-white dark:bg-gray-800 shadow-xl p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                ✕
              </button>
            </div>

            {cartItems.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-400 text-center">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex items-center gap-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                      <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded"></div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400"
                          >
                            -
                          </button>
                          <span className="text-gray-600 dark:text-gray-300">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900 dark:text-white">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-sm text-red-600 hover:text-red-700 dark:text-red-400"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex justify-between text-lg font-semibold mb-6">
                    <span className="text-gray-900 dark:text-white">Total</span>
                    <span className="text-violet-600 dark:text-violet-400">${total.toFixed(2)}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 transition-colors"
                  >
                    Checkout
                  </motion.button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;