import Image from "next/image";
import React from "react";

export default function CarouselItem({ image, description, date }) {
  return (
    <div className="flex flex-col">
      <Image
        width={420}
        height={420}
        src={image}
        alt="slide"
        className="w-full h-full"
      />
      <p className="text-xl font-semibold">{date}</p>
      <p className="flex flex-auto text-justify justify-center items-center w-auto h-auto mt-2">{description}</p>
    </div>
  );
}
