"use client";
import Image from "next/image";
import Link from "next/link";
import { CircleX, Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import { useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import AccountHeader from "./AccountHeader";

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
  const [barsState, setBarState] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  const cartItems: number = 0;
  const favoriteCount = useSelector(
    (state: RootState) => state.favorites.favoriteIDs.length
  );

  const searchClickHandler = () => {
    if (!searchInput) {
      searchInputRef.current?.focus();
    } else {
      router.push(`/shop/${searchInput}`);
    }
  };
  if (pathname !== "/sign-in" && pathname !== "/sign-up") {
    return (
      <>
        <div
          className="sticky
        top-0
        bg-white
        z-[10000]
        w-full"
        >
          <div
            className="
        py-8
        lg:max-w-7xl
        max-w-full
        mx-auto
        flex
        items-center
        justify-between
        px-5
        lg:px-0
    "
          >
            {/*LOGO IMAGE*/}
            <Link href={"/"}>
              <Image src="/logo.png" alt="logo" width={91.16} height={45} />
            </Link>
            {/*NAVIGATION LINKS*/}
            <nav
              className="
        hidden
        items-center
        gap-10
        md:flex 
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
              hidden
              md:flex
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
            hidden
            md:flex
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
                  fill={`${favoriteCount > 0 ? "red" : "transparent"}`}
                  className="bg-[#F6F6F6]"
                />
                {favoriteCount > 0 && (
                  <div
                    className="
            absolute
            top-0
            right-0
            pb-[1px]
            w-5
            h-5
            text-xs
            bg-red-500
            font-bold
            text-white
            rounded-full
            flex
            items-center
            justify-center
          "
                  >
                    {favoriteCount}
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
            <Menu
              size={22}
              fill="black"
              className="block md:hidden cursor-pointer"
              onClick={() => setBarState(true)}
            />
          </div>
        </div>
        {barsState && (
          <div className="w-screen fixed top-0 h-full bg-black/70 z-[999999] ">
            <div className="flex flex-col items-center justify-center w-full h-full relative">
              <CircleX
                stroke="white"
                size={30}
                className="absolute top-5 right-5 cursor-pointer "
                onClick={() => setBarState(false)}
              />
              <nav
                className="
                flex
                flex-col
                text-white
                text-xl
                items-center
                gap-10
                mb-5
            "
              >
                {menuItems.map((item) => (
                  <Link key={item.id} href={item.path}>
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div
                className="
              
              bg-[#F6F6F6]/70
              rounded-3xl
              overflow-hidden
              h-11
              relative
              flex
              itmes-center
              mb-5
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
              <div
                className="
            flex
            items-center
            gap-5
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
                    fill={`${favoriteCount > 0 ? "red" : "transparent"}`}
                    className="bg-[#F6F6F6]"
                  />
                  {favoriteCount > 0 && (
                    <div
                      className="
                        absolute
                        top-0
                        right-0
                        pb-[1px]
                        w-5
                        h-5
                        text-xs
                        bg-red-500
                        font-bold
                        text-white
                        rounded-full
                        flex
                        items-center
                        justify-center
                      "
                    >
                      {favoriteCount}
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
                    fill="transparent"
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
                    fill="transparent"
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
          </div>
        )}
      </>
    );
  }
  return <AccountHeader />;
}
