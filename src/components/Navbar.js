import React from "react";

import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center p-2 sticky bg-black top-0 text-white">
      <Link to="/">
        <img src={"/assests/tube.io.png"} alt="logo" className="w-[180px]" />
      </Link>
      <SearchBar />
    </div>
  );
};

export default Navbar;
