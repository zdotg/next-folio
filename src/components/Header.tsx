"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

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
    <div>
      <div className="bg-white w-full fixed top-0 left-0 right-0 z-10 py-3">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="text-4xl font-light text-stone-700 cursor-pointer antialiased"
              >
                <span className="text-gradient">ZG;</span>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 outline-none  rounded-md focus:border-purple-400"
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
            <div>
              <nav
                className={`flex-1  pb-3 text-center py-0  md:block md:pb-0 md:mt-0 ${
                  isOpen ? "md:p-0 block" : "hidden"
                }`}
              >
                <ul className="md:flex p-5 space-x-3 text-purple-600 cursor-pointer">
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
