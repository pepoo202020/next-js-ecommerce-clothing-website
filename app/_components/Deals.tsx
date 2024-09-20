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
        flex-wrap
        md:gap-7
        gap-5
    "
    >
      {dealsItmes.map((item: DEALSITEMSIF) => (
        <div
          key={item.id}
          className="
                    md:mx-0
                    mx-5
                    md:w-[605px]
                    md:h-80
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
                md:left-5
                left-2
                text-white
                md:max-w-[264px]
                w-full
              "
          >
            <h3 className="md:text-lg text-xs font-semibold md:mb-6 mb-2">
              {item.header1}
            </h3>
            <h1 className="md:text-3xl text-xl font-extrabold mb-2">
              {item.title}
            </h1>
            <p className="font-medium md:mb-10 mb-2">{item.header2}</p>
            <Link
              href={item.path}
              className="underline md:text-xl text-xs font-extrabold"
            >
              Explore Items
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
