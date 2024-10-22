import Button from "../Button";

export default function Grows() {
  return (
    <section className="font-spaceGrotesk flex h-[500px] w-full items-center justify-center bg-neutral-300 px-10 lg:min-h-[800px]">
      <div className="flex max-w-[850px] flex-col items-start gap-8">
        <small className="text-2xl">Large scale end to end winegrowing</small>
        <h2 className="text-[30px] font-[500] leading-[1.3em] md:text-[40px] lg:text-[60px]">
          Vinlink grows, produces, bottles and exports buyers own brand
          Marlborough Sauvignon Blancto the world
        </h2>
        <Button/>
      </div>
    </section>
  );
}
