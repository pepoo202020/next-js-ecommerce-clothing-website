export interface PRODUCTSIF {
  id: number;
  title: string;
  category: string;
  subCategory: string;
  rating: number;
  commnets: COMMENTSIF[];
  sizes: string[];
  colors: COLORIF[];
  description: string;
  details: PRODUCTDETAILSIF[];
  images: string[];
  mainImage: string;
  price: number;
  discount: number;
  shippment: SHIPPINGIF;
  feature?: string;
}

export interface COMMENTSIF {
  id: number;
  image?: string;
  name?: string;
  rating: number;
  title: string;
  body: string;
}

export interface PRODUCTDETAILSIF {
  id: number;
  title: string;
  value: string | number;
}

export interface COLORIF {
  id: number;
  color: string;
  hexCode: string;
}

export interface SHIPPINGIF {
  country: string;
  cost: number;
}

export const products: PRODUCTSIF[] = [
  {
    id: 1,
    title:
      "HDLTE Womens Comfort Hoodies Sweatshirt – Oversized Crewneck Pullover Sweatshirt Teen Fleece Trendy Hoodie Fall Outfits 2024",
    category: "Womens",
    subCategory: "Hoodies",
    rating: 4.7,
    commnets: [
      {
        id: 1,
        rating: 5,
        title: "Great thick sweatshirt",
        body: "This sweatshirt is so nice. It’s a good quality and very thick. It’s a nice fit and the inside is super soft. I love that it has pockets and the length is great. I like my sweatshirts a little longer. Very happy overall- the grey is a beautiful color as well.",
      },
      {
        id: 2,
        name: "rfnchili",
        rating: 4,
        title: "Warm and comfy",
        body: "This oversized sweatshirt is soft, warm, and comfortable. Will be great to wear with leggings this winter. Washed and dried well. The cut in the front is a little weird to me but overall I still really like the shirt.",
      },
    ],
    sizes: ["SM", "MD", "LG", "XL", "2Xl"],
    colors: [
      {
        id: 1,
        color: "Black",
        hexCode: "#000000",
      },
      {
        id: 2,
        color: "Gray",
        hexCode: "#808080",
      },
      {
        id: 3,
        color: "Coffee",
        hexCode: "#6f4e37",
      },
      {
        id: 4,
        color: "Magenta",
        hexCode: "#ff00ff",
      },
      {
        id: 5,
        color: "Cloudy Gray",
        hexCode: "#c5c5c5",
      },
    ],
    description:
      "Features: Sweatshirts for women are made from soft and comfortable fabrics which make them feel cozy and relaxed. Loose fit of cute tops provides ample movement without appearing bulky and are suitable for various body types",
    details: [
      {
        id: 1,
        title: "Department",
        value: "womens",
      },
      {
        id: 2,
        title: "Date First Available",
        value: "July 4, 2024",
      },
      {
        id: 3,
        title: "ASIN",
        value: "B0D8T8DRQT",
      },
    ],
    images: [
      "https://m.media-amazon.com/images/I/51pUMx8W5KL._AC_SY550_.jpg",
      "https://m.media-amazon.com/images/I/51lzycibSsL._AC_SY550_.jpg",
      "https://m.media-amazon.com/images/I/51HYSbB0B9L._AC_SY550_.jpg",
      "https://m.media-amazon.com/images/I/51JyslroAlL._AC_SY550_.jpg",
      "https://m.media-amazon.com/images/I/51FyHiOC8XL._AC_SY550_.jpg",
    ],
    mainImage: "https://m.media-amazon.com/images/I/51pUMx8W5KL._AC_SY550_.jpg",
    price: 38.99,
    discount: 35,
    shippment: {
      country: "Egypt",
      cost: 93.24,
    },
  },
  {
    id: 2,
    title:
      "KuaCua Women's Oversized Hoodies,Casual Cozy Pullover Sweatshirt With Drawstring Long Sleeve With Pockets Outfits Y2k Clothes",
    category: "Womens",
    subCategory: "Hoodies",
    rating: 4.6,
    commnets: [
      {
        id: 1,
        rating: 5,
        name: "Nicole de la Torre",
        title: "Warm and comfortable",
        body: "The quality of the hoodie is impressive. The material is heavy and thick. The outer feel is like polyester and the inside is the softest fleece. I ordered a small and it is definitely oversized. Fits as expected!",
      },
      {
        id: 2,
        name: "LhamA",
        rating: 4,
        title: "Great Pullover Hoodie, One Flaw",
        body: "I just got this and already love it! It really is fleece-lined (unlike some faux-fleece-lined garments) and is super-cozy and warm. The hood is also fleece-lined (so, be careful, might wind up with fleecy hair the first few wears! :)).",
      },
    ],
    sizes: ["SM", "MD", "LG", "XL", "2Xl"],
    colors: [
      {
        id: 1,
        color: "Beige",
        hexCode: "#F5F5DC",
      },
      {
        id: 2,
        color: "Black",
        hexCode: "#000000",
      },
      {
        id: 3,
        color: "Gray",
        hexCode: "#808080",
      },
      {
        id: 4,
        color: "Pink",
        hexCode: "#FFC0CB",
      },
      {
        id: 5,
        color: "Purple",
        hexCode: "#800080",
      },
    ],
    description:
      "Unique Design: y2k hoodies,pullover sweatshirts,oversized sweatshirt for women,long sleeve sweater with pocket,split hem hoodies dress,winter fashion clothes,aesthetic clothing,warm pullovers with drawstring,comfy sweatshirts for women,loose fit pullover sweatshirts.",
    details: [
      {
        id: 1,
        title: "Date First Available",
        value: "January 25, 2024",
      },
      {
        id: 2,
        title: "ASIN",
        value: "B0CT8177GF",
      },
      {
        id: 3,
        title: "Fabric type",
        value: "100% Cotton",
      },
      {
        id: 4,
        title: "Care instructions",
        value: "Machine Wash",
      },
      {
        id: 5,
        title: "Closure type",
        value: "Pull On",
      },
      {
        id: 6,
        title: "Neck style",
        value: "Hooded Neck",
      },
    ],
    images: [
      "https://m.media-amazon.com/images/I/51VAIOvQNPL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/I/71ZzdeOyuSL._AC_SY550_.jpg",
      "https://m.media-amazon.com/images/I/71MVW2u91iL._AC_SY550_.jpg",
      "https://m.media-amazon.com/images/I/81wJYcYSCVL._AC_SY550_.jpg",
    ],
    mainImage: "https://m.media-amazon.com/images/I/51VAIOvQNPL._AC_SX569_.jpg",
    price: 29.99,
    discount: 0,
    shippment: {
      country: "Egypt",
      cost: 75.82,
    },
  },
  {
    id: 3,
    title: "Nimsruc Cardigan Sweaters for Women Casual",
    category: "Womens",
    subCategory: "Coats",
    rating: 4.4,
    commnets: [
      {
        id: 1,
        rating: 5,
        name: "AW",
        title: "Cute but super long",
        body: "So I ordered the yellow version of this cardigan and I had so many concerns about what color yellow would arrive lol. I'm thrilled it's a golden yellow, just like a big burst of sunshine. I would describe it as a very vibrant marigold color, the yellow kind with just the slightest hint of orange for a little warmth. I'm in the PNW where it's gloomy most of the year, and no one wears bright colors. So I consciously add vibrant colors to my wardrobe and I think it makes a world of a difference in how I move throughout my days and how people receive me.",
        image:
          "https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/e8253eeb-6cd3-4a6d-bb30-5088326fc26d._CR1,0,498,498_SX48_.jpg",
      },
      {
        id: 2,
        name: "J.B.",
        rating: 5,
        title: "Exceeded My Expectations!",
        body: "I was a bit hesitant when ordering this duster because I wasn't sure if I would love the color, length, and fit in person. However, I'm so glad I went for it because this gorgeous cardigan by Nimsruc has exceeded my expectations! It's made of super soft knit material, and the duster is loose yet flattering, extremely long, and very comfortable. I sized up to achieve the desired length (I am six feet tall), but I could have gone with my usual size, and it would have worked just fine. The color is absolutely stunning. This versatile beauty will look great with jeans, dresses, skirts, and slacks, making it appropriate for both business and social settings. I absolutely love it and will wear it every chance I get.",
      },
    ],
    sizes: ["SM", "MD", "LG", "XL", "2Xl"],
    colors: [
      {
        id: 1,
        color: "Black",
        hexCode: "#000000",
      },
      {
        id: 2,
        color: "Blue",
        hexCode: "#0000FF",
      },
      {
        id: 3,
        color: "Grass Green",
        hexCode: "#7CFC00",
      },
      {
        id: 4,
        color: "Gray",
        hexCode: "#808080",
      },
      {
        id: 5,
        color: "Green",
        hexCode: "#008000",
      },
      {
        id: 6,
        color: "Navy Blue",
        hexCode: "#000080",
      },
      {
        id: 7,
        color: "Off-white",
        hexCode: "#F8F8F8",
      },
      {
        id: 8,
        color: "Orange",
        hexCode: "#FFA500",
      },
      {
        id: 9,
        color: "Purple",
        hexCode: "#800080",
      },
      {
        id: 10,
        color: "Yellow",
        hexCode: "#FFFF00",
      },
    ],
    description:
      "utdoor Wearing, Casual, Office, Daily, Vacation, Home, Family Reunion; Suitable For Fall, Winter And Spring. An Essential Autumn Piece! This Long Sweater Cardigan Is Perfect To Match With Ankle Boots, Jeans, Leggings, Long Pants, Trousers, Slacks, Dress, Basic Tees, Which Can Help You Get Lots Of Compliments. Womens Cardigan",
    details: [
      {
        id: 1,
        title: "Date First Available",
        value: "July 4, 2024",
      },
      {
        id: 2,
        title: "ASIN",
        value: "B0D8SYVFCK",
      },
      {
        id: 3,
        title: "Fabric type",
        value: "100% Polyester",
      },
      {
        id: 4,
        title: "Care instructions",
        value: "Machine Wash",
      },
      {
        id: 5,
        title: "Origin",
        value: "Imported",
      },
      {
        id: 6,
        title: "Weave type",
        value: "Knit",
      },
      {
        id: 7,
        title: "Country of Origin",
        value: "China",
      },
    ],
    images: [
      "https://m.media-amazon.com/images/I/512bAmTP7VL._AC_SX342_.jpg",
      "https://m.media-amazon.com/images/I/71HeQ1YpLgL._AC_SX342_.jpg",
      "https://m.media-amazon.com/images/I/71fhYJOry7L._AC_SX342_.jpg",
      "https://m.media-amazon.com/images/I/81ZIq+bdlQL._AC_SX342_.jpg",
      "https://m.media-amazon.com/images/I/71rSv7BvkgL._AC_SX342_.jpg",
    ],
    mainImage: "https://m.media-amazon.com/images/I/512bAmTP7VL._AC_SX342_.jpg",
    price: 34.99,
    discount: 25,
    shippment: {
      country: "Egypt",
      cost: 120.48,
    },
  },
  {
    id: 4,
    title:
      "SHEWIN Womens Casual Plaid Shacket Long Sleeve Button Down Oversized Shirt Jacket Coat",
    category: "Womens",
    subCategory: "Coats",
    rating: 4.6,
    commnets: [
      {
        id: 1,
        rating: 5,
        name: "Mark",
        title:
          "My wife LOVED this coat as soon as she saw it on AMAZON. She LOVES it even more now that it is here!",
        body: "My wife is seldom interested in new things. She never wants new clothes, she “has all the jewelry I will ever need” and “more new stuff makes it harder to choose what I wear.” It has been this way for decades.",
      },
      {
        id: 2,
        name: "Cindy",
        rating: 4,
        title: "Great jacket",
        body: "It's a nice fall jacket. Warm and soft. Colors are great I order a small fits great",
      },
    ],
    sizes: ["SM", "MD", "LG", "XL", "2Xl"],
    colors: [
      {
        id: 1,
        color: "Black",
        hexCode: "#000000",
      },
      {
        id: 2,
        color: "Black Brown",
        hexCode: "#3B2F2A",
      },
      {
        id: 3,
        color: "Blue",
        hexCode: "#0000FF",
      },
      {
        id: 4,
        color: "Gray",
        hexCode: "#808080",
      },
      {
        id: 5,
        color: "Green",
        hexCode: "#008000",
      },
      {
        id: 6,
        color: "Pink",
        hexCode: "#FFC0CB",
      },
      {
        id: 7,
        color: "Red",
        hexCode: "#FF0000",
      },
      {
        id: 8,
        color: "White",
        hexCode: "#ffffff",
      },
    ],
    description:
      "Made with breathable and comfortable polyester,this plaid shirt jacket is gentle on the skin and provides a comfortable wearing experience.Its soft texture will leave you feeling cozy and stylish.",
    details: [
      {
        id: 1,
        title: "Date First Available",
        value: "July 10, 2024",
      },
      {
        id: 2,
        title: "ASIN",
        value: "B0D6BL4BVT",
      },
      {
        id: 3,
        title: "Fabric type",
        value: "100% Polyester",
      },
      {
        id: 4,
        title: "Care instructions",
        value: "Machine Wash",
      },
      {
        id: 5,
        title: "Origin",
        value: "Imported",
      },
      {
        id: 6,
        title: "Country of Origin",
        value: "China",
      },
    ],
    images: [
      "https://m.media-amazon.com/images/I/71otZ6pQvuL._AC_SY445_.jpg",
      "https://m.media-amazon.com/images/I/719X6C2kWaL._AC_SY445_.jpg",
      "https://m.media-amazon.com/images/I/71UfYLFT5VL._AC_SY445_.jpg",
      "https://m.media-amazon.com/images/I/71XgAlcX3XL._AC_SY445_.jpg",
      "https://m.media-amazon.com/images/I/715sVTtSX0L._AC_SY445_.jpg",
      "https://m.media-amazon.com/images/I/81NGFfbvBcL._AC_SY445_.jpg",
    ],
    mainImage: "https://m.media-amazon.com/images/I/71otZ6pQvuL._AC_SY445_.jpg",
    price: 39.98,
    discount: 13,
    shippment: {
      country: "Egypt",
      cost: 95.25,
    },
  },
  {
    id: 5,
    title:
      "Amazon Essentials Women's Classic-Fit Long-Sleeve Crewneck T-Shirt (Available in Plus Size)",
    category: "Womens",
    subCategory: "Tees",
    rating: 4.4,
    commnets: [
      {
        id: 1,
        rating: 5,
        name: "Rosemary Plummer",
        title: "Perfect basic tee!",
        body: " wear tee shirts all the time so I am always hunting for the perfect one, soft, comfortable and affordable. This one fits the bill. I am 5'7\" and 140 lbs and I got the large because I like them a little on the roomy side. I would say it runs true to size. I ordered one in brown and I am going to order a few more in different colors as they will make good layering pieces in cooler weather.",
      },
      {
        id: 2,
        name: "Kindle Customer",
        rating: 5,
        title: "Keeping!",
        body: "I’ve not always had the best of luck with clothes on Amazon, but I was willing to give this top a try because I do like my Amazon Essentials t-shirt dresses. I haven’t washed it so I can’t speak to the sturdiness, but I think this is a solid basic. It appears well-made and is very soft. The stripes are the same width apart as other Breton-style tops I own. The biggest differences are the cut and composition. It’s a bit stretchy and is more fitted and long, rather than cropped and oversized. I usually wear my tops tucked in these days so the length is fine and actually nice that it’s not going to pop out of my jeans. And even though it would call it more traditional as far as fit, I think it looks really great with current denim trends. I do have to roll the sleeves a tad. For the price I’m very happy. I hope Amazon keeps this one around, because I’d replace with another or get other colors in the future.",
      },
    ],
    sizes: ["XS", "SM", "MD", "LG", "XL", "2Xl", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      {
        id: 1,
        color: "Burgundy",
        hexCode: "#800020",
      },
      {
        id: 2,
        color: "Cherry Red",
        hexCode: "#CF0A0A",
      },
      {
        id: 3,
        color: "Espresso",
        hexCode: "#4B3A29",
      },
      {
        id: 4,
        color: "Lime Green",
        hexCode: "#32CD32",
      },
      {
        id: 5,
        color: "Navy",
        hexCode: "#001F3F",
      },
      {
        id: 6,
        color: "Oatmeal Heather",
        hexCode: "#D8CAB8",
      },
      {
        id: 7,
        color: "Olive",
        hexCode: "#808000",
      },
      {
        id: 8,
        color: "White",
        hexCode: "#ffffff",
      },
      {
        id: 9,
        color: "Black",
        hexCode: "#000000",
      },
      {
        id: 10,
        color: "Light Grey Heather",
        hexCode: "#D3D3D3",
      },
      {
        id: 11,
        color: "Charcoal Heather",
        hexCode: "#36454F",
      },
      {
        id: 12,
        color: "Blue",
        hexCode: "#0000FF",
      },
      {
        id: 13,
        color: "Bright Blue",
        hexCode: "#00BFFF",
      },
      {
        id: 14,
        color: "Caramel",
        hexCode: "#C68E5B",
      },
      {
        id: 15,
        color: "Dark Green",
        hexCode: "#006400",
      },
      {
        id: 16,
        color: "Dark Yellow",
        hexCode: "#FFD700",
      },
      {
        id: 17,
        color: "Green",
        hexCode: "#008000",
      },
      {
        id: 18,
        color: "Pale Pink",
        hexCode: "#FADADD",
      },
      {
        id: 19,
        color: "Pink",
        hexCode: "#FFC0CB",
      },
      {
        id: 20,
        color: "Sky Blue",
        hexCode: "#87CEEB",
      },
      {
        id: 21,
        color: "Tan Heather",
        hexCode: "#D2B48C",
      },
    ],
    description:
      "This versatile t-shirt is a classic wardrobe essential, perfect layered under your favorite jacket or cardigan, or wear on its own for casual, everyday style.",
    details: [
      {
        id: 1,
        title: "Date First Available",
        value: "May 8, 2024.",
      },
      {
        id: 2,
        title: "ASIN",
        value: "B0D3LSK5MH",
      },
      {
        id: 3,
        title: "Fabric type",
        value: "56% Cotton, 38% Modal, 6% Elastane",
      },
      {
        id: 4,
        title: "Care instructions",
        value: "Machine Wash Warm, Tumble Dry",
      },
      {
        id: 5,
        title: "Origin",
        value: "Imported",
      },
      {
        id: 6,
        title: "Closure type",
        value: "No Closure",
      },
      {
        id: 7,
        title: "Country of Origin",
        value: "Madagascar",
      },
    ],
    images: [
      "https://m.media-amazon.com/images/I/81ENIy72-RL._AC_SX342_.jpg",
      "https://m.media-amazon.com/images/I/81qDHCVZ7IL._AC_SX342_.jpg",
      "https://m.media-amazon.com/images/I/71Fdo144cyL._AC_SX342_.jpg",
      "https://m.media-amazon.com/images/I/8196J2S5OZL._AC_SX342_.jpg",
      "https://m.media-amazon.com/images/I/81N-hTpugKL._AC_SX342_.jpg",
    ],
    mainImage: "https://m.media-amazon.com/images/I/81ENIy72-RL._AC_SX342_.jpg",
    price: 17.1,
    discount: 0,
    shippment: {
      country: "Egypt",
      cost: 52.53,
    },
  },
  {
    id: 6,
    title:
      "Brix Essentials Women's Classic-Fit Long-Sleeve Crewneck T-Shirt Super Soft Tagless.",
    category: "Womens",
    subCategory: "Tees",
    rating: 4.3,
    commnets: [
      {
        id: 1,
        rating: 5,
        name: "Sandra Morris",
        title: "Quality, beautiful, breathable, silky-feel",
        body: "When i first opened the package, I felt the silkiness of the fabric because of the modal added to the cotton. Unlike polyester, modal is a natural fiber and breathable. The thin collar is cut correctly, sewn properly with small stiches. It's not one of the tacky collars where it twists along the seems and does not lie flat and has long stiches that pull out. The collar falls right below the collar bone. I'm a slim XL and the shirt is not slim cut, but it does allow some curves. The sleeves fit me, i have slim arms. Since the fabric has some stretch, it would probably fit a woman with avg to full arms. Because of the quality, i will wear it under dress jackets and with jeans. I wore the black one to an outside event on a warm day, and it stayed cool. The best feature ever. You could spend a lot of money on this T-shirt in the woman's department of a high-end department store. The first two were black and fit perfectly. When I ordered the white it seemed a little tighter perhaps because it was white.",
      },
      {
        id: 2,
        name: "Debra",
        rating: 5,
        image:
          "https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/b6ee6d96-5e0b-441c-a48e-2d28ee15f037._CR0,0,375,375_SX48_.jpg",
        title: "So Comfy!",
        body: "These tops are neither too loose nor too tight. They are an extremely flattering, feminine fit.",
      },
    ],
    sizes: ["XS", "SM", "MD", "LG", "XL", "2Xl"],
    colors: [
      {
        id: 1,
        color: "Black",
        hexCode: "#000000",
      },
      {
        id: 2,
        color: "Denim Blue",
        hexCode: "#1560BD",
      },
      {
        id: 3,
        color: "Grey",
        hexCode: "#808080",
      },
      {
        id: 4,
        color: "Navy",
        hexCode: "#001F3F",
      },
      {
        id: 5,
        color: "Red",
        hexCode: "#ff0000",
      },
      {
        id: 6,
        color: "White",
        hexCode: "#ffffff",
      },
    ],
    description:
      "Women's Favorite long sleeve shirts made of Soft and Silky Modal Fabric, Ultra Comfortable. Close but comfortable fit.",
    details: [
      {
        id: 1,
        title: "Date First Available",
        value: "August 24, 2023",
      },
      {
        id: 2,
        title: "ASIN",
        value: "B0CGGYZP4V",
      },
      {
        id: 3,
        title: "Fabric type",
        value: "Modal",
      },
      {
        id: 4,
        title: "Care instructions",
        value: "Machine Wash",
      },
      {
        id: 5,
        title: "Origin",
        value: "Imported",
      },
      {
        id: 6,
        title: "Closure type",
        value: "Pull On",
      },
      {
        id: 7,
        title: "Country of Origin",
        value: "Turkey",
      },
    ],
    images: [
      "https://m.media-amazon.com/images/I/81dXwRVC8eL._AC_SY445_.jpg",
      "https://m.media-amazon.com/images/I/51+csX4FtBL._AC_SY445_.jpg",
    ],
    mainImage: "https://m.media-amazon.com/images/I/81dXwRVC8eL._AC_SY445_.jpg",
    price: 15.97,
    discount: 0,
    shippment: {
      country: "Egypt",
      cost: 46.93,
    },
  },
  {
    id: 7,
    title: "Carhartt Men's Loose Fit Heavyweight Short-Sleeve Pocket T-Shirt",
    category: "Mens",
    subCategory: "Shirts",
    rating: 4.6,
    commnets: [
      {
        id: 1,
        rating: 5,
        name: "Kurt",
        image:
          "https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/a8d62ad8-8862-45b8-8a1d-2062eda9d1ef._CR0,0.0,333,333_SX48_.jpg",
        title: "Durable and Comfortable Everyday T-Shirt",
        body: "I recently bought the Carhartt Men's Loose Fit Heavyweight Short-Sleeve Pocket T-Shirt, and it has quickly become one of my go-to shirts for everyday wear. Known for its durability and comfort, this shirt lives up to the Carhartt reputation and has exceeded my expectations.",
      },
      {
        id: 2,
        name: "Sandy",
        rating: 5,
        title: "Carhardt makes exceptional clothing.",
        body: "My husband loves these shirts. He owns several of them. They come in different colors. He has worn these shirts for years, and I am telling you, they are worth spending the money. They last forever. He looks great in them, and, most importantly, he feels great in them. They are soft and easy to wash. Stains are fairly easy to get out with a little Oxy Clean. I love the shirts as much as he does.",
      },
    ],
    sizes: ["XS", "SM", "MD", "LG", "XL", "2Xl", "3XL", "4XL", "5XL"],
    colors: [
      {
        id: 1,
        color: "Apple Butter Heather",
        hexCode: "#000000",
      },
      {
        id: 2,
        color: "Atomic Blue",
        hexCode: "#1560BD",
      },
      {
        id: 3,
        color: "Beacon Blue Heather",
        hexCode: "#808080",
      },
      {
        id: 4,
        color: "Black",
        hexCode: "#001F3F",
      },
      {
        id: 5,
        color: "Bluestone",
        hexCode: "#ff0000",
      },
      {
        id: 6,
        color: "Brite Lime",
        hexCode: "#ffffff",
      },
      {
        id: 7,
        color: "Brite Orange",
        hexCode: "#FF6F00",
      },
      {
        id: 8,
        color: "Carbon Heather",
        hexCode: "#2A2A2A",
      },
      {
        id: 9,
        color: "Carhartt Brown",
        hexCode: "#6F4F28",
      },
      {
        id: 10,
        color: "Crabapple Heather",
        hexCode: "#C6A9A3",
      },
      {
        id: 11,
        color: "Deep Lagoon Heather",
        hexCode: "#004B49",
      },
      {
        id: 12,
        color: "Desert",
        hexCode: "#EDC9Af",
      },
      {
        id: 13,
        color: "Dusty Olive",
        hexCode: "#6C6E5F",
      },
      {
        id: 14,
        color: "Fog Blue",
        hexCode: "#9C9E9F",
      },
      {
        id: 15,
        color: "Frosted Balsam Heather",
        hexCode: "#4A5D23",
      },
      {
        id: 16,
        color: "Lakeshore",
        hexCode: "#004B49",
      },
      {
        id: 17,
        color: "Loden Frost Heather",
        hexCode: "#6D6E61",
      },
      {
        id: 18,
        color: "Mocha Heather",
        hexCode: "#6F4F28",
      },
      {
        id: 19,
        color: "Navy",
        hexCode: "#001F3F",
      },
      {
        id: 20,
        color: "North Woods Heather",
        hexCode: "#3B4C4F",
      },
      {
        id: 21,
        color: "Oat Milk",
        hexCode: "#D9D4C7",
      },
      {
        id: 22,
        color: "Oiled Walnut Heather",
        hexCode: "#4A3B2C",
      },
      {
        id: 23,
        color: "Port",
        hexCode: "#6A0D3D",
      },
      {
        id: 24,
        color: "Tender Greens",
        hexCode: "#9DBF9E",
      },
      {
        id: 25,
        color: "Thundercloud Heather",
        hexCode: "#6C6E6B",
      },
      {
        id: 26,
        color: "Tropical Peach",
        hexCode: "#FF6F61",
      },
      {
        id: 27,
        color: "Vivid Yellow Heather",
        hexCode: "#F7E300",
      },
      {
        id: 28,
        color: "White",
        hexCode: "#ffffff",
      },
      {
        id: 29,
        color: "Bittersweet",
        hexCode: "#FE6F5E",
      },
      {
        id: 30,
        color: "Heather Gray",
        hexCode: "#BEBEBE",
      },
    ],
    description: "Side-seamed construction minimizes twisting",
    details: [
      {
        id: 1,
        title: "Date First Available",
        value: "November 13, 2023",
      },
      {
        id: 2,
        title: "ASIN",
        value: "B0CN83XVJ8",
      },
      {
        id: 3,
        title: "Fabric type",
        value: "60% Cotton, 40% Polyester",
      },
      {
        id: 4,
        title: "Care instructions",
        value: "Machine Wash",
      },
      {
        id: 5,
        title: "Origin",
        value: "Imported",
      },
      {
        id: 6,
        title: "Closure type",
        value: "Pull On",
      },
    ],
    images: [
      "https://m.media-amazon.com/images/I/814hp8QMsjL._AC_SY445_.jpg",
      "https://m.media-amazon.com/images/I/81DC3aawLAL._AC_SY445_.jpg",
      "https://m.media-amazon.com/images/I/81n2zfFQBwL._AC_SY445_.jpg",
    ],
    mainImage: "https://m.media-amazon.com/images/I/814hp8QMsjL._AC_SY445_.jpg",
    price: 19.99,
    discount: 0,
    shippment: {
      country: "Egypt",
      cost: 0,
    },
  },
];
