"use client"
import Modal from "@/app/components/Modal";
import React, {useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    router.push("./");
  };
  return <Modal isOpen={openModal} closeModal={closeModal}></Modal>;
}
