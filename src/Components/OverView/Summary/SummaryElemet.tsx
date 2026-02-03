import React from "react";

import Loading from "../../Loading/Loading";
interface IProps {
  isLoading: boolean;
  total?: number | undefined | null;
  error: Error | null | undefined;
  massenge: string | undefined | null;
  isEmpty?: boolean;
  name: string;
  active?: boolean;
}

const SummaryElemet = ({
  isLoading,
  total,
  error,
  massenge,
  isEmpty,
  name,
  active,
}: IProps) => {
  let style = active
    ? "max-w-80 min-h-32 bg-gray-900  text-white w-full mt-7 shadow-2xs rounded-2xl flex items-center justify-start px-4 text-[32px] font-bold"
    : "max-w-80 min-h-32 bg-white w-full mt-7 shadow-2xs rounded-2xl flex items-center justify-start px-4 text-[32px] font-bold";
  if (isEmpty)
    return (
      <div className="max-w-80 min-h-32 bg-white w-full mt-7 shadow-2xs rounded-2xl flex items-center justify-start px-4 text-[14px]">
        {massenge}
      </div>
    );

  if (error)
    return (
      <div className="max-w-80  min-h-32 bg-white w-full mt-7 shadow-2xs rounded-2xl flex items-center justify-start px-4 text-[14px]">
        {error.message}
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
