import React from "react";

/* icons */
import MenuIcon from "@material-ui/icons/Menu";

/* components */
import Logo from "./partials/Logo";
import Search from "./partials/Search";
import HeaderActions from "./header-actions";

const Header = () => {
  return (
    <div className="flex items-center h-16 py-2 border-b border-gray-200">
      <div className="w-full max-w-xxs">
        <div className="flex items-center space-x-1 px-4">
          <button type="button" className="flex items-center justiy-center transition duration-300 hover:bg-gray-100 rounded-full p-2 focus:outline-none">
            <MenuIcon className="text-gray-500" />
          </button>
          <Logo />
        </div>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <Search />
          <HeaderActions />
        </div>
      </div>
    </div>
  );
};

export default Header;
