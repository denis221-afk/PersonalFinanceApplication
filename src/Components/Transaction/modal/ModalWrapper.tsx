import React from "react";
import TransactionModal from "./TransactionModal";
interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalWrapper = ({ isOpen, onClose }: IProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-[#0F4F4A]/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative z-10 w-full max-w-lg px-4">
        {" "}
        <TransactionModal onClose={onClose} />
      </div>
    </div>
  );
};

export default ModalWrapper;
