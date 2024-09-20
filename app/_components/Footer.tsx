"use client";
import { products } from "@/data/products";
import {
  ChevronDown,
  ChevronUp,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface FOOTERELEMENTSIF {
  id: number;
  title: string;
  elements: FOOTERLINKSIF[];
}

interface FOOTERLINKSIF {
  id: number;
  name: string;
  path: string;
}

interface SOCIALICONIF {
  id: number;
  icon: React.ReactNode;
  path: string;
}

const footerElements: FOOTERELEMENTSIF[] = [
  {
    id: 1,
    title: "Need Help",
    elements: [
      { id: 1, name: "Contact Us", path: "/contact-us" },
      { id: 2, name: "Track Order", path: "/track-order" },
      { id: 3, name: "Returns & Refunds", path: "/retruns" },
      { id: 4, name: "FAQs", path: "/faqs" },
      { id: 5, name: "Career", path: "/career" },
    ],
  },
  {
    id: 2,
    title: "Company",
    elements: [
      { id: 1, name: "About Us", path: "/about-us" },
      { id: 2, name: "Eupharia Blog", path: "/blog" },
      { id: 3, name: "Euphoriastan", path: "/euphoriastan" },
      { id: 4, name: "Collaboration", path: "/collaboration" },
      { id: 5, name: "Media", path: "/nedia" },
    ],
  },
  {
    id: 3,
    title: "More Info",
    elements: [
      { id: 1, name: "Terms and Conditions", path: "/terms" },
      { id: 2, name: "Privacy Policy", path: "/privacy" },
      { id: 3, name: "Shipping Policy", path: "/shipping" },
      { id: 4, name: "Sitemap", path: "/sitemap" },
    ],
  },
  {
    id: 4,
    title: "Location",
    elements: [
      {
        id: 1,
        name: "support@euphaia.in",
        path: "mailto:poposhosh23@gmail.com",
      },
      { id: 2, name: "Eklingpura Chouraha, Ahmedabad Main Road", path: "/" },
      {
        id: 3,
        name: "(NH 8- Near Mahadev Hotel) Udaipur, India- 313002",
        path: "/",
      },
    ],
  },
];

const socialIcons: SOCIALICONIF[] = [
  {
    id: 1,
    icon: <Facebook fill="#000000" size={20} stroke="black" />,
    path: "www.facebook.com",
  },
  {
    id: 2,
    icon: <Instagram size={20} stroke="black" />,
    path: "www.instagram.com",
  },
  {
    id: 3,
    icon: <Twitter fill="#000000" size={20} stroke="black" />,
    path: "www.twitter.com",
  },
  {
    id: 4,
    icon: <Linkedin fill="#000000" size={20} stroke="black" />,
    path: "www.linkedin.com",
  },
];

export default function Footer() {
  const [catesState, setCatesState] = useState<boolean>(false);
  const popularCates = products.reduce<string[]>(
    (acc, cate) => acc.concat(cate.subCategory),
    []
  );
  const filteredCates = Array.from(new Set(popularCates));
  return (
    <div className="bg-[#2A2F2F] text-white">
      <div className=" md:max-w-[1239px] md:mx-auto mx-5 py-10 ">
        <div className=" md:max-w-[1239px] w-full md:mx-auto flex md:flex-row flex-col md:items-start items-center md:justify-between justify-center">
          {footerElements.map((elemnt: FOOTERELEMENTSIF) => (
            <div key={elemnt.id} className="mb-6 text-center">
              <h1 className="font-bold text-2xl mb-4">{elemnt.title}</h1>
              <div className="flex flex-col md:items-start items-center justify-start gap-1">
                {elemnt.elements.map((e: FOOTERLINKSIF) => (
                  <Link className="text-[#F6F6F6]" key={e.id} href={e.path}>
                    {e.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-between mb-12">
          <div className="flex items-center md:justify-start justify-center w-full gap-2">
            {socialIcons.map((social: SOCIALICONIF) => (
              <Link
                key={social.id}
                href={social.path}
                className="bg-white p-3 rounded-lg"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
        <div
          className="py-8 border-y-2 border-white px-5  cursor-pointer"
          onClick={() => setCatesState((pre) => !pre)}
        >
          <div className="w-full flex items-center justify-between">
            <h1 className="font-bold text-2xl ">Popular Categories</h1>
            {catesState ? <ChevronDown size={25} /> : <ChevronUp size={25} />}
          </div>
          {catesState && (
            <div className="flex flex-col items-start justify-start mt-5 gap-3 mx-5">
              {filteredCates.map((cate) => (
                <Link key={cate} href={`/${cate.toLowerCase()}`}>
                  {cate}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="text-center mt-5">
          Copyright @ {new Date().getFullYear()} Eupharia Folks PvtLtd. All
          Rights Reserved
        </div>
      </div>
    </div>
  );
}
