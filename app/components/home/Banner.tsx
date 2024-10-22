"use client";

import { useGSAP } from "@gsap/react";
import Button from "../Button";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { SlArrowDown } from "react-icons/sl";
import Link from "next/link";

export default function Banner() {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const img = containerRef.current.querySelector("img");

      gsap.to(img, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 150,
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative z-10 h-screen w-full overflow-hidden font-spaceGrotesk text-white"
    >
      <div className="relative z-10 flex h-full w-full flex-col justify-center gap-20 p-10 lg:flex-row lg:items-end lg:justify-between lg:gap-0 lg:px-20 lg:py-32">
        {/* left */}
        <div className="relative order-2 w-full lg:order-1">
          <Button />
        </div>

        {/* right */}
        <div className="relative order-1 flex w-full max-w-[550px] flex-col gap-2 text-left lg:order-2 lg:gap-10 lg:text-right">
          <h1 className="text-[50px] font-bold leading-[1.1em] md:text-[70px]">
            SMART QUALITY WINE MAKING AT SCALE
          </h1>
          <p className="text-2xl">
            Our winemakers craft sustainable bulk Marlborough Sauvignon Blanc
            for the world
          </p>
        </div>
      </div>
      <Image
        src={"/home_banner.jpg"}
        alt="Banner Image"
        width={1600}
        height={900}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 1600px"
        className="absolute inset-0 h-full w-full scale-125 object-cover"
      />
      <Link
        href={"#intro"}
        className="updown absolute bottom-10 left-1/2 z-10 -translate-x-1/2 cursor-pointer"
      >
        <SlArrowDown size={30} />
      </Link>

      <div className="absolute inset-0 h-full w-full bg-black opacity-50" />
    </section>
  );
}
