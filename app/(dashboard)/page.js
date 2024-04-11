"use client";
import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { fetchAll } from "../services/feeds";
import FeedsInfo from "../components/FeedsInfo";

export default function Home() {
  const [feeds, setFeeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFeedsData = async () => {
      const feedsData = await fetchAll();
      setFeeds(feedsData);
      setIsLoading(false);
    };

    fetchFeedsData();
  }, []);

  return (
    <div className="justify-between space-y-32 mt-14 max-w-max">
      <section className="flex flex-auto">
        {feeds.map((feed, i) => {
          return <FeedsInfo feed={feed} i={i} />;
        })}
       
      </section>
      <section className="flex flex-auto space-x-20">
        <div className="font-bold py-32 text-3xl ml-96 float float-left font-serif items-center">
          <p>
            Actividades na
            <span className="text-green-700"> APDS</span>
          </p>
        </div>
        <div className="w-3/4 h-3/4">
          <Card />
        </div>
      </section>
      {/* <section className="flex flex-auto space-x-20">
        <div className=" ml-80 w-3/4 h-3/4">
          <Card />
        </div>
        <div className="font-bold py-32 text-3xl font-serif items-center">
          <p>
            Projectos na 
            <span className="text-green-700"> APDS</span>
          </p>
        </div>
      </section> */}
      {/* <section className="container mx-auto ml-80 w-3/4 h-3/4 space-y-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CardPartner/>
          <CardPartner/>
          <CardPartner/>
          <CardPartner/>
        </div>
      </section> */}
    </div>
  );
}
