"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface BANNERITEMSIF {
  id: number;
  header1: string;
  title: string;
  image: string;
  header2: string;
}

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const bannerItmes: BANNERITEMSIF[] = [
    {
      id: 1,
      header1: "Jeans / Pants",
      title: "Autumn Collection",
      image: "/bannerSlide01.jpg",
      header2: "durable / stylish / relaxed",
    },
    {
      id: 2,
      header1: "Hoodies / Sweatshirts",
      title: "Winter Warmth Essentials",
      header2: "cozy / layered / trendy",
      image: "/bannerSlide02.jpg",
    },
    {
      id: 3,
      header1: "Dresses / Skirts",
      title: "Spring Blossom Fashion",
      header2: "floral / elegant / breezy",
      image: "/bannerSlide03.jpg",
    },
    {
      id: 4,
      header1: "Jackets / Coats",
      title: "Rainy Day Specials",
      header2: "waterproof / warm / modern",
      image: "/bannerSlide04.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerItmes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [bannerItmes]);

  const nextClickHandler = () => {
    if (currentIndex === bannerItmes.length - 1) {
      return;
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevClickHandler = () => {
    if (currentIndex === 0) {
      return;
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div
      className="
            relative
        "
    >
      <Image
        src={bannerItmes[currentIndex].image}
        alt="banner image"
        width={1449}
        height={200}
        className="w-screen h-[716px]"
      />
      <ChevronLeft
        className={`
            absolute
        top-1/2
        -translate-y-1/2
        left-5
        ${
          currentIndex === 0
            ? "text-white/60 cursor-auto"
            : "text-white cursor-pointer"
        }
            `}
        size={44}
        onClick={prevClickHandler}
      />
      <ChevronRight
        className={`
            absolute
        top-1/2
        -translate-y-1/2
        right-5
        ${
          currentIndex === bannerItmes.length - 1
            ? "text-white/60 cursor-auto"
            : "text-white cursor-pointer"
        }
            `}
        size={44}
        onClick={nextClickHandler}
      />
      <div
        className="
        absolute
        bottom-5
        left-1/2
        -translate-x-1/2
         flex
         items-center
         gap-px
      "
      >
        {bannerItmes.map((item, index) => (
          <div
            key={item.id}
            className={`
                    w-14
                    h-2
                    ${
                      index === 0
                        ? "rounded-l-lg"
                        : index === bannerItmes.length - 1
                        ? "rounded-r-lg"
                        : ""
                    }
                    ${index === currentIndex ? "bg-white" : "bg-white/50"}
                `}
          ></div>
        ))}
      </div>
      <div
        className="
            absolute
            top-1/2
            -translate-y-1/2
            left-48
            text-white
        "
      >
        <h2
          className="
            text-3xl
            font-medium
            leading-10
            mb-10
        "
        >
          {bannerItmes[currentIndex].header1}
        </h2>
        <h1
          className="
            text-6xl
            font-bold
            mb-10
            max-w-[439px]
        "
        >
          {bannerItmes[currentIndex].title}
        </h1>
        <p
          className="
                text-3xl
                font-medium
                mb-10
            "
        >
          {bannerItmes[currentIndex].header2}
        </p>
        <Link
          href="/shop"
          className="
            text-xl
            bg-white
            text-black
            font-bold
            px-16
            py-4
            rounded-2xl
        "
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
