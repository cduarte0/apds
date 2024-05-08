import Image from "next/image";
import React from "react";


export default function Page() {
  return (
    <div className="container mt-8 mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold mb-4">Sobre nós</h1>
        <div className="">
          <Image
            src="/images/ab.jpg"
            width={520}
            height={420}
            className="w-auto h-auto"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-xl font-semibold mb-2">Quem somos</h2>
          <p className="text-gray-700 text-justify text-lg">
            APDS - CD (Associação Provincial para o Desenvolvimento
            Sustentável), é uma Organização Sem Fins Lucrativos, cuja seu foco é
            prestar apoio a pessoas Deslocadas (Vítimas de ataques armados ou
            desastres naturais) nas áreas de Água e Saneamento, Nutrição,
            Agricultura, Segurança Alimentar e Meio Ambiente. APDS - Uma é
            associação constituída de jovens dinâmicos cujo seus objetivos são
            de promover práticas de Desenvolvimento Sustentável, saúde e
            assistência humanitária
          </p>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-xl font-semibold mb-2">Nossa Equipe</h2>
          <p className="text-gray-700 text-justify text-lg">
            A nossa equipe é composta de jovens dinamicos e criativos onde face
            a situação vivida actualmente na Província de Cabo Delgado, estes
            jovens sentiram a necessidade duma intervenção activa, o que pode
            reduzir o nível de jovens fáceis de serem aliciados a se juntarem
            aos insurgentes, oferendo oportunidades de emprego e treinamentos.
          </p>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-xl font-semibold mb-2">Áreas de Interesse</h2>
          <ul className="text-gray-700 text-lg flex flex-col">
            <li>Agricultura</li>
            <li>Fome e Segurança Ambiental</li>
            <li>Apoio a Vítimas</li>
            <li>Desenvolvimento Comunitário</li>
            <li>Saúde/Direito Reprodutivo</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
