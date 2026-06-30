"use client";

import { useCart } from "@/context/cart-context";
import { ShoppingBag } from "lucide-react";

export function CardWidget() {
  const { items, openCart } = useCart();
  return (
    <button type="button" onClick={openCart} className="cursor-pointer">
      <div className="flex items-center gap-2">
        <ShoppingBag className="w-4 h-4" />
        <span className="text-sm text-zinc-500 cursor-pointer hover:underline">
          Cart {items.length}
        </span>
      </div>
    </button>
  );
}
