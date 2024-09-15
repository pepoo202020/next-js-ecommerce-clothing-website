"use client";
import Image from "next/image";
import Link from "next/link";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

interface MENUITMES {
  id: number;
  name: string;
  path: string;
}

const menuItems: MENUITMES[] = [
  {
    id: 1,
    name: "Shop",
    path: "/shop",
  },
  {
    id: 2,
    name: "Men",
    path: "/shop/men",
  },
  {
    id: 3,
    name: "Women",
    path: "/shop/women",
  },
  {
    id: 4,
    name: "Compos",
    path: "/shop/compos",
  },
  {
    id: 5,
    name: "Joggers",
    path: "/shop/joggers",
  },
];

export default function Header() {
  const [searchInput, setSearchInput] = useState<string>("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const cartItems: number = 0;
  const lovedItems: number = 0;

  const searchClickHandler = () => {
    if (!searchInput) {
      searchInputRef.current?.focus();
    } else {
      router.push(`/shop/${searchInput}`);
    }
  };
  return (
    <div
      className="
        py-8
        max-w-7xl
        mx-auto
        flex
        items-center
        justify-between
    "
    >
      {/*LOGO IMAGE*/}
      <Link href={"/"}>
        <Image src="/logo.png" alt="logo" width={91.16} height={45} />
      </Link>
      {/*NAVIGATION LINKS*/}
      <nav
        className="
        flex
        items-center
        gap-10
      "
      >
        {menuItems.map((item) => (
          <Link key={item.id} href={item.path}>
            {item.name}
          </Link>
        ))}
      </nav>

      {/*SEARCH BAR*/}
      <div
        className="
        w-64
        bg-[#F6F6F6]
        rounded-3xl
        overflow-hidden
        h-11
        relative
        flex
        itmes-center
      "
      >
        <input
          ref={searchInputRef}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search"
          type="text"
          className="
                w-full
                h-full
                pl-12
                bg-transparent
                focus:outline-none
            "
        />
        <Search
          onClick={searchClickHandler}
          className="
            absolute
            top-1/2
            -translate-y-1/2
            left-4
            cursor-pointer
            text-[#807D7E]
        "
          size={20}
        />
      </div>

      {/*ICONS*/}
      <div
        className="
        flex
        items-center
        gap-3
      "
      >
        <div
          className="
            bg-[#F6F6F6]
            p-3
            rounded-xl
            cursor-pointer
            relative
        "
        >
          <Heart
            size={15}
            className={`
                    bg-[#F6F6F6]
                    ${lovedItems > 0 ? "text-red-800" : ""}
                `}
          />
          {lovedItems > 0 && (
            <div
              className="
            absolute
            top-1/2
            -translate-y-1/2
            left-1/2
            -translate-x-1/2
            text-[8px]
            pb-[1px]
            font-bold
            text-red-700
          "
            >
              {lovedItems}
            </div>
          )}
        </div>
        <div
          className="
         bg-[#F6F6F6]
         p-3
         rounded-xl
         cursor-pointer
     "
        >
          <User
            size={15}
            className="
        bg-[#F6F6F6]
    "
          />
        </div>
        <div
          className="
            bg-[#F6F6F6]
            p-3
            rounded-xl
            cursor-pointer
            relative
        "
        >
          <ShoppingCart
            size={15}
            className="
         bg-[#F6F6F6]
     "
          />
          {cartItems > 0 && (
            <div
              className="
            absolute
            top-0
            right-0
            bg-red-800
            text-white
            text-xs
            font-bold
            flex
            items-center
            justify-center
            w-5
            h-5
            rounded-full
          "
            >
              {cartItems}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
