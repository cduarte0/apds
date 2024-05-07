import React from "react";
import Image from "next/image";

export default function FeedsInfo({ feed, i }) {
  return (
    <div className="flex-row lg:flex xl:flex 2xl:flex">
      <div className="ml-4 sm:mr-4 md:mr-4 lg:ml-80 xl:ml-80 2xl:ml-80 items-center justify-center font-serif">
        <p className="text-green-700 flex flex-auto">{feed.feed_name}</p>
        <p className="text-3xl">
          <span className="font-bold flex flex-auto">{feed.general_information} </span>
          <span className="text-green-700 flex flex-auto">{feed.kind}</span>
        </p>
        <p>{feed.sector}</p>
        <p className="hidden lg:flex lg:flex-auto xl:flex xl:flex-auto 2xl:flex 2xl:flex-auto">
          <a
            href="#"
            className="justify-auto max-w-24 border rounded-md bg-green-800 py-2 px-4 mt-5 text-white"
          >
            Doar
          </a>
        </p>
      </div>
      <div className="ml-4 mr-4 lg:mr-64 2xl:mr:64 lg:inline-block w-full">
        <Image
          className="max-w-full max-h-full"
          src={"/images/chiure2.jpeg"}
          width={320}
          height={320}
          alt="activity"
        />
        <p className="flex flex-auto items-center justify-center lg:hidden xl:hidden 2xl:hidden">
          <a
            href="#"
            className="justify-auto max-w-24 border rounded-md bg-green-800 py-2 px-4 mt-5 text-white"
          >
            Doar
          </a>
        </p>
      </div>
    </div>
  );
}
