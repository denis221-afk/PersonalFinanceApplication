import { useState } from "react";
import ModalWrapper from "./modal/ModalWrapper";
import { useGetWailets } from "../../Hooks/useGetWailets";
import Loading from "../Loading/Loading";
import { useGetTransactiontsts } from "../../Hooks/useGetTransaction";
import Wailet from "./Wailet";
const Wailets = () => {
  const [isOpen, setOpen] = useState(false);
  const { wailets, isLoading, isError } = useGetWailets();
  const { data } = useGetTransactiontsts();

  if (!wailets || isError) return <>щось пішло не так</>;
  if (wailets.length === 0)
    return (
      <>
        <header className="py-6 flex justify-between">
          <span className="font-bold text-2xl hidden md:block">Кошильки</span>
          <button
            className="bg-[#0F4F4A] text-white py-3 px-7 rounded-sm cursor-pointer hover:bg-[#198077] transition-all"
            onClick={() => setOpen(true)}
          >
            Добавити новий кошильок
          </button>
        </header>
        Добавти новий кошильок
        <ModalWrapper isOpen={isOpen} onClose={() => setOpen(false)} />
      </>
    );

  const w = wailets.map((item) => {
    return (
      <Wailet
        data={data}
        wailetId={item.wid}
        name={item.name}
        balance={item.balance}
      />
    );
  });
  return (
    <div className="px-4">
      {isLoading ? <Loading /> : null}
      <ModalWrapper isOpen={isOpen} onClose={() => setOpen(false)} />
      <header className="py-6 flex justify-between">
        <span className="font-bold text-2xl hidden md:block">Кошильки</span>
        <button
          className="bg-[#0F4F4A] text-white py-3 px-7 rounded-sm cursor-pointer hover:bg-[#198077] transition-all"
          onClick={() => setOpen(true)}
        >
          Добавити новий кошильок
        </button>
      </header>
      <div className="flex flex-wrap gap-5">{w}</div>
    </div>
  );
};

export default Wailets;
