import React from "react";
import Image from "next/image";

export default function CardPartner({urlImage, description}) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-2 w-full h-full sm:w-3/4 md:w-3/4">
      <Image className=" p-4 rounded-md w-full object-cover object-center" alt="partner" src={urlImage} width={180} height={180} />
      <div className="p-4">
        <p className="text-gray-900 text-sm text-justify">
        {description}
        </p>
      </div>
    </div>
  );
}
