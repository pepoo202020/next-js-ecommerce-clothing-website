"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountHeader() {
  const path = usePathname();
  return (
    <div className="overflow-hidden bg-white z-[10000] w-full">
      <div className="py-8 lg:max-w-7xl max-w-full mx-auto flex items-center justify-between px-5 lg:px-0">
        {/*LOGO IMAGE*/}
        <Link href={"/"}>
          <Image src="/logo.png" alt="logo" width={91.16} height={45} />
        </Link>
        {/*LOGIN SIGN UP BTNS*/}
        <Link
          href={`${path === "/sign-in" ? "/sign-up" : "/sign-in"}`}
          className="bg-[#8A33FD] text-white text-sm font-medium py-2 px-8 rounded-2xl"
        >
          {path === "/sign-in" ? "sign-up" : "login"}
        </Link>
      </div>
    </div>
  );
}
