"use client";
import React, { useState } from "react";
import CarouselItem from "./CarouselItem";
import Link from "next/link";

export default function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="overflow-hidden relative">
      <div className="flex">
        {items.map((item, index) => (
          <div
            key={index}
            className={`w-full h-full transition-transform ease-out duration-500 transform ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <CarouselItem
              image={item.image}
              date={item.date}
              description={item.description}
            />
          </div>
        ))}
      </div>
      <div className="absolute text-white flex inset-0 items-center justify-between">
        <button className="p-4 bg-green-800 rounded-full" onClick={prevSlide}>
          &lt;
        </button>
        <button className="p-2 bg-green-800 rounded-full" onClick={nextSlide}>
          &gt;
        </button>
      </div>
      <div className="abslute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {items.map((_, i) => (
            <div
              className={`transition-all w-3 h-3 rounded-full ${
                currentIndex === i ? "p-4" : "bg-green-800"
              }`}
            ></div>
          ))}
        </div>
      </div>
      <div className="items-end">
        <Link
          className="text-green-700 justify-center mx-6 py-1 px-2"
          href="projets"
        >
          Ver mais
        </Link>
      </div>
    </div>
  );
}
