"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { ThemeSwitcher } from "./ThemeSwitcher";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
    console.log("isOpen:", isOpen);
  }

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen);
  }

  return (
    <div >
      <div className="bg-white dark:bg-slate-800 py-3 w-full border-b-2 border-indigo-500 fixed top-0 left-0 right-0 z-10 ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="text-4xl font-light text-stone-700 cursor-pointer antialiased"
              >
                <span className="text-gradient">ZG;</span>
            </Link>
            <div className="flex items-center md:hidden">
                <div className="mr-4 md:visible">
                  <ThemeSwitcher />
                </div>
                <button
                  className="p-2 text-stone-700 dark:text-stone-300 outline-none  rounded-md focus:border-purple-400"
                  type="button"
                  onClick={toggle}
                >
                  {/* Check if 'isOpen' is true */}
                  {isOpen ? (
                    <FontAwesomeIcon icon={faXmark} />
                  ) : (
                    <FontAwesomeIcon icon={faBars} />
                  )}
                </button>
              </div>
          </div>
          <div className="flex items-center">
                <div className="hidden md:block mr-4 item-start">
                  <ThemeSwitcher />
                </div>
              <nav
                className={`flex-1  pb-3 text-center py-0  md:block md:pb-0 md:mt-0 ${
                  isOpen ? "md:p-0 block" : "hidden"
                }`}
              >
                <ul className="md:flex p-5 space-x-3 text-purple-600 dark:text-purple-400 cursor-pointer">
                <li className="relative group">
                    <span onClick={toggleDropdown}>
                      Experience
                      {/* Arrow icon that changes based on dropdown state */}
                      {dropdownOpen ? (
                        <FontAwesomeIcon icon={faChevronUp} className="ml-2"/>
                      ) : (
                        <FontAwesomeIcon icon={faChevronDown} className="ml-2"/>
                      )}
                    </span>
                    {/* Dropdown */}
                    <ul className={`absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-md ${dropdownOpen ? "block" : "hidden"}`}>
                      <li>
                        <Link href="/experience/academic" onClick={() => setIsOpen(false)}>Academic</Link>
                      </li>
                      <li>
                        <Link href="/experience/certificates" onClick={() => setIsOpen(false)}>Certificates</Link>
                      </li>
                      <li>
                        <Link href="/experience/skills" onClick={() => setIsOpen(false)}>Skills</Link>
                      </li>
                      <li>
                        <Link href="/experience/work" onClick={() => setIsOpen(false)}>Work</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/portfolio" onClick={() => setIsOpen(!isOpen)}>
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" onClick={() => setIsOpen(!isOpen)}>
                      Contact Me
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
        </div>
      </div>
    </div>
  );
}
