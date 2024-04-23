"use client";
import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { fetchAll } from "../services/feeds";
import FeedsInfo from "../components/FeedsInfo";
import CardPartner from "../components/CardPartner";
import Footer from "../components/Footer";

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
    <div className="justify-between space-y-32">
      <section id="feed" className="flex flex-auto mt-14">
        {feeds.map((feed, i) => {
          return <FeedsInfo feed={feed} i={i} />;
        })}
      </section>
      <section id="activity" className="sm:items-center md:items-center max-w-screen-lg mx-80 flex flex-shrink-0">
        <div className="font-bold py-32 text-3xl font-serif items-center">
          <p>
            Actividades na
            <span className="text-green-700"> APDS</span>
          </p>
        </div>
        <div className="w-4/5 flex-shrink-0">
          <Card
            urlImage="/images/chiure5.jpeg"
            title="Data"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          />
        </div>
      </section>
      <section id="project" className="flex flex-none space-x-2">
        <div className="w-3/4 h-3/4 ml-96">
          <Card
            urlImage="/images/chiure2.jpeg"
            title="Actividades de chiure"
            description="Nossas actividades sao feitas dessa forma"
          />
        </div>
        <div className="font-bold py-32 text-3xl font-serif fle">
          <p>
            Projectos na
            <span className="text-green-700"> APDS</span>
          </p>
        </div>
      </section>
      <section id="partner" className="mx-80 space-y-4">
        <p className="font-bold">Parceiros de Cooperação</p>

        <div className="grid grid-cols-4 gap-4">
          <CardPartner
            urlImage="/images/mentor.png"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          />
          <CardPartner
            urlImage="/images/unicef.png"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          />
          <CardPartner
            urlImage="/images/unicef.png"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          />
          <CardPartner
            urlImage="/images/unicef.png"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          />
        </div>
      </section>

      <section id="donor">
        <div></div>
      </section>
    </div>
  );
}
