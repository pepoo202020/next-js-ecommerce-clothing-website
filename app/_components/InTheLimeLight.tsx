"use client";
import { products, PRODUCTSIF } from "@/data/products";
import { toggleFav } from "@/store/slices/favSlice";
import { RootState } from "@/store/store";
import { HeartIcon, HeartOffIcon } from "lucide-react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function InTheLimeLight() {
  const dispatch = useDispatch();
  const favoriteIds = useSelector(
    (state: RootState) => state.favorites.favoriteIDs
  );

  const heartClickHandler = (id: number) => {
    console.log(id);
    dispatch(toggleFav(id));
  };

  return (
    <div
      className="
        mx-5
        lg:max-w-[1239px]
        lg:mx-auto
        mb-10
        max-w-full
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
          In The Limelight
        </h1>
      </div>
      <div className="md:rid md:grid-cols-4 md:gap-12 flex items-center justify-center flex-wrap ga-6">
        {products.slice(0, 4).map((item: PRODUCTSIF) => (
          <div
            className="flex flex-col items-start gap-4 w-64 mb-10"
            key={item.id}
          >
            <div className="w-full h-[370px] rounded-xl drop-shadow-md relative overflow-hidden mb-7">
              <Image
                src={item.mainImage}
                alt={`Product Main Image`}
                width={256}
                height={370}
                className="w-full h-full object-cover"
              />
              {favoriteIds.includes(item.id) ? (
                <HeartIcon
                  fill="red"
                  className="absolute top-5 right-5 cursor-pointer "
                  onClick={() => heartClickHandler(item.id)}
                />
              ) : (
                <HeartOffIcon
                  className="absolute top-5 right-5 cursor-pointer"
                  onClick={() => heartClickHandler(item.id)}
                />
              )}
            </div>
            <div className="flex items-center justify-between w-full">
              <div>
                <h5 className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[164px] font-semibold text-[16px]">
                  {item.title}
                </h5>
                <p className="text-[#807D7E] text-[14px]">
                  {item.category} / {item.subCategory}
                </p>
              </div>
              <div className="bg-[#F6F6F6] font-bold text-[14px] px-4 py-2">
                {item.price} $
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
