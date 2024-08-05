import React from "react";
import Bali from "../../../assets/bali.webp";
import Paris from "../../../assets/paris.webp";
import Maldives from "../../../assets/maldives.webp";
import Image from "next/image";

function OurProducts() {
  return (
    <div className="auto w-screen bg-[#f3b700] flex justify-center items-center flex-col ">
      <h1 className="text-[#dd6e42] text-6xl font-bold py-8">
        Virtual Destinations
      </h1>
      <div className="grid products-grid-parent w-3/4 max-w-4xl gap-4 pb-16">
        <div className="product-grid-1 relative bg-slate-300">
          <Image
            src={Paris}
            alt="Pixel Escapes Logo"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          ></Image>
          <h1 className="w-full h-full transparent-hover absolute flex items-center justify-center text-3xl z-10 writing-vertical">
            Paris
          </h1>
        </div>
        <div className="product-grid-2 relative bg-slate-400">
          <Image
            src={Bali}
            alt="Pixel Escapes Logo"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          ></Image>
          <h1 className="w-full h-full transparent-hover absolute flex items-center justify-center text-3xl z-10">
            Bali
          </h1>
        </div>
        <div className="product-grid-3 bg-slate-500 relative">
          <Image
            src={Maldives}
            alt="Pixel Escapes Logo"
            layout="fill"
            objectFit="cover"
            className="absolute"
          ></Image>
          <h1 className="w-full h-full transparent-hover absolute flex items-center justify-center text-3xl z-10">
            Maldives
          </h1>
        </div>
      </div>
    </div>
  );
}

export default OurProducts;
