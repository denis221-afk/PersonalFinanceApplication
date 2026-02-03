import React from "react";
import { Link } from "react-router-dom";
interface IProp {
  id: number;
  icon: string;
  title: string;
  link: string;
  active: boolean;
  henandleActive: (id: number) => void;
}

const NavItem = ({ icon, title, link, active, henandleActive, id }: IProp) => {
  return (
    <Link
      to={link}
      onClick={() => henandleActive(id)}
      className={`w-full md:rounded-r-sm ${
        active ? "bg-white text-grey-900" : "text-white"
      }`}
    >
      <a
        href={link}
        className="flex flex-col text-center justify-center items-center md:flex-row py-4 md:text-[18px] md:justify-start px-1 text-[12px]"
      >
        <img
          src={icon}
          alt={title}
          className={`w-8 h-auto md:mr-1.5 ${active ? "active" : ""}`}
        />
        <span className="hidden md:block">{title}</span>
      </a>
    </Link>
  );
};

export default NavItem;
