import Image from "next/image";
import Link from "next/link";

interface DEALSITEMSIF {
  id: number;
  background: string;
  header1: string;
  title: string;
  header2: string;
  path: string;
}

const dealsItmes: DEALSITEMSIF[] = [
  {
    id: 1,
    background: "/dealImg01.jpg",
    header1: "Low Price",
    title: "High Coziness",
    header2: "UPTO 50% OFF",
    path: "/shop",
  },
  {
    id: 2,
    background: "/dealImg02.jpg",
    header1: "Beyoung Presents",
    title: "Breezy Summer Style",
    header2: "UPTO 50% OFF",
    path: "/shop",
  },
];

export default function Deals() {
  return (
    <div
      className="
        my-10
        max-w-[1239px]
        mx-auto
        flex
        items-center
        justify-center
        gap-7
    "
    >
      {dealsItmes.map((item: DEALSITEMSIF) => (
        <div
          key={item.id}
          className="
                    w-[605px]
                    h-80
                    relative
                    rounded-xl
                    overflow-hidden
                "
        >
          <Image
            src={item.background}
            alt={`Deal Background Image ${item.id}`}
            width={605}
            height={326}
            className="h-full  object-cover"
          />
          <div
            className="
            absolute
            top-1/2
            -translate-y-1/2
            left-5
            text-white
            max-w-[264px]
          "
          >
            <h3 className="text-lg font-semibold mb-6">{item.header1}</h3>
            <h1 className="text-3xl font-extrabold mb-2">{item.title}</h1>
            <p className="font-medium mb-10">{item.header2}</p>
            <Link href={item.path} className="underline text-xl font-extrabold">
              Explore Items
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
