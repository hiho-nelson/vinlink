import React from "react";

export default function Intro() {
  return (
    <section id="intro" className="relative flex h-[500px] w-full items-center justify-center bg-neutral-300 px-10 font-spaceGrotesk lg:min-h-[800px] z-10">
      <div className="flex max-w-[850px] flex-col gap-8">
        <small className="text-2xl">
          Contract wine making and end to end winegrowing
        </small>
        <h2 className="text-[30px] font-[500] leading-[1.3em] md:text-[40px] lg:text-[60px]">
          Vinlink is a family-owned wine producer specialising in producing bulk
          high quality Sauvignon Blanc from 1,800+ hectares of vineyards.
        </h2>
      </div>
    </section>
  );
}
