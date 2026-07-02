import Image from "next/image";
import Link from "next/link";
import { CardWidget } from "./Card-Widget";
import { SearchForm } from "./Search-form";
import { Suspense } from "react";

export function Header() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center justify-between gap-10 sm:gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <Suspense>
          <SearchForm />
        </Suspense>
      </div>
      <div className="hidden sm:flex items-center gap-4 shrink-0">
        <CardWidget />

        <div className="w-px h-4 bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="/avatar.png"
            alt="User Avatar"
            width={24}
            height={24}
            className="rounded-full w-6 h-6"
          />
        </Link>
      </div>
    </div>
  );
}
