import React from "react";
import Image from "next/image";

export default function FeedsInfo({ feed }) {
  return (
    <div className="flex-row lg:flex items-center mt-auto justify-center xl:flex 2xl:flex">
      <div className="ml-4 h-auto w-auto sm:mr-4 md:mr-4 lg:ml-80 xl:ml-80 2xl:ml-80 items-center space-y-2 justify-center font-serif">
        <p className="text-green-700 flex flex-auto">{feed?.feed_description}</p>
        <p className="text-3xl">
          <span className="font-bold flex flex-auto">{feed?.general_information} </span>
          <span className="text-green-700 flex flex-auto">{feed?.kind}</span>
        </p>
        <p>{feed?.sector}</p>
        <p className="hidden lg:flex lg:flex-auto xl:flex xl:flex-auto 2xl:flex 2xl:flex-auto">
          <a
            href="donnats/infoDonation"
            className=" justify-center items-center max-w-24 border rounded-md bg-green-800 py-2 px-10 mt-5 text-white"
          >
            Doar
          </a>
        </p>
      </div>
      <div className="ml-4 mr-4 lg:mr-64 2xl:mr:64 lg:inline-block w-full">
        <div className="md:mt-4 md:bg-green-200 rounded-full w-3/4 h-1/2 outline-green-900">
        <Image
          className=" w-full h-full md:rounded-full items-center justify-center p-2"
          src={"/images/info.png"}
          width={320}
          height={320}
          alt="activity"
          property=""
        />
        </div>
        
        <p className="flex flex-auto items-center justify-center lg:hidden xl:hidden 2xl:hidden">
          <a
            href="donnats/infoDonation"
            className="justify-auto max-w-24 border rounded-md bg-green-800 py-2 px-4 mt-5 text-white"
          >
            Doar
          </a>
        </p>
      </div>
    </div>
  );
}
