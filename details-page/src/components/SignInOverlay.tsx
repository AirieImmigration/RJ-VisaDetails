import React from "react";

interface SignInOverlayProps {
  isLoggedIn: boolean;
}

const SignInOverlay: React.FC<SignInOverlayProps> = ({ isLoggedIn }) => {
  if (isLoggedIn) return null; // hide overlay when logged in (control state in details page)

  return (
    <div className="relative z-50">
      {/* signin overlay button */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end pb-10 z-10">
        <button className="w-full font-semibold sm:max-w-xs max-w-1/2 flex justify-center text-[#303030] hover:bg-[#e5c750] hover:text-[#000000] items-center gap-2 px-4 py-2 sm:px-6 sm:py-2 bg-[#ffde59] rounded-lg text-md  cursor-pointer transition-all ease-in-out relative z-10">
          Sign In / Register
        </button>
      </div>

      {/* background fade */}
      <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-white via-white/95 to-transparent z-0"></div>
    </div>
  );
};

export default SignInOverlay;
