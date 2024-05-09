"use client";
import React, { useState } from "react";
import Modal from "@/app/components/Modal";
import Button from "@/app/components/Button";
import { create } from "@/app/services/projects";
import { useRouter } from "next/navigation";

export default function Page() {
  const date = new Date();
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

  const router = useRouter();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    router.push("/projets");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    project.date_start = project.date_start.concat("T00:00:00.000Z");
    project.date_end = project.date_end.concat("T00:00:00.000Z");
    await create(project).then((res) => {
      if (res.status == 200) {
        alert("Projecto cadastrado com sucesso");
        setProject({
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
        closeModal();
      } else {
        alert("Ocorreu algum erro na insercao do projecto");
      }
    });
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <Modal
        isOpen={openModal}
        closeModal={closeModal}
        title="Adicionar Projecto"
      >
        <form onSubmit={handleSubmit}>
          <div className="items-center justify-center lg:grid xl:grid 2xl:grid lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 lg:gap-3 xl:gap-3 2xl:gap-3">
            <div className="mb-4">
              <label
                className="flex flex-row items-center lg:block xl:block 2xl:block text-gray-700 text-sm font-bold mb-2"
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
                className="flex flex-row items-center lg:block xl:block 2xl:block text-gray-700 text-sm font-bold mb-2"
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
                className="flex flex-row items-center lg:block xl:block 2xl:block text-gray-700 text-sm font-bold mb-2"
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
                className="flex flex-row items-center lg:block xl:block 2xl:block text-gray-700 text-sm font-bold mb-2"
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
                className="flex flex-row items-center lg:block xl:block 2xl:block text-gray-700 text-sm font-bold mb-2"
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
                className="flex flex-row items-center lg:block xl:block 2xl:block text-gray-700 text-sm font-bold mb-2"
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
                className="flex flex-row items-center lg:block xl:block 2xl:block text-gray-700 text-sm font-bold mb-2"
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
                className="flex flex-row items-center lg:block xl:block 2xl:block text-gray-700 text-sm font-bold mb-2"
                htmlFor="date_start"
              >
                Data de inicio
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                id="datestart"
                name="date_start"
                value={project.date_start}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="flex flex-row items-center lg:block xl:block 2xl:block text-gray-700 text-sm font-bold mb-2"
                htmlFor="date_end"
              >
                Data final
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                id="dateend"
                name="date_end"
                value={project.date_end}
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
