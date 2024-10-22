"use client";

import Image from "next/image";
import Button from "../Button";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Story() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      ScrollTrigger.create({
        trigger: ".image-wrapper",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        pin: true,
        pinSpacing: false,
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative flex h-screen w-full flex-col items-center justify-between gap-10 overflow-hidden font-spaceGrotesk lg:flex-row lg:gap-20 lg:px-20"
    >
      <div className="relative h-full w-full">
        <div className="image-wrapper h-full w-full">
          <Image
            src={"/parallax_image.jpg"}
            width={500}
            height={1200}
            alt="Parallax Image"
            className="h-[400px] w-full -translate-y-full object-cover lg:h-full"
          />
        </div>
      </div>
      <div className="relative flex w-full flex-col items-start justify-center gap-16 px-10 py-10 lg:gap-32 lg:py-20">
        <div className="flex flex-col gap-10">
          <h3 className="subtitle">
            Vintech Marlborough is leading the world in end-to-end wine making
            with a vintage capacity of over 30,000T (2.5 million cases)
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eius- mod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam.
          </p>
          <p>
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commo- do consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            offi- cia deserunt mollit anim id est laborum
          </p>
        </div>
        <Button />
      </div>
    </section>
  );
}
