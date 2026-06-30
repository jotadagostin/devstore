"use client";

import { useCart } from "@/context/cart-context";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export function Cart() {
  const { items, isOpen, closeCart, removeFromCart } = useCart();

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60" />

        <Dialog.Content className="fixed right-0 top-0 h-full w-full max-w-md bg-zinc-900 p-8 flex flex-col gap-6">
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
                <div
                  key={`${item.productId}-${item.size}`}
                  className="flex items-center justify-between rounded-lg bg-zinc-800 p-4"
                >
                  <div>
                    <p className="font-semibold">Product #{item.productId}</p>
                    <p className="text-sm text-zinc-400">
                      Size: {item.size} • Qty: {item.quantity}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.productId, item.size)}
                    className="text-sm text-red-400 cursor-pointer hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
