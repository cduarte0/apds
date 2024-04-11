"use client";
import React, { useState } from "react";
import Modal from "@/app/components/Modal";
import InputText from "@/app/components/InputText";
import Button from "@/app/components/Button";
import { create } from "@/app/services/projects";
import { useRouter } from "next/navigation";


export default function page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    router.push("/projets");
    
  };
  const handleSubmit = async (project) => {
    console.log(project);
    await create(project);
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <Modal
        isOpen={openModal}
        closeModal={closeModal}
        title="Adicionar Projecto"
      >
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-3">
            <InputText
              label="Nome"
              type="text"
              placeholder="nome do projecto"
            />
            <InputText
              label="Fundo"
              type="number"
              placeholder="Fundo inicial do projecto"
              required
            />
            <InputText
              label="Local"
              type="text"
              placeholder="Local de implementacao"
            />
            <InputText
              label="Conta"
              type="number"
              placeholder="Numero de conta"
            />
            <InputText label="Moeda" type="text" placeholder="Tipo de moeda" />
            <InputText
              label="Codigo"
              type="text"
              placeholder="Codigo do Projecto"
            />
          </div>
          <div className="container justify-between mx-auto px-4 py-8 space-x-2">
            <Button
              className="bg-white text-gray-700 hover:bg-red-400"
              onClick={closeModal}
            >
              Cancelar
            </Button>
            <Button className="bg-green-700" onClick={handleSubmit}>
              Submeter
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
