import { Header } from "@/components/Header";
import { ReactNode } from "react";

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto grid  w-full max-w-400 grid-rows-app gap-5 px-8 py-8">
      <Header />
      {children}
    </div>
  );
}
