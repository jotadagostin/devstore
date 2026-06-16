import { Header } from "@/components/Header";
import { CartProvider } from "@/context/cart-context";
import { ReactNode } from "react";

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="mx-auto grid  w-full max-w-400 grid-rows-app gap-5 px-8 py-8">
        <Header />
        {children}
      </div>
    </CartProvider>
  );
}
