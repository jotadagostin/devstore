"use client";

import { useCart } from "@/context/cart-context";
import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CartItemProps {
  productId: number;
  slug: string;
  size: string;
  quantity: number;
}

export function CartItem({ productId, slug, size, quantity }: CartItemProps) {
  const { removeFromCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    api(`/products/${slug}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [slug]);

  if (!product) {
    return (
      <div className="flex items-center gap-4 rounded-lg bg-zinc-800 p-4 animate-pulse">
        <div className="w-16 h-16 rounded-md bg-zinc-700" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-zinc-700 rounded w-3/4" />
          <div className="h-3 bg-zinc-700 rounded w-1/2" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 rounded-lg bg-zinc-800 p-4">
      <div className="w-16 h-16 rounded-md overflow-hidden bg-zinc-700 shrink-0">
        <Image
          src={product.image}
          alt={product.title}
          width={64}
          height={64}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm truncate">{product.title}</p>
        <p className="text-xs text-zinc-400 font-semibold mt-1">
          Size: {size} • Qty: {quantity}
        </p>
        <p className="text-sm text-violet-400 font-semibold mt-1">
          ${(product.price * quantity).toFixed(2)}
        </p>
      </div>

      <button
        type="button"
        onClick={() => removeFromCart(productId, size)}
        className="text-xs text-red-400 cursor-pointer hover:underline shrink-0"
      >
        Remove
      </button>
    </div>
  );
}
