"use client";

import React from "react";
import { HiArrowSmallRight } from "react-icons/hi2";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const why = [
  "Family Owned Export Wine Producer",
  "1,800 Hectares of Vineyards",
  "Large Formate, Big Batch Product",
  "Highly Awarded Winemakers",
  "Over 3,000T of Capacity",
  "Direct Link to Bottling",
];

export default function Why() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      gsap.to(".aa", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end:"top 70%",
          once: true,
        },
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="flex w-full items-center justify-start px-10 py-20 font-spaceGrotesk md:justify-center md:p-40">
      <div className="flex max-w-[950px] flex-col gap-16">
        <h3 className="small md:pl-[70px]">Why Vintech Marlborough</h3>
        <div className="md:subtitle subtitle flex flex-col gap-7 text-xl lg:gap-10">
          {why.map((item, index) => (
            <div
              key={index}
              className="aa flex items-start gap-5 opacity-0 lg:items-center"
            >
              <HiArrowSmallRight className="size-6 rotate-45 md:size-12" />
              <div>{item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
