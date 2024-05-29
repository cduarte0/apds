"use client"
import Modal from '@/app/components/Modal'
import { useRouter } from 'next/navigation';
import React, {useState} from 'react'

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
  return (
    <div>
        <Modal
        isOpen={openModal}
        closeModal={closeModal}
        title="Cadastro de doador"
        >

        </Modal>
      
    </div>
  )
}
