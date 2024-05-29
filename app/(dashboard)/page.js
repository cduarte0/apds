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
      title:"",
      image: "/images/chiure2.jpeg",
      description:
        "Desde a sua criação, a APDS implementou projetos de Nutrição, Agricultura, Água e Saneamento, e Voucher, em programas de Desenvolvimento e Emergência.",
    },
    {
      title:"",
      image: "/images/chiure4.jpeg",
      description: "Os principais parceiros nestas atividades foram o ADM (Agro-negócios para o Desenvolvimento de Moçambique) e FNDS (Fundo Nacional de Desenvolvimento Sustentável). Fundos destas atividades eram provenientes do Banco Mundial e Japão.",
    },
    {
      title:"",
      image: "/images/chiure5.jpeg",
      description: "Atualmente a APDS está implementando projeto de nutrição e promoção de higiene junto da Mentor Initiative, através dos fundos da UNICEF nos distritos de Chiure e Mueda.",
    },
  ];
  const itemsActivity = [

    {
      title:"Distribuição de Kits",
      image: "/images/at.png",
      description:"No âmbito da implementação do projeto de Nutrição nos distritos de Mueda e Chiure, a APDS em parceria com a Mentor Initiative, com financiamento do UNICEF, realizou no distrito de Chiure, nas comunidades de Nivenevene, Mocone e Mepilane, a distribuição de Kits de higiene para a população. Também apoiou na administração da vitamina A e administração de desparasitantes"
    },
    {
      title: "Desparasitação",
      image: "/images/at3.png",
      description:" No âmbito da implementação do projeto de nutrição no distrito de Mueda e Chiure, A APDS em parceria com a Mentor Initiative através do financiamento da UNICEF Mozambique, deu continuidade no mes de Maio com a realização de varias atividades que tem desenvolvido com destaque: A suplementação, a desparasitação, a pesagem, a medição do perímetro braquial, a avaliação dos edemas e a demonstração culinária."
    },
    {
      title:"Balanço Trimestral",
      image: "/images/at4.png",
      description:" No âmbito da implementação do projeto de nutrição nos distritos de Mueda e Chiure, A APDS em parceria com a Mentor Initiative através do financiamento da UNICEF, Realizou no dia 14 de Março no distrito de Mueda o balanço trimestral"
    },
  ]

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

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <div className="justify-around lg:space-y-28 xl:space-y-28 2xl:space-y-28">
      <section id="feed" className="mt-14">
        {feeds.map((feed, i) => {
          return <FeedsInfo key={i} feed={feed} i={i} />;
        })}
      </section>
      <section
        id="activity"
        className="flex-row mx-4 items-center justify-center lg:mx-80 xl:mx-80 2xl:mx-80 lg:flex lg:flex-auto xl:flex xl:flex-auto 2xl:flex 2xl:flex-auto"
      >
        <div className="flex flex-row font-bold py-20 text-3xl font-serif">
          <p className="flex flex-row items-center">Nossas Actividades</p>
        </div>
        <div className="container mx-auto my-8 max-w-md p-4">
          <Carousel items={itemsActivity} />
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

        <div className="sm:flex text-justify md:flex sm:flex-row md:flex-row lg:grid lg:grid-cols-4 lg:gap-4 xl:grid xl:grid-cols-4 xl:gap-4 2xl:grid 2xl:grid-cols-4 2xl:gap-4">
          <CardPartner
            urlImage="/images/mentor.png"
            description="Está implementando junto da APDS programa de Nutrição e Promoção de Higiene nos distritos de Mueda e Chiure"
          />
          <CardPartner
            urlImage="/images/unicef.png"
            description="Parceiro de implementação. Doador do fundo do programa de nutrição e promoção de higiene nos distritos de Chiure e Mueda"
          />
          <CardPartner
            urlImage="/images/oikos.png"
            description="Um dos nossos parceiros de cooperação que nos ajuda também a concretizar os nossos valores"
          />
          <CardPartner
            urlImage="/images/government.png"
            description="O governo, como a estrutura chave do país no combate a pobreza e o desemprego"
          />
        </div>
      </section>

      <section id="donor">
        <div></div>
      </section>
    </div>
  );
}