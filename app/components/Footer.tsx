import { Input } from "@/components/ui/input";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col justify-between gap-16 bg-black p-10 font-spaceGrotesk text-gray-100 lg:flex-row lg:gap-32 lg:p-20">
      <div className="flex w-full flex-col gap-5 lg:w-1/3">
        <Image src="/logo_white.svg" alt="logo" width={200} height={100} />
        <p className="text-[16px] leading-[1.5em]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet.
        </p>
        <div className="flex gap-3">
          <FaFacebook size={25} />
          <FaInstagram size={25} />
          <FaLinkedin size={25} />
        </div>
      </div>
      <div className="flex w-full flex-col gap-5 lg:w-1/3">
        <div className="text-xl font-medium">Visit Us</div>
        <p className="text-[16px] leading-[1.5em]">
          33 Liverpool Street, Blenheim 7274
          <br />
          +64 3 928 4015
          <br />
          reception@vinlink.co.nz
        </p>
      </div>
      <div className="flex w-full flex-col gap-5 lg:w-1/3">
        <div className="text-xl font-medium">Join The Club</div>
        <p className="text-[16px] leading-[1.5em]">
          Get updates on special events and receive your first drink on us!
        </p>
        <form action="" className="flex items-end gap-5">
          <Input
            placeholder="Email"
            className="w-8/12 gap-5 rounded-none border-[1px] border-x-0 border-t-0"
          />
          <button
            className={`mt-10 flex w-4/12 items-center justify-center gap-2 rounded-none bg-primary px-5 py-3 font-helvetica text-sm uppercase text-white transition-colors duration-300 hover:bg-green-700`}
          >
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
}
