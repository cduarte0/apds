import React from "react";
import Image from "next/image";

export default function Card({ title, description, urlImage, className }) {
  const date = new Date();
  return (
    <div className="bg-white flex-shrink-0 shadow-md rounded-lg overflow-hidden p-3 w-4/5 h-full">
      <Image
        className=" p-4 rounded-md w-full object-cover object-center"
        src={urlImage}
        width={320}
        height={320}
      />
      <div className="p-4">
        <h2 className="text-xl text-green-500 mb-2">
          <span>{title}</span>
        </h2>
        <p className="text-gray-900 font-serif">{description}</p>
        <div className="mt-4 flex justify-end">
          <button className="px-4 py-2 bg-white text-green-500 underline">
            Ver mais
          </button>
        </div>
      </div>
    </div>
  );
}
