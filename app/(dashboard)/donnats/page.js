"use client"
import React, {useEffect, useState} from 'react'
import PageHeader from '@/app/components/PageHeader';
import Link from 'next/link';
import {fetchAll} from "@/app/services/donnats";
import Loading from '@/app/components/Loading';
import DonnatsTable from '@/app/components/DonnatsTable';

export default function Page() {
  const [donnats, setDonnats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const fetchDonnats = async () => {
        const donnatsData = await fetchAll();
        setDonnats(donnatsData);
        setIsLoading(false);
      };

      fetchDonnats();
    }, 2000);
  }, []);

  // if(isLoading){
  //   return <Loading/>
  // }

  return (
    <div className="overflow-x-auto">
      <div className="block lg:hidden">
        <h1 className='text-2xl font-bold'>Lista de doações</h1>
        {donnats.map((donnat) => (
          <div key={donnat.id} className="border-b py-4">
            <h2 className="text-lg font-semibold">Nome do doador: {donnat.first_name + donnat.last_name}</h2>
            <p>E-mail: {donnats.email}</p>
            <p>Numero de telefone: {donnat.phone_number}</p>
          </div>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-col space-y-4 mt-8">
        <div className="flex gap-2 w-5/6">
          <div className="float-end ml-20">
          <PageHeader title="Lista de Doações">
        A lista de todas as doações
      </PageHeader>
          </div>
          <div className="">
          <Link
          className="bg-green-800 text-white justify-center mx-6 py-2 px-2"
          href="donnats/infoDonation"
        >
          Efectuar doação
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
                  Nome do doador
                </th>
                <th scope="col" className=" px-6 py-4">
                  Nome do telefone
                </th>
                <th scope="col" className=" px-6 py-4">
                  E-mail do doador
                </th>
                {/* <th scope="col" className=" px-6 py-4">
                  Acção
                </th> */}
              </tr>
            </thead>
            <tbody>
                {donnats.map((donnat, i) => {
                  return <DonnatsTable key={i} donnat={donnat} i={i + 1} />;
                })}
              </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  
}
