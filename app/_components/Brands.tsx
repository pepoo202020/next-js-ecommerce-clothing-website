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

  useEffect(() => {
    const brandsIn = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        let nextIndex = 0;
        if (prevIndex + 5 !== brandsItems.length) {
          nextIndex = (prevIndex + 1) % brandsItems.length;
        } else {
          nextIndex = 0;
        }
        return nextIndex;
      });
    }, 3000);

    // Clear the interval on component unmount
    return () => clearInterval(brandsIn);
  }, []);
  return (
    <div
      className="
        max-w-[1239px]
        mx-auto
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
    "
    >
      <h1 className="text-5xl font-black mb-6">Top Brand Deals</h1>
      <p className="text-xl font-medium mb-16">
        Up To <span className="text-[#FBD103] font-bold">60%</span> off on
        brands
      </p>
      <div className="max-w-[985px] grid grid-cols-5 gap-5 justify-center">
        {brandsItems.slice(currentIndex, currentIndex + 5).map((item) => (
          <div key={item.id} className="bg-white w-[177px] h-[85px] rounded-lg">
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
