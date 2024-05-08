"use client";
import Modal from "@/app/components/Modal";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Button from "@/app/components/Button";
import { create } from "@/app/services/users";
import Notification from "@/app/components/Notification";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const options = ["ROOT", "USER", "ADMIN"];

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
    if (name === "password") {
      if (value.length < 7) {
        setPasswordError("A password deve conter 8 ou mais carracteres.");
      } else {
        setPasswordError("");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passwordError) {
      await create(user).then((res) => {
        if (res.status === 200 || res.status === 201) {
          setSuccessMessage('Data submitted successfully!');
          setUser({
            email: "",
            password: "",
            role: "",
          });
          closeModal();
        } else {
          alert("Ocorreu algum erro na insercao do Utilizador");
        }
      });
    } else {
      alert("Please correct the form errors before submitting.");
    }
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
                required
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Senha
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                id="password"
                placeholder="Senha"
                name="password"
                required
                value={user.password}
                onChange={handleChange}
              />
              {passwordError && (
                <p className="text-red-500 text-sm">{passwordError}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="role"
              >
                Tipo de Utilizador
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="role"
                name="role"
                required=""
                value={user.role}
                onChange={handleChange}
              >
                <option value="">Selecione...</option>
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
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
        {successMessage && <Notification type="success" text={successMessage} />}
        {errorMessage && <Notification type="error" text={errorMessage} />}
      </Modal>
    </div>
  );
}
