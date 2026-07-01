"use client";

import { AddToCartButton } from "@/components/Add-to-cart-button";
import { SizeSelector } from "@/components/Size-selector";
import { useState } from "react";

interface ProductActionsProps {
  productId: number;
  slug: string;
}

export function ProductActions({ productId, slug }: ProductActionsProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [error, setError] = useState(false);

  function handleSizeSelected(size: string) {
    setSelectedSize(size);
    setError(false);
  }

  function handleAddWithoutSize() {
    if (!selectedSize) {
      setError(true);
    }
  }

  return (
    <>
      <SizeSelector onSizeSelected={handleSizeSelected} />

      {error && (
        <p className="text-sm text-red-400 mt-2">
          Please select a size before adding to cart.
        </p>
      )}
      <AddToCartButton
        productId={productId}
        slug={slug}
        selectedSize={selectedSize}
        onMissingSize={handleAddWithoutSize}
      />
    </>
  );
}
