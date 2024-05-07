"use client";
import Modal from "@/app/components/Modal";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // // Here you can implement your login logic
    // if (username === 'admin' && password === 'password') {
    //   // Successful login
    //   console.log('Login successful');
    //   // Redirect to dashboard or any other page
    // } else {
    //   // Failed login
    //   setError('Invalid username or password');
    // }
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    router.push("./");
  };
  return (
    <Modal title="Login" isOpen={openModal} closeModal={closeModal}>
      <div className="items-center flex flex-col justify-center">
        <div className="items-center">
          <Image
            className=""
            src="/images/logo.png"
            width={240}
            height={240}
            alt="Logo"
          />
        </div>
        <div>
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
        </div>
      </div>
    </Modal>
  );
}
