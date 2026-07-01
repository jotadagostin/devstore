"use client";

import { useCart } from "@/context/cart-context";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { CartItem } from "./Cart-item";

export function Cart() {
  const { items, isOpen, closeCart, removeFromCart } = useCart();

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out" />

        <Dialog.Content
          onCloseAutoFocus={(e) => e.preventDefault()}
          className="fixed right-0 top-0 h-full w-full max-w-md bg-zinc-900 p-8 flex flex-col gap-6 data-[state=open]:animate-slide-in data-[state=closed]:animate-slide-out"
        >
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-xl font-bold">Your cart</Dialog.Title>

            <Dialog.Close asChild>
              <button type="button" className="cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>

          {items.length === 0 ? (
            <p className="text-zinc-400">Your cart is empty.</p>
          ) : (
            <div className="flex flex-1 flex-col gap-4 overflow-y-auto">
              {items.map((item) => (
                <CartItem
                  key={`${item.productId}-${item.size}`}
                  productId={item.productId}
                  slug={item.slug}
                  size={item.size}
                  quantity={item.quantity}
                />
              ))}
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
