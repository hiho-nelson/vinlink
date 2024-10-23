"use client";

import React from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
export default function page() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".super img",
      start: "top top",
      end: "bottom top",
      markers: true,
    });
  });

  return (
    <>
      <div className="h-screen w-full bg-green-200"></div>
      <div className="aa h-screen w-full bg-blue-200"></div>
      <div className="super relative h-[1800px] w-full bg-purple-200 py-20">
        <Image
          src="/slide_0.jpg"
          alt="Vinlink truck"
          fill
          className="h-auto w-full object-cover"
        />
      </div>
    </>
  );
}
