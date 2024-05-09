"use client";
import React, { useState, useEffect } from "react";
import Modal from "@/app/components/Modal";
import Button from "@/app/components/Button";
import { update, fetchProjectsByName } from "@/app/services/projects";
import { useParams, useRouter } from "next/navigation";
import Loading from "@/app/components/Loading";

export default function Page() {
  let dateStart = new Date();
  let dateEnd = new Date();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [project, setProject] = useState({
    project_name: "",
    budget: "",
    balance_available: "",
    local_implementation: "",
    date_start: "",
    date_end: "",
    project_code: "",
    account_number_project: "",
    type_currency: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    setTimeout(() => {
      const fetchProjectsData = async () => {
        const projectsData = await fetchProjectsByName(params.project_name);
        setProject(projectsData);
        setIsLoading(false);
      };

      fetchProjectsData();
    }, 2000);
  }, []);
  if (isLoading) {
    return <Loading />;
  }

  const router = useRouter();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    router.push("/projets");
  };

  const dateStartStruture = () =>{
    fetchProjectsByName();
    dateStart = project.date_start.getFullYear()+"-"+project.date_start.getMonth()+"-"+project.date_start.getDate();
    console.log(dateStart)
    return dateStart;
  };
  const dateEndStruture = () =>{
    fetchProjectsData();
    dateEnd = project.date_end.getFullYear()+"-"+project.date_end.getMonth()+"-"+project.date_end.getDate();
    return dateEnd;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTimeout(()=>{

    })
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <Modal isOpen={openModal} closeModal={closeModal} title="Editar Projecto">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-3">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="project_name"
              >
                Nome do projecto:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="name"
                name="project_name"
                value={project.project_name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="local_implementation"
              >
                Local de implementacao
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="local"
                name="local_implementation"
                value={project.local_implementation}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="project_code"
              >
                Codigo do projecto
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="code"
                name="project_code"
                value={project.project_code}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="account_number_project"
              >
                Conta
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                id="account"
                name="account_number_project"
                value={project.account_number_project}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="budget"
              >
                Valor do projecto
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                id="budget"
                name="budget"
                value={project.budget}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="balance_available"
              >
                Montante disponivel
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                id="balance"
                name="balance_available"
                value={project.balance_available}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="type_currency"
              >
                Moeda
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="currency"
                name="type_currency"
                value={project.type_currency}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="dateStart"
              >
                Data de inicio
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                id="dateStart"
                name="dateStart"
                value={dateStartStruture}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="dateEnd"
              >
                Data final
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                id="dateend"
                name="dateEnd"
                value={dateEndStruture}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-auto container justify-between mx-auto px-4 py-8 space-x-2">
            <p
              className="bg-red-700 text-white cursor-pointer hover:bg-red-800 font-bold p-4 rounded-md"
              onClick={closeModal}
            >
              Cancelar
            </p>
            <Button className="bg-green-700">Submeter</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
