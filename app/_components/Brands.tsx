"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface BRANDSITEMIF {
  id: number;
  logo: string;
}

const brandsItems: BRANDSITEMIF[] = [
  {
    id: 1,
    logo: "/nikeLogo.png",
  },
  {
    id: 2,
    logo: "/adidasLogo.png",
  },
  {
    id: 3,
    logo: "/zaraLogo.png",
  },
  {
    id: 4,
    logo: "/hmLogo.png",
  },
  {
    id: 5,
    logo: "/levisLogo.png",
  },
  {
    id: 6,
    logo: "/gucciLogo.png",
  },
  {
    id: 7,
    logo: "/uniqloLogo.png",
  },
  {
    id: 8,
    logo: "/ralpheLaurenLogo.png",
  },
  {
    id: 9,
    logo: "/calvinKleinLogo.png",
  },
  {
    id: 10,
    logo: "/tommyHilfigerLogo.png",
  },
];

export default function Brands() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(3); // Show 2 items for small screens
      } else {
        setItemsPerPage(5); // Show 4 items for larger screens
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

  useEffect(() => {
    const brandsIn = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        let nextIndex = 0;
        if (prevIndex + itemsPerPage !== brandsItems.length) {
          nextIndex = (prevIndex + 1) % brandsItems.length;
        } else {
          nextIndex = 0;
        }
        return nextIndex;
      });
    }, 3000);

    // Clear the interval on component unmount
    return () => clearInterval(brandsIn);
  }, [itemsPerPage]);
  return (
    <div
      className="
        md:max-w-[1239px]
        md:mx-auto
        mb-10
        bg-[#3C4242]
        text-white
        rounded-xl
        drop-shadow-md
        flex
        flex-col
        items-center
        justify-center
        py-10
        mx-5
    "
    >
      <h1 className="text-2xl md:text-5xl font-black md:mb-6 mb-2">
        Top Brand Deals
      </h1>
      <p className="text-sm md:text-xl font-medium md:mb-16 mb-8">
        Up To <span className="text-[#FBD103] font-bold">60%</span> off on
        brands
      </p>
      <div className="md:max-w-[985px] w-full md:px-0 px-5 grid md:grid-cols-5 grid-cols-3 gap-5 justify-center">
        {brandsItems
          .slice(currentIndex, currentIndex + itemsPerPage)
          .map((item) => (
            <div
              key={item.id}
              className="bg-white md:w-[177px]  h-[85px] rounded-lg"
            >
              <Image
                src={item.logo}
                alt={`Brand Logo ${item.id}`}
                width={177}
                height={85}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
      </div>
    </div>
  );
}
