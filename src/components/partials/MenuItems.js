import React from "react";

const MenuItems = ({ link, icon, name, notification, className }) => {
  return (
    <a href={link ?? "#"} className={`flex items-center justify-between text-sm transition duration-300 ease-in-out hover:bg-gray-100 rounded-full pl-8 pr-4 py-1 ${className ? className : 'menucolor'}`}>
      <span>
        <span className="mr-4">{icon ?? ""}</span>
        {name}
      </span>
      {typeof notification !== "undefined" && <span>{notification}</span>}
    </a>
  );
};

export default MenuItems;
