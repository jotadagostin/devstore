"use client";

import { useState } from "react";

interface SizeSelectorProps {
  sizes?: string[];
}

export function SizeSelector({
  sizes = ["P", "M", "G", "GG"],
}: SizeSelectorProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="mt-8 space-y-4">
      <span className="block font-semibold">Sizes</span>

      <div className="flex gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            onClick={() => setSelectedSize(size)}
            className={`flex h-9 w-14 items-center justify-center cursor-pointer rounded-full border text-sm font-semibold transition-colors ${
              selectedSize === size
                ? "border-violet-500 bg-violet-500 text-white"
                : "border-zinc-700 bg-zinc-800"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
