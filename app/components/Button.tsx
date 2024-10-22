import { HiArrowSmallRight } from "react-icons/hi2";

export default function Button({ className }: { className?: string }) {
  return (
    <button
      className={`font-helvetica mt-10 flex items-center gap-2 rounded-none bg-primary px-10 py-3 text-xs uppercase text-white transition-colors duration-300 hover:bg-green-700 ${className}`}
    >
      <HiArrowSmallRight size={20} />
      Contact us
    </button>
  );
}
