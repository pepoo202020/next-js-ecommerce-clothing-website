"use client";

import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NEWARRIVALSITMESIF {
  id: number;
  image: string;
  path: string;
  title: string;
}

const newArrivalsItems: NEWARRIVALSITMESIF[] = [
  {
    id: 1,
    title: "Knitted Joggers",
    image: "/newArrival01.jpg",
    path: "/shop",
  },
  {
    id: 2,
    title: "Denim Jacket",
    image: "/newArrival02.jpg",
    path: "/shop",
  },
  {
    id: 3,
    title: "Floral Maxi Dress",
    image: "/newArrival03.jpg",
    path: "/shop",
  },
  {
    id: 4,
    title: "Woolen Scarf",
    image: "/newArrival04.jpg",
    path: "/shop",
  },
  {
    id: 5,
    title: "Leather Boots",
    image: "/newArrival05.jpg",
    path: "/shop",
  },
  {
    id: 6,
    title: "Cotton Blouse",
    image: "/newArrival06.jpg",
    path: "/shop",
  },
  {
    id: 7,
    title: "Pleated Skirt",
    image: "/newArrival07.jpg",
    path: "/shop",
  },
  {
    id: 8,
    title: "Graphic T-shirt",
    image: "/newArrival08.jpg",
    path: "/shop",
  },
];

export default function NewArrivals() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(4);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(2); // Show 2 items for small screens
      } else {
        setItemsPerPage(4); // Show 4 items for larger screens
      }
    };

    // Set initial value
    updateItemsPerPage();

    // Add event listener to handle resize
    window.addEventListener("resize", updateItemsPerPage);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  });

  const nextClickHandler = () => {
    if (currentIndex + itemsPerPage === newArrivalsItems.length) {
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
        mx-5
        md:max-w-[1239px]
        md:mx-auto
        mb-10
    "
    >
      <div
        className="
            flex
            items-center           
            gap-5
            mb-10
        "
      >
        <div
          className="
                w-2
                h-7
                bg-[#8A33FD]
                rounded-lg
            "
        ></div>
        <h1
          className="
            text-xl
            md:text-3xl
            font-bold
        "
        >
          New Arrivals
        </h1>
      </div>
      <div className="flex items-center justify-between gap-2">
        <MoveLeft
          className={`
        ${
          currentIndex === 0
            ? "text-black/60 cursor-auto"
            : "text-black cursor-pointer"
        }
            `}
          size={20}
          onClick={prevClickHandler}
        />
        <div
          className="
            grid md:grid-cols-4 grid-cols-2
            w-full  gap-4
        "
        >
          {newArrivalsItems
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((item: NEWARRIVALSITMESIF) => (
              <div
                className="
                    flex
                    flex-col
                    items-center
                    md:gap-8
                    gap-4
                    overflow-hidden
                "
                key={item.id}
              >
                <Image
                  src={item.image}
                  alt={`new arrivals image ${item.id}`}
                  width={263}
                  height={263}
                  className="w-64 h-64 object-cover rounded-2xl drop-shadow-lg"
                />
                <Link href={item.path} className="md:text-xl text-sm font-bold">
                  {item.title}
                </Link>
              </div>
            ))}
        </div>
        <MoveRight
          className={`
        ${
          currentIndex + 4 === newArrivalsItems.length
            ? "text-black/60 cursor-auto"
            : "text-black cursor-pointer"
        }
            `}
          size={20}
          onClick={nextClickHandler}
        />
      </div>
    </div>
  );
}
