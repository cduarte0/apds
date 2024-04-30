"use client";
import React from "react";
import Link from "next/link";
import { fetchAll, create } from "./../../services/partners";
import { useEffect, useState } from "react";
import PartnerTableRows from "@/app/components/partnerTableRows";
import PageHeader from "@/app/components/PageHeader";
export default function page() {
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
    <>
      <div className="flex justify-between gap-2 mt-24">
        <PageHeader title="Lista de Parceiros">
          A lista de parceiros da Associação
        </PageHeader>
        <div className="flex justify-center">
          {/* <p className="flex">Pesquisar</p> */}
          <Link
            className="bg-green-800 text-white justify-center mx-6 py-1 px-2"
            href="partners/create"
          >
            Adicionar parceiro
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-sm font-light mx-14">
                <thead className="border-b bg-green-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
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
                    <th scope="col" className=" px-6 py-4">
                      Projecto
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Endereco
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Nuit
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Acção
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {partners.map((partner, i) => {
                    return <PartnerTableRows partner={partner} i={i + 1} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
