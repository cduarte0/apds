"use client";
import React, { useState } from "react";
import Modal from "@/app/components/Modal";
import Button from "@/app/components/Button";
import { create } from "@/app/services/partners";
import { useRouter } from "next/navigation";

export default function page() {
  const date = new Date();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [partner, setPartner] = useState({
    partner_name: "",
    email: "",
    nuit: "",
    address: "",
    logotipo: "",
    project_id: "",
  });

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const router = useRouter();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    router.push("/partners");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPartner((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    partner.logotipo = image;
    console.log(partner);
    await create(partner).then((res) => {
      if (res.status == 200) {
        alert("Parceiro cadastrado com sucesso");
        setPartner({
            partner_name: "",
            email: "",
            nuit: "",
            address: "",
            logotipo: "",
            project_id: "",
        });
        closeModal();
      } else {
        alert("Ocorreu algum erro na insercao do parceiro");
      }
    });
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <Modal
        isOpen={openModal}
        closeModal={closeModal}
        title="Adicionar Parceiro"
      >
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-2">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="partner_name"
              >
                Nome do parceiro
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="name"
                name="partner_name"
                value={partner.partner_name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                id="email"
                name="email"
                value={partner.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="address"
              >
                Endereco
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="address"
                name="address"
                value={partner.address}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nuit"
              >
                Nuit
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                id="nuit"
                name="nuit"
                value={partner.nuit}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="project_id"
              >
                Projecto
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="project_id"
                name="project_id"
                value={partner.project_id}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="image"
              >
                Logotipo
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="file"
                id="logotipo"
                name="image"
                placeholder="carregar logotipo"
                accept="image/*"
                onChange={handleImageChange}
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
