import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./navBar.scss";

export function Navbar() {
  return (
    <>
      <div className="xs:hidden">
        <button className="flex items-center text-purple-600 p-3">
          <AiOutlineMenu />
        </button>
      </div>
      <nav
        className={`navbar hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 md:mx-auto md:flex md:-center md:w-auto md:space-x-6 sm:mx-auto sm:flex sm:-center sm:w-auto sm:space-x-6 xs:mx-auto xs:flex sm:-center xs:w-auto xs:space-x-6 sm:-translate-x-1/4 xs:-translate-x-1/4`}
      >
        <ul className="navbar-menu">
          <li className="has-children">
            <a href="#!" aria-haspopup="true" className="inline-flex">
              Home{" "}
              <svg
                className="w-2.5 h-2.5 ms-2.5 mt-2"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </a>
            <ul aria-label="submenu">
              <li>
                <a href="#!">Sub Menu 1</a>
              </li>
              <li className="has-children">
                <a
                  href="#!"
                  aria-haspopup="true"
                  className="inline-flex w-full"
                >
                  Sub Menu 2{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5 mt-2"
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </a>
                <ul aria-label="submenu">
                  <li>
                    <a href="#!">Sub Sub Menu 1</a>
                  </li>
                  <li className="has-children">
                    <a href="#!" aria-haspopup="true">
                      Sub Sub Menu 2
                    </a>
                  </li>
                  <li>
                    <a href="#!">Service subitem 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="text-gray-300 mt-5">
            <BsThreeDotsVertical />
          </li>
          <li className="truncate">
            <a href="#!">About Us</a>
          </li>
          <li className="text-gray-300 mt-5">
            <BsThreeDotsVertical />
          </li>
          <li>
            <a href="#!">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
