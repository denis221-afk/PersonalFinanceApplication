import React, { useState } from "react";
import homeIcon from "../../Assets/Icons/NavBarIcon/Home.svg";
import TransactionIcon from "../../Assets/Icons/NavBarIcon/Transaction.svg";
import BudgetIcon from "../../Assets/Icons/NavBarIcon/Budget.svg";
import PotsIcon from "../../Assets/Icons/NavBarIcon/Pots.svg";
import ReticIcon from "../../Assets/Icons/NavBarIcon/Recuring.svg";
import NavItem from "./NavItem";
import Logo from "../../Assets/Icons/Logo.svg";

interface IItems {
  title: string;
  icon: string;
  link: string;
  active: boolean;
}

const Items: IItems[] = [
  { title: "Огляд", icon: homeIcon, link: "/Overview", active: true },
  {
    title: "Транзакції",
    icon: TransactionIcon,
    link: "/transaction",
    active: false,
  },
  { title: "Бюджети", icon: BudgetIcon, link: "/wailets", active: false },
  { title: "Кошики", icon: PotsIcon, link: "/Pots", active: false },
  {
    title: "Регулярні платежі",
    icon: ReticIcon,
    link: "/Recurring",
    active: false,
  },
];

const NavBar = () => {
  const [items, setItem] = useState(Items);
  function handleActive(index: number) {
    setItem((prev) =>
      prev.map((item, i) => ({
        ...item,
        active: i === index,
      })),
    );
  }

  const item = items.map((item, id) => {
    const { title, icon, link, active } = item;

    return (
      <NavItem
        key={id}
        title={title}
        icon={icon}
        link={link}
        active={active}
        henandleActive={handleActive}
        id={id}
      />
    );
  });
  return (
    <nav className="w-full h-16 py-3 z-50 bg-[#0F4F4A] fixed bottom-0 rounded-t-2xl shadow-2xl flex items-center justify-center md:w-75 md:static md:h-dvh md:rounded-none md:justify-start md:flex-col md:py-6 md:items-start ">
      <img src={Logo} alt="Logo" className="mb-14 hidden md:block" />
      <ul className="flex justify-between w-10/12 md:flex-col md:items-start">
        {item}
      </ul>
    </nav>
  );
};

export default NavBar;
