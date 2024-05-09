"use client";
import Loading from "@/app/components/Loading";
import PageHeader from "@/app/components/PageHeader";
import TableUserRow from "@/app/components/TableUserRows";
import { fetchAll } from "@/app/services/users";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Page() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const fetchUsers = async () => {
        const usersData = await fetchAll();
        setUsers(usersData);
        setIsLoading(false);
      };

      fetchUsers();
    }, 2000);
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="overflow-x-auto">
      <div className="block lg:hidden">
        {/* List view for small screens */}
        {users.map((user) => (
          <div key={user.id} className="border-b py-4">
            <h2 className="text-lg font-semibold">{user.email}</h2>
            <p>Tipo: {user.role}</p>
            {/* <p>Phone: {user.phone}</p> */}
          </div>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-col space-y-4 mt-8">
        <div className="flex gap-2 w-5/6">
          <div className="float-end ml-20">
            <PageHeader title="Lista de Projectos">
              A lista de projecto da Associação
            </PageHeader>
          </div>
          <div className="">
            <Link
              className="flex text-white bg-green-700 justify-center mx-6 py-2 px-4"
              href="users/create"
            >
              Adicionar Projecto
            </Link>
          </div>
        </div>
        <div className="lg:items-center lg:justify-center lg:flex lg:flex-col">
          <table className="lg:table text-center table-auto w-5/6 lg:items-center lg:justify-center">
            <thead className="items-center justify-center border-b bg-green-800 font-medium font-serif text-white dark:border-neutral-500 dark:bg-green-800">
              <tr>
                <th scope="col" className=" px-6 py-4">
                  #
                </th>
                <th scope="col" className=" px-6 py-4">
                  E-mail
                </th>
                <th scope="col" className="px-6 py-4">
                  Tipo de Utilizador
                </th>
                <th scope="col" className=" px-6 py-4">
                  Acção
                </th>
              </tr>
            </thead>
            <tbody className="font-normal">
              {users.map((user, i) => {
                return <TableUserRow key={i} user={user} i={i + 1} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
