import React from "react";
import Link from "next/link";

function Home() {
  return (
    <>
      <div className="bg-[#242424] full-vh flex justify-center items-center w-screen">
        <div className="w-screen px-16">
          <h1 className="text-8xl gradient">Pixel Escapes</h1>
          <p className="text-2xl text-[#d8ddde] pl-[5px] pt-1">
            Escape the world. Enter the pixels.
          </p>
        </div>
      </div>
      <div className=""></div>
      <div className="bg-[#f3b700] full-vh flex justify-center items-center w-screen">
        <div className="w-screen px-16">
          <h1 className="text-6xl text-[#dd6e42] font-bold">
            Explore Paris, Bali, or the Maldieves in a blink.
          </h1>
          <p className="text-2xl text-[#d8ddde] pt-4">
            Pixel Escapes provides a unique and immersive virtual holiday
            experience. Enjoy popular world wonders in the comfot of your own
            private space.
          </p>
          <Link
            href={"/virtual-destinations"}
            className="h-full bg-[#dd6e42] text-[#d8ddde]  flex justify-center items-center w-44 rounded-sm mt-4 virtual-destination-button"
          >
            Explore Destinations
          </Link>
        </div>
      </div>
      <div className=""></div>
    </>
  );
}

export default Home;
