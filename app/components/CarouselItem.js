import React from 'react'

export default function CarouselItem({ image, description, date }) {
  return (
    <div className="flex flex-col items-center justify-center">
    <img src={image} alt="slide" className="w-full" />
    <p className="text-start">{date}</p>
    <p className="text-center mt-2">{description}</p>
  </div>
  )
}
