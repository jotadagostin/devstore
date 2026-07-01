"use client";

import { useCart } from "@/context/cart-context";

export interface AddToCartButtonProps {
  productId: number;
  slug: string;
  selectedSize: string | null;
}

export function AddToCartButton({
  productId,
  slug,
  selectedSize,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  function handleaddProductCart() {
    if (!selectedSize) return;

    addToCart(productId, slug, selectedSize);
  }
  return (
    <button
      type="button"
      onClick={handleaddProductCart}
      disabled={!selectedSize}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white cursor-pointer"
    >
      Add to cart
    </button>
  );
}
