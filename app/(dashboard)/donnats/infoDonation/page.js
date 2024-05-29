"use client"
import React, {useState} from 'react';
import Modal from "@/app/components/Modal";
import { useRouter } from 'next/navigation';

export default function Page() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const router = useRouter();
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
        router.push("/donnats");    
    };
    const goToDonation = () =>{
        setIsModalOpen(false);
        router.push("/donnats/create")
    }
  return (
    <div>
        <Modal
         isOpen={openModal}
         closeModal={closeModal}
         title="Meios para Efectuar Doação"
        >
            <div className='items-center justify-center space-y-2'>
                {/* <div className='flex flex-row mx-2 space-x-2'>
                <h1 className='items-center font-medium font-serif'>Faça a doação com os dados abaixo e clique no botão prosseguir</h1>
                </div> */}
               
        <div className='flex flex-row justify-center space-x-2'>
        <p className='ml-4 font-bold'>Nome do Banco:</p>
        <p>Standard Bank</p>
        </div>

        <div className='flex flex-row justify-center space-x-2'>
        <p className='ml-4 font-bold'>Titular:</p>
        <p>ASSOCIACAO PROV.P/ O DES.SUSTENTAVEL C.DELGADO</p>
        </div>

        <div className='flex flex-row justify-center space-x-2'>
        <p className='ml-4 font-bold'>Numero de Conta:</p>
        <p>3089202661008</p>
        </div>
        <div className='flex flex-row justify-center space-x-2'>
        <p className='ml-4 font-bold'>NIB:</p>
        <p>000303080920266100850</p>
        </div>
        <div className='flex flex-row justify-center space-x-2'>
        <p className='ml-4 font-bold'>IBAN:</p>
        <p>MZ59000303080920266100850</p>
        </div>
        <div className='flex flex-row justify-center space-x-2'>
        <p className='ml-4 font-bold'>Moeda:</p>
        <p>MZN</p>
        </div>
    </div>
    {/* <div className='justify-end float-end'>
        <button className='bg-green-700 items-end justify-end text-white cursor-pointer hover:bg-green-900 font-bold p-4 rounded-md'  onClick={goToDonation}>Prosseguir</button>
    </div> */}


        </Modal>

          
    </div>
  )
}
