"use client";
import Modal from "@/app/components/Modal";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Button from "@/app/components/Button";
import { create } from "@/app/services/users";

export default function page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState({
    email: "",
    hashed_password: "",
    role: "",
  });

  const router = useRouter();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    router.push("/users");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await create(user).then((res) => {
      if (res.status == 200) {
        alert("Utilizador inserido com sucesso");
        setUser({
          email: "",
          hashed_password: "",
          role: "",
        });
        closeModal();
      } else {
        alert("Ocorreu algum erro na insercao do Utilizador");
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Modal
        title="Adicionar utilizador"
        isOpen={openModal}
        closeModal={closeModal}
      >
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-2">
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
                placeholder="fulano@gmail.com"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="hashed_password"
              >
                Senha
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                id="hashed_password"
                placeholder="Senha"
                name="hashed_password"
                value={user.hashed_password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="role"
              >
                Tipo de Utilizador
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="role"
                placeholder="ADMIN"
                name="role"
                value={user.role}
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
