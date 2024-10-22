import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="relative z-20 -mb-[150px] flex h-[150px] w-full items-center justify-between px-10 lg:px-20 text-white">
      <div>
        <Image
          src="/logo_white.svg"
          width={300}
          height={150}
          alt="Vinlink Logo"
          className="lg:w-full w-3/4"
        />
      </div>
      <div>
        <Image src="/hamburger.png" width={40} height={25} alt="Vinlink Logo" />
      </div>
    </header>
  );
}
