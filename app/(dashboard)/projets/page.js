"use client";
import React from "react";
import Link from "next/link";
import { fetchAllProjects, create } from "./../../services/projects";
import { useEffect, useState } from "react";
import TableRow from "@/app/components/TableRow";
import PageHeader from "@/app/components/PageHeader";
import Loading from "@/app/components/Loading";

export default function Page() {
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
    <div className="overflow-x-auto">
       <div className="block lg:hidden bg-white p-2 justify-center items-center rounded-lg w-full mb-4 border border-slate-200">
        <div className="flex-row items-center justify-center">
        {projects.map((project) => (
          <div key={project.id} className="border-b flex-1 w-[100%] p-2">
            <h2 className="text-lg font-semibold">{project.project_name}</h2>
            <p>Local de Implementação: {project.local_implementation}</p>
            <p>Estado: {project.project_status}</p>
          </div>
        ))}
      </div>
        </div>
       
      <div className="hidden lg:flex lg:flex-col space-y-4 mt-8">
        <div className="flex gap-2 w-5/6">
          <div className="float-end ml-20">
            <PageHeader title="Lista de Projectos">
              A lista de Projectos da Associação
            </PageHeader>
          </div>
          {/* <div className="">
            <Link
              className="flex text-white bg-green-700 justify-center mx-6 py-2 px-4"
              href="users/create"
            >
              Adicionar Utilizador
            </Link>
          </div> */}
        </div>
        <div className="lg:items-center lg:justify-center lg:flex lg:flex-col">
          <table className="lg:table text-center table-auto w-5/6 lg:items-center lg:justify-center">
            <thead className="items-center justify-center border-b bg-green-800 font-medium font-serif text-white dark:border-neutral-500 dark:bg-green-800">
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
                    {/* <th scope="col" className=" px-6 py-4">
                      Acção
                    </th> */}
                  </tr>
            </thead>
            <tbody className="font-normal">
                  {projects.map((project, i) => {
                    return <TableRow key={i} project={project} i={i + 1} />;
                  })}
                </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
  