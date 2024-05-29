"use client";
import React from "react";
import Link from "next/link";
import { fetchAll, create } from "./../../services/partners";
import { useEffect, useState } from "react";
import PartnerTableRows from "@/app/components/partnerTableRows";
import PageHeader from "@/app/components/PageHeader";
export default function Page() {
  const [partners, setPartners] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchPartnersData = async () => {
      const partnersData = await fetchAll();
      setPartners(partnersData);
      setIsLoading(false);
    };

    fetchPartnersData();
  }, []);
  return (
    <div className="overflow-x-auto">
      <div className="block lg:hidden">
        <h1 className='text-2xl font-bold'>A lista de parceiros da Associação</h1>
        {partners.map((partner) => (
          <div key={partner.id} className="border-b py-4">
            <h2 className="text-lg font-semibold">Nome do doador: {partner?.partner_name}</h2>
            <p>E-mail: {partner?.partner_email}</p>
            <p>Endereço: {partner?.partner_address}</p>
          </div>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-col space-y-4 mt-8">
        <div className="flex gap-2 w-5/6">
          <div className="float-end ml-20">
          <PageHeader title="Lista de Parceiros">
          A lista de parceiros da Associação
        </PageHeader>
          </div>
          <div className="">
          <Link
            className="bg-green-800 text-white justify-center mx-6 py-2 px-2"
            href="partners/create"
          >
            Adicionar parceiro
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
                      Nome
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      E-mail
                    </th>
                    {/* <th scope="col" className=" px-6 py-4">
                      Projecto
                    </th> */}
                    <th scope="col" className=" px-6 py-4">
                      Endereco
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Nuit
                    </th>
                    {/* <th scope="col" className=" px-6 py-4">
                      Acção
                    </th> */}
                  </tr>
            </thead>
            <tbody>
                  {partners.map((partner, i) => {
                    return <PartnerTableRows key={i} partner={partner} i={i + 1} />;
                  })}
                </tbody>
          </table>
        </div>
      </div>
    </div>
  );

}


