import React from "react";

import Loading from "../../Loading/Loading";
interface IProps {
  isLoading: boolean;
  total?: number | undefined | null;
  error: Error | null | undefined;
  isEmpty?: boolean;
  name: string;
  active?: boolean;
}

const SummaryElemet = ({
  isLoading,
  total,
  error,
  isEmpty,
  name,
  active,
}: IProps) => {
  let style = active
    ? "max-w-80 min-h-32 bg-[#0F4F4A]  text-white w-full mt-7 shadow-[0_8px_30px_rgba(15,79,74,0.08)] rounded-2xl flex items-center justify-start px-4 text-[32px] font-bold"
    : "max-w-80 min-h-32 bg-[#0F4F4A]/10 backdrop-blur-xl text-slate-700 border border-[#0F4F4A]/15 shadow-[0_8px_30px_rgba(15,79,74,0.08)] w-full mt-7  rounded-2xl flex items-center justify-start px-4 text-[32px] font-bold";
  if (isEmpty)
    return (
      <div className="max-w-80 min-h-32 bg-[#0F4F4A]/10 backdrop-blur-xl border border-[#0F4F4A]/15 w-full mt-7 shadow-2xs rounded-2xl flex items-center justify-start px-4 text-[14px]">
        Потрібно додати кошильок
      </div>
    );

  if (error)
    return (
      <div className="max-w-80  min-h-32 bg-[#0F4F4A]/10 backdrop-blur-xl border border-[#0F4F4A]/15 w-full mt-7 shadow-2xs rounded-2xl flex items-center justify-start px-4 text-[14px]">
        Щось пішло не так спробуйте пізніше
      </div>
    );
  return (
    <div className={style}>
      {isLoading ? <Loading /> : null}
      <div>
        <h3 className="text-[12px] font-normal">{name}</h3>
        {total}$
      </div>
    </div>
  );
};

export default SummaryElemet;
