const InactiveButtons = () => {
  return (
    <>
      <div className="flex gap-5 justify-between sticky top-0 z-50 items-center w-full ">
        <div className="gap-5 sticky top-0 z-50 items-center w-full ">
          <button className="flex items-center justify-center gap-2 px-4 py-2 w-full bg-[#e6e6e4] rounded-lg text-md text-[#b5b5b5] cursor-not-allowed transition-all ease-in-out relative z-10 opacity-70">
            In-Person Assistance
          </button>
          <p
            className="flex items-center justify-center text-xs
        text-[#b2b2b2] mt-1 font-extralight"
          >
            Coming Soon
          </p>
        </div>

        <div className="gap-5 sticky top-0 z-50 items-center w-full ">
          <button className="flex items-center justify-center gap-2 px-4 py-2 w-full bg-[#e6e6e4] rounded-lg text-md text-[#b5b5b5] cursor-not-allowed transition-all ease-in-out relative z-10 opacity-70">
            Bespoke Guidance
          </button>
          <p
            className="flex items-center justify-center text-xs
        text-[#b2b2b2] mt-1 font-extralight"
          >
            Coming Soon
          </p>
        </div>
      </div>
    </>
  );
};
export default InactiveButtons;
