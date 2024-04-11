import React from "react";
import Image from "next/image";

export default function FeedsInfo({ feed, i }) {
  return (
    <div className="flex sm:flex md:flex sm:items-center md:items-center sm:justify-center md:justify-center">
      <div className="sm:ml-4 md:ml-4 sm:items-center md:items-center lg:ml-80 font-serif">
        <p className="text-green-700">{feed.feed_name}</p>
        <p className="text-3xl">
          <span className="font-bold">{feed.general_information} </span>
          <span className="text-green-700">{feed.kind}</span>
        </p>
        <p>{feed.sector}</p>
        <p className="flex flex-auto">
          <a
            href="#"
            className="justify-auto max-w-24 border rounded-md bg-green-800 py-2 px-4 mt-5 text-white"
          >
            Doar
          </a>
        </p>
      </div>
      <div className="sm:flex md:flex rounded-full lg:mr-80 w-3/4">
        <Image
          className="max-w-full max-h-full"
          src={"/images/chiure2.jpeg"}
          width={320}
          height={320}
          alt="activity"
        />
      </div>
    </div>
  );
}
