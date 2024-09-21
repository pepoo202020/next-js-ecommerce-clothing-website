import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface MENSCATEGORIESIF {
  id: number;
  image: string;
  title: string;
}

const mensCategoriesItmes: MENSCATEGORIESIF[] = [
  {
    id: 1,
    title: "Shirts",
    image: "/shirts.jpg",
  },
  {
    id: 2,
    title: "Printed T-Shirts",
    image: "/printedTShirts.jpg",
  },
  {
    id: 3,
    title: "Plain T-Shirt",
    image: "/plainTShirts.jpg",
  },
  {
    id: 4,
    title: "Polo T-Shirt",
    image: "/poloShirts.jpg",
  },
  {
    id: 5,
    title: "Hoodies & Sweetshirt",
    image: "/sweetshrirts.jpg",
  },
  {
    id: 6,
    title: "Jeans",
    image: "/jeans.jpg",
  },
  {
    id: 7,
    title: "Activewear",
    image: "/activewear.jpg",
  },
  {
    id: 8,
    title: "Boxers",
    image: "/boxers.jpg",
  },
];

export default function CatesForMens() {
  return (
    <div
      className="
        mx-5
        lg:max-w-[1239px]
        max-w-full
        lg:mx-auto
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
        lg:text-3xl
        font-bold
    "
        >
          Categories For Men
        </h1>
      </div>
      <div className="lg:grid lg:grid-cols-4  lg:gap-12 flex items-center justify-center flex-wrap w-full gap-5">
        {mensCategoriesItmes.map((item: MENSCATEGORIESIF) => (
          <div
            className="flex flex-col items-start gap-4 w-64 lg:mb-10 mb-2"
            key={item.id}
          >
            <Image
              src={item.image}
              alt={`Men Category Image ${item.id}`}
              width={270}
              height={394}
              className="w-64 h-96 object-cover rounded-xl drop-shadow-lg"
            />
            <div className="flex items-center justify-between w-full">
              <div>
                <h4 className="text-[18px] font-bold">{item.title}</h4>
                <p className="text-[#7F7F7F] text-[13px]">Explore Now!</p>
              </div>
              <Link href={"/shop"}>
                <MoveRight size={20} className="cursor-pointer" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
