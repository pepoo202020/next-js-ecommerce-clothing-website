"use client";

import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

  const nextClickHandler = () => {
    if (currentIndex + 4 === newArrivalsItems.length) {
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
        max-w-[1239px]
        mx-auto
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
            text-3xl
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
            grid grid-cols-4
            w-full 
        "
        >
          {newArrivalsItems
            .slice(currentIndex, currentIndex + 4)
            .map((item: NEWARRIVALSITMESIF) => (
              <div
                className="
                    flex
                    flex-col
                    items-center
                    gap-8
                    
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
                <Link href={item.path} className="text-xl font-bold">
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
