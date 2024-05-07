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
  if(isLoading){
    return<Loading/>
  }
  return (
    <div className="space-y-10">
      <div className="flex justify-between gap-2 mt-24">
        <PageHeader title="Lista de Utilizadores">
          Todos os Utilizadores registados
        </PageHeader>
        <div className="flex justify-center">
          <Link
            className="bg-green-800 text-white justify-center mx-6 py-1 px-2"
            href="users/create"
          >
            Adicionar Utilizador
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-6 lg:mx-2"></div>
        <div className="overflow-hidden">
          <table className="min-w-full text-center text-sm font-light mx-14">
            <thead className="border-b bg-green-800 font-medium font-serif text-white dark:border-neutral-500 dark:bg-neutral-900">
              <tr>
                <th scope="col" className=" px-6 py-4">
                  #
                </th>
                <th scope="col" className=" px-6 py-4">
                  E-mail
                </th>
                <th scope="col" className=" px-6 py-4">
                  Tipo de Utilizador
                </th>
                <th scope="col" className=" px-6 py-4">
                  Acção
                </th>
              </tr>
            </thead>
            <tbody className="font-normal">
              {users.map((user, i) => {
                return <TableUserRow user={user} i={i + 1} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
