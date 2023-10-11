import React from "react";
import Link from "next/link";
import portfolio from "../../../public/images/zg-folio.png";
import Image from "next/image";

export default function Projects()  {
  return (
    <section
      className=" text-slate-700 dark:text-slate-300 p-5 "
      id="Portfolio"
    >
      <div className="container mx-auto px-4 py-5">
        <h2 className="text-center text-2xl font-semibold text-gradient ">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center columns-auto ">
          <div className="w-full sm:w-1/2 lg:w-7/12 p-5">
            <div className="flex flex-col p-2 h-full mb-3 mx-auto overflow-hidden border-solid border-4 border-indigo-200 rounded-md">
              <Image
                src={portfolio}
                priority={true}
                className="w-full h-1/2 object-cover border-solid border-4 border-indigo-200 rounded-md"
                alt="Portfolio Snippet"
              />
              <div className="flex flex-grow p-4">
                <div className="flex flex-col justify-between max-h-full">
                  <div>
                    <h5 className="pt-3">Personal Portfolio:</h5>
                    <p>
                      React, NextJS, TailwindCSS, JavaScript, and custom CSS
                    </p>
                  </div>
                  <div className="mt-4 ">
                    <Link
                      legacyBehavior
                      href="https://github.com/zdotg/next-folio/tree/main"
                    >
                      <a className="px-4 py-2 inline-block dark:text-slate-100 bg-gradient-to-r from-violet-400 to-indigo-300 text-white rounded-md font-medium hover:scale-105 transition-transform duration-200">
                        View Code
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

