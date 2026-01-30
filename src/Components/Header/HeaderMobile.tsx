import React from "react";
import LogoIcons from "../../Assets/Icons/Logo.svg";
const HeaderMobile = () => {
  return (
    <div className="header-mobile bg-[#201f24]  w-full py-4  h-16 flex justify-center items-center absolute top-0 lg:hidden">
      <img src={LogoIcons} alt="logo" />
    </div>
  );
};

export default HeaderMobile;
