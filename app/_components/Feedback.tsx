import { COMMENTSIF, products } from "@/data/products";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Feedback() {
  const allComments: COMMENTSIF[] = products.reduce(
    (acc: COMMENTSIF[], product) => acc.concat(product.commnets),
    []
  );
  const sortedComments = allComments.sort((a, b) => b.rating - a.rating);
  const displayedComments = sortedComments.slice(0, 3);
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
          Feedback
        </h1>
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-6 flex items-center justify-center flex-wrap gap-3">
        {displayedComments.map((comment: COMMENTSIF) => (
          <div
            key={comment.title}
            className="md:w-[396px] rounded-xl border-2 border-[#BEBCBD] relative p-6"
          >
            <Image
              src={comment.image ? comment.image : "/person.png"}
              alt={`Image of Perosn Commented`}
              width={57}
              height={57}
              className="w-14 h-14 rounded-full mb-5"
            />
            <h3 className="font-medium text-[#3C4242] text-xl mb-5">
              {comment.name ? comment.name : "Client Name"}
            </h3>
            <p className="text-[#807D7E] text-sm ">{comment.body}</p>
            <div className="absolute top-6 right-6 flex items-center justify-center">
              {[1, 2, 3, 4, 5].map((ratingIcon) => (
                <div key={ratingIcon}>
                  <Star
                    fill={
                      ratingIcon <= comment.rating ? "#FFD700" : "transparent"
                    }
                    stroke="#FFD700"
                    size={20}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
