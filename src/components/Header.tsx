'use client'

import React, { useState } from "react";
import Link from "next/link";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
 

  return (
  <div>
      <nav className="bg-white dark:bg-slate-900 w-full fixed top-0 left-0 right-0 z-10 py-3">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between">
              <Link href="/">
                <div className="text-3xl font-light text-stone-700 cursor-pointer dark:text-slate-100">
                  Zach <span className="text-gradient">Gallman</span>;
                </div>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 outline-none rounded-md focus:border-purple-400"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {/* Check if 'isOpen' is true */}
                  {isOpen ? (
                    <FontAwesomeIcon icon={faTimes} className="text-2xl" />
                  ) : (
                    <FontAwesomeIcon icon={faBars} className="text-2xl" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                isOpen ? 'p-12 md:p-0 block' : 'hidden'
              }`}
              >
                <ul className="md:flex space-x-4  ">
                    <li >
                      <Link href="/skills" onClick={() => setIsOpen(!isOpen)}>
                        <div className="text-purple-500 cursor-pointer">Skills</div>
                      </Link>
                    </li>
                    <li >
                      <Link href="/portfolio" onClick={() => setIsOpen(!isOpen)}>
                        <div className="text-purple-500 cursor-pointer">Portfolio</div>
                      </Link>
                    </li>
                    <li >
                      <Link href="/contact" onClick={() => setIsOpen(!isOpen)}>
                        <div className="text-purple-500 cursor-pointer">Contact Me</div>
                      </Link>
                    </li>
                </ul>
              </div>
          </div> 
        </div>
      </nav>
  </div>
  );
};


