"use client";
import React from "react";
import Link from "next/link";
import { fetchAllProjects, create } from "./../../services/projects";
import { useEffect, useState } from "react";
import TableRow from "@/app/components/TableRow";
import PageHeader from "@/app/components/PageHeader";
import Loading from "@/app/components/Loading";

export default function page() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const fetchProjectsData = async () => {
        const projectsData = await fetchAllProjects();
        setProjects(projectsData);
        setIsLoading(false);
      };

      fetchProjectsData();
    }, 2000);
  }, []);

  if(isLoading){
    return <Loading/>
  }

  return (
    <div className="space-y-12">
      <div className="flex justify-between gap-2 mt-24">
        <PageHeader title="Lista de Projectos">
          A lista de projecto da Associação
        </PageHeader>

        {/* <p className="flex">Pesquisar</p> */}
        <Link
          className="bg-green-800 flex text-white justify-center mx-6 py-1 px-4"
          href="projets/create"
        >
          Adicionar Projecto
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-2">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden items-center">
              <table className="min-w-full text-center text-sm font-light mx-14">
                <thead className="bg-green-800 border-b-2 font-medium font-serif text-white dark:border-neutral-500 dark:bg-neutral-900">
                  <tr>
                    <th scope="col" className=" px-6 py-4">
                      #
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Nome
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Local
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Valor disponivel
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Moeda
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Acção
                    </th>
                  </tr>
                </thead>
                <tbody className="font-normal">
                  {projects.map((project, i) => {
                    return <TableRow project={project} i={i + 1} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
