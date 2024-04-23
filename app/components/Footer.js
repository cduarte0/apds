import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green-700 font-sans dark:bg-green-700">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4 mx-80">
          <div>
            <p className="font-semibold text-white dark:text-white">
              Ajuda e Suporte
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                Ajuda
              </p>
              <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                Reclamação
              </p>
              <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                Something else
              </p>
              <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                Something else
              </p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white dark:text-white">
              Termos e Condições
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                Termos
              </p>
              <p className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                Privacidade
              </p>
              <p className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                something
              </p>
              <p className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                something
              </p>
            </div>
          </div>
          <div>
            <p className="font-semibold text-white dark:text-white">
              Redes Socias
            </p>
            <div className="space-y-2 hover:cursor-pointer">
              <img
                src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                width="30"
                height="30"
                alt="fb"
              />
              <img
                src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                width="30"
                height="30"
                alt="tw"
              />
              <img
                src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                width="30"
                height="30"
                alt="inst"
              />
              <img
                src="https://www.svgrepo.com/show/28145/linkedin.svg"
                width="30"
                height="30"
                alt="in"
              />
              {/* <img
              src="https://www.svgrepo.com/show/94698/github.svg"
              class=""
              width="30"
              height="30"
              alt="gt"
            />
            <img
              src="https://www.svgrepo.com/show/22037/path.svg"
              width="30"
              height="30"
              alt="pn"
            />
            <img
              src="https://www.svgrepo.com/show/22048/dribbble.svg"
              class=""
              width="30"
              height="30"
              alt="db"
            /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <p className="font-sans text-white p-8 text-start md:text-center md:text-lg md:p-4">
          &copy; 2024 APDS Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
