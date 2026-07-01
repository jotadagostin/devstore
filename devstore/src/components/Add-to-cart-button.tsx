"use client";

import { useCart } from "@/context/cart-context";

export interface AddToCartButtonProps {
  productId: number;
  slug: string;
  selectedSize: string | null;
  onMissingSize: () => void;
}

export function AddToCartButton({
  productId,
  slug,
  selectedSize,
  onMissingSize,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  function handleaddProductCart() {
    if (!selectedSize) {
      onMissingSize();
      return;
    }

    addToCart(productId, slug, selectedSize);
  }
  return (
    <button
      type="button"
      onClick={handleaddProductCart}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white cursor-pointer"
    >
      Add to cart
    </button>
  );
}
