"use client";

import { useCart } from "@/context/cart-context";
import { ShoppingBag } from "lucide-react";

export function CardWidget() {
  const { items } = useCart();
  return (
    <div>
      <div className="flex items-center gap-2">
        <ShoppingBag className="w-4 h-4" />
        <span className="text-sm text-zinc-500">Cart {items.length}</span>
      </div>
    </div>
  );
}
