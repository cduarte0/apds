"use client";
import React, { useEffect, useState } from "react";
import DeleteModal from "@/app/components/DeleteModal";
import { useParams, useRouter } from "next/navigation";
import { fetchAll, remove } from "@/app/services/users";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const params = useParams();
  let userDelete = "";
  let u = "";

  useEffect(() => {
    setTimeout(() => {
      const fetchUsers = async () => {
        const usersData = await fetchAll();
        setUsers(usersData);
        // u = await usersData.find((item) => item.id === params.id).email;
      };

      fetchUsers();
    }, 2000);
  }, []);

  const handleDelete = async () => {
    console.log("User " + userDelete);
    await remove(params.id);
    router.push("/users");
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    // Close modal without deleting
    setIsModalOpen(false);
    router.push("/users");
  };
  return (
    <DeleteModal
      isOpen={isModalOpen}
      onClose={handleCloseModal}
      onDelete={handleDelete}
      titlle="Apagar Utilizador"
      item={"Tem certeza que pretende apagar utilizador com email: "}
    />
  );
}
