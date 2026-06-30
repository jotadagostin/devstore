"use client";

import { AddToCartButton } from "@/components/Add-to-cart-button";
import { SizeSelector } from "@/components/Size-selector";
import { useState } from "react";

interface ProductActionsProps {
  productId: number;
}

export function ProductActions({ productId }: ProductActionsProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <>
      <SizeSelector onSizeSelected={setSelectedSize} />
      <AddToCartButton productId={productId} selectedSize={selectedSize} />
    </>
  );
}
