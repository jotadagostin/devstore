"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface CartItem {
  productId: number;
  size: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (productId: number, size: string) => void;
  removeFromCart: (productId: number, size: string) => void;
}

const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  function openCart() {
    setIsOpen(true);
  }

  function closeCart() {
    setIsOpen(false);
  }

  function addToCart(productId: number, size: string) {
    setCartItems((state) => {
      const productInCart = state.some(
        (item) => item.productId === productId && item.size === size,
      );

      if (productInCart) {
        return state.map((item) => {
          if (item.productId === productId && item.size === size) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      }

      return [...state, { productId, size, quantity: 1 }];
    });

    setIsOpen(true);
  }

  function removeFromCart(productId: number, size: string) {
    setCartItems((state) =>
      state.filter(
        (item) => !(item.productId === productId && item.size === size),
      ),
    );
  }

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        isOpen,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
