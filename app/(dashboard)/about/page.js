import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div>
      <section className="w-full mx-4 items-center py-10 bg-white dark:bg-gray-900 dark:text-white">
        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] md:mx-auto mx-4 flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold font-serif text-gray-900 sm:text-4xl">
                Quem Somos
              </h2>
              <p className="mt-4 text-gray-600 text-lg font-serif text-justify">
                {" "}
                APDS - CD (Associação Provincial para o Desenvolvimento
                Sustentável), é uma Organização Sem Fins Lucrativos, cuja seu
                foco é prestar apoio a pessoas Deslocadas (Vítimas de ataques
                armados ou desastres naturais) nas áreas de Água e Saneamento,
                Nutrição, Agricultura, Segurança Alimentar e Meio Ambiente. APDS
                - Uma é associação constituída de jovens dinâmicos cujo seus
                objetivos são de promover práticas de Desenvolvimento
                Sustentável, saúde e assistência humanitária
              </p>
            </div>
            <div className="mt-12 md:mt-0">
              <Image
                src="/images/at4.png"
                width={520}
                height={420}
                alt="Sobre nos"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mx-4 py-10 bg-white dark:bg-gray-900 dark:text-white">
        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] md:mx-auto mx-4 flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold font-serif text-gray-900 sm:text-4xl">
                Missão
              </h2>
              <p className="mt-4 text-gray-600 font-serif text-lg text-justify">
                {" "}
                Promover e praticar ações de sustentabilidade, através de
                praticas humanitárias e de desenvolvimento que contribuam para o
                sector agrário e saúde, como forma viável de prover riqueza e
                desenvolvimento socioeconómico de Cabo Delgado
              </p>
            </div>
            <div className="max-w-lg">
              <h2 className="text-3xl font-semibold font-serif text-gray-900 sm:text-4xl">
                Visão
              </h2>
              <p className="mt-4 text-gray-600 font-serif text-lg text-justify">
                {" "}
                Excelência na provisão de um serviço impactante, impulsionando o
                desenvolvimento sustentável da Província
              </p>
              <h2 className="text-3xl font-serif font-semibold text-gray-900 sm:text-4xl">
                Valores
              </h2>
              <p className="mt-4 font-serif text-gray-600 text-lg text-justify">
                {" "}
                Os Valores da APDS provêm de ideais humanistas e de carácter
                humanitário, bem como da vontade de materializar ações concretas
                em terreno no sentido de contribuir, no seu todo, para a
                realização da pessoa, da família e da comunidade, destacando-se:
              </p>
              <ul className="font-serif text-gray-600 text-lg text-justify">
                <li>Solidariedade;</li>
                <li>Ética;</li>
                <li>Responsabilidade Social;</li>
                <li>Não Discriminação;</li>
                <li>Respeito e Igualdade;</li>
                <li>Reconhecimento;</li>
                <li>Integridade e Transparência.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mx-4 py-10 bg-white dark:bg-gray-900 dark:text-white">
        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] md:mx-auto mx-4 flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="mt-12 md:mt-0 hidden md:block">
              <Image
                src="/images/chiure4.jpeg"
                width={520}
                height={420}
                alt="Sobre nos"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold font-serif text-gray-900 sm:text-4xl">
                Nossa equipe
              </h2>
              <p className="mt-4 text-gray-600 text-lg font-serif text-justify">
                {" "}
                A nossa equipe é composta de jovens dinamicos e criativos onde
                face a situação vivida actualmente na Província de Cabo Delgado,
                estes jovens sentiram a necessidade duma intervenção activa, o
                que pode reduzir o nível de jovens fáceis de serem aliciados a
                se juntarem aos insurgentes, oferendo oportunidades de emprego e
                treinamentos.
              </p>
            </div>
            <div className="mt-12 md:mt-0 md:hidden">
              <Image
                src="/images/chiure4.jpeg"
                width={520}
                height={420}
                alt="Sobre nos"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mx-4 items-center py-10 bg-white dark:bg-gray-900 dark:text-white">
        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] md:mx-auto mx-4 flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold font-serif text-gray-900 sm:text-4xl">
              Áreas de Interesse
              </h2>
              <p className="mt-4 text-gray-600 text-lg font-serif text-justify">
              <ul className=" list-item">
                <li>Agricultura</li>
                <li>Fome e Segurança Ambiental</li>
                <li>Apoio a Vítimas</li>
                <li>Desenvolvimento Comunitário</li>
                <li>Saúde/Direito Reprodutivo</li>
              </ul>
              </p>
            </div>
            <div className="mt-12 md:mt-0">
            <Image
              src="/images/about.jpg"
              width={520}
              height={420}
              alt="Sobre nos"
              className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
            />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
