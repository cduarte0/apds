import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green-500 font-sans text-white dark:bg-green-500">
      <div className="container mx-auto py-4 px-4 flex flex-col lg:flex-col items-center justify-between">
        <div className="flex flex-col space-y-4 items-center mx-auto">
          <p className="font-semibold text-white dark:text-white">
            Redes Socias
          </p>
          <div className="flex">
            <a
              href="https://www.facebook.com"
              className="ml-4 text-gray-400 hover:text-white transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="w-8 h-8 text-blue-800"
              />
            </a>
            <a
              href="#"
              className="ml-4 text-gray-400 hover:text-white transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="w-8 h-8 text-blue-800"
              />
            </a>
            <a
              href="#"
              className="ml-4 text-gray-200 bg-blue-700 p-1 rounded-md hover:text-white transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/apds-cd-41378b296/"
              className="ml-4 text-gray-200 hover:text-white transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="h-8 w-8 text-blue-700"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="">
        <p className="font-sans text-white p-8 text-start md:text-center md:text-lg md:p-4">
          &copy; {new Date().getFullYear()} APDS Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
