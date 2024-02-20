import React, { useState, useEffect } from "react";
import { Navbar } from "../navBar/navBar";
import logo from "../../../assets/dc-logo.webp";
import "./header.scss";

export function Header() {
  return (
    <>
      <div className="dcHeader flex-no-wrap fixed top-0 flex w-full px-4 py-4 flex justify-between items-center bg-white lg">
        <a className="text-3xl font-bold leading-none pull-right" href="#">
          <img
            className="h-auto rounded-lg px-3 py-3 max-w-xs bg-gradient-to-r from-violet-500 to-fuchsia-500 dcLogoWidth"
            src={logo}
            alt="image description"
          />
        </a>
        <Navbar />
      </div>
    </>
  );
}
