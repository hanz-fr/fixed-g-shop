"use client";

import React, { useState } from "react";
import { usePathname } from 'next/navigation'
import { IoCloseOutline } from "react-icons/io5";
import { BsBicycle } from "react-icons/bs";
import { MdCoffee } from "react-icons/md";
import { RiToolsLine } from "react-icons/ri";
import { Button } from "../ui/button";
import SidebarLogo from "./sidebar-logo";


export default function Sidebar() {
  const pathname = usePathname();

  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => {
          setShowSidebar(true);
        }}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed sm:flex sm:flex-col sm:justify-between top-0 left-0 z-40 w-full sm:w-64 h-full transition-transform ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <SidebarLogo />
        <div className="h-full sm:h-fit px-3 py-5 sm:py-10 overflow-y-auto bg-gray-50 dark:bg-gray-800 rounded-r-lg">
          <div className="mb-5 sm:hidden">
            <Button
              variant="secondary"
              size="icon"
              className="size-8"
              onClick={() => {
                setShowSidebar(false);
              }}
            >
              <IoCloseOutline size={30} />
            </Button>
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/bikes"
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${pathname == '/bikes' ? 'bg-gray-700 text-white' : ''}`}
              >
                <BsBicycle size={25} />
                <span className="ms-3">Bikes</span>
              </a>
            </li>
            <li>
              <a
                href="/cafe"
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${pathname == '/cafe' ? 'bg-gray-700 text-white' : ''}`}
              >
                <MdCoffee size={25} />
                <span className="ms-3">Cafe</span>
              </a>
            </li>
            <li>
              <a
                href="repair"
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${pathname == '/repair' ? 'bg-gray-700 text-white' : ''}`}
              >
                <RiToolsLine size={25} />
                <span className="ms-3">Repair</span>
              </a>
            </li>
          </ul>
        </div>
        <div></div>
      </aside>
    </>
  );
}
