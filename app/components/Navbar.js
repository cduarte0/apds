"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfo,
  faSignIn,
  faTasks,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";

export default function () {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="mt-12 flex items-center space-x-36">
            <Image
              className="flex-shrink-0"
              src="/images/logo.png"
              width={100}
              height={100}
              alt="Logo"
            />
            <div className="hidden md:block">
              <ul className="ml-10 flex items-baseline space-x-6">
                {items.map((item, i) => {
                  return (
                    <li className="cursor-pointer p-2 font-medium hover:text-white hover:bg-green-800 hover:rounded-md active:rounded-md active:text-white active:bg-green-800">
                      <Link href={item.href}>{item.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="hidden md:block bg-green-800 text-white font-medium py-2 px-4 rounded-md">
              <Link href={"/auth"} >Entrar</Link>
            </div>
          </div>
          <div className="mt-12 mr-2 flex md:hidden">
            <button
              id="menuButton"
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-green-800 hover:text-white focus:outline-none focus:bg-green-800 focus:text-white transition duration-300 ease-in-out"
              aria-label="Menu"
              aria-expanded="false"
              onClick={handleClick}
            >
              <svg
                className="h-6 w-6 "
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="mt-8">
          <ul className="px-2 pt-2 sm:px-3">
            {itemsMobile.map((item, i) => {
              return (
                <li className="cursor-pointer space-x-4 p-2 font-medium hover:text-white hover:bg-green-800 active:text-white active:bg-green-800">
                  <FontAwesomeIcon icon={item.icon} className="w-5" />
                  <Link href={item.href}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}

const items = [
  {
    id: 1,
    name: "Inicio",
    icon: "",
    href: "./",
  },
  {
    id: 2,
    name: "Actividades",
    icon: "",
    href: "activitys",
  },
  { id: 3, name: "Projectos", icon: "", href: "projets" },
  { id: 4, name: "Parceiros", icon: "", href: "partners" },
  {
    id: 5,
    name: "Sobre",
    icon: "",
    href: "#about",
  },
];

const itemsMobile = [
  {
    id: 1,
    name: "Inicio",
    icon: faHome,
    href: "#",
  },
  {
    id: 2,
    name: "Actividades",
    icon: faTasks,
    href: "#",
  },
  { id: 3, name: "Projectos", icon: faFolderOpen, href: "projets" },
  { id: 4, name: "Parceiros", icon: faUsers, href: "#" },
  {
    id: 5,
    name: "Sobre",
    icon: faInfo,
    href: "#",
  },
  {
    id: 6,
    name: "Entrar",
    icon: faSignIn,
    href: "",
  },
];
