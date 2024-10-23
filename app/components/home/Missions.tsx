import Image from "next/image";
import React from "react";
import { HiArrowSmallRight } from "react-icons/hi2";
import Slider from "./Slider";

export default function Missions() {
  return (
    <section className="flex w-full flex-col gap-5 px-10 pt-20 md:gap-20 xl:px-20">
      {/* Missons */}
      <div className="flex flex-col divide-y divide-gray-400 border-gray-400 xl:flex-row xl:divide-x xl:divide-y-0 xl:border-t">
        {/* Column 1 */}
        <div className="flex w-full flex-col gap-10 px-0 py-10 md:p-10 xl:w-1/3 xl:p-20">
          <h3 className="small">Our Mission</h3>
          <div className="subtitle">
            Marlborough Sauvignon Blanc to the World
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex w-full flex-col gap-10 px-0 py-10 md:p-10 xl:w-1/3 xl:p-20">
          <h3 className="small">Our Vineyards</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna ali- qua. Ut
            enim ad minim veniam. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <button className="flex items-center gap-5 font-spaceGrotesk text-2xl text-gray-500">
            Discover <HiArrowSmallRight size={30} />
          </button>
        </div>

        {/* Column 3 */}
        <div className="flex w-full flex-col gap-10 px-0 py-10 md:p-10 xl:w-1/3 xl:p-20">
          <h3 className="small">Capacity 30,000T</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna ali- qua. Ut
            enim ad minim veniam. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <button className="flex items-center gap-5 font-spaceGrotesk text-2xl text-gray-500">
            Discover <HiArrowSmallRight size={30} />
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="relative w-full overflow-hidden">
        <Image
          src={"/vinlinktruck.webp"}
          alt="Vinlink truck"
          width={1600}
          height={900}
          className="w-full"
        />
      </div>

      {/* Slider */}
      <div className="w-full">
        <Slider />
      </div>

      {/* Missons */}
      <div className="flex flex-col divide-y divide-gray-400 border-gray-400 xl:flex-row xl:divide-x xl:divide-y-0 xl:border-t">
        {/* Column 1 */}
        <div className="flex w-full flex-col gap-10 px-0 py-10 md:p-10 xl:w-1/3 xl:p-20">
          <h3 className="small">Our Mission</h3>
          <div className="subtitle">
            Marlborough Sauvignon Blanc to the World
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex w-full flex-col gap-10 px-0 py-10 md:p-10 xl:w-1/3 xl:p-20">
          <h3 className="small">Our Vineyards</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna ali- qua. Ut
            enim ad minim veniam. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <button className="flex items-center gap-5 font-spaceGrotesk text-2xl text-gray-500">
            Discover <HiArrowSmallRight size={30} />
          </button>
        </div>

        {/* Column 3 */}
        <div className="flex w-full flex-col gap-10 px-0 py-10 md:p-10 xl:w-1/3 xl:p-20">
          <h3 className="small">Capacity 30,000T</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna ali- qua. Ut
            enim ad minim veniam. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <button className="flex items-center gap-5 font-spaceGrotesk text-2xl text-gray-500">
            Discover <HiArrowSmallRight size={30} />
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="parallex relative h-[900px] w-full">
        <Image
          src={"/vinlinkfactory.webp"}
          alt="Vinlink truck"
          width={1600}
          height={900}
          className="w-full"
        />
      </div>
    </section>
  );
}
