"use client";
import React, { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import { fetchAll } from "../services/feeds";
import { fetchAllProjects } from "../services/projects";
import FeedsInfo from "../components/FeedsInfo";
import CardPartner from "../components/CardPartner";
import Loading from "../components/Loading";

export default function Home() {
  const date = new Date();
  const [feeds, setFeeds] = useState([]);
  const [projects, setProjectsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const items = [
    {
      image: "/images/chiure2.jpeg",
      description:
        "Associação é uma entidade de direito privado, dotada de personalidade jurídica e com algumas caracterizada pelo agrupamento de pessoas para a realização e consecução de",
    },
    {
      image: "/images/chiure4.jpeg",
      description: "Second slide description",
    },
    {
      image: "/images/chiure5.jpeg",
      description: "Third slide description",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      const fetchFeedsData = async () => {
        const feedsData = await fetchAll();
        setFeeds(feedsData);
        setIsLoading(false);
      };

      fetchFeedsData();
    }, 2000);
  }, []);
  useEffect(() => {
    const fetchProjectsData = async () => {
      const projectsData = await fetchAllProjects();
      setProjectsData(projectsData);
    };

    fetchProjectsData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="justify-around lg:space-y-28 xl:space-y-28 2xl:space-y-28">
      <section id="feed" className="mt-14">
        {feeds.map((feed, i) => {
          return <FeedsInfo key={i} feed={feed} i={i} />;
        })}
      </section>
      <section
        id="activity"
        className="flex-row  mx-4 items-center justify-center lg:mx-80 xl:mx-80 2xl:mx-80 lg:flex lg:flex-auto xl:flex xl:flex-auto 2xl:flex 2xl:flex-auto"
      >
        <div className="flex flex-row font-bold py-20 text-3xl font-serif">
          <p className="flex flex-row items-center">Nossas Actividades</p>
        </div>
        <div className="container mx-auto my-8 max-w-md p-4">
          <Carousel items={items} />
        </div>
      </section>
      <section
        id="project"
        className="mx-4 items-center justify-center lg:mx-80 xl:mx-80 2xl:mx-80 flex-row lg:flex lg:flex-auto xl:flex xl:flex-auto 2xl:flex 2xl:flex-auto"
      >
        <div className="font-bold py-20 text-3xl font-serif">
          <p>Nossos Projectos</p>
        </div>
        <div className="container mx-auto my-8 max-w-md p-4">
          <Carousel items={items} />
        </div>
      </section>
      <section id="partner" className="mx-4 lg:mx-80 space-y-4">
        <p className="font-bold">Parceiros de Cooperação</p>

        <div className="sm:flex md:flex sm:flex-row md:flex-row lg:grid lg:grid-cols-4 lg:gap-4 xl:grid xl:grid-cols-4 xl:gap-4 2xl:grid 2xl:grid-cols-4 2xl:gap-4">
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
