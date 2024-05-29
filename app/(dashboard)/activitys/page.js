"use client"
import ActivityTableRows from '@/app/components/ActivityTableRows';
import React, { useState, useEffect } from 'react';
import { fetchAll } from '@/app/services/activits';
import PageHeader from '@/app/components/PageHeader';

export default function Page() {
  const [activitys, setActivitys] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const fetchActivity = async () => {
        const activitysData = await fetchAll();
        setActivitys(activitysData);
        setIsLoading(false);
      };

      fetchActivity();
    }, 2000);
  }, []);

  return (
    <div className="overflow-x-auto">
      <div className="block lg:hidden">
        <h1 className='text-2xl font-bold'>Lista de Actividades Realizadas</h1>
        {activitys.map((activity) => (
          <div key={activity.id} className="border-b py-4">
            <h2 className="text-lg font-semibold">Nome da actividade: {activity.description_activity}</h2>
            <p>Local realizado: {activity.local_activity}</p>
            <p>Projecto Associado: {activity.project_id}</p>
          </div>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-col space-y-4 mt-8">
        <div className="flex gap-2 w-5/6">
          <div className="float-end ml-20">
          <PageHeader title="Lista de Actividades">
        A lista de todas as actividades realizadas
      </PageHeader>
          </div>
          {/* <div className="">
          <Link
          className="bg-green-800 text-white justify-center mx-6 py-2 px-2"
          href="donnats/infoDonation"
        >
          Efectuar doação
        </Link>
          </div> */}
        </div>
        <div className="lg:items-center lg:justify-center lg:flex lg:flex-col">
          <table className="lg:table text-center table-auto w-5/6 lg:items-center lg:justify-center">
            <thead className="items-center justify-center border-b bg-green-800 font-medium font-serif text-white dark:border-neutral-500 dark:bg-green-800">
            <tr>
                
                <th scope="col" className=" px-6 py-4">
                  #
                </th>
                <th scope="col" className=" px-6 py-4">
                Nome da actividade
                </th>
                <th scope="col" className=" px-6 py-4">
                Local realizado
                </th>
                <th scope="col" className=" px-6 py-4">
                Projecto Associado
                </th>
                {/* <th scope="col" className=" px-6 py-4">
                  Acção
                </th> */}
              </tr>
            </thead>
            <tbody>
                {activitys.map((activity, i) => {
                  return <ActivityTableRows key={i} activity={activity} i={i + 1} />;
                })}
              </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
