"use client";
import React, { useState } from "react";
import CarouselItem from "./CarouselItem";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ items }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {items.map((item,index)=>(
          <div key={index} className="h-auto">
            <CarouselItem image={item.image} date={item.title} description={item.description}/>

          </div>
        ))}
      </Slider>
      {/* <div className="text-white p-2 rounded-md items-end bg-green-800 hover:text-white float-end">
        <a href="#">ver mais</a>
      </div> */}
      
      
    </div>
  );
}
