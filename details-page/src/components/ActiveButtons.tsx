import { useEffect, useState, useRef } from "react";

const ActiveButtons = () => {
  const [isSticky, setIsSticky] = useState(false);
  const divRef = useRef<HTMLDivElement | null>(null);

  //handle scroll & detect stikcy
  useEffect(() => {
    const handleScroll = () => {
      if (!divRef.current) return;
      const { top } = divRef.current.getBoundingClientRect();
      setIsSticky(top <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <div
      ref={divRef}
      className="flex gap-5 sticky top-0 z-10 h-[70px] py-14 items-center w-full"
    >
      {/* gradient only when sticky */}
      {isSticky && (
        <div className="absolute inset-0 bg-gradient-to-b min-h-[160px] from-white via-white/95 to-white/10"></div>
      )}

      <button className="flex-1 items-center justify-center gap-2 px-2 py-2 bg-[#ffde59] text-[#303030] rounded-lg text-md hover:bg-[#e5c750] hover:text-[#000000] font-semibold  cursor-pointer transition-all ease-in-out relative z-10">
        Path to Residence
      </button>

      <button className="flex-1 items-center justify-center gap-2 px-2 py-2 bg-[#ffde59] text-[#303030] rounded-lg text-md hover:bg-[#e5c750] hover:text-[#000000] font-semibold  cursor-pointer transition-all ease-in-out relative z-10">
        Government Site
      </button>
    </div>
  );
};
export default ActiveButtons;
