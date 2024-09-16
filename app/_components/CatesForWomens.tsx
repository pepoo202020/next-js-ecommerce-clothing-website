import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface WOMENSCATEGORIESIF {
  id: number;
  image: string;
  title: string;
}

const womensCategoriesItmes: WOMENSCATEGORIESIF[] = [
  {
    id: 1,
    title: "Hoodies & SweetShirts",
    image: "/womenHoodies.jpg",
  },
  {
    id: 2,
    title: "Coats & Parkas",
    image: "/womenCoats.jpg",
  },
  {
    id: 3,
    title: "Tees & T-Shirt",
    image: "/womenTees.jpg",
  },
  {
    id: 4,
    title: "Boxers",
    image: "/womenBoxers.jpg",
  },
];

export default function CatesForWomens() {
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
          Categories For Womens
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-12">
        {womensCategoriesItmes.map((item: WOMENSCATEGORIESIF) => (
          <div
            className="flex flex-col items-start gap-4 w-64 mb-10"
            key={item.id}
          >
            <Image
              src={item.image}
              alt={`Women Category Image ${item.id}`}
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
