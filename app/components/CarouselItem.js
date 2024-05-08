import Image from "next/image";
import React from "react";

export default function CarouselItem({ image, description, date }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        width={420}
        height={420}
        src={image}
        alt="slide"
        className="w-full h-full"
      />
      <p className="text-start">{date}</p>
      <p className="flex flex-auto text-center justify-center items-center w-auto h-auto mt-2">{description}</p>
    </div>
  );
}
